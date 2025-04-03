import nodemailer from 'nodemailer';

// Email addresses for different types of form submissions
export const EMAIL_ADDRESSES = {
  SALES: 'sales@myhiregenix.com',
  INFO: 'info@myhiregenix.com',
  LEADS: 'leads@myhiregenix.com',
};

// Ensure required SMTP environment variables are set
const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_SECURE, EMAIL_FROM } = process.env;

let transporter: nodemailer.Transporter;

if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) {
  console.error('--------------------------------------------------------------------');
  console.error('ERROR: Missing required SMTP environment variables.');
  console.error('Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD in your .env file.');
  console.error('Email sending will be disabled until these variables are set.');
  console.error('--------------------------------------------------------------------');
  // Create a dummy transporter or handle appropriately if needed elsewhere
  // For now, we'll let it be undefined, and the sendEmail function will handle it.
} else {
  // Create a transporter with SMTP settings from environment variables
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT), // Rely on the check above
    secure: SMTP_SECURE === 'true', // Defaults to false if not set or not 'true'
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  });
}

interface EmailOptions {
  to: string;
  subject: string;
  text: string;
  html?: string;
}

/**
 * Send an email using Nodemailer
 * @param options Email options including to, subject, text, and optional HTML
 * @returns Promise resolving to true if email sent successfully, false otherwise
 */
export async function sendEmail(options: EmailOptions): Promise<boolean> {
  // Check if transporter is configured (i.e., if SMTP env vars were set)
  if (!transporter) {
    console.error('Email sending is disabled because SMTP environment variables are not configured.');
    // Optionally, log the email details that would have been sent
    console.log('--- Email Not Sent (SMTP Disabled) ---');
    console.log('To:', options.to);
    console.log('Subject:', options.subject);
    console.log('Text:', options.text);
    console.log('--------------------------------------');
    // Return false as the email was not actually sent
    return false; 
  }

  try {
    // Send the email using the configured transporter
    const info = await transporter.sendMail({
      from: EMAIL_FROM || 'HireGenix <noreply@myhiregenix.com>', // Use EMAIL_FROM from env
      ...options,
    });

    console.log('Email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

/**
 * Format form data as HTML for email
 * @param data Form data object
 * @returns HTML string
 */
export function formatFormDataAsHtml(data: Record<string, any>): string {
  let html = '<table style="border-collapse: collapse; width: 100%;">';
  
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'object' && value !== null) {
      html += `
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">${formatKey(key)}</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${formatObjectValue(value)}</td>
        </tr>
      `;
    } else {
      html += `
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">${formatKey(key)}</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${value}</td>
        </tr>
      `;
    }
  }
  
  html += '</table>';
  return html;
}

/**
 * Format object values for HTML display
 * @param obj Object to format
 * @returns Formatted HTML string
 */
function formatObjectValue(obj: Record<string, any>): string {
  let html = '<ul style="margin: 0; padding-left: 20px;">';
  
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'boolean') {
      if (value) {
        html += `<li>${formatKey(key)}</li>`;
      }
    } else {
      html += `<li>${formatKey(key)}: ${value}</li>`;
    }
  }
  
  html += '</ul>';
  return html;
}

/**
 * Format a key for display
 * @param key Key to format
 * @returns Formatted key
 */
function formatKey(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1') // Add space before capital letters
    .replace(/^./, (str) => str.toUpperCase()) // Capitalize first letter
    .trim();
}
