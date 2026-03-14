"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Terminal, Cpu, Globe, Zap, Lock } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "Experience", value: "5+ Years", icon: <Terminal size={20} /> },
    { label: "Projects", value: "20+", icon: <Cpu size={20} /> },
    { label: "Security", value: "Expert", icon: <Shield size={20} /> },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase">The Professional</h2>
              <h3 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                Bridging the gap between <span className="text-primary">Security</span> and <span className="text-primary">Innovation</span>.
              </h3>
            </div>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              I am an Industrial Information Technology graduate with a deep passion for securing digital landscapes. My expertise lies at the intersection of robust network security and modern full-stack development. I don't just build applications; I engineer high-integrity systems designed to withstand the complexities of the modern web.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-primary/30 transition-colors group">
                  <div className="text-primary mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 mt-12"
            >
              <Lock className="text-primary mb-4" size={40} />
              <h4 className="text-xl font-bold text-white mb-2">Cybersecurity</h4>
              <p className="text-sm text-slate-400">Hardening infrastructures and implementing zero-trust architectures for mission-critical data.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10"
            >
              <Zap className="text-primary mb-4" size={40} />
              <h4 className="text-xl font-bold text-white mb-2">Full-Stack</h4>
              <p className="text-sm text-slate-400">Creating scalable, secure, and user-centric web applications using modern tech stacks.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;