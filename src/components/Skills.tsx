"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, Database, Cpu, Globe, Lock } from 'lucide-react';

const Skills = () => {
  const categories = [
    { 
      title: "Security Architecture", 
      icon: <Lock size={24} />, 
      skills: ["Firewalls", "Penetration Testing", "Encryption", "Zero-Trust", "IDS/IPS"],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    { 
      title: "Full-Stack Engineering", 
      icon: <Code size={24} />, 
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "REST APIs"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    { 
      title: "Systems & Cloud", 
      icon: <Server size={24} />, 
      skills: ["Linux Admin", "Cloud Security", "Automation", "Docker", "CI/CD"],
      color: "from-emerald-500/20 to-teal-500/20"
    }
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Technical Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">A comprehensive overview of my technical stack and specialized domains.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-500 group overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="size-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-6">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s, k) => (
                    <span key={k} className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-400 group-hover:text-white group-hover:border-primary/30 transition-colors">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper component for Server icon since it wasn't imported
const Server = ({ size }: { size: number }) => <Cpu size={size} />;

export default Skills;