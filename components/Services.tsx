import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CreditCard, GraduationCap, Printer, CheckCircle2 } from 'lucide-react';

interface ServiceGroupProps {
  title: string;
  icon: React.ReactNode;
  items: string[];
  color: 'orange' | 'purple';
  delay: number;
}

const ServiceGroup: React.FC<ServiceGroupProps> = ({ title, icon, items, color, delay }) => {
  const borderColor = color === 'orange' ? 'group-hover:border-neonOrange/50' : 'group-hover:border-neonPurple/50';
  const shadowColor = color === 'orange' ? 'group-hover:shadow-[0_0_30px_rgba(255,85,0,0.15)]' : 'group-hover:shadow-[0_0_30px_rgba(162,0,255,0.15)]';
  const iconColor = color === 'orange' ? 'text-neonOrange' : 'text-neonPurple';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay }}
      className={`interactive group relative h-full bg-[#0A0A0A] border border-white/5 p-8 rounded-2xl overflow-hidden transition-all duration-500 ${borderColor} ${shadowColor}`}
    >
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-${color === 'orange' ? 'neonOrange' : 'neonPurple'}/20 to-transparent blur-2xl -mr-16 -mt-16 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
      
      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 ${iconColor} border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        
        <h3 className="text-2xl font-bold mb-6 font-display">{title}</h3>
        
        <ul className="space-y-3">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-400 group-hover:text-gray-200 transition-colors">
              <CheckCircle2 className={`w-5 h-5 mt-0.5 ${iconColor} opacity-50 group-hover:opacity-100 transition-opacity`} />
              <span className="text-sm md:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export const Services: React.FC = () => {
  const services = [
    {
      title: "Sarkari o Online Sheba",
      icon: <FileText className="w-6 h-6" />,
      items: ["Online form fillup", "Aadhar / PAN / Voter ID shahajjo", "Scholarship / Job form", "Ticket booking"],
      color: 'orange' as const,
    },
    {
      title: "Document Service",
      icon: <Printer className="w-6 h-6" />,
      items: ["Print / Scan / Lamination", "Passport photo", "Typing / Resume"],
      color: 'purple' as const,
    },
    {
      title: "Student Service",
      icon: <GraduationCap className="w-6 h-6" />,
      items: ["College form", "Result download", "Email setup", "Exam Registration"],
      color: 'purple' as const,
    },
    {
      title: "Bill & Payment",
      icon: <CreditCard className="w-6 h-6" />,
      items: ["Bidyut bill (Electric)", "Mobile Recharge", "Online payment help", "Money Transfer"],
      color: 'orange' as const,
    },
  ];

  return (
    <section className="w-full py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div 
        className="mb-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonOrange to-neonPurple">Services</span> We Provide
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">High-speed, secure, and reliable digital services for all your needs.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <ServiceGroup key={i} {...s} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
};