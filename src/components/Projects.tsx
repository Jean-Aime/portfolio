"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layout, Globe, Plane, Search, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const featuredProjects = [
    {
      id: 1,
      name: "Jascome Platform",
      category: "Enterprise",
      description: "An enterprise platform for Jascome providing modern business operation management, digital asset oversight, and scalable corporate workflows.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      icon: <Layout size={22} />,
      tags: ["React", "TypeScript", "Enterprise Operations", "Digital Assets"],
      link: "https://github.com/Jean-Aime/Jascome",
      live: "https://www.jascome.com/",
      isPrivate: true
    },
    {
      id: 2,
      name: "Forever Young Tours",
      category: "Tourism & Booking",
      description: "A premier tour and travel platform for booking African safari experiences, custom itineraries, and eco-tours in East Africa.",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2400&auto=format&fit=crop",
      icon: <Plane size={22} />,
      tags: ["Web Engineering", "Booking Platform", "UX Design", "Travel Tech"],
      link: "https://github.com/Jean-Aime/foreveryoung",
      live: "https://iforeveryoungtours.com/",
      isPrivate: true
    },
    {
      id: 3,
      name: "Zetalent Media",
      category: "Media & Agency",
      description: "A high-performance digital media platform designed for talent showcase, creative content distribution, and interactive media services.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2400&auto=format&fit=crop",
      icon: <Globe size={22} />,
      tags: ["Full Stack", "Media Platform", "Creative Tech", "Tailwind CSS"],
      link: "https://github.com/Jean-Aime/zetalent",
      live: "https://zetalent-media.com/",
      isPrivate: false
    }
  ];

  const categories = ["All", "Enterprise", "Tourism & Booking", "Media & Agency"];

  const filteredProjects = featuredProjects.filter(project => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-4"
          >
            <Globe size={13} />
            <span>Featured Deployments</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black mb-4 tracking-tight"
          >
            Live <span className="text-primary">Production Platforms</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base">
            Enterprise and customer-facing digital platforms built, deployed, and managed for active businesses.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search platforms..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative bg-slate-900/60 border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 backdrop-blur-xl flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyan-400 flex items-center gap-1.5">
                      {project.isPrivate && <Lock size={10} className="text-amber-400" />}
                      <span>{project.category}</span>
                    </div>
                    <div className="absolute bottom-3 left-3 size-10 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center text-primary">
                      {project.icon}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors text-white">
                        {project.name}
                      </h3>
                    </div>
                    
                    <p className="text-slate-400 text-xs leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary text-[10px] font-mono font-bold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center gap-3">
                  <Button variant="outline" size="sm" className="flex-1 gap-2 rounded-xl border-white/10 hover:bg-white/5 text-xs text-slate-300" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Github size={14} /> 
                      {project.isPrivate ? "Repo (Private)" : "GitHub"}
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 gap-2 rounded-xl bg-primary hover:bg-primary/90 text-xs shadow-md shadow-primary/20" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} /> Visit Website
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;