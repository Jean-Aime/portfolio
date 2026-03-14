"use client";

import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import ScrollToTop from '../components/ScrollToTop';
import CustomCursor from '../components/CustomCursor';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white">
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-12 border-t border-border text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-muted-foreground text-sm font-mono">
            &copy; {new Date().getFullYear()} JEAN AIMÉ BARIHUJE // SYSTEM_STATUS: OPERATIONAL
          </p>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
};

export default Index;