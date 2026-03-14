"use client";

import React from 'react';
import { Terminal, Github, Linkedin, Mail, Globe, Cpu } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socials = [
    { icon: <Github size={18} />, href: 'https://github.com/Jean-Aime', label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/jean-aimé-8827b51b4', label: 'LinkedIn' },
    { icon: <Mail size={18} />, href: 'mailto:baraime450@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-[#020617] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Terminal size={20} />
              </div>
              <span className="text-xl font-black tracking-tight text-white">JEAN AIMÉ BARIHUJE</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Driving digital transformation through strategic innovation and technical excellence. Building secure, scalable, and future-ready digital ecosystems.
            </p>
            <div className="flex items-center gap-4">
              {socials.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/40 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">System Info</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <Cpu size={14} className="text-primary" />
                <span>CORE_VERSION: 6.0.2</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <Globe size={14} className="text-primary" />
                <span>LOC: KIGALI, RWANDA</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-green-500 font-mono">STATUS: OPERATIONAL</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-[10px] font-mono uppercase tracking-widest">
            &copy; {currentYear} JEAN AIMÉ BARIHUJE. ALL RIGHTS RESERVED.
          </p>
          <p className="text-slate-500 text-[10px] font-mono uppercase tracking-widest">
            DESIGNED & DEVELOPED WITH PRECISION
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;