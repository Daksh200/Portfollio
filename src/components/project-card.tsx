import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  aiHint: string;
  tags: string[];
  slug: string;
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      <CardHeader className="p-0">
        <Image
          src={project.image}
          width={600}
          height={400}
          alt={project.title}
          data-ai-hint={project.aiHint}
          className="aspect-video w-full object-cover"
        />
      </CardHeader>
      <div className="flex flex-1 flex-col p-6">
        <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
        <CardDescription className="mt-2">{project.description}</CardDescription>
        <CardContent className="mt-4 flex-grow p-0">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="mt-6 p-0">
          <Button asChild variant="link" className="p-0 h-auto">
            <Link href={`/projects/${project.slug}`}>
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
