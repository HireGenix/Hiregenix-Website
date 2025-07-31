// Test script for contact form email functionality
// Run with: node scripts/test-contact-email.js

const { sendContactEmail } = require("../src/lib/sendContactMail.ts");

async function testContactEmail() {
  try {
    console.log("Testing contact email functionality...");

    const testData = {
      name: "Test User",
      email: "test@example.com",
      company: "Test Company",
      inquiryType: "Product Demo",
      message:
        "This is a test message to verify the contact form email functionality is working correctly.",
    };

    const result = await sendContactEmail(testData);

    console.log("✅ Email sent successfully!");
    console.log("Admin email info:", result.adminInfo.messageId);
    console.log("User auto-reply info:", result.userInfo.messageId);
  } catch (error) {
    console.error("❌ Error sending email:", error.message);

    if (error.message.includes("SMTP")) {
      console.log("\n💡 Make sure your .env file contains:");
      console.log("SMTP_HOST=your-smtp-host");
      console.log("SMTP_PORT=587");
      console.log("SMTP_USER=your-smtp-username");
      console.log("SMTP_PASS=your-smtp-password");
      console.log("FROM_EMAIL=notification@myhiregenix.ai");
    }
  }
}

if (require.main === module) {
  testContactEmail();
}

module.exports = { testContactEmail };
