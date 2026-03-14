"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Strategic Partner",
      role: "CEO, Tech Solutions",
      content: "Jean Aimé's ability to navigate both the technical and operational aspects of a project is unparalleled. He delivered our platform ahead of schedule with exceptional security standards.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Project Lead",
      role: "Operations Director",
      content: "His leadership in digital innovation has transformed how we manage our assets. A true visionary who understands the practicalities of implementation.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Technical Director",
      role: "Cybersecurity Firm",
      content: "One of the most dedicated professionals I've worked with. His expertise in system administration and network security is top-tier.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-accent/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Professional Endorsements</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">What industry leaders and colleagues say about our collaboration.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 rounded-3xl bg-card border border-border/50 flex flex-col"
            >
              <Quote className="text-primary/20 absolute top-6 right-8" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>

              <p className="text-slate-300 italic mb-8 flex-grow leading-relaxed">"{t.content}"</p>

              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="size-12 rounded-full object-cover border-2 border-primary/20" />
                <div>
                  <h4 className="text-white font-bold text-sm">{t.name}</h4>
                  <p className="text-primary text-[10px] font-black uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;