'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { handleOptimize } from './actions';
import { Terminal, Lightbulb, Loader2 } from 'lucide-react';

const formSchema = z.object({
  portfolioContent: z.string().min(50, {
    message: 'Portfolio content must be at least 50 characters.',
  }),
  userSkills: z.string().optional(),
});

type OptimizeResult = {
  optimizedContent: string;
  suggestions: string[];
} | null;

export default function OptimizerPage() {
  const [result, setResult] = useState<OptimizeResult>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      portfolioContent: '',
      userSkills: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    setError(null);
    try {
      const skillsArray = values.userSkills
        ? values.userSkills.split(',').map((skill) => skill.trim())
        : [];
      
      const response = await handleOptimize({
        portfolioContent: values.portfolioContent,
        userSkills: skillsArray,
      });

      if (response) {
        setResult(response);
      } else {
        setError('Failed to get optimization suggestions. The AI model may be unavailable.');
      }
    } catch (e) {
      setError('An unexpected error occurred.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">AI Portfolio Optimizer</h1>
        <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
          Paste your portfolio description and get AI-powered suggestions to improve its clarity and impact.
        </p>
      </header>

      <Card className="mb-8">
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="portfolioContent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Portfolio Content</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Paste your portfolio description, project details, or 'about me' section here..."
                        className="min-h-[200px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="userSkills"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Skills to Emphasize (optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., React, AI, UI/UX Design" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isLoading ? 'Optimizing...' : 'Optimize My Portfolio'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {error && (
        <Alert variant="destructive">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {result && (
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-primary" />
                Optimized Content
              </CardTitle>
              <CardDescription>
                Here is an AI-generated version of your content, revised for better impact and clarity.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose prose-stone dark:prose-invert max-w-none rounded-md border bg-secondary/30 p-4">
                <p>{result.optimizedContent}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-primary" />
                Improvement Suggestions
              </CardTitle>
              <CardDescription>
                Consider these suggestions to further enhance your portfolio.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {result.suggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {index + 1}
                    </span>
                    <span>{suggestion}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
