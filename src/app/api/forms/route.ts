import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, formatFormDataAsHtml, EMAIL_ADDRESSES } from '@/lib/emailService';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { formType, ...formData } = data;

    if (!formType) {
      return NextResponse.json(
        { error: 'Form type is required' },
        { status: 400 }
      );
    }

    let emailResult: boolean;
    const formattedHtml = formatFormDataAsHtml(formData);

    switch (formType) {
      case 'demo':
        // Send demo request to sales
        emailResult = await sendEmail({
          to: EMAIL_ADDRESSES.SALES,
          subject: 'New Demo Request',
          text: `New demo request from ${formData.name} (${formData.email})`,
          html: `
            <h2>New Demo Request</h2>
            <p>A new demo request has been submitted through the website.</p>
            ${formattedHtml}
          `,
        });
        break;

      case 'contact':
        // Send contact form to info
        emailResult = await sendEmail({
          to: EMAIL_ADDRESSES.INFO,
          subject: `New Contact Form: ${formData.inquiryType || 'General Inquiry'}`,
          text: `New contact form submission from ${formData.name} (${formData.email})`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p>A new contact form has been submitted through the website.</p>
            ${formattedHtml}
          `,
        });
        break;

      case 'newsletter':
        // Send newsletter subscription to leads
        emailResult = await sendEmail({
          to: EMAIL_ADDRESSES.LEADS,
          subject: 'New Newsletter Subscription',
          text: `New newsletter subscription from ${formData.email}`,
          html: `
            <h2>New Newsletter Subscription</h2>
            <p>A new user has subscribed to the newsletter.</p>
            ${formattedHtml}
          `,
        });
        break;

      default:
        return NextResponse.json(
          { error: 'Invalid form type' },
          { status: 400 }
        );
    }

    if (emailResult) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
