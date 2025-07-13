import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { allSkills, education, workExperience } from "@/lib/data.tsx";
import { Download, Building, GraduationCap, Mail, Phone, Linkedin, Github } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-8 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div>
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Daksh</h1>
          <p className="mt-2 text-lg text-muted-foreground">Full Stack Developer & AI Enthusiast</p>
        </div>
        <Button asChild size="lg">
          <a href="#" download="Daksh-Resume.pdf">
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </a>
        </Button>
      </header>

      <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-12">
          <section>
            <h2 className="font-headline mb-6 text-3xl font-bold">About</h2>
            <p className="text-muted-foreground">
              Results-driven Full Stack Developer with over 8 years of experience in building and deploying modern web applications. Passionate about solving complex problems and creating intuitive, high-performance user experiences. Thrives in collaborative environments and is always eager to learn new technologies, with a recent focus on integrating Generative AI to build smarter applications.
            </p>
          </section>

          <section>
            <h2 className="font-headline mb-6 text-3xl font-bold">Work Experience</h2>
            <div className="relative pl-6 before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:bg-border">
              {workExperience.map((job, index) => (
                <div key={index} className="relative mb-8 pl-8">
                  <div className="absolute left-[-22px] top-1 flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                    <Building className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{job.role}</h3>
                  <p className="text-sm text-muted-foreground">{job.company} | {job.period}</p>
                  <p className="mt-2 text-sm">{job.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-headline mb-6 text-3xl font-bold">Education</h2>
            <div className="flex items-start gap-6">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary mt-1">
                    <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold text-lg">{education.degree}</h3>
                    <p className="text-sm text-muted-foreground">{education.institution} | {education.period}</p>
                    <p className="mt-2 text-sm">{education.description}</p>
                </div>
            </div>
          </section>
        </div>

        <aside className="space-y-8">
          <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href="mailto:daksh@email.com" className="hover:text-primary">daksh@email.com</a>
                </div>
                <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>+1 (123) 456-7890</span>
                </div>
                <div className="flex items-center gap-3">
                    <Linkedin className="h-4 w-4 text-muted-foreground" />
                     <a href="#" className="hover:text-primary">linkedin.com/in/daksh</a>
                </div>
                 <div className="flex items-center gap-3">
                    <Github className="h-4 w-4 text-muted-foreground" />
                     <a href="#" className="hover:text-primary">github.com/daksh</a>
                </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-xl">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {allSkills.map(skill => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
