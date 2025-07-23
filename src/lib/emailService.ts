import nodemailer from "nodemailer";

// Email addresses for different types of form submissions
export const EMAIL_ADDRESSES = {
  SALES: "sumitshrm12@gmail.com",
  INFO: "sumitshrm12@gmail.com",
  LEADS: "sumitshrm12@gmail.com",
};

// We'll initialize the transporter lazily to avoid issues during build time
let transporter: nodemailer.Transporter | null = null;

// Function to initialize the transporter
function getTransporter(): nodemailer.Transporter | null {
  // If we've already tried to initialize, return the existing result
  if (transporter !== null) {
    return transporter;
  }

  // Get SMTP environment variables
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE } =
    process.env;

  // Check if required variables are set
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    // Only log the error in a non-build environment (i.e., when actually sending emails)
    if (
      process.env.NODE_ENV !== "production" ||
      process.env.NEXT_PHASE !== "build"
    ) {
      console.error(
        "--------------------------------------------------------------------"
      );
      console.error("ERROR: Missing required SMTP environment variables.");
      console.error(
        "Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in your .env file."
      );
      console.error(
        "Email sending will be disabled until these variables are set."
      );
      console.error(
        "--------------------------------------------------------------------"
      );
    }
    return null;
  }

  // Create a transporter with SMTP settings from environment variables
  try {
    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT),
      secure: SMTP_SECURE === "true", // Defaults to false if not set or not 'true'
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });
    return transporter;
  } catch (error) {
    console.error("Error creating email transporter:", error);
    return null;
  }
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
  // Get or initialize the transporter
  const emailTransporter = getTransporter();

  // Check if transporter is configured
  if (!emailTransporter) {
    // Only log in non-build environments
    if (
      process.env.NODE_ENV !== "production" ||
      process.env.NEXT_PHASE !== "build"
    ) {
      console.log("--- Email Not Sent (SMTP Disabled) ---");
      console.log("To:", options.to);
      console.log("Subject:", options.subject);
      console.log("Text:", options.text);
      console.log("--------------------------------------");
    }
    // Return false as the email was not actually sent
    return false;
  }

  try {
    // Send the email using the configured transporter
    const info = await emailTransporter.sendMail({
      from: process.env.EMAIL_FROM || "HireGenix <noreply@myhiregenix.com>", // Use EMAIL_FROM from env
      ...options,
    });

    console.log("Email sent:", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
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
    if (typeof value === "object" && value !== null) {
      html += `
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">${formatKey(
            key
          )}</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${formatObjectValue(
            value
          )}</td>
        </tr>
      `;
    } else {
      html += `
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">${formatKey(
            key
          )}</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${value}</td>
        </tr>
      `;
    }
  }

  html += "</table>";
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
    if (typeof value === "boolean") {
      if (value) {
        html += `<li>${formatKey(key)}</li>`;
      }
    } else {
      html += `<li>${formatKey(key)}: ${value}</li>`;
    }
  }

  html += "</ul>";
  return html;
}

/**
 * Format a key for display
 * @param key Key to format
 * @returns Formatted key
 */
function formatKey(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1") // Add space before capital letters
    .replace(/^./, (str) => str.toUpperCase()) // Capitalize first letter
    .trim();
}
