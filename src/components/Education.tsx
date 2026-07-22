"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BrainCircuit } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "A0 Industrial Information Technology",
      school: "INES Ruhengeri – Musanze",
      year: "2022 – 2024",
      description: "Advanced studies in industrial systems and information technology management."
    },
    {
      degree: "A2 Software Development",
      school: "BULINGA TVT School – Muhanga",
      year: "2018 – 2021",
      description: "Foundational training in programming and software engineering principles."
    }
  ];

  const certifications = [
    { title: "Artificial Intelligence Ethics" },
    { title: "Machine Learning & Deep Learning" },
    { title: "Natural Language Processing & Computer Vision" },
    { title: "IBM Watson AI Model Deployment" },
    { title: "Mastering the Art of Prompt Engineering" },
    { title: "ALX Professional Foundations" }
  ];

  return (
    <section id="education" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">Education</h2>
              <div className="h-1 w-16 bg-primary rounded-full"></div>
            </div>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-6 border-l-2 border-primary/30"
                >
                  <div className="absolute -left-[9px] top-0 size-4 rounded-full bg-primary border-4 border-background"></div>
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <GraduationCap size={16} />
                    <span className="text-xs font-mono">{edu.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                  <p className="text-slate-300 font-medium text-xs sm:text-sm mb-1">{edu.school}</p>
                  <p className="text-xs sm:text-sm text-slate-400">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">Certifications</h2>
              <div className="h-1 w-16 bg-primary rounded-full"></div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {certifications.map((cert, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 hover:border-primary/50 transition-colors"
                >
                  <div className="size-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <BrainCircuit size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs leading-tight">{cert.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;