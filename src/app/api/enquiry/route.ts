import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Backend recipient list as requested (never exposed on frontend UI)
const RECIPIENTS = ["info@fandrys.com", "dataenquiry70@gmail.com"];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, company, phone, email, country, enquiryType, quantity, message } = body;

    // Validate required fields
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields (Name, Phone, Email, Message)." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // Format HTML email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; background-color: #FAF9F6;">
        <div style="background-color: #c22026; padding: 24px; text-align: center; color: #ffffff;">
          <h1 style="margin: 0; font-size: 22px; font-weight: 800;">New Commercial Enquiry</h1>
          <p style="margin: 6px 0 0 0; font-size: 14px; opacity: 0.9;">Fandrys India Private Limited</p>
        </div>
        
        <div style="padding: 24px; color: #1A1A1A;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold; width: 35%; color: #c22026;">Customer Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #c22026;">Company / Org:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${company || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #c22026;">Phone Number:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;"><a href="tel:${phone}" style="color: #1A1A1A; text-decoration: none; font-weight: bold;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #c22026;">Email Address:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;"><a href="mailto:${email}" style="color: #1A1A1A; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #c22026;">Country:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${country || "India"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #c22026;">Enquiry Type:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">${enquiryType}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #c22026;">Quantity Required:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${quantity || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #c22026;">Date & Time:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${timestamp} IST</td>
            </tr>
          </table>

          <div style="background-color: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #e0e0e0; margin-top: 10px;">
            <p style="margin: 0 0 8px 0; font-weight: bold; color: #c22026;">Detailed Requirements / Message:</p>
            <p style="margin: 0; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #333333;">${message}</p>
          </div>
        </div>

        <div style="background-color: #f3f4f6; padding: 16px; text-align: center; font-size: 12px; color: #666666; border-top: 1px solid #e0e0e0;">
          Received via Fandrys Official Website Portal (fandrys.com)
        </div>
      </div>
    `;

    const plainTextContent = `
      New Commercial Enquiry - Fandrys India Private Limited
      ------------------------------------------------------
      Name: ${name}
      Company: ${company || "N/A"}
      Phone: ${phone}
      Email: ${email}
      Country: ${country || "India"}
      Enquiry Type: ${enquiryType}
      Quantity: ${quantity || "Not specified"}
      Date: ${timestamp} IST

      Message:
      ${message}
    `;

    let emailSent = false;

    // 1. Primary Strategy: MailerSend REST API
    const mailersendApiKey =
      process.env.MAILERSEND_API_KEY ||
      "ms_live_7b6ea22b96888737c0bb8e1ef454408a6135666c2d44deb3";

    const mailersendFrom =
      process.env.MAILERSEND_FROM_EMAIL ||
      process.env.MAIL_FROM_ADDRESS ||
      "info@fandrys.com";

    if (mailersendApiKey) {
      try {
        const msResponse = await fetch("https://api.mailersend.com/v1/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${mailersendApiKey}`,
          },
          body: JSON.stringify({
            from: {
              email: mailersendFrom,
              name: "Fandrys Portal",
            },
            to: RECIPIENTS.map((recEmail) => ({ email: recEmail })),
            reply_to: {
              email: email,
              name: name,
            },
            subject: `New Enquiry [${enquiryType}]: ${name}`,
            text: plainTextContent,
            html: htmlContent,
          }),
        });

        if (msResponse.ok || msResponse.status === 202) {
          emailSent = true;
          console.log(`[Enquiry API] MailerSend API email dispatched to ${RECIPIENTS.join(", ")}`);
        } else {
          const msErrorText = await msResponse.text();
          console.warn("[Enquiry API] MailerSend response warning:", msResponse.status, msErrorText);
        }
      } catch (msErr) {
        console.error("[Enquiry API] MailerSend dispatch error:", msErr);
      }
    }

    // 2. Secondary Strategy: Coolify Mail Service / SMTP Transport
    if (!emailSent) {
      const smtpHost =
        process.env.COOLIFY_MAIL_HOST ||
        process.env.COOLIFY_SMTP_HOST ||
        process.env.MAIL_HOST ||
        process.env.SMTP_HOST ||
        process.env.MAILSERVER_HOST;

      const smtpPort = parseInt(
        process.env.COOLIFY_MAIL_PORT ||
        process.env.COOLIFY_SMTP_PORT ||
        process.env.MAIL_PORT ||
        process.env.SMTP_PORT ||
        "587"
      );

      const smtpUser =
        process.env.COOLIFY_MAIL_USERNAME ||
        process.env.COOLIFY_SMTP_USER ||
        process.env.MAIL_USERNAME ||
        process.env.SMTP_USER ||
        process.env.MAIL_USER;

      const smtpPass =
        process.env.COOLIFY_MAIL_PASSWORD ||
        process.env.COOLIFY_SMTP_PASS ||
        process.env.MAIL_PASSWORD ||
        process.env.SMTP_PASS ||
        process.env.MAIL_PASS;

      const fromAddress =
        process.env.COOLIFY_MAIL_FROM_ADDRESS ||
        process.env.MAIL_FROM_ADDRESS ||
        process.env.SMTP_FROM ||
        smtpUser ||
        "info@fandrys.com";

      if (smtpHost && smtpUser && smtpPass) {
        try {
          const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
              user: smtpUser,
              pass: smtpPass,
            },
          });

          await transporter.sendMail({
            from: `"${name} via Fandrys Portal" <${fromAddress}>`,
            replyTo: email,
            to: RECIPIENTS.join(", "),
            subject: `New Enquiry [${enquiryType}]: ${name}`,
            text: plainTextContent,
            html: htmlContent,
          });

          emailSent = true;
          console.log(`[Enquiry API] Coolify SMTP email dispatched to ${RECIPIENTS.join(", ")}`);
        } catch (smtpErr) {
          console.error("[Enquiry API] SMTP transport error:", smtpErr);
        }
      }
    }

    // 3. Tertiary Fallback Strategy: Direct FormSubmit Webhook dispatch
    if (!emailSent) {
      try {
        const formPayload = {
          _subject: `New Fandrys Enquiry [${enquiryType}]: ${name}`,
          _template: "table",
          _captcha: "false",
          "Customer Name": name,
          "Company Name": company || "N/A",
          "Phone Number": phone,
          "Customer Email": email,
          "Country": country || "India",
          "Enquiry Type": enquiryType,
          "Quantity Required": quantity || "Not specified",
          "Message": message,
          "Submission Time": `${timestamp} IST`,
        };

        await Promise.allSettled(
          RECIPIENTS.map((recipientEmail) =>
            fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify(formPayload),
            })
          )
        );

        emailSent = true;
        console.log(`[Enquiry API] Webhook email dispatched to ${RECIPIENTS.join(", ")}`);
      } catch (webhookErr) {
        console.error("[Enquiry API] Webhook dispatch error:", webhookErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been submitted successfully.",
    });
  } catch (error) {
    console.error("[Enquiry API Error]:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process enquiry. Please try again later." },
      { status: 500 }
    );
  }
}
