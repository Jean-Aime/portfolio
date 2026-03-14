"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, Briefcase, Rocket } from 'lucide-react';

const Experience = () => {
  const jobs = [
    {
      title: "Chief Digital Assets & Innovation Officer",
      company: "Oderson Holdings Ltd",
      date: "2025 – 2026",
      desc: "Led digital strategy and technology management across a multi-company ecosystem, overseeing digital platforms, innovation initiatives, and digital asset governance.",
      icon: <Rocket size={20} />,
      tags: ["Digital Strategy", "Innovation", "Asset Governance"]
    },
    {
      title: "Chief Operations Officer",
      company: "Technology Subsidiary – Oderson Holdings",
      date: "2024 – 2025",
      desc: "Oversaw operational management across multiple divisions including Marketing, Production, Customer Relations, and Certification. Implemented organizational structures for scalability.",
      icon: <Briefcase size={20} />,
      tags: ["Operations", "Leadership", "Scalability"]
    },
    {
      title: "IT Support & System Administrator",
      company: "IWACU Recovery Centre – Kigali",
      date: "2019 – 2024",
      desc: "Managed network infrastructure and cybersecurity systems. Implemented firewall protection, antivirus systems, and security protocols. Provided technical support and maintained backup systems.",
      icon: <Shield size={20} />,
      tags: ["Cybersecurity", "SysAdmin", "Network Security"]
    },
    {
      title: "Web Developer",
      company: "Primates Africa – Musanze",
      date: "2023 – 2024",
      desc: "Designed and developed secure web applications and digital platforms. Improved website functionality, user experience, and implemented security updates.",
      icon: <Code size={20} />,
      tags: ["Web Dev", "Security Optimization", "UX Design"]
    }
  ];

  return (
    <section id="experience" className="py-32 bg-accent/5">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Professional Experience</h2>
          <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-16">
          {jobs.map((job, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-8 group"
            >
              <div className="flex flex-col items-center">
                <div className="size-12 rounded-2xl border border-primary/30 flex items-center justify-center text-primary bg-background shadow-[0_0_15px_rgba(19,182,236,0.1)] group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {job.icon}
                </div>
                <div className="w-px h-full bg-gradient-to-b from-primary/30 to-transparent mt-4"></div>
              </div>
              <div className="pb-12">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
                    {job.date}
                  </span>
                </div>
                <p className="text-primary font-medium mb-4">{job.company}</p>
                <p className="text-slate-400 leading-relaxed mb-6">{job.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag, k) => (
                    <span key={k} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-500 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;