import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { Background } from './components/Background';
import { Hero } from './components/Hero';
import { OwnerCard } from './components/OwnerCard';
import { Services } from './components/Services';
import { WebDevFeature } from './components/WebDevFeature';
import { CTA } from './components/CTA';
import { CustomCursor } from './components/CustomCursor';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

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
    <div className="relative w-full min-h-screen bg-deepBlack text-white overflow-hidden selection:bg-neonOrange selection:text-black">
      <CustomCursor />
      
      {/* 3D Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Background />
      </div>

      {/* Main Content Layer */}
      <main className="relative z-10 flex flex-col items-center w-full">
        <AnimatePresence>
          <Hero />
          <OwnerCard />
          <Services />
          <WebDevFeature />
          <CTA />
        </AnimatePresence>
      </main>
      
      {/* Cinematic Vignette Overlay */}
      <div className="fixed inset-0 z-[5] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
    </div>
  );
};

export default App;