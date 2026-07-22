"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Globe, Plane, Layout, Sparkles, Github, ShieldCheck, ArrowUpRight, CheckCircle, Code2, Layers, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useGithubStats } from '@/hooks/useGithubStats';

interface Project {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  description: string;
  liveUrl: string;
  image: string;
  icon: React.ReactNode;
  highlights: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
}

const Projects = () => {
  const githubStats = useGithubStats("Jean-Aime");
  const [activeProject, setActiveProject] = useState<string>("jascome");

  const projects: Project[] = [
    {
      id: "jascome",
      name: "JAS.COME",
      subtitle: "Technology, Systems & Operations Transformation Firm",
      category: "Consulting & Innovation",
      description: "JAS.COME is a consulting and innovation firm focused on technology, systems, operations, and transformation. Operating from Kigali, Rwanda, JAS.COME helps organizations in financial services, healthcare, energy, public sector, and telecoms design, improve, and integrate high-performance digital systems.",
      liveUrl: "https://www.jascome.com/",
      // Professional technology consulting and system architecture advisory image
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop",
      icon: <Layout className="text-cyan-400" size={24} />,
      highlights: [
        "Computer Consultancy (J6202) & Management System Advisory",
        "Digital transformation roadmap & risk evaluation for enterprise",
        "Strategy + execution support partner across East Africa"
      ],
      techStack: ["Systems Architecture", "IT Governance", "Management Consulting", "Risk Evaluation", "Digital Advisory"],
      metrics: [
        { label: "Location", value: "Kigali, RW" },
        { label: "Domain", value: "Consulting" },
        { label: "Status", value: "Production" }
      ]
    },
    {
      id: "zetalent",
      name: "ZETALENT MEDIA",
      subtitle: "Women's Sports & Athletic Journalism Platform",
      category: "Sports Media",
      description: "ZETALENT MEDIA is dedicated to giving women's sports in Rwanda the platform, visibility, and professional coverage they deserve — from schoolgrounds to national stadiums. Through world-class journalism, data-driven coverage, and a commitment to excellence, Zetalent is building the leading digital home for women's sports in East Africa.",
      liveUrl: "https://zetalent-media.com/",
      // Dynamic women's athletic sports and stadium journalism image
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop",
      icon: <Trophy className="text-purple-400" size={24} />,
      highlights: [
        "Dedicated visibility & professional journalism for women's sports in Rwanda",
        "Data-driven match statistics and athlete story showcases",
        "Building the premier digital home for women's sports in East Africa"
      ],
      techStack: ["Digital Publishing", "Data Journalism", "React", "Media Distribution", "CDN Architecture"],
      metrics: [
        { label: "Focus", value: "Women's Sports" },
        { label: "Coverage", value: "East Africa" },
        { label: "Status", value: "Production" }
      ]
    },
    {
      id: "foreveryoung",
      name: "Forever Young Tours",
      subtitle: "East African Safaris & Tourism Ecosystem",
      category: "Tourism & Travel",
      description: "An East African tourism and travel platform enabling international travelers to discover, customize, and book luxury African gorilla trekking safaris, cultural expeditions, and eco-tours across Rwanda and East Africa.",
      liveUrl: "https://iforeveryoungtours.com/",
      // Vibrant African safari savannah & wildlife experience image
      image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2000&auto=format&fit=crop",
      icon: <Plane className="text-emerald-400" size={24} />,
      highlights: [
        "Customizable tour itinerary planner & real-time safari booking",
        "High-definition destination showcases for Rwandan eco-tourism",
        "Responsive booking engine built for international travelers"
      ],
      techStack: ["Tour Booking System", "Full-Stack Web", "UX Engineering", "Payment Gateway"],
      metrics: [
        { label: "Industry", value: "Tourism" },
        { label: "Region", value: "East Africa" },
        { label: "Status", value: "Production" }
      ]
    }
  ];

  const currentProject = projects.find(p => p.id === activeProject) || projects[0];

  return (
    <section id="projects" className="py-28 relative bg-[#020617] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-primary/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & GitHub Total Repos Banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-4"
            >
              <Sparkles size={13} />
              <span>Production Platforms</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight"
            >
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-blue-500">Live Platforms</span>
            </motion.h2>
            <p className="text-slate-400 max-w-2xl text-base mt-3">
              Explore live enterprise applications engineered, developed, and maintained in production.
            </p>
          </div>

          {/* GitHub Live Stats Badge (18 Public / 54 Total Repos) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-xl flex items-center gap-5 shrink-0 hover:border-primary/40 transition-colors"
          >
            <div className="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
              <Github size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-white font-mono">
                  {githubStats.totalRepos}
                </span>
                <span className="text-xs font-mono text-slate-400">Total Repos</span>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  <CheckCircle size={10} /> {githubStats.publicRepos} Public
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono mt-0.5">Jean-Aimé GitHub Overview</p>
            </div>
            <a 
              href="https://github.com/Jean-Aime" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-primary/20 transition-all ml-2"
              title="Visit GitHub Profile"
            >
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>

        {/* Project Selection Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {projects.map((proj) => {
            const isActive = proj.id === activeProject;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveProject(proj.id)}
                className={`group relative p-6 rounded-2xl border transition-all duration-300 text-left backdrop-blur-xl ${
                  isActive
                    ? "bg-slate-900 border-primary shadow-xl shadow-primary/10"
                    : "bg-slate-900/40 border-white/10 hover:border-white/20 text-slate-400 hover:bg-slate-900/60"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl transition-colors ${isActive ? "bg-primary text-white" : "bg-white/5 text-primary"}`}>
                    {proj.icon}
                  </div>
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                    isActive 
                      ? "bg-primary/20 border-primary/40 text-primary" 
                      : "bg-white/5 border-white/10 text-slate-500"
                  }`}>
                    {proj.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                  {proj.name}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-1">{proj.subtitle}</p>
              </button>
            );
          })}
        </div>

        {/* Detailed Interactive Showcase Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-2xl overflow-hidden shadow-2xl"
          >
            <div className="grid lg:grid-cols-12 gap-0">
              
              {/* Category-Specific Visual Imagery */}
              <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[440px] bg-slate-950 overflow-hidden group">
                <img 
                  src={currentProject.image} 
                  alt={currentProject.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                
                {/* Status Bar */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 border border-white/10 backdrop-blur-md">
                    <span className="size-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">
                      SYSTEM ONLINE
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/80 border border-white/10 text-slate-300 text-[10px] font-mono">
                    <ShieldCheck size={12} className="text-primary" /> Verified Production
                  </div>
                </div>

                {/* Bottom Overlay Title on Image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-bold text-base">{currentProject.name}</h4>
                      <p className="text-slate-400 text-xs">{currentProject.subtitle}</p>
                    </div>
                    <Button 
                      asChild
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl gap-2 shadow-lg shadow-primary/20 text-xs shrink-0"
                    >
                      <a href={currentProject.liveUrl} target="_blank" rel="noopener noreferrer">
                        <span>Visit Website</span>
                        <ExternalLink size={14} />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Specs & Detailed Description Panel */}
              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-8 border-t lg:border-t-0 lg:border-l border-white/10">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-primary text-xs font-mono font-bold uppercase tracking-widest mb-2">
                      <Layers size={14} /> Overview & Mission
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {currentProject.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <h5 className="text-xs font-mono uppercase text-slate-400 tracking-wider">Key Pillars</h5>
                    <ul className="space-y-2">
                      {currentProject.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle size={15} className="text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech / Capability Stack */}
                  <div>
                    <h5 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Code2 size={13} className="text-primary" /> Capabilities & Stack
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.techStack.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 font-mono text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-3">
                  {currentProject.metrics.map((m, idx) => (
                    <div key={idx} className="text-center p-2.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-white font-bold font-mono text-xs sm:text-sm">{m.value}</div>
                      <div className="text-[9px] text-slate-400 uppercase font-mono mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Quick Launch Cards for all 3 Platforms */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {projects.map((p) => (
            <a
              key={p.id}
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-slate-900/40 border border-white/10 hover:border-primary/40 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 text-primary group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <div>
                  <div className="text-sm font-bold text-white group-hover:text-primary transition-colors">
                    {p.name}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono truncate max-w-[180px]">
                    {p.liveUrl.replace('https://', '')}
                  </div>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;