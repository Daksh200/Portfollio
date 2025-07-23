import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AIInternDetailPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-8 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Artificial Intelligence Intern</h1>
        <p className="text-muted-foreground">TEACHNOOK (TEACHSCAPE ONLINE LEARNING SERVICES PRIVATE LIMITED) | Sep 2024 - Nov 2024</p>
      </header>
      <Card>
        <CardContent>
          <p>
            Built a movie recommendation system using collaborative filtering. Created sentiment analysis tools using NLP. Designed a chatbot for FAQs. Gained hands-on experience with ML, Python, and data science.
          </p>
          <p>
            Skills: Artificial Intelligence and Applications, Machine Learning
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
