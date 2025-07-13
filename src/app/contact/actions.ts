'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function sendEmail(formData: z.infer<typeof contactSchema>) {
  try {
    const validatedData = contactSchema.parse(formData);

    // In a real application, you would integrate with an email service like SendGrid, Resend, or Nodemailer.
    // For this example, we'll just log the data to the console.
    console.log('Received contact form submission:');
    console.log(validatedData);

    // Simulate a network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    if (error instanceof z.ZodError) {
      return { success: false, message: 'Invalid form data.' };
    }
    return { success: false, message: 'An unexpected error occurred.' };
  }
}
