import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { workExperience, education, allSkills } from "@/lib/data.tsx";
import { Building, GraduationCap } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">About Me</h1>
        <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
          A glimpse into my professional journey, skills, and passion for technology.
        </p>
      </header>
      
      <section className="mb-16">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/profile-picture.jpg" alt="Profile Picture" />
                <AvatarFallback>D</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="font-headline text-3xl">Daksh</CardTitle>
                <CardDescription className="text-lg">Full Stack Developer & AI Enthusiast</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              I am a results-driven Full Stack Developer with over 8 years of experience in building and deploying modern web applications. My passion lies in solving complex problems and creating intuitive, high-performance user experiences. I thrive in collaborative environments and am always eager to learn new technologies. Recently, I've been diving deep into the world of Generative AI, integrating intelligent features into applications to create smarter and more powerful tools.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="font-headline mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl">Work Experience</h2>
        <div className="relative pl-6 before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:bg-border">
          {workExperience.map((job, index) => (
            <div key={index} className="relative mb-8 pl-8">
              <div className="absolute left-[-22px] top-1 flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                <Building className="h-5 w-5 text-primary" />
              </div>
              <p className="font-semibold">{job.role}</p>
              <p className="text-sm text-muted-foreground">{job.company} | {job.period}</p>
              <p className="mt-2 text-sm">{job.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      <div className="grid gap-12 md:grid-cols-2">
        <section>
          <h2 className="font-headline mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl">Education</h2>
            <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                    <GraduationCap className="h-10 w-10 text-primary" />
                    <div>
                        <CardTitle className="font-headline text-xl">{education.degree}</CardTitle>
                        <CardDescription>{education.institution} | {education.period}</CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">{education.description}</p>
                </CardContent>
            </Card>
        </section>

        <section>
          <h2 className="font-headline mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl">Technical Skills</h2>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2">
                {allSkills.map(skill => (
                  <Badge key={skill} variant="default">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
