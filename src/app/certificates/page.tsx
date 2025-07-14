import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { certificates } from "@/lib/data.tsx";
import { Award } from "lucide-react";

export default function CertificatesPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">My Certificates</h1>
        <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
          A showcase of my certifications and professional development.
        </p>
      </header>
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader className="flex flex-row items-center gap-4">
              <Award className="h-10 w-10 flex-shrink-0 text-primary" />
              <div>
                <CardTitle className="font-headline text-xl leading-tight">
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {cert.name}
                    </a>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{cert.issuer} - {cert.date}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
