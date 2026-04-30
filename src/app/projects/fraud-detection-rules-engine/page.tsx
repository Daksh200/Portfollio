import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { projects } from "@/lib/data";
import { ArrowLeft, Github, Link as LinkIcon, Shield, Activity, FileText, BarChart3, Users, Clock, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FraudDetectionPage() {
  const project = projects.find(p => p.slug === 'fraud-detection-rules-engine');

  if (!project) {
    return <div>Project not found</div>;
  }

  const features = [
    {
      icon: Shield,
      title: "Rule Creation Studio",
      description: "Intuitive drag-and-drop interface for creating and managing fraud detection rules with visual rule builders."
    },
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      description: "Live dashboard showing rule performance, triggered alerts, and suspicious activity patterns."
    },
    {
      icon: FileText,
      title: "Version Control",
      description: "Full versioning history for rules with detailed notes and rollback capabilities."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Comprehensive analytics on rule accuracy, false positive rates, and detection effectiveness."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Multi-user support with role-based access control for enterprise teams."
    },
    {
      icon: Clock,
      title: "Audit Logging",
      description: "Complete audit trail with CSV export for compliance and regulatory requirements."
    }
  ];

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
        {/* Header Section */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="outline" className="text-sm">Infosys Springboard Internship 6.0</Badge>
            <Badge variant="secondary" className="text-sm">Fraud Detection</Badge>
          </div>
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">{project.title}</h1>
          <p className="mt-4 text-xl text-muted-foreground">{project.description}</p>
        </header>

        {/* Image Carousel with real images */}
        <Carousel className="w-full mb-12">
          <CarouselContent>
            <CarouselItem>
              <Image
                src="/Project/rules1.png"
                width={1200}
                height={800}
                alt={`${project.title} screenshot 1`}
                data-ai-hint={project.aiHint}
                className="w-full aspect-video rounded-lg object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/Project/rules2.png"
                width={1200}
                height={800}
                alt={`${project.title} screenshot 2`}
                data-ai-hint={project.aiHint}
                className="w-full aspect-video rounded-lg object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/Project/rules3.png"
                width={1200}
                height={800}
                alt={`${project.title} screenshot 3`}
                data-ai-hint={project.aiHint}
                className="w-full aspect-video rounded-lg object-cover"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Key Features Grid */}
        <section className="mb-12">
          <h2 className="font-headline text-3xl font-bold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-to-br from-card to-card/50 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <feature.icon className="h-10 w-10 text-primary mb-3" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
          {/* Left Column - About */}
          <div>
            <section className="mb-10">
              <h2 className="font-headline text-3xl font-bold mb-4">About the Project</h2>
              <div className="prose prose-stone dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  The Fraud Detection Rules Engine is a modern web application developed during the Infosys Springboard Virtual Internship 6.0 program. It provides a comprehensive platform for designing, testing, and monitoring fraud detection rules with an intuitive interface.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  This project demonstrates proficiency in building complex enterprise-grade applications with modern web technologies. The system allows fraud analysts to create, test, and deploy detection rules efficiently while maintaining a complete audit trail.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="font-headline text-3xl font-bold mb-4">What I Learned</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Enterprise Application Architecture</h3>
                    <p className="text-muted-foreground">Designing scalable frontend architectures for complex business applications.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">State Management</h3>
                    <p className="text-muted-foreground">Handling complex state across multiple components and user interactions.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">User Experience Design</h3>
                    <p className="text-muted-foreground">Creating intuitive interfaces for non-technical fraud analysts.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Version Control Systems</h3>
                    <p className="text-muted-foreground">Implementing complete version history with rollback capabilities.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-headline text-3xl font-bold mb-4">Challenges & Solutions</h2>
              <div className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Challenge: Rule Performance Optimization</h3>
                  <p className="text-muted-foreground text-sm">Implementing complex rule chains efficiently while maintaining real-time performance. Solved by optimizing rule evaluation order and implementing caching strategies.</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Challenge: User-Friendly Rule Builder</h3>
                  <p className="text-muted-foreground text-sm">Making complex fraud detection logic accessible to non-technical users. Solved through visual drag-and-drop interface with intuitive parameter configuration.</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Challenge: Version Management</h3>
                  <p className="text-muted-foreground text-sm">Maintaining complete version history with ability to compare and rollback. Solved with structured versioning system and detailed change logging.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
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

            <div>
              <h3 className="font-headline text-xl font-semibold mb-3">Internship Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Program</span>
                  <span className="font-medium">Infosys Springboard 6.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-medium">8 Weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Focus</span>
                  <span className="font-medium">Full-Stack Development</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-headline text-xl font-semibold mb-3">Skills Demonstrated</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Frontend Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>UI/UX Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>State Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>API Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Version Control</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </div>
  );
}
