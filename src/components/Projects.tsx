"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Star, ArrowRight, Layout, Globe, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const featuredProjects = [
    {
      id: 1,
      name: "Jacom-Platform",
      description: "A comprehensive enterprise-grade platform designed for streamlined business operations and digital asset management.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      icon: <Layout size={24} />,
      tags: ["React", "Node.js", "Enterprise"],
      link: "https://github.com/Jean-Aime/Jacom-Platform",
      live: "#"
    },
    {
      id: 2,
      name: "EditionSystem",
      description: "An advanced content management and publishing system built for high-performance digital editorial workflows.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2372&auto=format&fit=crop",
      icon: <Code size={24} />,
      tags: ["TypeScript", "CMS", "Workflow"],
      link: "https://github.com/Jean-Aime/editionsystem",
      live: "#"
    },
    {
      id: 3,
      name: "MyTravel",
      description: "A modern travel planning and booking ecosystem featuring real-time updates and seamless user experiences.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2535&auto=format&fit=crop",
      icon: <Plane size={24} />,
      tags: ["React Native", "API", "Travel"],
      link: "https://github.com/Jean-Aime/mytravel",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-6"
          >
            <Globe size={12} />
            <span>Portfolio</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-4 tracking-tight"
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card/50 border border-border/50 rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500 backdrop-blur-sm flex flex-col"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 size-10 rounded-xl bg-primary/20 backdrop-blur-md border border-primary/30 flex items-center justify-center text-primary">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded-md bg-primary/10 text-primary text-[10px] font-mono font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-3 mt-auto">
                  <Button variant="outline" size="sm" className="flex-1 gap-2 rounded-xl border-border/50 hover:bg-primary/5" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Github size={14} /> Source
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 gap-2 rounded-xl shadow-lg shadow-primary/10" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} /> Live
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Button 
            asChild
            variant="outline" 
            size="lg" 
            className="group h-14 px-8 rounded-2xl border-primary/30 hover:bg-primary/5 text-primary font-bold gap-3"
          >
            <a href="https://github.com/Jean-Aime" target="_blank" rel="noopener noreferrer">
              Explore More on GitHub
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;