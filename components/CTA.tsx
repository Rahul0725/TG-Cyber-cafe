import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="relative w-full py-40 px-4 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-gradient-to-r from-neonPurple/10 to-neonOrange/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl"
      >
        <h2 className="text-4xl md:text-7xl font-display font-bold mb-6 tracking-tight">
          Aajkei jogajog korun
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 mb-12 font-light">
          Apnar gramer <span className="text-white font-medium">digital solution center</span>
        </p>

        <motion.a
          href="tel:7602629250"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center gap-4 px-10 py-5 bg-transparent rounded-full overflow-hidden interactive"
        >
          {/* Button Background & Glow */}
          <div className="absolute inset-0 border border-white/20 rounded-full group-hover:border-neonOrange/50 transition-colors duration-500" />
          <div className="absolute inset-0 bg-white/5 group-hover:bg-neonOrange/10 transition-colors duration-500 backdrop-blur-md" />
          <div className="absolute -inset-1 bg-gradient-to-r from-neonOrange to-neonPurple opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500" />

          <PhoneCall className="w-6 h-6 text-neonOrange relative z-10" />
          <span className="text-xl md:text-3xl font-bold font-mono tracking-widest text-white relative z-10">
            7602629250
          </span>
        </motion.a>

        <div className="mt-16 text-xs text-gray-600 uppercase tracking-[0.2em]">
          TG Cyber Cafe &bull; Established 2024 &bull; West Bengal
        </div>
      </motion.div>
    </section>
  );
};