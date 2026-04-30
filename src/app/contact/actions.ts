'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

// Formspree endpoint - replace with your own form ID from https://formspree.io
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mykogalw';

export async function sendEmail(formData: z.infer<typeof contactSchema>) {
  try {
    const validatedData = contactSchema.parse(formData);

    // Send data to Formspree API
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: validatedData.name,
        email: validatedData.email,
        message: validatedData.message,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    const result = await response.json();

    if (result.ok) {
      return { success: true, message: 'Message sent successfully!' };
    } else {
      return { success: false, message: 'Failed to send message. Please try again.' };
    }
  } catch (error) {
    console.error('Error sending email:', error);
    if (error instanceof z.ZodError) {
      return { success: false, message: 'Invalid form data.' };
    }
    return { success: false, message: 'An unexpected error occurred. Please try again.' };
  }
}
