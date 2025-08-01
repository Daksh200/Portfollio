import { blogPosts } from "@/lib/data";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogPostPage() {
  const post = blogPosts.find(p => p.slug === "coimbatore-diaries-6-friends-1-car-5-star-misunderstanding");

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

        <div className="prose prose-stone dark:prose-invert max-w-none text-lg">
          <p>Some trips don’t need a flight ticket or a fancy resort to be unforgettable. All they need is a bunch of real friends, one car, and just enough chaos to keep things interesting.</p>
          <p>This is one of those stories — a short trip with our apartment gang that turned into a memory I won’t forget.</p>

          <h2>🌄 The Journey Begins</h2>
          <p>It was <strong>6:00 AM</strong> when we hit the road — six of us packed into <strong>one car</strong>: <strong>Khushi</strong>, <strong>Palak</strong>, <strong>Mohit</strong>, <strong>Pratham</strong>, <strong>Pranay</strong>, and me — <strong>Daksh</strong>.</p>
          <p>The plan was simple: <strong>Coimbatore, Tamil Nadu</strong>, for the weekend. The vibe? Music, snacks, sleepy eyes, and way too many random jokes for that early in the morning.</p>
          <p>We kicked things off with a stop at a peaceful <strong>temple</strong> on the way — a calm, spiritual start before the madness kicked in. Breakfast happened soon after — a cozy <strong>roadside restaurant</strong> where we had a classic South Indian brunch: hot idlis, crispy dosas, and endless filter coffee.</p>

          <h2>🏎️ Vintage Cars & Vanished Bookings</h2>
          <p>Once we reached Coimbatore, our first real stop was the <strong>Car Museum</strong> — and trust me, even those of us who couldn’t tell the difference between a hatchback and a sedan were impressed. Classic models, rare designs, and stories behind every machine. It was like stepping through history, but on wheels.</p>
          <p>Then came the twist: The <strong>stay we had pre-booked got cancelled</strong>. Apparently, they didn’t allow <strong>bachelors</strong> — yep, even though we were a mixed group, that one rule threw everything off.</p>
          <p>So began the <strong>hunt</strong>. Hotel after hotel, we faced the same issues — “No availability,” “Couples only,” “No groups.” We were <strong>rejected at 3–4 places</strong>, and by the end, all of us were tired, annoyed, and low-key stressed.</p>
          <p>Finally, we found a hotel that allowed us. We booked <strong>two rooms</strong> — one for the boys, one for the girls. It wasn’t luxurious, but it felt like home in that moment.</p>

          <h2>☕ The Café That Went Sideways</h2>
          <p>Later that evening, we decided to explore the city. First stop was a café suggested by <strong>Khushi</strong> — a place called <strong>IKON by Annapoorna</strong>.</p>
          <p>From the outside, it looked like a dream — fancy interiors, soft lights, and an elegant vibe. But once we stepped in and saw the <strong>prices</strong>, the mood changed.</p>
          <p>Let’s just say… our wallets weren’t ready.</p>
          <p>We started cracking jokes — harmless fun, or so we thought. But what we didn’t notice was that <strong>Khushi felt hurt</strong>. She had suggested the place because she genuinely liked it, and we unknowingly made her feel bad for it.</p>
          <p>The jokes kept going, but <strong>her smile slowly faded</strong>. We realized a bit too late.</p>

          <h2>🍽️ Food Fails & Silent Dinners</h2>
          <p>Trying to smooth things over, we left IKON and went to <strong>Kailash Parvat</strong>, a well-known vegetarian restaurant. The vibe was lively, but after everything, we just weren’t in the mood to eat much. We ordered <strong>only two dishes</strong>, shared them, and sat mostly in silence.</p>
          <p><strong>Khushi didn’t eat at all.</strong> She was still upset — and even though none of us said it out loud, we all felt the weight of it.</p>
          <p>Sometimes it takes just one moment, one joke, to shift the energy.</p>

          <h2>🎳 Bowling? No. UNO? Yes.</h2>
          <p>We tried lifting the mood by visiting <strong>Brookefields Mall</strong>, hoping to play a round of <strong>bowling</strong>. But of course — <strong>the lane was closed</strong>.</p>
          <p>Disappointed but not defeated, we headed back to the hotel. And that’s where the magic of <strong>UNO</strong> began.</p>
          <p>We played round after round. Taught the rules to the ones who didn’t know. Accused each other of cheating (looking at you, Pratham 😄), and slowly, the laughter returned.</p>
          <p>In that small hotel room, the tension melted. No drama, no apologies — just the quiet healing that happens when real friends sit together and share moments that don’t need to be posted online.</p>

          <h2>🧘‍♂️ Day 2: Isha, Waterfalls & Ice Cream Endings</h2>
          <p>The next morning was peaceful — we visited the iconic <strong>Isha Foundation</strong>. The place had a calming presence that no photo can fully capture. We explored, clicked pictures, and just soaked in the serenity.</p>
          <p>We tried to squeeze in one last adventure — a visit to a <strong>nearby waterfall</strong>. But once again, the universe had other plans. <strong>The road was closed.</strong></p>
          <p>No waterfall, no adventure finale. So we did the next best thing — headed back to the <strong>mall’s food court</strong>, had our lunch, and returned to the hotel to <strong>check out around 4:00 PM</strong>.</p>
          <p>The drive back home was calm. We stopped for <strong>dinner</strong> somewhere on the highway, and ended it all with a round of <strong>ice cream</strong>. Because every trip deserves a sweet ending.</p>

          <h2>💭 What Stays With Me</h2>
          <p>This wasn’t a perfect trip. We had our <strong>share of drama</strong>, <strong>missed plans</strong>, and <strong>tight budgets</strong>. But we also had laughter, roadside memories, a little silent bonding, and one very intense game of UNO.</p>
          <p>Here’s what I learned:</p>
          <ul>
            <li><strong>A joke can hurt, even when you don’t mean it.</strong></li>
            <li><strong>Plans will fail — but the best memories aren’t planned.</strong></li>
            <li><strong>It’s the simple things</strong> — like sharing cards in a hotel room — that matter more than five-star dinners.</li>
          </ul>
          <p>And honestly? I wouldn’t change a thing.</p>
          <p>We may not have seen the waterfall, or bowled a single pin, but we lived a story — and that’s more than enough.</p>

          <h2>🛣️ Until Next Time…</h2>
          <p>To <strong>Khushi</strong>, <strong>Palak</strong>, <strong>Mohit</strong>, <strong>Pratham</strong>, and <strong>Pranay</strong> — Thanks for the memories, the chaos, and the silent understanding that made it all worth it.</p>
          <p>Let’s do it again. Same gang. Same madness. <strong>One car. No overthinking.</strong></p>
          <p>– <strong>Daksh</strong></p>
        </div>
      </article>
    </div>
  );
}
