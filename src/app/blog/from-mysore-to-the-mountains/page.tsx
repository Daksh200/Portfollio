import { blogPosts } from "@/lib/data";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogPostPage() {
  const post = blogPosts.find(p => p.slug === 'from-mysore-to-the-mountains');

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
          <p>I’m not the adventurous type. In fact, I’m an introvert from Mysore, where life is smooth, quiet, and simple. My idea of a weekend is usually books, chai, and maybe a walk in the park. But this time, life had different plans.</p>

          <p>My cousin randomly asked me to join him and his friends on a trek in Maharashtra. At first, I said no. I didn’t know the people, I had never trekked before, and honestly, I wasn’t even sure if I owned proper shoes for it. But somehow, I said yes.</p>

          <p>That one “yes” turned into an experience I’ll never forget.</p>

          <h2>From Smooth Mysore to Wild Maharashtra</h2>

          <p>We left Mumbai early morning and drove to a village called Khireshwar, the base for the Harishchandragad trek. Right from the beginning, things felt different. The roads were rough, the weather was wild, and the people I was with were loud, funny, and full of energy.</p>

          <p>Being from Mysore, I was used to calm vibes and well-planned days. But here, in Maharashtra, plans changed every hour, nobody followed time, and nature didn’t care if you were ready or not.</p>

          <h2>The Trek: Wet, Wild & Unbelievable</h2>

          <p>As we started the trek, it began to rain—heavy rain. The trail was slippery, full of stones, and steep in some places. My shoes were soaked, my legs were tired, and I was already thinking, “Why did I come here?”</p>

          <p>But slowly, something changed.</p>

          <p>We were walking through forests, climbing rocks, crossing waterfalls, and seeing views I had only seen in photos before. The group helped each other, cracked jokes, and even offered me dry snacks when I looked too tired to move.</p>

          <p>I may not have spoken much, but I was quietly enjoying every moment.</p>

          <h2>Konkankada: A View I'll Never Forget</h2>

          <p>After around 4 hours, we reached the top—Konkankada. It was covered in clouds, and the valley looked like something from a dream. Cold wind, hot chai from a local stall, and complete silence... it was the first time in a long time I felt completely peaceful.</p>

          <p>Even though I was with strangers, it felt like I belonged there.</p>

          <h2>The Twist: Staying the Night in a Cave</h2>

          <p>We had planned to return the same day, but the rain made it difficult. So we stayed near the ancient Harishchandreshwar temple, where many trekkers camp. We didn’t have tents, so we managed to squeeze into a cave.</p>

          <p>It was dark, damp, and not very comfortable. But with snacks, torch lights, and random ghost stories, we somehow made it a fun night. For someone like me who usually avoids even group dinners, this was a big step.</p>

          <h2>Back Down... and a Surprise Club Visit!</h2>

          <p>The next morning, we trekked back down—legs sore, clothes dirty, and hearts full. On the way back to Mumbai, the group suddenly decided to go to a club to “celebrate the trek.”</p>

          <p>I was shocked. I’ve never been to a club—not even in Mysore. I’ve passed by them, but never entered. The loud music, lights, and people dancing felt like a totally different world.</p>

          <p>At first, I just sat in a corner with a lime soda. But eventually, the music got to me. I didn’t dance (I’m not that brave), but I smiled, clapped, and maybe even did a small head nod. For an introvert, that’s basically a party move.</p>

          <h2>What I Learned</h2>

          <p>I went from the calm streets of Mysore to the wild cliffs of Harishchandragad. I walked in the rain, slept in a cave, and even ended up in a Mumbai club with people I barely knew.</p>

          <p>This trip taught me that sometimes, saying yes to the unknown brings the best memories. You don’t need to be outgoing or adventurous to explore. You just need to be open.</p>

          <p>Would I do it again? Yes. But maybe next time, with dry socks and some dance practice.</p>
        </div>
      </article>
    </div>
  );
}
