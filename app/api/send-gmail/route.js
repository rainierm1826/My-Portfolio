import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { email, subject, message } = await req.json();
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      },
    });

    const mailOptions = {
      from: `Contact Form <${process.env.EMAIL}>`, 
      to: process.env.EMAIL,
      subject,
      text: `Message from: ${email}\n\n${message}`,
      replyTo: email,
    };

    const result = await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully", result: result },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
