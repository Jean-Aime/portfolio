"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Terminal as TerminalIcon, Cpu, Lock, Zap } from 'lucide-react';
import Terminal from './Terminal';

const About = () => {
  const stats = [
    { label: "Experience", value: "6+ Years", icon: <TerminalIcon size={20} /> },
    { label: "Projects", value: "25+", icon: <Cpu size={20} /> },
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
                Driving <span className="text-primary">Digital Transformation</span> through Strategic Innovation.
              </h3>
            </div>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              I am a Web Developer and Technology Operations Professional with extensive experience in designing modern web applications and managing complex IT infrastructures. My career spans from deep technical roles in cybersecurity to executive leadership in digital innovation, allowing me to bridge the gap between code and corporate strategy.
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

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-50"></div>
            <Terminal />
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                <Lock className="text-primary mb-4" size={32} />
                <h4 className="text-lg font-bold text-white mb-2">Tech Ops</h4>
                <p className="text-xs text-slate-400">Managing digital assets and securing multi-company ecosystems.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                <Zap className="text-primary mb-4" size={32} />
                <h4 className="text-lg font-bold text-white mb-2">Innovation</h4>
                <p className="text-xs text-slate-400">Implementing organizational structures for scalability and growth.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;