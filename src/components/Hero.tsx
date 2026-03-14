"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Mail, Linkedin, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] opacity-50"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6 lg:space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-border shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-muted-foreground">Available for Remote Work</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1]">
                Jean Aimé <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">BARIHUJE</span>
              </h1>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-normal text-muted-foreground font-mono">
                <span className="text-primary"><</span>Full-Stack Developer /<span className="text-primary">></span>
              </h2>
              <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                Specializing in <strong>Network Security</strong> & <strong>Web Development</strong>. I build secure, scalable web applications and maintain robust IT infrastructure.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full pt-4">
              <Button asChild size="lg" className="group gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25">
                <a href="#projects">
                  View Projects
                  <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
                </a>
              </Button>
              <div className="hidden sm:block w-px h-12 bg-border"></div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" asChild className="rounded-lg">
                  <a href="https://github.com/Jean-Aime" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                </Button>
                <Button variant="outline" size="icon" asChild className="rounded-lg">
                  <a href="mailto:baraime450@gmail.com"><Mail size={20} /></a>
                </Button>
                <Button variant="outline" size="icon" asChild className="rounded-lg">
                  <a href="https://www.linkedin.com/in/jean-aimé-8827b51b4" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                </Button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 relative mt-12 lg:mt-0"
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border shadow-2xl bg-card/50 backdrop-blur-sm group">
                <img src="/images/profile.JPG" alt="Profile" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-background/80 backdrop-blur-md border border-border shadow-lg">
                  <div className="space-y-2 font-mono text-xs">
                    <div className="flex"><span className="text-pink-400 mr-2">const</span><span className="text-blue-300 mr-2">dev</span><span className="text-white">=</span><span className="text-yellow-300 ml-2">{`{`}</span></div>
                    <div className="pl-4"><span className="text-blue-300">name:</span> <span className="text-green-400">"Jean Aimé"</span>,</div>
                    <div className="pl-4"><span className="text-blue-300">role:</span> <span className="text-green-400">"Full-Stack"</span></div>
                    <div className="text-yellow-300">{`}`}</div>
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