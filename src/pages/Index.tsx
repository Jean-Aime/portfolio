"use client";

import React from 'react';
import Navigation from '../components/Navigation';
import { Button } from '@/components/ui/button';
import { Github, Mail, Linkedin, ArrowRight, Shield, Terminal, Database, Cloud, Brain, Wrench, CheckCircle2, Star, Code, Eye } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-50"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] opacity-50"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 lg:space-y-8">
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
            </div>
            
            <div className="lg:col-span-5 relative mt-12 lg:mt-0">
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
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm">
                <span className="h-0.5 w-8 bg-primary"></span>
                About Me
              </div>
              <h2 className="text-4xl font-black leading-tight sm:text-5xl">
                Bridging <span className="text-primary">Systems</span> and <span className="text-primary">Software</span>.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi, I'm Jean Aimé BARIHUJE. I am an Industrial Information Technology graduate specializing in network security, cybersecurity, and web development.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                <div><p className="text-3xl font-bold">5+</p><p className="text-sm text-muted-foreground">Years Exp.</p></div>
                <div><p className="text-3xl font-bold">20+</p><p className="text-sm text-muted-foreground">Projects</p></div>
                <div><p className="text-3xl font-bold">10+</p><p className="text-sm text-muted-foreground">Certs</p></div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="rounded-xl bg-card p-6 border border-border shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Shield className="text-primary" size={32} />
                  <div>
                    <h3 className="font-bold">Network Security</h3>
                    <p className="text-sm text-muted-foreground">Firewalls & IDS/IPS</p>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-accent rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[90%]"></div>
                </div>
              </div>
              <div className="rounded-xl bg-card p-6 border border-border shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Terminal className="text-primary" size={32} />
                  <div>
                    <h3 className="font-bold">Web Development</h3>
                    <p className="text-sm text-muted-foreground">React, Node.js, SQL</p>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-accent rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[85%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Professional Journey</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
          <div className="space-y-12">
            {[
              {
                title: "IT Support Officer",
                company: "Iwacu Recovery Centre",
                date: "2019 - 2024",
                desc: "Maintained and secured network infrastructure with firewalls and IDS/IPS.",
                icon: <Shield size={20} />
              },
              {
                title: "Web Developer",
                company: "Primates Africa",
                date: "2023 - 2024",
                desc: "Designed and maintained secure web applications ensuring data privacy.",
                icon: <Code size={20} />
              }
            ].map((job, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="size-10 rounded-full border-2 border-primary flex items-center justify-center text-primary bg-background">
                    {job.icon}
                  </div>
                  <div className="w-px h-full bg-border mt-2"></div>
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <p className="text-primary font-medium">{job.company} • {job.date}</p>
                  <p className="mt-2 text-muted-foreground">{job.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Security", icon: <Shield />, skills: ["Firewalls", "Penetration Testing", "Encryption"] },
              { title: "Development", icon: <Code />, skills: ["React", "Node.js", "PostgreSQL"] },
              { title: "Systems", icon: <Database />, skills: ["Linux Admin", "Cloud Security", "Automation"] }
            ].map((cat, i) => (
              <div key={i} className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
                <div className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {cat.skills.map((s, k) => (
                    <span key={k} className="px-3 py-1 rounded-full bg-accent text-xs font-medium">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Something Together</h2>
          <p className="text-muted-foreground mb-12">I'm currently open to new opportunities and remote work.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <Button asChild size="lg" variant="outline" className="h-24 flex-col gap-2">
              <a href="mailto:baraime450@gmail.com">
                <Mail size={24} />
                <span>baraime450@gmail.com</span>
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-24 flex-col gap-2">
              <a href="tel:+250788712679">
                <Linkedin size={24} />
                <span>+250 788 712 679</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border text-center text-muted-foreground text-sm">
        © {new Date().getFullYear()} Jean Aimé BARIHUJE. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;