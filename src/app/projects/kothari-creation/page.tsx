import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowLeft, Github, Link as LinkIcon, ShoppingBag, MessageCircle, Instagram, Sparkles, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function KothariCreationPage() {
  const features = [
    {
      icon: ShoppingBag,
      title: "Product Collections",
      description: "Organized collections for Kurtis, Silk Sets, Cotton Specials, and New Arrivals with easy navigation."
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Inquiry Cart",
      description: "Add products to cart and send bulk wholesale requests directly via WhatsApp for seamless ordering."
    },
    {
      icon: Instagram,
      title: "Instagram Reels Integration",
      description: "Embedded Instagram Reels player with product links to showcase latest designs and trends."
    },
    {
      icon: Sparkles,
      title: "3D Hero Section",
      description: "Stunning hero section with 3D elements and luxury animations for an immersive experience."
    },
    {
      icon: ShoppingBag,
      title: "Fully Responsive",
      description: "Mobile-first design ensuring perfect display across all devices from phones to desktops."
    },
    {
      icon: Sparkles,
      title: "Live Showroom",
      description: "Virtual showroom experience for online visitors (Coming Soon)."
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
            <Badge variant="outline" className="text-sm">E-Commerce Showcase</Badge>
            <Badge variant="secondary" className="text-sm">Wholesale</Badge>
          </div>
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Kothari Creation</h1>
          <p className="mt-4 text-xl text-muted-foreground">Wholesale Ethnic Wear Showcase for Premium Handcrafted Indian Ethnic Wear</p>
        </header>

        {/* Image Carousel with optimized images */}
        <Carousel className="w-full mb-12">
          <CarouselContent>
            <CarouselItem>
              <Image
                src="/Project/KC1.png"
                width={1200}
                height={800}
                alt="Kothari Creation Screenshot 1"
                className="w-full aspect-video rounded-lg object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/Project/KC2.png"
                width={1200}
                height={800}
                alt="Kothari Creation Screenshot 2"
                className="w-full aspect-video rounded-lg object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/Project/KC3.png"
                width={1200}
                height={800}
                alt="Kothari Creation Screenshot 3"
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
                  Kothari Creation is a modern, responsive e-commerce showcase for premium handcrafted Indian ethnic wear. 
                  It features stunning product galleries, WhatsApp inquiry system for wholesale buyers, Instagram reels integration, 
                  and smooth animations - perfect for clothing brands targeting retailers.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  This project showcases proficiency in building visually stunning e-commerce platforms with modern web technologies. 
                  The focus on wholesale B2B transactions through WhatsApp integration demonstrates practical business solution design.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="font-headline text-3xl font-bold mb-4">What I Learned</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">E-Commerce Design Patterns</h3>
                    <p className="text-muted-foreground">Building product showcases that balance visual appeal with conversion-focused UX.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">B2B Wholesale Solutions</h3>
                    <p className="text-muted-foreground">Designing cart and inquiry systems for bulk wholesale transactions via messaging.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">3D & Animations</h3>
                    <p className="text-muted-foreground">Implementing Three.js and Framer Motion for immersive visual experiences.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Social Media Integration</h3>
                    <p className="text-muted-foreground">Embedding Instagram content for dynamic social proof and engagement.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-headline text-3xl font-bold mb-4">Challenges & Solutions</h2>
              <div className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Challenge: 3D Performance Optimization</h3>
                  <p className="text-muted-foreground text-sm">Implementing complex 3D elements while maintaining fast load times. Solved by optimizing Three.js scene and using lazy loading for 3D models.</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Challenge: WhatsApp Cart Integration</h3>
<p className="text-muted-foreground text-sm">Creating a cart system that generates pre-formatted WhatsApp messages for bulk orders. Solved by building a custom cart with WhatsApp API integration for seamless inquiry flow.</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Challenge: Mobile-First E-Commerce</h3>
                  <p className="text-muted-foreground text-sm">Ensuring smooth experience on mobile devices with varying screen sizes. Solved through responsive design and touch-optimized interactions.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <aside className="space-y-6">
            <div>
              <h3 className="font-headline text-xl font-semibold mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Vite</Badge>
                <Badge variant="secondary">React 18</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">shadcn/ui</Badge>
                <Badge variant="secondary">Framer Motion</Badge>
                <Badge variant="secondary">React Router</Badge>
                <Badge variant="secondary">TanStack Query</Badge>
                <Badge variant="secondary">Three.js</Badge>
                <Badge variant="secondary">@react-three/fiber</Badge>
              </div>
            </div>

            <div>
              <h3 className="font-headline text-xl font-semibold mb-3">Project Links</h3>
              <div className="space-y-2">
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href="https://kothari-creation.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <LinkIcon className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href="https://github.com/Daksh200/KOTHARI_CREATION" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub Repository
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-headline text-xl font-semibold mb-3">Wholesale Inquiries</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">WhatsApp</span>
                  <span className="font-medium">+91 78293 95699</span>
                </div>
                <p className="text-muted-foreground text-xs mt-2">
                  Message: "Hi! Interested in kurtis wholesale catalog."
                </p>
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
                  <span>E-Commerce Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>3D Graphics (Three.js)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>API Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Responsive Design</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </div>
  );
}
