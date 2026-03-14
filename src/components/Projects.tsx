"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Star, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useGithubProjects } from '@/hooks/useGithubProjects';

const Projects = () => {
  const { projects, loading, error } = useGithubProjects('Jean-Aime');

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4 tracking-tight"
          >
            Featured <span className="text-primary">Deployments</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-1.5 bg-primary mx-auto rounded-full"
          ></motion.div>
        </div>
        
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="animate-spin text-primary" size={40} />
            <p className="text-muted-foreground font-mono">Fetching source code from GitHub...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20 text-destructive">
            <p>Error loading projects. Please check back later.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-card/50 border border-border/50 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-500 backdrop-blur-sm flex flex-col"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative overflow-hidden">
                  <Code size={48} className="text-primary/20 group-hover:scale-110 group-hover:text-primary/40 transition-all duration-700" />
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-md bg-background/80 backdrop-blur-md border border-border text-[10px] font-bold">
                    <Star size={10} className="text-yellow-500" />
                    {project.stargazers_count}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors capitalize">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.language && (
                      <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-[10px] font-mono font-bold uppercase tracking-wider">
                        {project.language}
                      </span>
                    )}
                    {project.topics.slice(0, 2).map((topic) => (
                      <span key={topic} className="px-2 py-1 rounded-md bg-accent text-muted-foreground text-[10px] font-mono">
                        #{topic}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-3 mt-auto">
                    <Button variant="outline" size="sm" className="flex-1 gap-2 rounded-xl border-border/50 hover:bg-primary/5" asChild>
                      <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                        <Github size={14} /> Source
                      </a>
                    </Button>
                    {project.homepage && (
                      <Button size="sm" className="flex-1 gap-2 rounded-xl shadow-lg shadow-primary/10" asChild>
                        <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={14} /> Live
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;