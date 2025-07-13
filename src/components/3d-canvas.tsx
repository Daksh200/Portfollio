'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

type ShapeType = 'cube' | 'icosahedron' | 'torus';

interface ThreeCanvasProps {
  shape: ShapeType;
}

export function ThreeCanvas({ shape }: ThreeCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);

  // Define geometries
  const geometries = {
    cube: new THREE.BoxGeometry(1.8, 1.8, 1.8),
    icosahedron: new THREE.IcosahedronGeometry(1.5, 0),
    torus: new THREE.TorusGeometry(1.2, 0.5, 16, 100),
  };

  useEffect(() => {
    if (!mountRef.current || rendererRef.current) return;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('hsl(var(--background))');
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Material
    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color('hsl(var(--primary))'),
      metalness: 0.3,
      roughness: 0.6,
    });
    
    // Mesh
    const mesh = new THREE.Mesh(geometries.cube, material);
    meshRef.current = mesh;
    scene.add(mesh);
    
    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    
    const pointLight2 = new THREE.PointLight(new THREE.Color('hsl(var(--accent))'), 2);
    pointLight2.position.set(-5, -5, -5);
    scene.add(pointLight2);

    // Animation
    let animationFrameId: number;
    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.005;
        meshRef.current.rotation.y += 0.005;
      }
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Handle Resize
    const handleResize = () => {
      if (!mountRef.current || !rendererRef.current || !cameraRef.current) return;
      const { clientWidth, clientHeight } = mountRef.current;
      cameraRef.current.aspect = clientWidth / clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(clientWidth, clientHeight);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      Object.values(geometries).forEach(g => g.dispose());
      material.dispose();
      renderer.dispose();
      rendererRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!meshRef.current) return;
    
    // Animate scale down
    gsap.to(meshRef.current.scale, {
      x: 0,
      y: 0,
      z: 0,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => {
        // Change geometry
        meshRef.current!.geometry.dispose();
        meshRef.current!.geometry = geometries[shape];
        
        // Animate scale up
        gsap.to(meshRef.current!.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    });

  }, [shape]);

  return <div ref={mountRef} className="absolute inset-0" />;
}
