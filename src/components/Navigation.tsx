"use client";

import React, { useState, useEffect } from 'react';
import { Terminal, ExternalLink, ArrowRight, X, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 z-[100] w-full transition-all duration-500 ${
          scrolled ? 'bg-background/60 backdrop-blur-md border-b border-white/5 py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} 
              className="flex items-center gap-2 group relative z-[110]"
            >
              <div className="flex items-center justify-center size-8 rounded-lg bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 transition-transform">
                <Terminal size={16} />
              </div>
              <div className="flex flex-col">
                <h2 className="text-[10px] font-black tracking-tighter text-white uppercase leading-none">
                  Jean Aimé
                </h2>
                <span className="text-[8px] font-bold text-primary tracking-widest uppercase">BARIHUJE</span>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                  className="px-3 py-1.5 text-[9px] font-bold text-slate-400 hover:text-primary transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3 relative z-[110]">
              <Button 
                asChild
                size="sm"
                className="hidden sm:flex gap-2 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg h-8 px-3 text-[10px] uppercase tracking-wider"
              >
                <a href="/Barihuje_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                  <ExternalLink size={10} />
                </a>
              </Button>
              
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden flex items-center justify-center size-8 rounded-lg bg-white/5 border border-white/10 hover:border-primary/40 transition-all"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={16} className="text-white" /> : <Menu size={16} className="text-white" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] md:hidden"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#020617]/95 backdrop-blur-2xl"
            />

            <div className="relative h-full flex flex-col justify-center px-8">
              <div className="space-y-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                      className="group flex items-center gap-3"
                    >
                      <span className="text-primary/40 font-mono text-[10px]">0{i + 1}</span>
                      <span className="text-2xl font-black text-white uppercase tracking-tighter group-hover:text-primary transition-colors">
                        {link.name}
                      </span>
                    </a>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.3 }}
                className="mt-12 pt-6 border-t border-white/5"
              >
                <div className="flex flex-wrap gap-4 mb-8">
                  <a href="https://linkedin.com/in/jean-aimé-8827b51b4" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 font-bold hover:text-primary transition-colors uppercase tracking-widest">LinkedIn</a>
                  <a href="https://github.com/Jean-Aime" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 font-bold hover:text-primary transition-colors uppercase tracking-widest">GitHub</a>
                </div>
                
                <Button 
                  asChild
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-black rounded-xl text-[10px] uppercase tracking-widest"
                >
                  <a href="/Barihuje_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;