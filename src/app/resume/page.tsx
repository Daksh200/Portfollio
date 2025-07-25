import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { allSkills, education, workExperience, certificates } from "@/lib/data";
import { Download, Building, GraduationCap, Mail, Phone, Linkedin, Github, Award } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-8 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div>
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Daksh</h1>
          <p className="mt-2 text-lg text-muted-foreground">Full Stack Developer & AI Enthusiast</p>
        </div>
<Button asChild size="lg">
  <a href="/Daksh_Resume_.pdf" download="Daksh_Resume_.pdf">
    <Download className="mr-2 h-5 w-5" />
    Download CV
  </a>
</Button>
      </header>

      <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-12">
          <section>
            <h2 className="font-headline mb-6 text-3xl font-bold">About</h2>
            <p className="text-muted-foreground text-base">
              I’m a Full Stack Developer with a strong foundation in computer applications and a passion for building modern web applications. My focus lies in solving complex problems and creating intuitive, high-performance user experiences. I thrive in collaborative environments and am always eager to learn new technologies. Recently, I've been diving deep into the world of Generative AI, integrating intelligent features into applications to create smarter and more powerful tools.
            </p>
          </section>

          <section>
          <h2 className="font-headline mb-6 text-3xl font-bold">Education</h2>
            <div className="relative pl-6 before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:bg-border">
              {workExperience.map((job, index) => (
                <div key={index} className="relative mb-8 pl-8">
                  <div className="absolute left-[-22px] top-1 flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                    <Building className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{job.role}</h3>
                  <p className="text-base text-muted-foreground">{job.company} | {job.period}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
          </section>
          <section>
            <h2 className="font-headline mb-6 text-3xl font-bold">Project</h2>
            <div className="mb-4">
              <h3 className="font-semibold text-lg">InvoiceIQ – Invoice Management System</h3>
              <p className="text-base text-muted-foreground">
                Tech: React.js, Tailwind CSS, Node.js, Prisma, PostgreSQL
              </p>
              <p className="mt-1 text-base">
                - Developed AI-powered invoice system with multi-currency support, real-time sync, audit logs, and export options.
              </p>
            </div>
            <h2 className="font-headline mb-6 text-3xl font-bold">Internship</h2>
            <div>
              <h3 className="font-semibold text-lg">AI/ML Intern, Teachnook EdTech, Bengaluru (Sep–Nov 2025)</h3>
              <p className="mt-1 text-base">
                - Built projects like Customer Sentiment Analysis and Movie Recommendation System.
              </p>
              <p className="mt-1 text-base">
                - Learned ML concepts: regression, correlation, evaluation.
              </p>
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
                    <a href="mailto:djain00009@gmail.com" className="hover:text-primary">djain00009@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>+91 8431485394</span>
                </div>
                <div className="flex items-center gap-3">
                    <Linkedin className="h-4 w-4 text-muted-foreground" />
                     <a href="https://linkedin.com/in/daksh-331507326" target="_blank" rel="noopener noreferrer" className="hover:text-primary">linkedin.com/in/daksh-331507326</a>
                </div>
                 <div className="flex items-center gap-3">
                    <Github className="h-4 w-4 text-muted-foreground" />
                     <a href="https://github.com/Daksh200" target="_blank" rel="noopener noreferrer" className="hover:text-primary">github.com/Daksh200</a>
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
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-xl">CERTIFICATIONS</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-1">
              <p>Artificial Intelligence – Teachnook (Jan 2025)</p>
              <p>ChatGPT Masterclass – IIT Roorkee (Jan 2025)</p>
              <p>Information Security – Saylor Academy (May 2024)</p>
              <p>Ethical Hacking Masterclass – Nikistian Media (Mar 2024)</p>
              <p>Responsive Design – MindLuster (Oct 2025)</p>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
