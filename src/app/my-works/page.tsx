"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp } from "lucide-react";

interface WorkItem {
  title: string;
  description: string;
  href: string;
  duration: string;
}

const workChain: WorkItem[] = [
  {
    title: "Freelance Web Developer",
    description: "Helping small & medium scale businesses build their online presence",
    href: "/my-works/freelance-web-developer",
    duration: "2026 - Present",
  },
  {
    title: "Infosys Springboard Internship",
    description: "Modern web app to design, test, and monitor fraud detection rules.",
    href: "/my-works/infosys-internship",
    duration: "Nov 2025 - Jan 2026",
  },
  {
    title: "Artificial Intelligence Intern",
    description: "TEACHNOOK (TEACHSCAPE ONLINE LEARNING SERVICES PRIVATE LIMITED)",
    href: "/my-works/artificial-intelligence-intern",
    duration: "Sep 2024 - Nov 2024",
  },
  {
    title: "Cyber Safety & Digital Awareness",
    description: "Campaign organized by 10 final-year students in Mysore.",
    href: "/my-works/cyber-safety-digital-awareness",
    duration: "2024",
  },
  {
    title: "AI-Assisted Website Development",
    description: "Collaborated on web projects using ChatGPT, Wix ADI, Framer AI, and more.",
    href: "/my-works/ai-assisted-website-development",
    duration: "2024",
  },
  {
    title: "Retail Assistant",
    description: "Vow Gallery, Mysore - Part-time role with billing, inventory, customer service, and merchandising.",
    href: "/my-works/retail-assistant-vow-gallery",
    duration: "2024",
  },
  {
    title: "Healing Through Movement",
    description: "A story of healing depression through movement, mindfulness, and community support.",
    href: "/my-works/healing-through-movement",
    duration: "2024",
  },
];

export default function MyWorksPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">My Works</h1>
        <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
A journey of my experiences
        </p>
      </header>

      <div className="flex flex-col items-center">
{workChain.map((work, index) => (
          <div key={work.href} className="flex flex-col items-center w-full">
            <a href={work.href} className="block w-full max-w-md">
              <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 cursor-pointer group">
                <CardHeader className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                      {work.duration}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {work.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {work.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </a>

{index < workChain.length - 1 && (
              <div className="flex items-center justify-center py-2">
                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent blur-sm">
                    <ArrowUp className="w-8 h-8 text-primary/30" />
                  </div>
                  <ArrowUp className="w-8 h-8 text-primary relative z-10 animate-bounce" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          Each experience shaped who I am today →
        </p>
      </div>
    </div>
  );
}
