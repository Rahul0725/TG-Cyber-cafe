import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Send, User } from 'lucide-react';

export const OwnerCard: React.FC = () => {
  return (
    <section className="w-full py-20 flex justify-center px-4">
      <motion.div
        className="relative group w-full max-w-lg p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent overflow-hidden interactive"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neonOrange/20 to-neonPurple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative bg-[#0A0A0A]/90 backdrop-blur-xl p-8 rounded-2xl flex flex-col items-center text-center gap-6 border border-white/5 shadow-2xl">
          
          {/* Avatar / Icon */}
          <div className="relative">
            <div className="absolute -inset-4 bg-neonOrange/20 blur-xl rounded-full" />
            <div className="relative w-20 h-20 bg-[#111] rounded-full border-2 border-neonOrange/50 flex items-center justify-center shadow-[0_0_20px_rgba(255,85,0,0.3)]">
              <User className="w-8 h-8 text-neonOrange" />
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-1">Porichalonay</h3>
            <h2 className="text-3xl font-display font-bold text-white">Habib</h2>
          </div>

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="flex flex-col gap-4 w-full">
            <a href="tel:7602629250" className="flex items-center justify-center gap-3 py-3 px-6 rounded-lg bg-white/5 hover:bg-neonOrange/10 border border-white/5 hover:border-neonOrange/30 transition-all group/btn">
              <Phone className="w-5 h-5 text-neonOrange group-hover/btn:scale-110 transition-transform" />
              <span className="text-lg tracking-wide font-mono">7602629250</span>
            </a>
            
            <a href="https://t.me/Mrr_True" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 py-3 px-6 rounded-lg bg-white/5 hover:bg-neonPurple/10 border border-white/5 hover:border-neonPurple/30 transition-all group/btn">
              <Send className="w-5 h-5 text-neonPurple group-hover/btn:scale-110 transition-transform" />
              <span className="text-lg tracking-wide">Telegram: @Mrr_True</span>
            </a>
          </div>

        </div>
      </motion.div>
    </section>
  );
};