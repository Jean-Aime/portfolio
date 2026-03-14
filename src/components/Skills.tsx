"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lock, Briefcase, Cpu, Shield, Zap, Globe, Database } from 'lucide-react';

const Skills = () => {
  const bentoSkills = [
    { 
      title: "Full-Stack Development", 
      icon: <Code size={24} />, 
      desc: "Building scalable web architectures with React, Node, and modern frameworks.",
      skills: ["React.js", "TypeScript", "Tailwind", "Node.js"],
      className: "md:col-span-2 md:row-span-1 bg-blue-500/5 border-blue-500/20"
    },
    { 
      title: "Cybersecurity", 
      icon: <Shield size={24} />, 
      desc: "Securing enterprise assets and infrastructure.",
      skills: ["Network Security", "Risk Management"],
      className: "md:col-span-1 md:row-span-1 bg-purple-500/5 border-purple-500/20"
    },
    { 
      title: "Innovation Strategy", 
      icon: <Zap size={24} />, 
      desc: "Leading digital transformation and organizational growth.",
      skills: ["Ecosystem Strategy", "Innovation Management"],
      className: "md:col-span-1 md:row-span-2 bg-emerald-500/5 border-emerald-500/20"
    },
    { 
      title: "Enterprise Architecture", 
      icon: <Briefcase size={24} />, 
      desc: "Designing robust corporate governance and operational structures.",
      skills: ["Corporate Governance", "Startup Structuring"],
      className: "md:col-span-2 md:row-span-1 bg-orange-500/5 border-orange-500/20"
    },
    { 
      title: "Infrastructure", 
      icon: <Database size={24} />, 
      desc: "Managing complex IT systems and cloud environments.",
      skills: ["SysAdmin", "Cloud Systems", "Automation"],
      className: "md:col-span-1 md:row-span-1 bg-cyan-500/5 border-cyan-500/20"
    }
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-6"
          >
            <Cpu size={12} />
            <span>Capabilities</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">Core <span className="text-primary">Competencies</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Strategic leadership and technical mastery integrated into a single ecosystem.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {bentoSkills.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-[2.5rem] border backdrop-blur-sm overflow-hidden group flex flex-col justify-between ${item.className}`}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="size-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.desc}</p>
              </div>
              
              <div className="relative z-10 flex flex-wrap gap-2">
                {item.skills.map((s, k) => (
                  <span key={k} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-slate-500">
                    {s}
                  </span>
                ))}
              </div>

              {/* Decorative background element */}
              <div className="absolute -bottom-10 -right-10 size-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;