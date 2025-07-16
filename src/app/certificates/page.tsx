"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { certificates } from "@/lib/data";
import { Award } from "lucide-react";
import { useState } from "react";

export default function CertificatesPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">My Certificates</h1>
        <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
          A showcase of my certifications and professional development.
        </p>
      </header>
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((group, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader className="flex flex-row items-center gap-4">
              <Award className="h-10 w-10 flex-shrink-0 text-primary" />
              <div>
                <CardTitle className="font-headline text-xl leading-tight">
                  {group.issuer}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4 overflow-x-auto py-2">
                {group.certificates.map((cert, idx) => (
                  <div key={idx} className="min-w-[200px] flex-shrink-0 border border-muted-foreground rounded-md p-2">
                    {'image' in cert && cert.image && (
                      <img
                        src={cert.image}
                        alt={`${cert.name} certificate`}
                        className="mb-2 w-full rounded-md object-contain cursor-pointer"
                        style={{ maxHeight: '150px' }}
                        onClick={() => setSelectedImage(cert.image!)}
                      />
                    )}
                    <p className="font-semibold">{cert.name}</p>
                    <p className="text-sm text-muted-foreground">{cert.date}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged certificate"
            className="max-h-[90vh] max-w-[90vw] rounded-md shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
