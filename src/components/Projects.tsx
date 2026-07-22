"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Globe, Plane, Layout, Sparkles, Github, ShieldCheck, ArrowUpRight, CheckCircle, Code2, Layers } from 'lucide-react';
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
  accentColor: string;
  borderGlow: string;
}

const Projects = () => {
  const githubStats = useGithubStats("Jean-Aime");
  const [activeProject, setActiveProject] = useState<string>("jascome");

  const projects: Project[] = [
    {
      id: "jascome",
      name: "Jascome Platform",
      subtitle: "Corporate & Digital Asset Governance Platform",
      category: "Enterprise System",
      description: "A multi-company enterprise platform engineered for Jascome, streamlining corporate operations, digital asset management, structured workflows, and cross-department collaboration.",
      liveUrl: "https://www.jascome.com/",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      icon: <Layout className="text-cyan-400" size={24} />,
      highlights: [
        "Digital asset governance and multi-tenant operational security",
        "Automated reporting and executive analytics dashboards",
        "High-performance architecture with zero-downtime deployment"
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Enterprise Security"],
      metrics: [
        { label: "Uptime", value: "99.9%" },
        { label: "Type", value: "Enterprise SaaS" },
        { label: "Status", value: "Production" }
      ],
      accentColor: "from-cyan-500/20 via-sky-500/10 to-transparent",
      borderGlow: "group-hover:border-cyan-500/50"
    },
    {
      id: "foreveryoung",
      name: "Forever Young Tours",
      subtitle: "African Safari & Travel Booking Ecosystem",
      category: "Tourism & Booking",
      description: "An immersive East African tour and travel platform enabling international clients to discover, customize, and securely book luxury African safari packages and eco-tours.",
      liveUrl: "https://iforeveryoungtours.com/",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2400&auto=format&fit=crop",
      icon: <Plane className="text-emerald-400" size={24} />,
      highlights: [
        "Interactive itinerary builder with real-time booking inquiries",
        "Optimized media showcase for high-resolution wildlife & cultural media",
        "Seamless mobile-first responsive architecture"
      ],
      techStack: ["Full-Stack Web", "UX Engineering", "Payment Gateways", "SEO Optimization"],
      metrics: [
        { label: "Region", value: "East Africa" },
        { label: "UX Rating", value: "4.9 / 5" },
        { label: "Status", value: "Production" }
      ],
      accentColor: "from-emerald-500/20 via-teal-500/10 to-transparent",
      borderGlow: "group-hover:border-emerald-500/50"
    },
    {
      id: "zetalent",
      name: "Zetalent Media",
      subtitle: "Digital Media & Talent Distribution Hub",
      category: "Media & Agency",
      description: "A modern digital agency platform designed for creative talent showcases, multimedia content distribution, and client management for Zetalent Media.",
      liveUrl: "https://zetalent-media.com/",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2400&auto=format&fit=crop",
      icon: <Globe className="text-purple-400" size={24} />,
      highlights: [
        "Fast content delivery network for multimedia assets",
        "Modern dark-mode aesthetic built for creative visual impact",
        "Integrated media request and partnership dispatch workflows"
      ],
      techStack: ["React", "Tailwind CSS", "Framer Motion", "REST APIs"],
      metrics: [
        { label: "Industry", value: "Digital Media" },
        { label: "Speed", value: "Fast Load" },
        { label: "Status", value: "Production" }
      ],
      accentColor: "from-purple-500/20 via-indigo-500/10 to-transparent",
      borderGlow: "group-hover:border-purple-500/50"
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
              <span>Production Deployments</span>
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
              Explore live enterprise applications engineered and maintained in production.
            </p>
          </div>

          {/* GitHub Live Stats Badge */}
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
                  {githubStats.loading ? "..." : `${githubStats.publicRepos}+`}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <CheckCircle size={10} /> Active
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">Total Projects on GitHub</p>
            </div>
            <a 
              href="https://github.com/Jean-Aime" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-primary/20 transition-all ml-2"
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
              
              {/* Image & Live Preview Banner */}
              <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] overflow-hidden group">
                <img 
                  src={currentProject.image} 
                  alt={currentProject.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                
                {/* Status Bar */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 border border-white/10 backdrop-blur-md">
                    <span className="size-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">
                      SYSTEM LIVE
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/80 border border-white/10 text-slate-300 text-[10px] font-mono">
                    <ShieldCheck size={12} className="text-primary" /> Verified Production
                  </div>
                </div>

                {/* Bottom Overlay Title on Image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10">
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
                        <span>Launch Site</span>
                        <ExternalLink size={14} />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Specs & Description Panel */}
              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-8 border-t lg:border-t-0 lg:border-l border-white/10">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-primary text-xs font-mono font-bold uppercase tracking-widest mb-2">
                      <Layers size={14} /> Architecture Overview
                    </div>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {currentProject.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <h5 className="text-xs font-mono uppercase text-slate-400 tracking-wider">Key Highlights</h5>
                    <ul className="space-y-2">
                      {currentProject.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div>
                    <h5 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Code2 size={13} className="text-primary" /> Tech Stack
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

                {/* Project Metrics Grid */}
                <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
                  {currentProject.metrics.map((m, idx) => (
                    <div key={idx} className="text-center p-3 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-white font-bold font-mono text-sm sm:text-base">{m.value}</div>
                      <div className="text-[10px] text-slate-400 uppercase font-mono mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* All 3 Quick Links Bar */}
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