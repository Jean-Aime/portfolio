"use client";

import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 border-t border-border text-center text-muted-foreground text-sm">
        © {new Date().getFullYear()} Jean Aimé BARIHUJE. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;