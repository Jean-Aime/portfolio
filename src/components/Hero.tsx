"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Mail, Linkedin, ArrowRight } from 'lucide-react';
import Scene3D from './Scene3D';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-[#020617]">
      {/* 3D Background */}
      <Scene3D />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6 lg:space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-xl shadow-[0_0_20px_rgba(19,182,236,0.2)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-bold text-primary tracking-wide uppercase">Available for Remote Work</span>
            </motion.div>
            
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white">
                JEAN AIMÉ <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-purple-500 animate-gradient-x">
                  BARIHUJE
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-400 font-mono flex items-center gap-3">
                <span className="text-primary">/</span> Full-Stack Developer <span className="text-primary">/</span>
              </h2>
              <p className="max-w-xl text-lg text-slate-300 leading-relaxed backdrop-blur-sm p-4 rounded-lg border border-white/5 bg-white/5">
                Architecting secure digital experiences through <strong>Network Security</strong> and <strong>Modern Web Development</strong>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full pt-4">
              <Button asChild size="lg" className="group h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_rgba(19,182,236,0.4)] transition-all hover:scale-105">
                <a href="#projects">
                  Explore Work
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
                </a>
              </Button>
              
              <div className="flex items-center gap-4">
                {[
                  { icon: <Github size={22} />, href: "https://github.com/Jean-Aime" },
                  { icon: <Mail size={22} />, href: "mailto:baraime450@gmail.com" },
                  { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/jean-aimé-8827b51b4" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-primary hover:border-primary/50 transition-colors backdrop-blur-md"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, rotateY: 45, x: 50 }}
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-5 relative hidden lg:block perspective-1000"
          >
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] group">
              <img 
                src="/images/profile.JPG" 
                alt="Profile" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
              
              {/* Floating 3D Card Overlay */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl"
              >
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-primary-foreground/80">System Status: Optimal</span>
                  </div>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "95%" }}
                      transition={{ duration: 2, delay: 1 }}
                      className="h-full bg-primary"
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400 uppercase tracking-widest">
                    <span>Security</span>
                    <span>95%</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;