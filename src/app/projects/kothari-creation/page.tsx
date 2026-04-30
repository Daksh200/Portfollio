import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function KothariCreationPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-8 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Kothari Creation</h1>
        <p className="text-muted-foreground mt-2">Wholesale Ethnic Wear Showcase</p>
      </header>

      <div className="mb-8 flex flex-wrap justify-center gap-4">
        <Button asChild>
          <a href="https://kothari-creation.vercel.app/" target="_blank" rel="noopener noreferrer">
            View Live Demo
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="https://github.com/Daksh200/KOTHARI_CREATION" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </Button>
      </div>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
          <p className="text-muted-foreground mb-4">
            Kothari Creation is a modern, responsive e-commerce showcase for premium handcrafted Indian ethnic wear. 
            Features stunning product galleries, WhatsApp inquiry system for wholesale buyers, Instagram reels integration, 
            and smooth animations. Perfect for clothing brands targeting retailers.
          </p>
        </CardContent>
      </Card>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>Vite</Badge>
          <Badge>React 18</Badge>
          <Badge>TypeScript</Badge>
          <Badge>Tailwind CSS</Badge>
          <Badge>shadcn/ui</Badge>
          <Badge>Framer Motion</Badge>
          <Badge>React Router</Badge>
          <Badge>TanStack Query</Badge>
          <Badge>Three.js</Badge>
          <Badge>@react-three/fiber</Badge>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Hero Section with 3D elements & luxury animations</li>
          <li>Product Collections (Kurtis, Silk Sets, Cotton Specials, New Arrivals)</li>
          <li>WhatsApp Inquiry Cart - Add products & send bulk wholesale requests</li>
          <li>Instagram Reels Player with product links</li>
          <li>Live Showroom (Coming Soon)</li>
          <li>Fully responsive (mobile-first)</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Wholesale Inquiries</h2>
        <p className="text-muted-foreground">
          Contact via WhatsApp: <strong>+91 78293 95699</strong>
        </p>
        <p className="text-muted-foreground mt-2">
          Message template: "Hi! Interested in kurtis wholesale catalog."
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Project Structure</h2>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`kothari-creation/
├── public/                 # Static assets (videos, robots.txt)
├── src/
│   ├── components/         # UI components
│   ├── pages/             # Routes (Index, About, Collections)
│   ├── lib/               # Products data, WhatsApp utils
│   └── hooks/             # Custom hooks
├── tailwind.config.ts     # Tailwind + shadcn config
├── vite.config.ts         # Vite config (port 8080)
└── package.json           # Dependencies & scripts`}</code>
        </pre>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`# Clone the repo
git clone https://github.com/Daksh200/KOTHARI_CREATION.git
cd kothari-creation

# Install dependencies
npm install

# Start development server
npm run dev  # Runs on localhost:8080`}</code>
        </pre>
      </div>
    </div>
  );
}
