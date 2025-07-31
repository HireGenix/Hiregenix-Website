import nodemailer from "nodemailer";

// Load SMTP credentials from environment variables
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const FROM_EMAIL = process.env.FROM_EMAIL || "notification@myhiregenix.ai";

interface ContactEmailParams {
  name: string;
  email: string;
  company?: string;
  inquiryType?: string;
  message: string;
  branding?: {
    logo?: string;
    primaryColor?: string;
    secondaryColor?: string;
  };
}

async function createTransporter() {
  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    } as nodemailer.TransportOptions);

    await transporter.verify();
    return transporter;
  } catch (error) {
    console.error("Error creating transporter:", error);
    throw error;
  }
}

export async function sendContactEmail(params: ContactEmailParams) {
  const {
    name,
    email,
    company,
    inquiryType = "General Inquiry",
    message,
    branding = {
      primaryColor: "#0070f3",
      secondaryColor: "#ffffff",
    },
  } = params;

  try {
    const transporter = await createTransporter();

    // Email to the admin/company
    const adminHtmlTemplate = `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
        ${
          branding?.logo
            ? `<img src="${branding.logo}" alt="HireGenix Logo" style="max-height: 60px; margin-bottom: 20px;">`
            : ""
        }
        <h2 style="color: ${branding.primaryColor};">Lead Inquiry</h2>
        <p style="font-size: 16px; line-height: 1.6;">You have received a new lead from your website.</p>

        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Name:</td>
              <td style="padding: 8px 0; color: #666;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td>
              <td style="padding: 8px 0; color: #666;">${email}</td>
            </tr>
            ${
              company
                ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Company:</td>
              <td style="padding: 8px 0; color: #666;">${company}</td>
            </tr>
            `
                : ""
            }
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Inquiry Type:</td>
              <td style="padding: 8px 0; color: #666;">${inquiryType}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333; vertical-align: top;">Message:</td>
              <td style="padding: 8px 0; color: #666; line-height: 1.6;">${message.replace(
                /\n/g,
                "<br>"
              )}</td>
            </tr>
          </table>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
          <p style="font-size: 14px; color: #666;">
            Please respond to this inquiry as soon as possible.<br>
            <strong>HireGenix Contact System</strong>
          </p>
        </div>
      </div>
    `;

    // Auto-reply email to the user
    const userHtmlTemplate = `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
        ${
          branding?.logo
            ? `<img src="${branding.logo}" alt="HireGenix Logo" style="max-height: 60px; margin-bottom: 20px;">`
            : ""
        }
        <h2 style="color: ${
          branding.primaryColor
        };">Thank you for contacting us!</h2>
        <p style="font-size: 16px; line-height: 1.6;">Hello ${name},</p>
        <p style="font-size: 16px; line-height: 1.6;">
          Thank you for reaching out to us. We have received your message and will get back to you as soon as possible, 
          usually within 24 hours on business days.
        </p>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: ${
            branding.primaryColor
          }; margin-top: 0;">Your Message Summary:</h3>
          <p style="margin: 0; color: #666; line-height: 1.6;"><strong>Inquiry Type:</strong> ${inquiryType}</p>
          <p style="margin: 10px 0 0 0; color: #666; line-height: 1.6;"><strong>Message:</strong> ${message.replace(
            /\n/g,
            "<br>"
          )}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
          <p style="font-size: 14px; color: #666;">
            Best regards,<br>
            <strong>The HireGenix Team</strong><br>
            <a href="https://myhiregenix.ai" style="color: ${
              branding.primaryColor
            };">myhiregenix.ai</a>
          </p>
        </div>
      </div>
    `;

    // Send email to admin
    const adminMailOptions = {
      from: {
        name: "HireGenix Contact Form",
        address: FROM_EMAIL,
      },
      to: "sumitshrm12@gmail.com", // Your test email
      subject: `New Lead Request: ${inquiryType} - ${name}`,
      text: `New contact form submission from ${name} (${email}): ${message}`,
      html: adminHtmlTemplate,
    };

    // Send auto-reply to user
    const userMailOptions = {
      from: {
        name: "HireGenix",
        address: FROM_EMAIL,
      },
      to: email,
      subject: "Thank you for contacting HireGenix",
      text: `Thank you for reaching out to us, ${name}. We have received your message and will get back to you soon.`,
      html: userHtmlTemplate,
    };

    // Send both emails
    const [adminInfo, userInfo] = await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return { adminInfo, userInfo };
  } catch (error) {
    console.error("Error sending contact email:", error);
    throw error;
  }
}
