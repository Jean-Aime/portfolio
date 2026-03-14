"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Advanced Diploma in Industrial Information Technology",
      school: "Integrated Polytechnic Regional College (IPRC)",
      year: "2018 - 2021",
      description: "Focused on network security, systems administration, and software engineering."
    }
  ];

  const certifications = [
    {
      title: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "2023"
    },
    {
      title: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco",
      date: "2022"
    }
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
            <div className="grid gap-4">
              {certifications.map((cert, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4 hover:border-primary/50 transition-colors"
                >
                  <div className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{cert.title}</h4>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                      <span>{cert.issuer}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        {cert.date}
                      </div>
                    </div>
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