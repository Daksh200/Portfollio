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
                    <p>Back in my 2nd PUC days at Sadvidya Composite PU College, I was the kind of student who believed in structure, discipline, and always showing up for class — every single time. I was an introvert, quiet by nature, and rarely ever took risks, especially the kind that involved skipping class and going out. But one afternoon changed everything for me.</p>

                    <p>It was the first time I ever bunked a class — something that felt almost rebellious. And not just that, I bunked it to go out with friends, including girls, which was entirely new territory for me.</p>

                    <p>The group was a mix of familiar faces and new energy:<br />
                    Nidhi Chopra, Pranjal Bhandari, Vimla, and Muskaan Jain — the girls, all cheerful and full of life.<br />
                    And then there was Ayush Jain, my close friend, and of course, me — Daksh.</p>

                    <p>We decided to head to Dolphin Café, a place I had never been to. It was just a small outing for them, but for me, it felt like stepping into an entirely different world. I still remember the butterflies in my stomach, the awkwardness of trying to fit in, and the overwhelming silence inside me when everyone around me was casually chatting and laughing.</p>

                    <p>I was so far outside my comfort zone, it felt like I was standing on another planet.</p>

                    <p>But thankfully, Ayush was with me. He was more free-spirited, confident, and easygoing in such situations. Watching him talk, laugh, and just be himself made me feel a little more grounded. Honestly, if Ayush hadn’t been there, I’m not sure I would’ve gone through with it. His presence gave me that much-needed push — a sense of security that helped me face the unfamiliar.</p>

                    <p>The six of us sat together, talked (well, they talked — I mostly listened), laughed, and shared little stories. Slowly, I found myself smiling more, speaking up a bit, and easing into the atmosphere. It wasn’t instant, but I was learning to let go of my constant self-doubt and just live in the moment.</p>

                    <p>That afternoon wasn’t just about skipping class — it was a turning point.</p>

                    <p>I realized that sometimes, the scariest steps are the ones that help you grow the most. For an introvert like me, who had always shied away from social spaces, that day at Dolphin Café was a personal victory. It showed me that discomfort often comes before growth, and stepping out of your bubble — even once — can change how you see the world and yourself.</p>

                    <p>Looking back, I’m glad I took that risk.<br />
                    It may have started with hesitation, but it ended with memories I’ll never forget — and a version of me I never knew existed.</p>

                    <p>Just when I thought I was slowly starting to enjoy this new side of life, the atmosphere began to shift.</p>

                    <p>Up until that afternoon at Dolphin Café, everything felt like a small personal victory. I was learning to come out of my shell, testing my boundaries, and making memories I thought I'd never have. But life, as it often does, had other plans.</p>

                    <p>Some of my classmates, who always saw me as the “quiet, disciplined student,” didn't take my sudden change very well. They couldn’t understand that people evolve — that just because someone is introverted or studious doesn’t mean they can’t have fun or try something different. Instead of encouragement or silence, they started spreading wrong assumptions and rumors about me. Whispered judgments behind my back began to grow louder, and before I knew it, my small act of stepping out became fuel for criticism.</p>

                    <p>I didn’t know how to respond.</p>

                    <p>As an introvert, confrontation was never my strength. I didn’t have the courage to defend myself or clarify things. Instead, I did what I always did — I turned inward. I stopped talking, not just with those who spread the negativity, but almost with everyone. I stopped enjoying the things that had just started feeling new and exciting.</p>

                    <p>And slowly, I began to hate my PU life.</p>

                    <p>The campus that once felt familiar became uncomfortable. The people who once seemed like classmates felt distant. I started carrying the weight of judgment even when no one was speaking. It’s strange how quickly joy can be replaced by doubt when you feel misunderstood.</p>

                    <p>Looking back, I wish I had the strength to speak up — to tell them that one moment of exploration didn’t define me, that I was still me, just learning to grow. But I didn’t. And that silence changed the way I experienced the rest of my college life.</p>
                </div>
            </article>
        </div>
    );
}
