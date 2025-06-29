'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import SkillsSection from '@/components/sections/skills-section';
import ProjectsSection from '@/components/sections/projects-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ContactSection from '@/components/sections/contact-section';
import Navigation from '@/components/navigation';
import CustomCursor from '@/components/custom-cursor';
import { Lenis } from '@/lib/lenis';

// Dynamically import 3D components to avoid SSR issues
const ThreeBackground = dynamic(() => import('@/components/three-background'), {
  ssr: false,
});

export default function Home() {
  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = new Lenis();
    
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <ThreeBackground />
      <Navigation />
      
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </main>
  );
}