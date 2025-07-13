import { blogPosts } from "@/lib/data.tsx";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogPostPage() {
    const post = blogPosts.find(p => p.slug === 'the-future-of-web-development');

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
            <div className="mb-8">
                <Button asChild variant="ghost">
                    <Link href="/blog">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Blog
                    </Link>
                </Button>
            </div>
            <article>
                <header className="mb-8">
                    <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">{post.title}</h1>
                    <div className="mt-4 flex items-center space-x-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <User className="h-5 w-5" />
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-5 w-5" />
                            <span>{post.date}</span>
                        </div>
                    </div>
                </header>

                <Image
                    src={post.image}
                    alt={post.title}
                    data-ai-hint={post.aiHint}
                    width={1200}
                    height={675}
                    className="w-full aspect-video rounded-lg object-cover mb-8"
                />

                <div className="prose prose-stone dark:prose-invert max-w-none text-lg">
                    <p>The world of web development is in a constant state of flux, and the latest catalyst for change is Artificial Intelligence. AI is no longer a futuristic concept but a practical tool that is actively reshaping how we design, build, and deploy web applications. From generating code snippets to creating hyper-personalized user experiences, AI is poised to become an indispensable partner for developers.</p>
                    
                    <h2 className="font-headline">AI-Powered Coding Assistants</h2>
                    <p>Tools like GitHub Copilot and Tabnine are already transforming the developer workflow. These AI assistants can suggest code, complete functions, and even write entire blocks of boilerplate code, significantly speeding up development time. This allows developers to focus on more complex logic and creative problem-solving rather than getting bogged down in repetitive tasks.</p>

                    <h2 className="font-headline">Automated Testing and Debugging</h2>
                    <p>AI algorithms can analyze codebases to identify potential bugs, security vulnerabilities, and performance bottlenecks before they reach production. AI can also automate the generation of test cases, ensuring more comprehensive coverage and more resilient applications. This proactive approach to quality assurance is a game-changer for development teams.</p>

                    <h2 className="font-headline">Hyper-Personalization</h2>
                    <p>One of the most exciting applications of AI in web development is the ability to create deeply personalized user experiences. By analyzing user behavior, preferences, and historical data, AI can dynamically tailor content, product recommendations, and UI layouts for each individual user. This level of personalization leads to higher engagement, increased conversions, and greater user satisfaction.</p>

                    <h2 className="font-headline">The Future is Collaborative</h2>
                    <p>The rise of AI doesn't mean developers will become obsolete. Instead, the future of web development is one of collaboration between human creativity and artificial intelligence. By embracing AI tools, developers can augment their skills, boost their productivity, and build more sophisticated and intelligent applications than ever before. The key is to adapt, learn, and leverage these powerful new capabilities to push the boundaries of what's possible on the web.</p>
                </div>
            </article>
        </div>
    );
}
