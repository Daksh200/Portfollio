import { galleryImages } from "@/lib/data.tsx";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Gallery</h1>
        <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
          A collection of visual works, concepts, and designs.
        </p>
      </header>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {galleryImages.map((image) => (
          <Card key={image.id} className="overflow-hidden">
            <CardContent className="p-0">
              <Image
                src={image.src}
                alt={image.alt}
                data-ai-hint={image.aiHint}
                width={600}
                height={600}
                className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
