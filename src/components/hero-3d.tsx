
'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

const Hero3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 2.5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Geometry
    const geometry = new THREE.TorusKnotGeometry(0.8, 0.25, 128, 16);

    // Material
    const material = new THREE.MeshStandardMaterial({
      color: 0x60a5fa, // A blue color
      emissive: 0x1d4ed8, // A darker blue emissive color
      emissiveIntensity: 0.5,
      roughness: 0.3,
      metalness: 0.7,
    });

    // Mesh
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 10);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    // Mouse tracking
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (event: MouseEvent) => {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;
        mouse.x = (clientX / innerWidth) * 2 - 1;
        mouse.y = -(clientY / innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Animate rotation
      torusKnot.rotation.x += 0.001;
      torusKnot.rotation.y += 0.002;
      
      // Animate based on mouse position for a subtle parallax effect
      gsap.to(torusKnot.rotation, {
        y: torusKnot.rotation.y + mouse.x * 0.1,
        x: torusKnot.rotation.x - mouse.y * 0.1,
        duration: 2,
        ease: "power2.out",
      });
      gsap.to(camera.position, {
        x: mouse.x * 0.5,
        y: mouse.y * 0.5,
        duration: 1,
        ease: "power1.out",
      });

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (renderer.domElement.parentNode === currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 h-full w-full" />;
};

export default Hero3D;
