"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "Secure E-Commerce Platform",
    description: "A full-stack e-commerce solution with integrated payment gateways and robust security protocols.",
    tech: ["React", "Node.js", "PostgreSQL", "JWT"],
    github: "#",
    demo: "#"
  },
  {
    title: "Network Monitoring Tool",
    description: "Real-time dashboard for monitoring network traffic and detecting potential security threats.",
    tech: ["Python", "React", "Socket.io", "Linux"],
    github: "#",
    demo: "#"
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio built with React and Tailwind CSS to showcase professional work.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "#",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all shadow-sm hover:shadow-xl"
            >
              <div className="aspect-video bg-accent/50 flex items-center justify-center overflow-hidden">
                <Code size={48} className="text-primary/20 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 rounded-md bg-accent text-[10px] font-mono font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href={project.github}><Github size={14} /> Code</a>
                  </Button>
                  <Button size="sm" className="gap-2" asChild>
                    <a href={project.demo}><ExternalLink size={14} /> Demo</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;