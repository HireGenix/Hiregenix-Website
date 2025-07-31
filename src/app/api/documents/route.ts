import { NextRequest, NextResponse } from 'next/server';
import * as mammoth from 'mammoth';
import { PDFDocument } from 'pdf-lib';

// Function to convert docx to HTML
async function convertDocxToHtml(buffer: Buffer): Promise<string> {
  try {
    const result = await mammoth.convertToHtml({ buffer });
    return result.value;
  } catch (error) {
    console.error('Error converting DOCX to HTML:', error);
    throw new Error('Failed to convert DOCX document');
  }
}

// Function to convert PDF to text using pdf-lib
async function convertPdfToText(buffer: Buffer): Promise<string> {
  try {
    // Load the PDF document
    const pdfDoc = await PDFDocument.load(buffer);
    
    // Get the number of pages
    const numPages = pdfDoc.getPageCount();
    
    // Extract text from PDF (pdf-lib doesn't have direct text extraction)
    // So we'll use a simple approach to extract text from the PDF buffer
    const bufferStr = buffer.toString('utf-8', 0, Math.min(buffer.length, 50000));
    
    // Try to extract text content using regex patterns common in PDFs
    let extractedText = '';
    
    // Look for text between parentheses (common in PDF text objects)
    const textMatches = bufferStr.match(/\(([^\)]+)\)/g);
    if (textMatches && textMatches.length > 0) {
      // Clean up the matches (remove parentheses and decode PDF escape sequences)
      extractedText = textMatches
        .map(match => match.substring(1, match.length - 1))
        .join(' ')
        .replace(/\\(\d{3})/g, (_, octal) => String.fromCharCode(parseInt(octal, 8)))
        .replace(/\\\\/g, '\\')
        .replace(/\\\(/g, '(')
        .replace(/\\\)/g, ')')
        .replace(/\\n/g, '\n')
        .replace(/\\r/g, '\r')
        .replace(/\\t/g, '\t');
    }
    
    // If we couldn't extract text using the regex approach, try a more generic approach
    if (!extractedText || extractedText.trim().length < 100) {
      // Look for any readable text sequences
      const genericTextMatches = bufferStr.match(/[\w\s.,;:!?'"()\[\]{}<>\/\\|`~@#$%^&*+=_-]{4,}/g);
      if (genericTextMatches && genericTextMatches.length > 0) {
        extractedText = genericTextMatches.join(' ');
      }
    }
    
    // If we still don't have much text, provide a fallback message
    if (!extractedText || extractedText.trim().length < 100) {
      return `This PDF document has ${numPages} page(s), but text extraction was limited. The document may be scanned, image-based, or have restricted permissions.`;
    }
    
    return extractedText;
  } catch (error) {
    console.error('Error converting PDF to text:', error);
    
    // Fallback method if pdf-lib fails
    try {
      // Try to extract some text from the buffer directly
      const bufferStr = buffer.toString('utf-8', 0, Math.min(buffer.length, 10000));
      
      // Extract any readable text
      const textMatches = bufferStr.match(/[\w\s.,;:!?'"()\[\]{}<>\/\\|`~@#$%^&*+=_-]{4,}/g);
      if (textMatches && textMatches.length > 0) {
        const text = textMatches.join(' ');
        return text.substring(0, 5000); // Limit to 5000 chars
      }
    } catch (fallbackError) {
      console.error('Fallback extraction also failed:', fallbackError);
    }
    
    return 'PDF parsing failed. The document may be encrypted, damaged, or in an unsupported format.';
  }
}

// Function to convert PDF text to HTML
function convertPdfTextToHtml(text: string): string {
  // Split by double newlines to identify paragraphs
  const paragraphs = text.split(/\n\s*\n/);
  
  // Convert each paragraph to HTML
  const htmlParagraphs = paragraphs.map(paragraph => {
    // Skip empty paragraphs
    if (!paragraph.trim()) return '';
    
    // Check if paragraph might be a heading (shorter lines that don't end with period)
    const isHeading = paragraph.trim().length < 100 && !paragraph.trim().endsWith('.');
    
    if (isHeading) {
      return `<h2>${paragraph.trim()}</h2>`;
    } else {
      // Handle bullet points
      if (paragraph.trim().startsWith('•') || paragraph.trim().startsWith('-')) {
        // Split by bullet points
        const bulletPoints = paragraph.split(/(?:\n\s*[•\-]\s*)/);
        if (bulletPoints.length > 1) {
          return '<ul>' + bulletPoints.filter(Boolean).map(point => 
            `<li>${point.trim()}</li>`
          ).join('') + '</ul>';
        }
      }
      
      // Regular paragraph
      return `<p>${paragraph.trim()}</p>`;
    }
  }).join('\n');
  
  return htmlParagraphs;
}

// Function to extract title from HTML content
function extractTitleFromHtml(html: string): string {
  // Try to find the first heading
  const headingMatch = html.match(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/i);
  if (headingMatch && headingMatch[1]) {
    return headingMatch[1].replace(/<[^>]*>/g, '').trim();
  }
  
  // If no heading, try to get the first paragraph
  const paragraphMatch = html.match(/<p[^>]*>(.*?)<\/p>/i);
  if (paragraphMatch && paragraphMatch[1]) {
    const text = paragraphMatch[1].replace(/<[^>]*>/g, '').trim();
    // Return first 50 characters or less
    return text.length > 50 ? text.substring(0, 50) + '...' : text;
  }
  
  return 'Untitled Document';
}

// Function to extract excerpt from HTML content
function extractExcerptFromHtml(html: string): string {
  // Remove all HTML tags and get plain text
  const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  
  // Return first 200 characters or less
  return text.length > 200 ? text.substring(0, 200) + '...' : text;
}

// POST handler for document uploads
export async function POST(request: NextRequest) {
  try {
    // Check if the request is multipart/form-data
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('multipart/form-data')) {
      return NextResponse.json(
        { error: 'Request must be multipart/form-data' },
        { status: 400 }
      );
    }

    // Parse the form data
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Check file type
    const fileName = file.name.toLowerCase();
    const isDocx = fileName.endsWith('.docx');
    const isDoc = fileName.endsWith('.doc');
    const isPdf = fileName.endsWith('.pdf');

    if (!isDocx && !isDoc && !isPdf) {
      return NextResponse.json(
        { error: 'Unsupported file type. Only .docx, .doc, and .pdf files are supported' },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    
    let htmlContent = '';
    
    // Process based on file type
    if (isDocx || isDoc) {
      htmlContent = await convertDocxToHtml(buffer);
    } else if (isPdf) {
      const pdfText = await convertPdfToText(buffer);
      htmlContent = convertPdfTextToHtml(pdfText);
    }

    // Extract title and excerpt
    const title = extractTitleFromHtml(htmlContent);
    const excerpt = extractExcerptFromHtml(htmlContent);

    // Return the parsed content
    return NextResponse.json({
      success: true,
      title,
      content: htmlContent,
      excerpt,
    });
  } catch (error) {
    console.error('Error processing document:', error);
    return NextResponse.json(
      { error: 'Failed to process document' },
      { status: 500 }
    );
  }
}
