import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Code, Smartphone, Rocket } from 'lucide-react';

export const WebDevFeature: React.FC = () => {
  const features = [
    "Restaurant & Cafe Website",
    "Gym & Fitness Website",
    "Local Business Portfolio",
    "Domain & Hosting Setup",
    "SEO & Google Ranking",
    "WhatsApp Integration",
    "Online Booking System"
  ];

  return (
    <section className="relative w-full py-32 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-neonPurple/5 skew-y-3 origin-top-right transform scale-110 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-deepBlack to-transparent z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neonPurple/50 bg-neonPurple/10 text-neonPurple text-sm font-semibold mb-6">
              <Globe className="w-4 h-4" />
              <span>Premium Web Service</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8">
              Apnar byabsha ke <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-white">online e anun</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Don't get left behind. We build modern, high-performance websites that bring more customers to your doorstep.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-neonOrange shadow-[0_0_10px_#FF5500]" />
                  <span className="text-gray-300 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neonPurple to-neonOrange blur-3xl opacity-20 -z-10" />
            
            <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden interactive">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neonOrange to-neonPurple" />
              
              <div className="flex justify-between items-center mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-xs text-gray-600 font-mono">TG-WEB-SOLUTIONS v2.0</div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="h-32 rounded-lg bg-white/5 border border-white/5 animate-pulse" />
                <div className="h-32 rounded-lg bg-white/5 border border-white/5 animate-pulse delay-75" />
                <div className="col-span-2 h-24 rounded-lg bg-white/5 border border-white/5 animate-pulse delay-150" />
              </div>

              <div className="flex items-center justify-between text-sm text-gray-400 border-t border-white/5 pt-4">
                <div className="flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-neonOrange" />
                  <span>SEO Optimized</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-neonPurple" />
                  <span>Mobile Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-blue-400" />
                  <span>Fast Code</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};