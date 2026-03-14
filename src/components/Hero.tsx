"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Mail, Linkedin, ArrowRight, ShieldCheck, Terminal } from 'lucide-react';
import Scene3D from './Scene3D';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-[#020617]">
      <Scene3D />
      
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-10"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-xl"
            >
              <div className="size-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-[10px] font-black text-primary tracking-[0.2em] uppercase">Cybersecurity Architect & Full-Stack Engineer</span>
            </motion.div>
            
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-6xl sm:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] text-white"
              >
                JEAN AIMÉ <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-blue-500">
                  BARIHUJE
                </span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="max-w-xl text-lg text-slate-400 font-light leading-relaxed border-l-2 border-primary/20 pl-6"
              >
                Engineering high-integrity digital systems. Specializing in <span className="text-white font-semibold">Zero-Trust architectures</span> and high-performance web ecosystems.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-6"
            >
              <Button asChild size="lg" className="h-14 px-10 text-base font-bold bg-primary hover:bg-primary/90 text-white rounded-2xl shadow-2xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                <a href="#projects">
                  Explore Systems
                  <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>
              
              <div className="flex items-center gap-4">
                {[
                  { icon: <Github size={20} />, href: "https://github.com/Jean-Aime", label: "GitHub" },
                  { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/jean-aimé-8827b51b4", label: "LinkedIn" },
                  { icon: <Mail size={20} />, href: "mailto:baraime450@gmail.com", label: "Email" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    className="group relative p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-primary hover:border-primary/40 transition-all backdrop-blur-2xl"
                    title={social.label}
                  >
                    {social.icon}
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
                <img 
                  src="/images/profile.JPG" 
                  alt="Jean Aimé BARIHUJE" 
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90"></div>
                
                <div className="absolute bottom-10 left-10 right-10 p-6 rounded-3xl bg-black/40 backdrop-blur-3xl border border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Terminal size={14} className="text-primary" />
                        <p className="text-[10px] text-primary font-black uppercase tracking-[0.2em]">System Status</p>
                      </div>
                      <p className="text-white font-mono text-xs">Encrypted Connection: Active</p>
                    </div>
                    <div className="relative">
                      <div className="size-3 rounded-full bg-green-500 animate-ping absolute inset-0"></div>
                      <div className="size-3 rounded-full bg-green-500 relative shadow-[0_0_15px_#22c55e]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;