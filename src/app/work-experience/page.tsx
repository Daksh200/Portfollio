import { Building } from "lucide-react";
import { workExperience } from "@/lib/data.tsx";

export default function WorkExperiencePage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Work Experience</h1>
        <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
          My professional journey and accomplishments.
        </p>
      </header>
      <section>
        <div className="relative pl-6 before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:bg-border">
          {workExperience.map((job, index) => (
            <div key={index} className="relative mb-10 pl-8">
              <div className="absolute left-[-22px] top-1 flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                <Building className="h-5 w-5 text-primary" />
              </div>
              <h2 className="font-headline text-2xl font-semibold">{job.role}</h2>
              <p className="text-md text-muted-foreground">{job.company} | {job.period}</p>
              <p className="mt-3 text-base">{job.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
