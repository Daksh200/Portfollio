import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function InfosysInternshipDetailPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-8 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Infosys Springboard Internship</h1>
        <p className="text-muted-foreground">Infosys | 2024 - 2025</p>
      </header>
      <img
        src="/certificate/Infosys Intenship/infosys_intenship_certificate.png"
        alt="Infosys Internship Certificate"
        className="mx-auto mb-8 max-w-full h-auto rounded-md shadow-md"
      />
      <h2 className="text-2xl font-semibold mb-4">Infosys Springboard Virtual Internship Experience</h2>
      <p>
        During my Infosys Springboard Virtual Internship, I had the opportunity to work on a real-world industry project under the guidance of experienced mentors from Infosys. This internship program was designed to bridge the gap between academic learning and industry requirements, providing hands-on experience with modern technologies and best practices.
      </p>
      <p>
        The internship began with an orientation phase where I was introduced to the company's expectations, work culture, and the technical stack that would be used throughout the program. Infosys Springboard provided comprehensive training modules covering various aspects of software development, including requirement analysis, system design, coding standards, testing, and deployment.
      </p>
      <p>
        One of the major highlights of this internship was the <strong>Fraud Detection Rules Engine</strong> project. This project challenged me to build a modern web application that allows users to design, test, and monitor fraud detection rules. I developed an intuitive interface for rule creation, versioning, and performance exploration, which became my capstone project.
      </p>
      <p>
        Key features I implemented in the Fraud Detection Rules Engine include:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Create, edit, drag and drop, clone, and publish rules</li>
        <li>Toggle active/inactive status for rules</li>
        <li>Versioning with detailed notes</li>
        <li>Performance dashboards and triggered claims views</li>
        <li>Audit log with CSV export functionality</li>
      </ul>
      <p>
        Throughout the internship, I worked with a technology stack comprising Vue, React, TypeScript, TailwindCSS, and shadcn UI components. This experience helped me gain proficiency in building complex web applications with modern frameworks and libraries.
      </p>
      <p>
        The challenge of building a user-friendly interface for rule management required careful consideration of user experience principles. I had to ensure that the application was intuitive, responsive, and accessible across different devices. Through iterative development and feedback from mentors, I was able to refine the application and deliver a polished product.
      </p>
      <p>
        Beyond the technical skills, this internship helped me develop essential soft skills such as time management, communication, and teamwork. Regular stand-up meetings and code reviews taught me the importance of clear communication and collaborative problem-solving.
      </p>
      <p>
        The Infosys Springboard Virtual Internship 6.0 program was a transformative experience that prepared me for real-world software development roles. It solidified my understanding of end-to-end project development and gave me confidence in my ability to deliver professional-grade applications.
      </p>
    </div>
  );
}
