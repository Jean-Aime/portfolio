"use client";

import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, ExternalLink, ChevronRight } from 'lucide-react';
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
    <header 
      className={`fixed top-0 z-[100] w-full transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} 
            className="flex items-center gap-3 group"
          >
            <div className="flex items-center justify-center size-10 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 transition-transform">
              <Terminal size={20} />
            </div>
            <div className="flex flex-col">
              <h2 className="text-sm font-black tracking-tighter text-white uppercase leading-none">
                Jean Aimé
              </h2>
              <span className="text-[10px] font-bold text-primary tracking-widest uppercase">BARIHUJE</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-primary transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button 
              asChild
              className="hidden sm:flex gap-2 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20"
            >
              <a href="/Barihuje_Resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
                <ExternalLink size={14} />
              </a>
            </Button>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden size-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:text-primary transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-background/95 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-4 py-8 space-y-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                  className="flex items-center justify-between px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-lg font-bold text-white hover:bg-primary/10 hover:text-primary transition-all group"
                >
                  <span className="uppercase tracking-widest text-sm">{link.name}</span>
                  <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-6"
              >
                <Button 
                  asChild
                  className="w-full h-14 gap-2 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl shadow-lg shadow-primary/20"
                >
                  <a href="/Barihuje_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    Download Resume
                    <ExternalLink size={18} />
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;