"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Mail, Linkedin, ArrowRight, Terminal } from 'lucide-react';
import Scene3D from './Scene3D';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-start pt-8 lg:pt-12 relative overflow-hidden bg-[#020617]">
      <Scene3D />
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-xl"
            >
              <div className="size-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-[10px] font-black text-primary tracking-[0.2em] uppercase">Chief Digital Assets & Innovation Officer</span>
            </motion.div>
            
            <div className="space-y-4">
              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight text-white"
              >
                <span className="block">JEAN AIMÉ</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-blue-500 block">
                  BARIHUJE
                </span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="max-w-lg text-base sm:text-lg text-slate-400 font-light leading-relaxed border-l-2 border-primary/20 pl-6"
              >
                Web Developer and Technology Operations Professional specializing in <span className="text-white font-semibold">Full-Stack Engineering</span>, <span className="text-white font-semibold">Cybersecurity</span>, and <span className="text-white font-semibold">Digital Transformation</span>.
              </motion.p>
            </div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6"
            >
              <Button asChild size="lg" className="h-12 px-8 text-sm font-bold bg-primary hover:bg-primary/90 text-white rounded-xl shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2" size={16} />
                </a>
              </Button>
              
              <div className="flex items-center gap-3">
                {[
                  { icon: <Github size={18} />, href: "https://github.com/Jean-Aime", label: "GitHub" },
                  { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/jean-aimé-8827b51b4", label: "LinkedIn" },
                  { icon: <Mail size={18} />, href: "mailto:baraime450@gmail.com", label: "Email" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    className="group relative p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-primary hover:border-primary/40 transition-all backdrop-blur-2xl"
                    title={social.label}
                  >
                    {social.icon}
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
            <div className="relative group max-w-[400px] ml-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
                <img 
                  src="/images/profile.JPG" 
                  alt="Jean Aimé BARIHUJE" 
                  className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/40 backdrop-blur-3xl border border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Terminal size={12} className="text-primary" />
                        <p className="text-[9px] text-primary font-black uppercase tracking-[0.2em]">System Status</p>
                      </div>
                      <p className="text-white font-mono text-[10px]">Innovation Lead: Active</p>
                    </div>
                    <div className="relative">
                      <div className="size-2.5 rounded-full bg-green-500 animate-ping absolute inset-0"></div>
                      <div className="size-2.5 rounded-full bg-green-500 relative shadow-[0_0_10px_#22c55e]"></div>
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