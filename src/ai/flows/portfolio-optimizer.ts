'use server';

/**
 * @fileOverview Portfolio optimization AI agent.
 *
 * - optimizePortfolio - A function that handles the portfolio optimization process.
 * - OptimizePortfolioInput - The input type for the optimizePortfolio function.
 * - OptimizePortfolioOutput - The return type for the optimizePortfolio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizePortfolioInputSchema = z.object({
  portfolioContent: z.string().describe('The content of the portfolio to be optimized.'),
  userSkills: z.array(z.string()).optional().describe('Optional list of skills to emphasize in the portfolio.'),
});
export type OptimizePortfolioInput = z.infer<typeof OptimizePortfolioInputSchema>;

const OptimizePortfolioOutputSchema = z.object({
  optimizedContent: z.string().describe('The optimized content of the portfolio.'),
  suggestions: z.array(z.string()).describe('A list of suggestions for improving the portfolio presentation and clarity.'),
});
export type OptimizePortfolioOutput = z.infer<typeof OptimizePortfolioOutputSchema>;

export async function optimizePortfolio(input: OptimizePortfolioInput): Promise<OptimizePortfolioOutput> {
  return optimizePortfolioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizePortfolioPrompt',
  input: {schema: OptimizePortfolioInputSchema},
  output: {schema: OptimizePortfolioOutputSchema},
  prompt: `You are an AI-powered portfolio optimizer. Your task is to analyze the given portfolio content and provide suggestions for improvement.

Portfolio Content: {{{portfolioContent}}}

{{#if userSkills}}
User Skills to Emphasize:
{{#each userSkills}}
- {{{this}}}
{{/each}}
{{else}}
No specific skills to emphasize.
{{/if}}

Analyze the portfolio content and provide optimized content along with a list of concrete and actionable suggestions to improve its presentation and clarity. Consider ways to highlight the user's strengths and accomplishments, and ensure the portfolio is engaging and easy to understand.
`,
});

const optimizePortfolioFlow = ai.defineFlow(
  {
    name: 'optimizePortfolioFlow',
    inputSchema: OptimizePortfolioInputSchema,
    outputSchema: OptimizePortfolioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
