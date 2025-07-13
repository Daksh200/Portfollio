import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { featuredProjects, skills } from "@/lib/data.tsx";
import { Badge } from "@/components/ui/badge";
import Hero3D from "@/components/hero-3d";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <Hero3D />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white mix-blend-difference">
                    Showcasing Skills &amp; Talent
                  </h1>
                  <p className="max-w-[600px] text-gray-200 md:text-xl mix-blend-difference">
                    Welcome to my personal portfolio. I am a passionate creator, developer, and designer, ready to bring ideas to life.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/projects">View Projects</Link>
                  </Button>
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/contact">Contact Me</Link>
                  </Button>
                </div>
              </div>
              {/* The 3D component is now the background, so we don't need a placeholder image here */}
            </div>
          </div>
        </section>
        
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">My Skillset</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I specialize in a variety of technologies to build modern, robust, and scalable web applications.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {skills.map((skill) => (
                <Card key={skill.name}>
                  <CardHeader className="flex flex-row items-center gap-4">
                    {skill.icon}
                    <CardTitle className="font-headline text-xl">{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="featured-projects" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are some of the projects I'm most proud of.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <Card key={project.title} className="flex flex-col">
                  <CardHeader>
                    <Image
                      src={project.image}
                      width={600}
                      height={400}
                      alt={project.title}
                      data-ai-hint={project.aiHint}
                      className="aspect-video w-full overflow-hidden rounded-t-lg object-cover"
                    />
                    <CardTitle className="font-headline pt-4">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="link" className="p-0 h-auto">
                      <Link href={`/projects/${project.slug}`}>
                        View Project <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button asChild>
                <Link href="/projects">
                  See All Projects
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
