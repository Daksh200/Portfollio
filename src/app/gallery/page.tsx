import Image from "next/image";
import { galleryImages } from "@/lib/data";

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Gallery</h1>
        <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
          A collection of visual works, concepts, and designs.
        </p>
      </header>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {galleryImages.map((image) => (
          <div key={image.id} className="relative aspect-square overflow-hidden rounded-lg shadow-md">
            <Image
              src={image.src}
              alt={image.alt}
              data-ai-hint={image.aiHint}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
