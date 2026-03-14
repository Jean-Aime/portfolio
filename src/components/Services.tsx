"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Code2, ShieldCheck, Network, BarChart3, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Innovation Strategy",
      description: "Developing roadmaps for digital transformation and implementing emerging technologies to drive organizational growth.",
      icon: <Lightbulb size={28} />,
      color: "text-amber-400",
      bg: "bg-amber-400/10"
    },
    {
      title: "Full-Stack Development",
      description: "Building scalable, high-performance web applications using modern frameworks like React, Node.js, and TypeScript.",
      icon: <Code2 size={28} />,
      color: "text-blue-400",
      bg: "bg-blue-400/10"
    },
    {
      title: "Cybersecurity & Tech Ops",
      description: "Securing digital assets through robust infrastructure management, risk assessment, and incident response protocols.",
      icon: <ShieldCheck size={28} />,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10"
    },
    {
      title: "Enterprise Architecture",
      description: "Designing complex IT ecosystems that align technical capabilities with long-term business objectives.",
      icon: <Network size={28} />,
      color: "text-purple-400",
      bg: "bg-purple-400/10"
    },
    {
      title: "Data Analytics & BI",
      description: "Transforming raw data into actionable insights through advanced analytics and business intelligence tools.",
      icon: <BarChart3 size={28} />,
      color: "text-rose-400",
      bg: "bg-rose-400/10"
    },
    {
      title: "Agile Leadership",
      description: "Leading cross-functional teams through agile methodologies to deliver high-impact digital products.",
      icon: <Zap size={28} />,
      color: "text-cyan-400",
      bg: "bg-cyan-400/10"
    }
  ];

  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black text-[10px] uppercase tracking-[0.3em] mb-4"
            >
              What I Offer
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white tracking-tight"
            >
              Strategic <span className="text-primary">Solutions</span> for Modern Enterprises.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 max-w-sm text-sm leading-relaxed"
          >
            Bridging the gap between complex technical requirements and high-level business strategy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/40 transition-all duration-500"
            >
              <div className={`size-14 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;