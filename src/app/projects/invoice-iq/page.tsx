import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { projects } from "@/lib/data";
import { ArrowLeft, Github, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function InvoiceIQPage() {
  const project = projects.find(p => p.slug === 'invoice-iq');

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
      <div className="mb-8">
        <Button asChild variant="ghost">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      <article>
        <header className="mb-8">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">{project.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{project.description}</p>
        </header>

        <Carousel className="w-full mb-12">
          <CarouselContent>
            <CarouselItem>
              <Image
                src="/Project/Project11.png"
                width={1200}
                height={800}
                alt={`${project.title} screenshot 1`}
                data-ai-hint={project.aiHint}
                className="w-full aspect-video rounded-lg object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/Project/Pro2.png"
                width={1200}
                height={800}
                alt={`${project.title} screenshot 2`}
                data-ai-hint={project.aiHint}
                className="w-full aspect-video rounded-lg object-cover"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="font-headline text-3xl font-bold mb-4">About the Project</h2>
            <div className="prose prose-stone dark:prose-invert max-w-none whitespace-pre-line">
              {project.details}
            </div>
          </div>
          <aside className="space-y-6">
            <div>
              <h3 className="font-headline text-xl font-semibold mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-headline text-xl font-semibold mb-3">Project Links</h3>
              <div className="space-y-2">
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <LinkIcon className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub Repository
                  </a>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </div>
  );
}
