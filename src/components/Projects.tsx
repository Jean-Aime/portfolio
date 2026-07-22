"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, ArrowRight, Layout, Globe, Plane, Search, Layers, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useGithubProjects } from '@/hooks/useGithubProjects';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showGithubRepos, setShowGithubRepos] = useState<boolean>(false);

  const { projects: githubProjects, loading: githubLoading } = useGithubProjects("Jean-Aime");

  const featuredProjects = [
    {
      id: 1,
      name: "Jacom-Platform",
      category: "Enterprise",
      description: "A comprehensive enterprise-grade platform designed for streamlined business operations, asset oversight, and digital workflows.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      icon: <Layout size={22} />,
      tags: ["React", "Node.js", "Enterprise Architecture", "REST API"],
      link: "https://github.com/Jean-Aime/Jacom-Platform",
      live: "https://github.com/Jean-Aime/Jacom-Platform"
    },
    {
      id: 2,
      name: "EditionSystem",
      category: "CMS & Publishing",
      description: "An advanced content management and digital publishing system built for high-performance editorial workflows and multi-role operations.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2372&auto=format&fit=crop",
      icon: <Code size={22} />,
      tags: ["TypeScript", "CMS", "Workflow Management", "Security"],
      link: "https://github.com/Jean-Aime/editionsystem",
      live: "https://github.com/Jean-Aime/editionsystem"
    },
    {
      id: 3,
      name: "MyTravel",
      category: "Mobile & Apps",
      description: "A modern travel planning and booking ecosystem featuring real-time location updates, booking pipelines, and seamless user experiences.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2535&auto=format&fit=crop",
      icon: <Plane size={22} />,
      tags: ["React Native", "API Integration", "Travel Platform"],
      link: "https://github.com/Jean-Aime/mytravel",
      live: "https://github.com/Jean-Aime/mytravel"
    }
  ];

  const categories = ["All", "Enterprise", "CMS & Publishing", "Mobile & Apps"];

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
            <span>Project Portfolio</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black mb-4 tracking-tight"
          >
            Featured <span className="text-primary">Deployments & Code</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base">
            Architected and developed enterprise platforms, custom software tools, and digital solutions.
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
              placeholder="Filter by keyword or stack..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyan-400">
                      {project.category}
                    </div>
                    <div className="absolute bottom-3 left-3 size-10 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center text-primary">
                      {project.icon}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors text-white">
                      {project.name}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-6 line-clamp-3">
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
                  <Button variant="outline" size="sm" className="flex-1 gap-2 rounded-xl border-white/10 hover:bg-white/5 text-xs" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Github size={14} /> Repository
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 gap-2 rounded-xl bg-primary hover:bg-primary/90 text-xs shadow-md shadow-primary/20" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} /> Details
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Live GitHub Toggle Section */}
        <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Github size={20} className="text-primary" /> Live Repositories Feed
              </h3>
              <p className="text-xs text-slate-400">Direct integration with Jean-Aimé's GitHub activity</p>
            </div>
            <Button
              onClick={() => setShowGithubRepos(!showGithubRepos)}
              variant="outline"
              size="sm"
              className="gap-2 rounded-xl border-primary/30 text-primary hover:bg-primary/10 text-xs"
            >
              <RefreshCw size={14} className={showGithubRepos ? "animate-spin" : ""} />
              {showGithubRepos ? "Hide GitHub Feed" : "Fetch Latest Repos"}
            </Button>
          </div>

          {showGithubRepos && (
            <div className="mt-4 pt-4 border-t border-white/10">
              {githubLoading ? (
                <div className="text-center py-8 text-xs text-slate-400 font-mono">Fetching latest GitHub repositories...</div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {githubProjects.map((repo) => (
                    <a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl bg-black/40 border border-white/5 hover:border-primary/40 transition-colors block group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-sm text-white group-hover:text-primary transition-colors capitalize truncate">
                          {repo.name}
                        </span>
                        {repo.language && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary">
                            {repo.language}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-2 mb-3">{repo.description}</p>
                      <div className="text-[10px] text-slate-500 font-mono flex items-center gap-1">
                        <span>★ {repo.stargazers_count} stars</span>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* GitHub External Button */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Button 
            asChild
            variant="outline" 
            size="lg" 
            className="group h-12 px-8 rounded-2xl border-primary/30 hover:bg-primary/10 text-primary font-bold gap-3"
          >
            <a href="https://github.com/Jean-Aime" target="_blank" rel="noopener noreferrer">
              View All Repositories on GitHub
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;