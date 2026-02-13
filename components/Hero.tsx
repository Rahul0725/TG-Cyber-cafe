import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-neonPurple/10 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-neonOrange/10 blur-[100px] rounded-full mix-blend-screen animate-pulse-slow delay-1000" />

      {/* Trust Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-neonOrange/30 bg-black/40 backdrop-blur-md shadow-[0_0_15px_rgba(255,85,0,0.15)]"
      >
        <ShieldCheck className="w-4 h-4 text-neonOrange" />
        <span className="text-xs uppercase tracking-widest text-gray-300 font-semibold">Trusted Service Provider</span>
      </motion.div>

      {/* Main Title Sequence */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.h1 
          className="text-6xl md:text-9xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 mb-2 drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          TG CYBER
        </motion.h1>
        
        <motion.h1 
          className="text-6xl md:text-9xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-600 mb-6 drop-shadow-xl"
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          CAFE
        </motion.h1>

        <motion.div
          className="h-1 w-24 bg-gradient-to-r from-neonOrange to-neonPurple rounded-full mb-8"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 96, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />

        <motion.p 
          className="text-lg md:text-2xl text-gray-400 font-light tracking-wide max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="text-neonOrange">“Onumodito Digital Sheba Kendra”</span>
          <br />
          <span className="text-sm md:text-lg opacity-80 mt-2 block font-sans">Apnar gramer biswasto online service provider</span>
        </motion.p>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1 h-2 bg-neonPurple rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

    </section>
  );
};