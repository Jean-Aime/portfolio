"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, Database } from 'lucide-react';

const Skills = () => {
  const categories = [
    { title: "Security", icon: <Shield />, skills: ["Firewalls", "Penetration Testing", "Encryption"] },
    { title: "Development", icon: <Code />, skills: ["React", "Node.js", "PostgreSQL"] },
    { title: "Systems", icon: <Database />, skills: ["Linux Admin", "Cloud Security", "Automation"] }
  ];

  return (
    <section id="skills" className="py-20 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all"
            >
              <div className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {cat.skills.map((s, k) => (
                  <span key={k} className="px-3 py-1 rounded-full bg-accent text-xs font-medium">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;