import { Code, Cpu, Database, Paintbrush } from "lucide-react";
import React from 'react';

export const skills = [
  {
    name: "Frontend Development",
    description: "Building responsive and interactive user interfaces with modern frameworks.",
    icon: <Paintbrush className="h-8 w-8 text-primary" />,
  },
  {
    name: "Backend Development",
    description: "Creating robust server-side applications and APIs to power the frontend.",
    icon: <Database className="h-8 w-8 text-primary" />,
  },
  {
    name: "AI Integration",
    description: "Leveraging AI models and services to build intelligent features.",
    icon: <Cpu className="h-8 w-8 text-primary" />,
  },
  {
    name: "DevOps & Deployment",
    description: "Managing infrastructure and deployment pipelines for seamless delivery.",
    icon: <Code className="h-8 w-8 text-primary" />,
  },
];

export const allSkills = [
  'React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3',
  'Node.js', 'Python', 'Firebase', 'PostgreSQL', 'MongoDB',
  'Genkit AI', 'Google AI', 'LangChain',
  'Docker', 'Kubernetes', 'Google Cloud', 'Vercel',
  'Tailwind CSS', 'shadcn/ui', 'Three.js'
];

export const workExperience = [
  {
    role: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2020 - Present",
    description: "Lead developer for a suite of enterprise SaaS applications. Responsible for architecting new features, mentoring junior developers, and optimizing application performance. Specialized in AI feature integration.",
  },
  {
    role: "Frontend Developer",
    company: "Creative Solutions",
    period: "2018 - 2020",
    description: "Developed and maintained user interfaces for various client websites and web applications using React and TypeScript. Collaborated closely with UI/UX designers to implement pixel-perfect designs.",
  },
  {
    role: "Junior Web Developer",
    company: "Digital Starters LLC",
    period: "2016 - 2018",
    description: "Assisted in the development of marketing websites and e-commerce stores. Gained foundational experience in web technologies and agile methodologies.",
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  institution: "University of Technology",
  period: "2012 - 2016",
  description: "Graduated with honors. Focused on software engineering, algorithms, and artificial intelligence."
};

export const certificates = [
    {
        name: "Google AI Essentials",
        issuer: "Google",
        date: "2023",
        url: "#"
    },
    {
        name: "Certified Kubernetes Application Developer (CKAD)",
        issuer: "The Linux Foundation",
        date: "2022",
        url: "#"
    },
    {
        name: "Professional Cloud Developer",
        issuer: "Google Cloud",
        date: "2021",
        url: "#"
    }
];

const allProjects = [
  {
    title: "AI-Powered Portfolio Analyzer",
    description: "A tool that uses generative AI to analyze portfolio content and provide suggestions for improvement.",
    image: "https://placehold.co/600x400.png",
    aiHint: "AI analysis",
    tags: ["Next.js", "Genkit AI", "TypeScript", "shadcn/ui"],
    slug: "ai-powered-portfolio-analyzer",
    liveUrl: "#",
    githubUrl: "#",
    details: "This project leverages Google's Gemini model through Genkit to offer users actionable feedback on their professional portfolios. The goal is to help users enhance their presentation clarity and better highlight their skills. The frontend is built with Next.js and shadcn/ui for a clean, modern user experience."
  },
  {
    title: "Interactive 3D Product Visualizer",
    description: "An immersive 3D experience for showcasing products, built with Three.js.",
    image: "https://placehold.co/600x400.png",
    aiHint: "3D product",
    tags: ["Three.js", "React", "Tailwind CSS"],
    slug: "interactive-3d-product-visualizer",
    liveUrl: "#",
    githubUrl: "#",
    details: "A web-based 3D visualizer that allows users to interact with product models in real-time. Features include rotation, zoom, and customizable textures. The project was built from scratch using Three.js to optimize performance and provide a high degree of customization."
  },
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce website with a custom CMS and payment integration.",
    image: "https://placehold.co/600x400.png",
    aiHint: "online store",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    slug: "e-commerce-platform",
    liveUrl: "#",
    githubUrl: "#",
    details: "This e-commerce platform supports thousands of products and includes features like user authentication, shopping cart, order management, and secure payments via Stripe. The backend is a custom Node.js API connected to a MongoDB database."
  },
  {
    title: "Community Blog",
    description: "A collaborative blogging platform for tech enthusiasts.",
    image: "https://placehold.co/600x400.png",
    aiHint: "blog interface",
    tags: ["Next.js", "Firebase", "TypeScript"],
    slug: "community-blog",
    liveUrl: "#",
    githubUrl: "#",
    details: "A full-stack application that allows users to create, read, and comment on blog posts. It features a rich text editor and uses Firebase for authentication, database, and storage. The application is server-side rendered with Next.js for optimal SEO and performance."
  }
];

export const featuredProjects = allProjects.slice(0, 3);
export const projects = allProjects;

export const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `https://placehold.co/600x${Math.floor(Math.random() * 201) + 400}.png`,
  alt: `Gallery image ${i + 1}`,
  aiHint: "abstract art",
}));

export const blogPosts = [
    {
        title: "The Future of Web Development with AI",
        slug: "the-future-of-web-development",
        date: "2024-05-15",
        author: "Daksh",
        excerpt: "Exploring how artificial intelligence is reshaping the landscape of web development, from automated coding to personalized user experiences.",
        image: "https://placehold.co/600x400.png",
        aiHint: "AI web",
    },
    {
        title: "A Deep Dive into Three.js",
        slug: "deep-dive-into-three-js",
        date: "2024-04-22",
        author: "Daksh",
        excerpt: "A comprehensive guide to getting started with Three.js for creating stunning 3D graphics on the web.",
        image: "https://placehold.co/600x400.png",
        aiHint: "3D graphics",
    },
    {
        title: "Mastering State Management in React",
        slug: "mastering-state-management-in-react",
        date: "2024-03-10",
        author: "Daksh",
        excerpt: "Comparing different state management libraries and patterns in React to help you choose the right one for your next project.",
        image: "https://placehold.co/600x400.png",
        aiHint: "React code",
    }
];
