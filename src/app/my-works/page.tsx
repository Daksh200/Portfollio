import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function MyWorksPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">My Works</h1>
        <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
          A showcase of my internship experiences and work in different companies.
        </p>
      </header>
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <a href="/my-works/artificial-intelligence-intern" className="block">
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>Artificial Intelligence Intern</CardTitle>
              <CardDescription>TEACHNOOK (TEACHSCAPE ONLINE LEARNING SERVICES PRIVATE LIMITED) | Sep 2024 - Nov 2024</CardDescription>
            </CardHeader>
          </Card>
        </a>
        <a href="/my-works/cyber-safety-digital-awareness" className="block">
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>Cyber Safety & Digital Awareness Campaign – Mysore</CardTitle>
              <CardDescription>Organized by a group of 10 final-year undergraduate students | May - July 2025</CardDescription>
            </CardHeader>
          </Card>
        </a>
        <a href="/my-works/ai-assisted-website-development" className="block">
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>AI-Assisted Website Development</CardTitle>
              <CardDescription>
                Collaborated on multiple web development projects using AI tools like ChatGPT, Wix ADI, Framer AI, and more.
              </CardDescription>
            </CardHeader>
          </Card>
        </a>
        {/* Add more cards here for other internship/work experiences as needed */}
      </section>
    </div>
  );
}
