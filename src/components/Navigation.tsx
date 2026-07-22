"use client";

import React, { useState, useEffect } from 'react';
import { Terminal, ExternalLink, X, Menu, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

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

  const handleResumeDownload = () => {
    toast.success("Opening Resume document...");
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 z-[100] w-full transition-all duration-500 ${
          scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} 
              className="flex items-center gap-2.5 group relative z-[110]"
            >
              <div className="flex items-center justify-center size-9 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:scale-105 transition-transform">
                <Terminal size={18} />
              </div>
              <div className="flex flex-col">
                <h2 className="text-xs font-black tracking-tight text-white uppercase leading-none">
                  Jean Aimé
                </h2>
                <span className="text-[9px] font-bold text-primary tracking-widest uppercase mt-0.5">BARIHUJE</span>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                  className="px-3.5 py-1 text-[10px] font-bold text-slate-300 hover:text-primary transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3 relative z-[110]">
              <Button 
                asChild
                onClick={handleResumeDownload}
                size="sm"
                className="hidden sm:flex gap-2 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl h-9 px-4 text-[10px] uppercase tracking-wider shadow-lg shadow-primary/20"
              >
                <a href="/Barihuje_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <span>Resume</span>
                  <ExternalLink size={12} />
                </a>
              </Button>
              
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden flex items-center justify-center size-9 rounded-xl bg-slate-900 border border-white/10 hover:border-primary/40 transition-all"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={18} className="text-white" /> : <Menu size={18} className="text-white" />}
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
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl"
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
                      <span className="text-primary/40 font-mono text-xs">0{i + 1}</span>
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
                className="mt-12 pt-6 border-t border-white/10"
              >
                <div className="flex flex-wrap gap-4 mb-8">
                  <a href="https://linkedin.com/in/jean-aimé-8827b51b4" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 font-bold hover:text-primary transition-colors uppercase tracking-widest">LinkedIn</a>
                  <a href="https://github.com/Jean-Aime" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 font-bold hover:text-primary transition-colors uppercase tracking-widest">GitHub</a>
                  <a href="mailto:baraime450@gmail.com" className="text-xs text-slate-400 font-bold hover:text-primary transition-colors uppercase tracking-widest">Email</a>
                </div>
                
                <Button 
                  asChild
                  onClick={handleResumeDownload}
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-black rounded-xl text-xs uppercase tracking-widest gap-2"
                >
                  <a href="/Barihuje_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download size={14} /> Download Resume PDF
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