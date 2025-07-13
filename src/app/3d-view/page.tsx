'use client';

import { useState } from 'react';
import { ThreeCanvas } from '@/components/3d-canvas';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Box, Diamond, Octagon } from 'lucide-react';

export type ShapeType = 'cube' | 'icosahedron' | 'torus';

export default function ThreeDViewPage() {
  const [shape, setShape] = useState<ShapeType>('cube');

  return (
    <div className="relative h-[calc(100vh-4rem)] w-full overflow-hidden">
      <ThreeCanvas shape={shape} />
      <div className="absolute inset-0 flex flex-col items-center justify-between p-8 pointer-events-none">
        <div className="text-center bg-background/50 backdrop-blur-sm p-8 rounded-lg">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">3D Visual Design</h1>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
            An interactive showcase of 3D objects with smooth transitions.
          </p>
        </div>
        
        <Card className="pointer-events-auto bg-background/50 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Button variant={shape === 'cube' ? 'default' : 'ghost'} size="icon" onClick={() => setShape('cube')}>
                <Box />
              </Button>
              <Button variant={shape === 'icosahedron' ? 'default' : 'ghost'} size="icon" onClick={() => setShape('icosahedron')}>
                <Diamond />
              </Button>
               <Button variant={shape === 'torus' ? 'default' : 'ghost'} size="icon" onClick={() => setShape('torus')}>
                <Octagon />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
