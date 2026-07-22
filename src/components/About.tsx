"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Terminal as TerminalIcon, Cpu, Lock, Zap } from 'lucide-react';
import Terminal from './Terminal';

const About = () => {
  const stats = [
    { label: "Experience", value: "6+ Years", icon: <TerminalIcon size={20} /> },
    { label: "Deployments", value: "25+", icon: <Cpu size={20} /> },
    { label: "Security & SysOps", value: "Expert", icon: <Shield size={20} /> },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 relative overflow-hidden bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <span className="text-xs font-bold text-primary tracking-[0.3em] uppercase">Executive Profile</span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Bridging <span className="text-primary">Technical Engineering</span> with Strategic Leadership.
              </h3>
            </div>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Web Developer and Technology Operations Professional with comprehensive experience in designing full-stack enterprise applications, administering IT network infrastructure, and steering high-impact digital transformation initiatives.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Adept at unifying software engineering with operational governance, multi-company digital asset management, and risk mitigations to build resilient, scalable ecosystems.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-sm hover:border-primary/40 transition-all group">
                  <div className="text-primary mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-60"></div>
            <Terminal />
            
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-primary/40 transition-all">
                <Lock className="text-primary mb-2" size={24} />
                <h4 className="text-sm font-bold text-white mb-1">Tech Operations</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Overseeing corporate systems, cybersecurity, and asset governance.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-primary/40 transition-all">
                <Zap className="text-primary mb-2" size={24} />
                <h4 className="text-sm font-bold text-white mb-1">Digital Innovation</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Designing organizational structures built for scale, agility, and growth.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;