import { blogPosts } from "@/lib/data";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogPostPage() {
    const post = blogPosts.find(p => p.slug === 'my-college-life-at-sapient-college');

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

                <div className="mb-8 overflow-x-auto">
                    <div className="flex space-x-4 min-w-max">
                        <Image
                            src="/blogs/Blog1.jpg"
                            alt={`${post.title} image 1`}
                            width={600}
                            height={338}
                            className="rounded-lg object-cover flex-shrink-0"
                        />
                        <Image
                            src="/blogs/Blog2.jpg"
                            alt={`${post.title} image 2`}
                            width={600}
                            height={338}
                            className="rounded-lg object-cover flex-shrink-0"
                        />
                        <Image
                            src="/blogs/Blog3.jpg"
                            alt={`${post.title} image 3`}
                            width={600}
                            height={338}
                            className="rounded-lg object-cover flex-shrink-0"
                        />
                    </div>
                </div>

                <div className="prose prose-stone dark:prose-invert max-w-none text-lg">
                    <p>🎓 A Journey to Remember – My College Life at Sapient College, Mysore</p>

                    <p>As I look back on the past three years, my time at Sapient College of Commerce and Management, Mysore feels like a beautiful story filled with unforgettable moments, challenges, growth, and friendships that turned into lifelong bonds.</p>

                    <p>College wasn’t just about lectures or exams—it was a place where personalities evolved, laughter echoed through the corridors, and everyday moments turned into memories. The people I met here, especially my classmates, made this journey special in ways I’ll never forget.</p>

                    <p>This post is a dedication to that journey—and to every friend who walked beside me. Here’s a line for each one of you, written straight from the heart.</p>

                    <p>💫 One Line for Each Friend – Through My Eyes</p>

                    <p>Abhay S K – The tall guy with iconic long hair who always made his presence known.</p>

                    <p>Akshay M C – The carefree cigarette lover with his own chill vibe.</p>

                    <p>Ambika Ananth Bhat – The always-masked mystery of the class.</p>

                    <p>Anwal Bopanna – The proud Kodava boy with strong roots and a cool attitude.</p>

                    <p>Ayush Jain – A true businessman in the making, always thinking ahead.</p>

                    <p>Bhavani J – A calm and quiet soul who brought warmth to any group.</p>

                    <p>Bhoomika C – Her cheerful nature was impossible to miss.</p>

                    <p>Bhoomika K – Gentle and ever-supportive, a quiet strength in the crowd.</p>

                    <p>Chandana S P – Kind-hearted and one of the few who gave me tough academic competition.</p>

                    <p>Chandu Kiran D S – My best friend, always there with notes and endless support.</p>

                    <p>Changappa M A – Famous for copying my answers during internals!</p>

                    <p>Darshan H A – The fun-loving drinker, always ready for a good time.</p>

                    <p>Essa Nur Duale – The friendly foreigner who brought a different perspective to the class.</p>

                    <p>Fathima Zuha – My quiet companion in Hindi class.</p>

                    <p>Gagan Londe – The class’s own scientist and our responsible CR.</p>

                    <p>Gouthami – A silent competitor when it came to marks—sharp and determined.</p>

                    <p>Hajira Rabia – Another familiar face in Hindi class, always kind and soft-spoken.</p>

                    <p>Harshavardhan M – The experience-lover, constantly chasing something new.</p>

                    <p>Hemanth S – Part of the party squad, always up for fun.</p>

                    <p>Hitesh R – A fitness freak and bodybuilder with unmatched discipline.</p>

                    <p>Jeeva Melukote Honnappa – Joyful and wise, with stories full of life and experience.</p>

                    <p>Khalid Aslam Merchant – Quiet, calm, and composed—his presence said enough.</p>

                    <p>Kishore N – The guy with the signature tight ankle-fit pants!</p>

                    <p>Lakshya R – Forever ready for spontaneous trips and travel plans.</p>

                    <p>Laxmitha M – The ultimate BTS fangirl who proudly showed her love for K-pop.</p>

                    <p>Likith – Kind-hearted and always ready to lend a hand.</p>

                    <p>Manish K – Bold and confident—truly the don of the college.</p>

                    <p>S Kishan – The talented photographer capturing unforgettable moments.</p>

                    <p>Sharon S – The lively Mandya girl with a spirit that lifted everyone.</p>

                    <p>Thriveni M – A strong and responsible CR who led with care.</p>

                    <p>Ullas M – Another CR who was always dependable and organized.</p>

                    <p>Vikkram – A genuine and helpful Marwadi boy who left a lasting impression.</p>

                    <p>Zuha Samreen – The one who always helped clear my doubts, no matter what.</p>

                    <p>Mehnaz – The mischievous one who once tricked us with fake marks for Roshan Sir’s paper!</p>

                    <p>Mohammed Darveez Moideen A – A Hindi classmate and a calm presence.</p>

                    <p>Mohammed Fardeen – Tall and composed, also from the Hindi class crew.</p>

                    <p>Nanditha P – A kind soul with a heart of gold.</p>

                    <p>Nithish Kumar N – My talkative benchmate who never let a class feel dull.</p>

                    <p>Nithya M S – The quiet observer, strong in her silence.</p>

                    <p>Pooja C R – A responsible CR who took charge without hesitation.</p>

                    <p>Rahul V – Handsome, talented, and completely focused on fitness.</p>

                    <p>Sahasraditya Prabha – The meme master who kept things light and fun.</p>

                    <p>Sajan Somaiah – A kickboxing champion with energy to spare.</p>

                    <p>Sana Fathima – Always on point—the makeup artist of the class.</p>

                    <p>Shashank M M – Strong, kind, and always smiling—a true friend.</p>

                    <p>Suprith J Athreya – The thoughtful Brahmin boy with an old-soul charm.</p>

                    <p>Sukanth M K – Another brilliant photographer who froze moments in time.</p>

                    <p>Thanmai N – From school to college, a familiar and trusted friend.</p>

                    <p>Vishwas – The realist who always saw things as they were.</p>

                    <p>Vismaya Lokesh – Exceptionally intelligent and gifted with talent.</p>

                    <p>Yashwanth Kumar – Known for his unique, striking cat-like eyes.</p>

                    <p>Abnan – A reserved yet respectful friend—someone who left a silent impact.</p>

                    <p>Abhiroop M – The healthy-living ambassador among us.</p>

                    <p>Akash Kashyap R – The vegetarian gym-goer, serious about fitness and lifestyle.</p>

                    <p>Ayman Wisal – The one I sat with during my very first degree class—day one memories.</p>

                    <p>Gangadhar A – The true creator, always doing something real.</p>

                    <p>Prerana Prasanna – The shortest one in the class, but her presence stood tall.</p>

                    <p>💭 Final Thoughts</p>

                    <p>These three years at Sapient gave me more than a degree. They gave me friendships, stories, laughter, lessons, and a version of myself I’ll always cherish. From shared jokes and exam tension to laughter-filled classrooms and unexpected connections—every part of this journey meant something.</p>

                    <p>To each friend mentioned here, thank you for being part of this chapter in my life. You all made these years brighter and unforgettable.</p>

                    <p>Sapient College—thank you for the memories, the people, and the journey. This isn’t a goodbye, it’s a celebration.</p>
                </div>
            </article>
        </div>
    );
}
