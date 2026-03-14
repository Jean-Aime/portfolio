"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BrainCircuit } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "A0 Industrial Information Technology",
      school: "INES Ruhengeri – Musanze",
      year: "2022 - 2024",
      description: "Advanced studies in industrial systems, network architecture, and information technology management."
    },
    {
      degree: "A2 Software Development",
      school: "BULINGA TVT School – Muhanga",
      year: "2018 - 2021",
      description: "Foundational training in programming, software engineering principles, and application development."
    }
  ];

  const certifications = [
    { title: "Artificial Intelligence Ethics", issuer: "Professional Certification", date: "2024" },
    { title: "Machine Learning & Deep Learning", issuer: "Professional Certification", date: "2024" },
    { title: "Natural Language Processing & CV", issuer: "Professional Certification", date: "2024" },
    { title: "IBM Watson AI Model Deployment", issuer: "IBM", date: "2024" },
    { title: "Mastering Prompt Engineering", issuer: "Professional Certification", date: "2024" },
    { title: "ALX Professional Foundations", issuer: "ALX", date: "2023" }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">Education</h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
            <div className="space-y-8">
              {education.map((edu, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-primary/30"
                >
                  <div className="absolute -left-[9px] top-0 size-4 rounded-full bg-primary border-4 border-background"></div>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <GraduationCap size={18} />
                    <span className="text-sm font-mono">{edu.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-slate-300 font-medium mb-2">{edu.school}</p>
                  <p className="text-sm text-slate-400">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">Certifications</h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3 hover:border-primary/50 transition-colors"
                >
                  <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <BrainCircuit size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm leading-tight">{cert.title}</h4>
                    <p className="text-[10px] text-slate-500 mt-1">{cert.issuer} • {cert.date}</p>
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