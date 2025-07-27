import { blogPosts } from "@/lib/data";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GraduationDramaBlog() {
  const post = blogPosts.find(p => p.slug === "graduation-or-graduation-drama");

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
          <h2>🎭 <em>Graduation or Graduation Drama?</em></h2>
          <h3><strong>A Day of Trophies, Truth Bombs, and Too Many Fake Smiles</strong></h3>
          <div className="my-8">
            <Image
              src="/blogs/dak4.jpg"
              alt="Daksh blog image 4"
              width={600}
              height={338}
              className="rounded-lg object-cover mx-auto"
            />
          </div>
          <h3>🏆 <em>The Big Moment</em></h3>
          <p><strong>July 25, 2025</strong> — a day that should’ve been all glitter and glory.</p>
          <p>I walked across the stage as the <strong>BCA Topper of the Year</strong>. Gold medal, certificate, applause — the kind of moment you dream of during late-night study marathons and coffee-fueled coding breakdowns.</p>
          <p>And yes, for a brief moment, it <em>did</em> feel magical.</p>
          <p>The mic echoed my name. The lights hit my face. The claps — loud, but let’s be honest — <strong>some were from the heart, others just for show.</strong></p>
          <p>I stood tall. Achieved. Accomplished.</p>
          <p>But behind the scenes?</p>
          <p>It wasn’t a celebration. It was a <strong>theatre of jealousy, judgment, and carefully disguised ego battles.</strong></p>

          <div className="my-8">
            <video controls className="mx-auto rounded-lg max-w-full">
              <source src="/blogs/dak1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <h3>🧠 <em>I Read People Too Well — And That Day, I Wish I Didn’t</em></h3>
          <p>I don’t need mind-reading powers — just a little observation and emotional intelligence.</p>
          <p>I saw the glances. I felt the shift in energy. I recognized the difference between a smile that says "I'm happy for you" and one that whispers, "Why not me?"</p>
          <p>Some teachers smiled genuinely — others looked like they were trying not to choke on their own pride.</p>
          <p>Not all, of course. I’ll get to the real heroes later.</p>
          <p>But yes, a few couldn’t digest the fact that a student — <strong>a non-flattering, non-favorite, unapologetically independent student</strong> — walked away with the highest honor.</p>
          <p>Then there were classmates.</p>
          <p>People who practically lived off my assignments, last-minute notes, project guidance — Now? Suddenly silent, eyes glued to their phones, acting like I didn’t exist.</p>
          <blockquote><p><strong>"When you stop being useful, you start being invisible."</strong><br />Sad truth. And I lived it that day.</p></blockquote>
          <div className="my-8">
            <Image
              src="/blogs/dak3.jpg"
              alt="Daksh blog image 3"
              width={600}
              height={338}
              className="rounded-lg object-cover mx-auto"
            />
          </div>

          <h3>👑 <em>Let's Talk About the Real MVPs: The Teachers Who Never Gave Up on Me</em></h3>
          <p>Yes, some teachers made things harder.</p>
          <p>But <strong>others became the reason I didn’t give up when it got hard.</strong> They didn’t just teach me subjects — they taught me how to <strong>believe in myself</strong>.</p>
          <ul>
            <li><strong>Saloni Ma’am</strong> – The first to see potential in me, even when I didn’t. Her encouragement shaped more than my academic journey — it shaped my confidence.</li>
            <li><strong>Ashika Ma’am</strong> – Quiet but powerful. Her calm guidance and steady support was a silent strength.</li>
            <li><strong>M J Charan Sir</strong> – A teacher who never needed to shout to make you think. He challenged me to do better, to dig deeper, to not settle for average.</li>
            <li><strong>Roshan Sir</strong> – For creating a space where my voice felt valued, and my ideas felt heard.</li>
            <li><strong>Yashaswini Ma’am</strong> – Honest, kind, and always genuine. Her feedback — even when tough — came from a place of wanting us to grow.</li>
            <li><strong>Sheldon Sir</strong> – A mentor in every sense. His advice goes beyond classrooms; it's the kind that sticks with you for life.</li>
            <li><strong>Sowjanya Ma’am</strong> – For pushing us to present, to speak up, to break the fear of the stage — and helping us become more confident versions of ourselves.</li>
          </ul>
          <blockquote><p><strong>These teachers weren’t just educators — they were allies. And if I made it to the top, it’s because they lifted me when the world wanted me to fall.</strong></p></blockquote>
          <p>This win? It’s as much theirs as it is mine.</p>
          <div className="my-8">
            <Image
              src="/blogs/dak2.jpg"
              alt="Daksh blog image 2"
              width={600}
              height={338}
              className="rounded-lg object-cover mx-auto"
            />
          </div>

          <h3>👕 <em>Apparently, Marks Don't Matter — Your Outfit Does</em></h3>
          <p>Let’s talk about the unspoken fashion contest.</p>
          <p>You walk in as a <strong>gold medalist</strong>, but if you’re not wearing a designer shirt or shiny shoes, some people act like you’re a background character in their Instagram story.</p>
          <p>Meanwhile, others — flaunting fake Gucci belts, chunky heels, and TikTok-ready makeup — get treated like celebrities.</p>
          <blockquote><p><strong>We live in a society that judges people’s potential by their presentation.</strong><br />And unfortunately, it starts young and runs deep.</p></blockquote>
          <p>I wasn’t dressed to impress. I was there to <strong>close a chapter I worked damn hard to finish.</strong></p>
          <p>But clearly, for some, your future is only as bright as your filter.</p>

          <h3>🌚 <em>The “Farewell” That Felt Like a Forced Exit</em></h3>
          <p>Let’s not sugarcoat it:</p>
          <p>The farewell was <strong>embarrassingly underwhelming</strong>.</p>
          <p>No decoration. No vibe. No proper send-off. Just a blank stage, a tired emcee, and an awkward playlist.</p>
          <p><strong>It didn’t feel like a celebration — it felt like an afterthought.</strong> Like the college just wanted to get it over with.</p>
          <p>No warmth. No legacy moments. No recognition of the blood, sweat, and emotional breakdowns students go through to reach that stage.</p>
          <p>We weren’t treated like graduates stepping into the next chapter — We were just <strong>roll numbers being cleared from the system.</strong></p>

          <h3>🔞 <em>Mini Nightclub or Farewell? Confused Audience, Creepy Vibes</em></h3>
          <p>Now, let’s address the <strong>real elephant in the room</strong>.</p>
          <p>Was it a farewell or an afternoon rave?</p>
          <p>People dressed like they were heading to a club — and that’s their right. But the problem wasn’t <strong>what they wore</strong> — it was <strong>how others responded.</strong></p>
          <p>Guys turning into predators with wandering eyes and even worse comments. The way some stared — you’d think they forgot what decency means. Conversations happening in corners that had <strong>nothing to do with memories and everything to do with fantasies.</strong></p>
          <blockquote><p>Confidence is powerful.<br />But <strong>objectification in the name of fashion is disgusting.</strong></p></blockquote>
          <p>Some boys came not to celebrate but to scope — and it was <em>visible, audible, and sickening.</em></p>

          <h3>🥃 <em>Afterparty or Aftermath? The Night That Got Ugly</em></h3>
          <p>As if that wasn’t enough — the night took a wild, toxic turn.</p>
          <p>Boys got drunk. Bikes started roaring like racetracks. Fights over ego, girls, or who could show off more.</p>
          <p>The city turned into a playground for chaos.</p>
          <p>What should’ve been a dignified ending to a chapter became a <strong>spectacle of immaturity</strong>.</p>
          <p>And the college?</p>
          <p>Silent. No follow-up. No accountability. The message was clear:</p>
          <blockquote><p>“You’re not our responsibility anymore.”</p></blockquote>

          <h3>🚨 <em>Consent is Education, Not a Debate</em></h3>
          <p>To the girls who were stared at, whispered about, or followed with eyes they didn’t consent to — You were wronged.</p>
          <p>You deserved respect — not reactions.</p>
          <p>Let’s be clear:</p>
          <ul>
            <li>Dressing up is not an invitation.</li>
            <li>Walking confidently is not a challenge.</li>
            <li>Saying "No" should never be ignored.</li>
          </ul>
          <p>This generation needs more than orientation lectures — it needs <strong>real conversations about respect, boundaries, and consent.</strong></p>
          <p>Because <strong>blaming clothes for someone else's behavior is like blaming rain for getting wet — without carrying an umbrella.</strong></p>

          <h3>🧘 <em>For an Introvert, It Wasn’t a Farewell — It Was a Mental Marathon</em></h3>
          <p>I’m not the loudest in the room. I observe. I listen. I remember.</p>
          <p>That day, every fake laugh, every sarcastic compliment, every eye roll hit harder than applause.</p>
          <p>I don’t just experience things — <strong>I absorb them</strong>. And absorbing that much energy, both fake and fierce, was overwhelming.</p>
          <blockquote><p>It wasn’t just exhausting — it was a mental marathon.<br />But I made it to the finish line with clarity, not just a certificate.</p></blockquote>

          <h3>🧨 <em>Final Thought: I Didn’t Just Graduate — I Outgrew Them</em></h3>
          <p>This farewell wasn’t about saying goodbye to a building.</p>
          <p>It was about walking away from:</p>
          <ul>
            <li>Toxic competition</li>
            <li>Shallow validation</li>
            <li>Petty egos</li>
            <li>Fake friendships</li>
            <li>And a system that sometimes forgets it’s shaping humans, not just handing out degrees</li>
          </ul>
          <p>To the ones who clapped while low-key envying me — To the ones who smiled but silently hoped I’d fail — To the ones who used me until I wasn’t convenient —</p>
          <p><strong>Thank you. You became the push I needed to rise.</strong></p>
          <p>And to the teachers who <strong>never let me feel alone in the crowd</strong>, who celebrated my wins like they were their own —</p>
          <blockquote><p><strong>This gold medal is ours.</strong></p></blockquote>

          <p>I didn’t just graduate.<br /><strong>I evolved.<br />I learned. I unlearned. And I moved on.</strong></p>
          <p>Let them keep the shallow praise.</p>
          <blockquote><p><strong>I’m walking away with strength, scars, and a story worth telling.</strong></p></blockquote>


        </div>
      </article>
    </div>
  );
}
