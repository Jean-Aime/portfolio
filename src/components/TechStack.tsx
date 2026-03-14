"use client";

import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const techs = [
    "React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", 
    "Cybersecurity", "Cloud Architecture", "Enterprise Strategy", 
    "AI Ethics", "Machine Learning", "System Admin", "Network Security",
    "Digital Transformation", "Innovation Management", "PHP", "Express.js"
  ];

  // Duplicate the list to create a seamless loop
  const duplicatedTechs = [...techs, ...techs];

  return (
    <div className="w-full py-10 bg-white/5 border-y border-white/5 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div 
          className="flex gap-12 items-center"
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {duplicatedTechs.map((tech, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="size-2 rounded-full bg-primary"></div>
              <span className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 hover:text-primary transition-colors cursor-default">
                {tech}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;