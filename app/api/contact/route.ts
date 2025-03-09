import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Basic email validation
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export async function POST(request: Request) {
  try {
    const { name, company, email, phone, message } = await request.json();

    // Input validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Name, email and message are required" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    if (!process.env.SENDGRID_API_KEY) {
      console.error("SendGrid API key is not configured");
      return NextResponse.json(
        { success: false, message: "Server configuration error" },
        { status: 500 }
      );
    }

    // Initialize SendGrid
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Email content
    const mailData = {
      to: "contact@gradify.ai",
      from: {
        email: "krzysztof.palczewski@gradify.ai",
        name: "Gradify Contact Form",
      },
      replyTo: {
        email: email,
        name: name,
      },
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    try {
      // Send email using SendGrid
      const [response] = await sgMail.send(mailData);

      if (response.statusCode >= 200 && response.statusCode < 300) {
        return NextResponse.json({
          success: true,
          message: "Email sent successfully",
        });
      } else {
        throw new Error(
          `SendGrid responded with status code ${response.statusCode}`
        );
      }
    } catch (sendError: any) {
      console.error(
        "SendGrid error:",
        sendError?.response?.body?.errors || sendError
      );
      throw new Error(
        sendError?.response?.body?.errors?.[0]?.message ||
          "Failed to send email"
      );
    }
  } catch (error) {
    console.error("Error processing request:", error);
    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred";
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 }
    );
  }
}
