"use client";

import React, { useState, useEffect } from 'react';
import { Terminal, ExternalLink, ArrowRight } from 'lucide-react';
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
          scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} 
              className="flex items-center gap-3 group relative z-[110]"
            >
              <div className="flex items-center justify-center size-9 rounded-lg bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 transition-transform">
                <Terminal size={18} />
              </div>
              <div className="flex flex-col">
                <h2 className="text-xs font-black tracking-tighter text-white uppercase leading-none">
                  Jean Aimé
                </h2>
                <span className="text-[9px] font-bold text-primary tracking-widest uppercase">BARIHUJE</span>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                  className="px-4 py-2 text-[10px] font-bold text-slate-400 hover:text-primary transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4 relative z-[110]">
              <Button 
                asChild
                size="sm"
                className="hidden sm:flex gap-2 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-lg shadow-primary/20 h-9 px-4 text-xs"
              >
                <a href="/Barihuje_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                  <ExternalLink size={12} />
                </a>
              </Button>
              
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden flex flex-col items-center justify-center gap-1 size-9 rounded-lg bg-white/5 border border-white/10 hover:border-primary/40 transition-all"
                aria-label="Toggle Menu"
              >
                <motion.span 
                  animate={mobileMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                  className="w-4 h-0.5 bg-white rounded-full"
                />
                <motion.span 
                  animate={mobileMenuOpen ? { opacity: 0, x: -5 } : { opacity: 1, x: 0 }}
                  className="w-4 h-0.5 bg-white rounded-full"
                />
                <motion.span 
                  animate={mobileMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                  className="w-4 h-0.5 bg-white rounded-full"
                />
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
              className="absolute inset-0 bg-[#020617]/98 backdrop-blur-3xl"
            />

            <div className="relative h-full flex flex-col justify-center px-10">
              <div className="space-y-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                      className="group flex items-center gap-4"
                    >
                      <span className="text-primary/40 font-mono text-xs">0{i + 1}</span>
                      <span className="text-3xl font-black text-white uppercase tracking-tighter group-hover:text-primary transition-colors">
                        {link.name}
                      </span>
                      <ArrowRight className="text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" size={24} />
                    </a>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
                className="mt-16 pt-8 border-t border-white/5"
              >
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Connect</p>
                <div className="flex flex-wrap gap-5 mb-10">
                  <a href="https://linkedin.com/in/jean-aimé-8827b51b4" target="_blank" rel="noopener noreferrer" className="text-xs text-white font-bold hover:text-primary transition-colors uppercase tracking-widest">LinkedIn</a>
                  <a href="https://github.com/Jean-Aime" target="_blank" rel="noopener noreferrer" className="text-xs text-white font-bold hover:text-primary transition-colors uppercase tracking-widest">GitHub</a>
                  <a href="mailto:baraime450@gmail.com" className="text-xs text-white font-bold hover:text-primary transition-colors uppercase tracking-widest">Email</a>
                </div>
                
                <Button 
                  asChild
                  size="lg"
                  className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-black rounded-xl text-sm uppercase tracking-widest shadow-xl shadow-primary/10"
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