import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { allSkills, education, workExperience, certificates } from "@/lib/data";
import { Download, Building, GraduationCap, Mail, Phone, Linkedin, Github, Award, Briefcase } from "lucide-react";

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
              I'm a Full Stack Developer with a strong foundation in computer applications and a passion for building modern web applications. My focus lies in solving complex problems and creating intuitive, high-performance user experiences. I thrive in collaborative environments and am always eager to learn new technologies. Recently, I've been diving deep into the world of Generative AI, integrating intelligent features into applications to create smarter and more powerful tools.
            </p>
          </section>

          <section>
            <h2 className="font-headline mb-6 text-3xl font-bold">Education</h2>
            <div className="relative pl-6 before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:bg-border">
              {education.map((edu, index) => (
                <div key={index} className="relative mb-8 pl-8">
                  <div className="absolute left-[-22px] top-1 flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{edu.degree}</h3>
                  <p className="text-base text-muted-foreground">{edu.institution} | {edu.period}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-headline mb-6 text-3xl font-bold">Internship Experience</h2>
            <div className="space-y-6">
              <div className="relative pl-8">
                <div className="absolute left-[-22px] top-1 flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Python Full Stack Developer</h3>
                <p className="text-base text-muted-foreground">Infosys Springboard Virtual Internship | Dec 2025 - Feb 2026</p>
                <ul className="mt-2 list-disc pl-5 text-base space-y-1">
                  <li>Developed a Fraud Rules Engine web app for insurance workflows, improving fraud detection efficiency by 25%.</li>
                  <li>Engineered backend services in Python + SQL with RESTful APIs, reducing query response time by 30%.</li>
                  <li>Designed modular React + TypeScript front-end with TailwindCSS and Shadcn UI, boosting usability by 40%.</li>
                  <li>Implemented audit logging, version control, and CSV export, strengthening compliance and transparency.</li>
                  <li>Deployed the application on Netlify, delivering a production-ready solution accessible to end users.</li>
                </ul>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-[-22px] top-1 flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">AI/ML Intern</h3>
                <p className="text-base text-muted-foreground">Teachnook EdTech (in association with Btech Walleh) | Sep - Nov 2024</p>
                <ul className="mt-2 list-disc pl-5 text-base space-y-1">
                  <li>Gained hands-on exposure to machine learning, deep learning, NLP, and computer vision through structured mentorship.</li>
                  <li>Built micro-projects including a sentiment analysis tool, chatbot, and data visualization dashboard, enhancing engagement by 15%.</li>
                  <li>Strengthened technical skills in Python, Pandas, NumPy, Scikit-learn, with deployment via Streamlit.</li>
                  <li>Applied data preprocessing, model evaluation, and hyperparameter tuning to improve model reliability by 18%.</li>
                  <li>Improved collaboration, communication, and time management through team reviews and project discussions.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-headline mb-6 text-3xl font-bold">Projects</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg">Storage Management System - Cloud-Based File Sharing Platform</h3>
                <p className="text-base text-muted-foreground">Tech: Next.js 15, React 19, TypeScript, Tailwind CSS, Appwrite</p>
                <ul className="mt-1 list-disc pl-5 text-base space-y-1">
                  <li>Developed a secure cloud storage platform for file upload, download, and sharing, inspired by modern drive systems.</li>
                  <li>Implemented real-time previews, global search, and analytics dashboard, improving file accessibility by 40%.</li>
                  <li>Integrated Appwrite authentication and modular components, streamlining workflow and enhancing scalability.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Collab Now - Real-Time Collaboration Platform</h3>
                <p className="text-base text-muted-foreground">Tech: Next.js, React, Tailwind CSS, Vercel</p>
                <ul className="mt-1 list-disc pl-5 text-base space-y-1">
                  <li>Built a full-stack collaboration app with video conferencing, real-time communication, and responsive UI, improving team productivity by 30%.</li>
                  <li>Integrated secure API connections for real-time updates, ensuring seamless multi-user interaction across devices.</li>
                  <li>Deployed on Vercel with optimized performance and cross-platform support for desktop and mobile.</li>
                </ul>
              </div>
<div>
                <h3 className="font-semibold text-lg">InvoiceIQ - Invoice Management System</h3>
                <p className="text-base text-muted-foreground">Tech: React.js, Tailwind CSS, Node.js, Prisma, PostgreSQL</p>
                <ul className="mt-1 list-disc pl-5 text-base space-y-1">
                  <li>Developed AI-powered invoice system with multi-currency support, real-time sync, audit logs, and export options.</li>
                  <li>Automated data extraction from scanned documents using OpenAI APIs, reducing manual entry time by 60%.</li>
                  <li>Implemented role-based access control and secure self-hosting with Docker containerization.</li>
                  <li>Integrated cryptocurrency payment processing with 170+ fiat currency conversions.</li>
                  <li>Built visualization dashboards for financial analytics and tax reporting.</li>
                </ul>
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
                <a href="mailto:djain00009@gmail.com" className="hover:text-primary">djain00009@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>+91 8431485394</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-4 w-4 text-muted-foreground" />
                <a href="https://www.linkedin.com/in/daksh-jain29/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">linkedin.com/in/daksh-jain29/</a>
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
              <CardTitle className="font-headline text-xl">Certifications</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p><strong>Full Stack Web Development</strong> - Skill Up - Geeks for Geeks (2026)</p>
              <p><strong>Programming Fundamentals using Python</strong> - Infosys Springboard (Jun 2025)</p>
              <p><strong>Artificial Intelligence</strong> - Cognizance'24 IIT Roorkee (Jan 2025)</p>
              <p><strong>Artificial Intelligence</strong> - Novi Tech R&D Pvt. Ltd. (Sep 2024)</p>
              <p><strong>Power BI Crash Course</strong> - Skill course E-Learning (Sep 2024)</p>
              <p><strong>Diploma in Computer Financial Accounting</strong> (Tally ERP9 with GST, MS Office) - KEONICS, Govt. of Karnataka (2022)</p>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
