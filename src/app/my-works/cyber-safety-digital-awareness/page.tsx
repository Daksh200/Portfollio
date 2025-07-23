import { Card, CardContent } from "@/components/ui/card";

export default function CyberSafetyCampaignPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-8 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
          🔐 Cyber Safety & Digital Awareness Campaign – Mysore
        </h1>
        <p className="text-muted-foreground">
          Organized by: A group of 10 final-year undergraduate students | May – July 2025
        </p>
        <p className="text-muted-foreground">
          Role: Core Team Member (Workshop Facilitator & Content Designer) | Location: Mysore, Karnataka
        </p>
        <p className="text-muted-foreground">
          Supervision: Mentored by a cybersecurity educator and local police liaison
        </p>
      </header>
      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold mb-2">🎯 Objective</h2>
          <p>
            To educate school students and parents about <strong>safe internet use</strong>, <strong>privacy protection</strong>, and <strong>digital threats</strong> like phishing, scams, and cyberbullying. The campaign aimed to promote <strong>responsible digital behavior</strong> and reduce the risks associated with online activity in a mobile-first generation.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">📍 Locations Reached</h2>
          <ol className="list-decimal list-inside space-y-1">
            <li>Government Higher Primary School, Hebbal 1st Stage</li>
            <li>Maharani’s PU College for Girls, JLB Road</li>
            <li>St. Joseph’s Central School, Vijayanagar 3rd Stage</li>
            <li>Public webinar for parents and guardians (via Google Meet)</li>
          </ol>

          <h2 className="text-xl font-semibold mt-6 mb-2">👥 My Role & Contributions</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Created visual content and <strong>bilingual digital safety posters</strong> in English and Kannada</li>
            <li>Delivered <strong>interactive sessions</strong> in 2 schools on topics like:
              <ul className="list-disc list-inside ml-5">
                <li>Online privacy and social media safety</li>
                <li>Spotting phishing links and fake profiles</li>
              </ul>
            </li>
            <li>Designed and hosted a <strong>cyber quiz using Kahoot</strong> for student engagement</li>
            <li>Co-organized a webinar for parents titled <em>“Protecting Your Child in a Digital World”</em></li>
            <li>Coordinated with the <strong>Hebbal Police Station cyber cell</strong> to invite a guest speaker on legal aspects of cybercrime</li>
            <li>Managed collection and reporting of session feedback from participants</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">🧩 Key Campaign Activities</h2>
          <h3 className="text-lg font-semibold mt-4 mb-1">🎓 School-Based Workshops</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Reached over <strong>350 high school students</strong> (Grades 8–12)</li>
            <li>Topics included:
              <ul className="list-disc list-inside ml-5">
                <li>Strong password creation</li>
                <li>Avoiding risky downloads and suspicious apps</li>
                <li>Reporting and preventing cyberbullying</li>
              </ul>
            </li>
            <li>Sessions conducted in both English and Kannada for accessibility</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-1">🧾 Poster & Pamphlet Drive</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Designed and distributed posters such as:
              <ul className="list-disc list-inside ml-5">
                <li><em>“Think Before You Click”</em></li>
                <li><em>“Don’t Share Passwords or OTPs”</em></li>
                <li><em>“Speak Up Against Cyberbullying”</em></li>
              </ul>
            </li>
            <li>Posters were displayed in classrooms and staff rooms; soft copies were shared via WhatsApp groups and printed newsletters</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-1">👪 Webinar for Parents</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Title: <em>“Cyber Awareness for Every Home”</em></li>
            <li>Attended by 120+ parents across Mysore</li>
            <li>Key discussion points:
              <ul className="list-disc list-inside ml-5">
                <li>Recognizing risky behavior in children’s online activity</li>
                <li>Controlling screen time and promoting healthy digital habits</li>
                <li>Installing parental controls and using safe browsers</li>
              </ul>
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">🛠️ Tools & Platforms Used</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Canva, Adobe Express</strong> – for creating posters</li>
            <li><strong>Google Meet</strong> – for the webinar</li>
            <li><strong>Kahoot, Google Forms</strong> – for quiz and feedback</li>
            <li><strong>WhatsApp</strong> – for community outreach and poster circulation</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">📈 Impact</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Reached a total of <strong>470+ individuals</strong> including students and parents</li>
            <li>Received <strong>letters of appreciation</strong> from school heads and local community leaders</li>
            <li>Sparked discussion about launching a <strong>cyber awareness club</strong> in other schools</li>
            <li>Inspired several students to take interest in tech and cyber safety topics</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">🔄 Future Vision</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Developing a <strong>WhatsApp chatbot</strong> to answer basic cyber safety FAQs</li>
            <li>Planning to extend the campaign to <strong>rural schools in Hunsur and nearby areas</strong></li>
            <li>Working on a short <strong>Kannada video series</strong> titled <em>“Online Alli Yochisi Nadeyiri”</em> to promote digital safety for all</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
