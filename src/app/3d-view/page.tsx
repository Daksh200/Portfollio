import { ThreeCanvas } from "@/components/3d-canvas";

export default function ThreeDViewPage() {
  return (
    <div className="relative h-[calc(100vh-4rem)] w-full overflow-hidden">
      <ThreeCanvas />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center bg-background/50 backdrop-blur-sm p-8 rounded-lg">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Interactive 3D View</h1>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            An example of an interactive 3D model using Three.js.
          </p>
        </div>
      </div>
    </div>
  );
}
