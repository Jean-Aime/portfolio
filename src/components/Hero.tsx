"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Mail, Linkedin, ArrowRight, ShieldCheck } from 'lucide-react';
import Scene3D from './Scene3D';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-[#020617]">
      <Scene3D />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 backdrop-blur-md"
            >
              <ShieldCheck className="text-primary" size={18} />
              <span className="text-xs font-bold text-primary tracking-widest uppercase">Cybersecurity & Web Specialist</span>
            </motion.div>
            
            <div className="space-y-2">
              <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black tracking-tighter leading-none text-white">
                JEAN AIMÉ <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-blue-600">
                  BARIHUJE
                </span>
              </h1>
              <p className="max-w-lg text-xl text-slate-400 font-light leading-relaxed">
                Building resilient digital infrastructures and high-performance web applications with a focus on <span className="text-white font-medium">security by design</span>.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <Button asChild size="lg" className="h-14 px-10 text-lg bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg shadow-primary/20 transition-all hover:scale-105">
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
              
              <div className="flex items-center gap-3">
                {[
                  { icon: <Github size={22} />, href: "https://github.com/Jean-Aime" },
                  { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/jean-aimé-8827b51b4" },
                  { icon: <Mail size={22} />, href: "mailto:baraime450@gmail.com" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="p-4 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-primary hover:border-primary/40 transition-all backdrop-blur-xl"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-blue-600 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="/images/profile.JPG" 
                  alt="Jean Aimé BARIHUJE" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] text-primary font-bold uppercase tracking-widest mb-1">Current Status</p>
                      <p className="text-white font-mono text-sm">System: Online</p>
                    </div>
                    <div className="size-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></div>
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