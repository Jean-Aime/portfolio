"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Code } from 'lucide-react';

const Experience = () => {
  const jobs = [
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
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Professional Journey</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>
        <div className="space-y-12">
          {jobs.map((job, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6"
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;