'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function sendEmail(formData: z.infer<typeof contactSchema>) {
  try {
    const validatedData = contactSchema.parse(formData);

    // Create a transporter using SMTP credentials from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email message options
    const mailOptions = {
      from: `"${validatedData.name}" <${validatedData.email}>`,
      to: process.env.CONTACT_EMAIL, // Your email address to receive messages
      subject: `New Contact Form Message from ${validatedData.name}`,
      text: validatedData.message,
      html: `<p>${validatedData.message}</p><p>From: ${validatedData.name} (${validatedData.email})</p>`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    if (error instanceof z.ZodError) {
      return { success: false, message: 'Invalid form data.' };
    }
    return { success: false, message: 'An unexpected error occurred.' };
  }
}
