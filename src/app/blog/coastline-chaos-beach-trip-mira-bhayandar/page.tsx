import { blogPosts } from "@/lib/data";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogPostPage() {
  const post = blogPosts.find(p => p.slug === "coastline-chaos-beach-trip-mira-bhayandar");

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
          <p>I was staying at my mom’s hometown in <em>Mira-Bhayandar, Thane district</em> — a place I’d visited a few times before, but never quite understood. See, I’m originally from <strong>Mysore</strong> — a city known for its calm streets, clean air, and a lifestyle that’s more about peace than pace. I grew up around slow mornings, polite conversations, and quiet nights.</p>
          <p>So, coming to a <em>Tier 1 city</em> like Mira-Bhayandar felt like stepping into another world. The noise, the fashion, the constant buzz — it hit me hard. Being an <em>introvert</em>, it wasn’t easy. The local guys here carried themselves differently — from their <strong>club culture</strong> to their <em>faded denim jackets, torn jeans, and fancy haircuts</em> that looked like something out of a movie. And me? I was still in my comfortable tee and basic sneakers, just trying to blend in without looking too lost.</p>
          <p>But that’s the thing about life — sometimes, it throws you into situations that feel uncomfortable at first... until they lead you somewhere unforgettable.</p>

          <h2>From Chai to Chaos</h2>
          <p>A few days into the trip, I reconnected with some neighborhood boys — a mix of my cousin’s friends and local faces I barely knew. It started with casual chai talks, silly banter, and harmless teasing about my “Mysore calmness.” Before I knew it, someone tossed out an idea: “Let’s go on a beach trip.”</p>
          <p>At first, I just smiled and nodded, assuming it was one of those random plans that never actually happen. But I was wrong.</p>
          <p>Within two days, it was real. We were going to Tarkarli.</p>

          <h2>The Journey Begins</h2>
          <p>We weren’t looking for convenience. This wasn’t your quick Alibaug visit. This was a <em>full-on beach escape</em> to Tarkarli — deep in Maharashtra’s Konkan coast, far from city buzz and college tension. Seven guys, two cars, no itinerary, and one mission: get away.</p>
          <p>Of course, no trip is complete without chaos. Rahul — who may be the chillest and most careless guy I know — forgot his <em>entire bag</em>. No clothes. No toiletries. Just flip-flops and vibes. The rest of us took turns dressing him like a charity project throughout the trip.</p>
          <p>The road journey itself was wild — loud music, snack fights, wrong turns, and at least one terrifying ghat road stretch. But honestly, it was perfect. There’s something about <em>road trips with strangers who slowly become your people</em> that makes the journey as special as the destination.</p>

          <h2>Touchdown at Tarkarli</h2>
          <p>When we reached <em>Tarkarli</em>, the world just… paused. The beach was open, clean, and so silent you could hear your own thoughts. It wasn’t crowded. No tourists with cameras. Just waves, palm trees, and that salty Konkan air.</p>
          <p>We checked into a small beach cottage — nothing fancy, just cozy and raw. The uncle who ran it greeted us like long-lost relatives and served us glasses of <em>kokum sharbat</em> that tasted like heaven after hours on the road.</p>

          <h2>Veg Food & Vibes Only</h2>
          <p>As a vegetarian, I was slightly nervous about food options — beach towns are usually seafood-heavy. But Tarkarli delivered. From <em>puran polis</em> and <em>misal pav</em> to <em>hot batata vadas, ukdiche modak, and sabudana khichdi</em>, we feasted like royalty — all veg, all local, and all made with love.</p>
          <p>We spent the days in the ocean, trying (and failing) at water sports, getting sunburnt, and taking terrible group photos that somehow became our favorites. We explored <em>Sindhudurg Fort</em>, bought cheap sunglasses, and tried every local drink that didn’t require an ID.</p>

          <h2>Nights Were Something Else</h2>
          <p>The first night, we built a bonfire on the sand, brought out a speaker, and turned the beach into our own private club — no girls, no judgement, just raw energy. There was dancing, roasting, and that one guy who tried to freestyle rap (we don’t talk about that anymore).</p>
          <p>But the second night? That’s where the real magic happened.</p>
          <p><em>Power cut. Total blackout. Phones dead. Wi-Fi gone.</em></p>
          <p>We lit a few candles, formed a circle, and started a card game that turned into a therapy session. The jokes faded. The honesty kicked in. Each one of us shared things we’d never said out loud — regrets, failures, dreams, even heartbreaks. It was messy, awkward, and kind of beautiful.</p>
          <p>That night, something changed. The awkwardness I felt as a quiet guy from Mysore disappeared. I didn’t feel like the outsider anymore. I was one of them. Part of this chaotic, imperfect, unforgettable crew.</p>

          <h2>The Ride Back</h2>
          <p>The return journey was slow. Not because of traffic — because no one wanted to leave.</p>
          <p>We sat quieter. We listened more. Even Rahul, in his fifth borrowed t-shirt, looked sentimental. Before reaching Mira-Bhayandar, we stopped one last time — just to sit on the side of the road, sip chai, and soak in what just happened.</p>

          <h2>Some Trips Are More Than Trips</h2>
          <ul>
            <li><strong>Mira-Bhayandar → Tarkarli → Back with Lifelong Bonds</strong></li>
            <li><strong>From Mysore calmness to Konkan craziness</strong></li>
            <li><strong>Rahul’s “no-bag” survival story: iconic</strong></li>
            <li><strong>Pure Veg. Full Heart. Empty Phone Battery.</strong></li>
            <li><strong>Power cuts, bonfires, and truths we never planned to share</strong></li>
          </ul>

          <p>We started as strangers, connected by cousins and geography.<br />
          We came back as brothers, connected by stories and shared silence under stars.</p>

          <p>Would I do it again? In a second.<br />
          Same place, same madness, maybe just a better playlist this time.</p>

          <p><em>– Just a Quiet Guy from Mysore Who Took a Risk and Found a Memory for Life</em></p>
        </div>
      </article>
    </div>
  );
}
