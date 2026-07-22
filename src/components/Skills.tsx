"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Lock, Briefcase, CheckCircle2, Cpu, Sparkles } from 'lucide-react';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const categories = [
    { 
      title: "Technical & Full Stack", 
      icon: <Code size={20} />, 
      description: "Building scalable web and mobile software solutions.",
      skills: [
        { name: "React.js & Next.js", level: 92 },
        { name: "TypeScript / JavaScript", level: 90 },
        { name: "Tailwind CSS & UI Systems", level: 95 },
        { name: "Node.js & Express API", level: 88 },
        { name: "PHP & Relational DBs", level: 85 },
        { name: "Web Application Security", level: 90 },
      ],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    { 
      title: "Infrastructure & Cybersecurity", 
      icon: <Lock size={20} />, 
      description: "Securing corporate networks and maintaining core systems.",
      skills: [
        { name: "Network Infrastructure & Firewalls", level: 92 },
        { name: "System Administration (Linux/Win)", level: 90 },
        { name: "Cybersecurity & Incident Protocol", level: 88 },
        { name: "Backup Systems & Disaster Recovery", level: 92 },
        { name: "Cloud Management & Virtualization", level: 84 },
        { name: "Access Controls & Risk Oversight", level: 89 },
      ],
      color: "from-purple-500/20 to-pink-500/20"
    },
    { 
      title: "Executive & Digital Innovation", 
      icon: <Briefcase size={20} />, 
      description: "Leading digital transformation and technology governance.",
      skills: [
        { name: "Startup Structuring & Architecture", level: 95 },
        { name: "Digital Asset Governance", level: 92 },
        { name: "Operations & Division Scaling", level: 90 },
        { name: "Strategic Tech Partnerships", level: 88 },
        { name: "Corporate Governance Strategy", level: 90 },
        { name: "Innovation Ecosystem Design", level: 94 },
      ],
      color: "from-emerald-500/20 to-teal-500/20"
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-3"
          >
            <Cpu size={12} />
            <span>Core Competencies</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 tracking-tight"
          >
            Technical & Leadership <span className="text-primary">Mastery</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-xs sm:text-sm">
            Combining deep hands-on technical execution with high-level corporate and operational leadership.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setSelectedCategory(i)}
              className={`p-5 rounded-2xl border text-left transition-all duration-300 flex items-start gap-4 ${
                selectedCategory === i
                  ? "bg-slate-900 border-primary shadow-xl shadow-primary/10"
                  : "bg-slate-900/40 border-white/10 hover:border-white/20 text-slate-400"
              }`}
            >
              <div className={`p-2.5 rounded-xl ${selectedCategory === i ? "bg-primary text-white" : "bg-white/5 text-primary"}`}>
                {cat.icon}
              </div>
              <div>
                <h3 className="font-bold text-sm text-white mb-0.5">{cat.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{cat.description}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Active Category Skills Progress Grid */}
        <motion.div 
          key={selectedCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-slate-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl"
        >
          <div className="flex items-center gap-2.5 mb-6">
            <Sparkles size={16} className="text-primary" />
            <h3 className="text-lg font-bold text-white">
              {categories[selectedCategory].title} Proficiency Matrix
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
            {categories[selectedCategory].skills.map((skill, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-200 flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-primary" />
                    {skill.name}
                  </span>
                  <span className="font-mono text-primary font-bold">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden p-0.5 border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: idx * 0.05 }}
                    className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;