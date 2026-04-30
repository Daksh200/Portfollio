import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function FreelanceWebDeveloperPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-8 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Freelance Web Developer</h1>
        <p className="text-muted-foreground">Helping small & medium scale businesses build their online presence | 2026 - Present</p>
      </header>
      
      <h2 className="text-2xl font-semibold mb-4">Freelance Web Development Services</h2>
      <p className="mb-4">
        As a freelance web developer, I have been working with small and medium scale businesses to help them build their reputation in the web world. My services include building custom websites and small-scale applications that help businesses create a strong online presence and establish their name in the market.
      </p>
      <p className="mb-8">
        I understand the unique challenges faced by small businesses and strive to deliver cost-effective, professional, and user-friendly web solutions that meet their specific needs. From initial consultation to deployment, I work closely with clients to ensure their vision is brought to life.
      </p>

      <h3 className="text-xl font-semibold mb-4">Client Projects</h3>
      
      <div className="mb-8 p-6 border rounded-lg">
        <h4 className="text-lg font-semibold mb-2">Kothari Creation</h4>
        <p className="mb-4">
          A client project for a business looking to establish their online presence. I developed and deployed a custom website to showcase their products and services.
        </p>
        <div className="flex gap-4">
          <a href="https://kothari-creation.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          </a>
          <a href="https://github.com/Daksh200/KOTHARI_CREATION" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </a>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-4">Services Offered</h3>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Custom Website Development</li>
        <li>Small-scale Web Application Development</li>
        <li>E-commerce Solutions</li>
        <li>Business Portfolio Websites</li>
        <li>Website Deployment & Hosting</li>
        <li>UI/UX Design</li>
        <li>Website Maintenance & Support</li>
        <li>SEO Optimization</li>
      </ul>

      <h3 className="text-xl font-semibold mb-4">Technology Stack</h3>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Next.js & React</li>
        <li>TypeScript & JavaScript</li>
        <li>HTML5 & CSS3</li>
        <li>Tailwind CSS</li>
        <li>shadcn UI Components</li>
        <li>Node.js & Express</li>
        <li>MongoDB & PostgreSQL</li>
        <li>Firebase</li>
        <li>Vercel & Netlify Deployment</li>
      </ul>

      <p className="mb-4">
        My goal as a freelance web developer is to help businesses transform their ideas into reality through professional web solutions. I believe that every business deserves a strong online presence, regardless of their size, and I am committed to delivering high-quality, affordable web development services that drive real results.
      </p>
    </div>
  );
}
