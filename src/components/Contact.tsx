"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone, ArrowUpRight, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="text-blue-400" size={24} />,
      label: "Email",
      value: "baraime450@gmail.com",
      href: "mailto:baraime450@gmail.com",
      description: "For professional inquiries and project proposals."
    },
    {
      icon: <Linkedin className="text-blue-600" size={24} />,
      label: "LinkedIn",
      value: "Jean Aimé BARIHUJE",
      href: "https://linkedin.com/in/jean-aimé-8827b51b4",
      description: "Let's connect and share industry insights."
    },
    {
      icon: <Phone className="text-emerald-400" size={24} />,
      label: "Phone",
      value: "+250 788 712 679",
      href: "tel:+250788712679",
      description: "Direct line for urgent matters and calls."
    }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-6"
          >
            <MessageSquare size={12} />
            <span>Get In Touch</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
          >
            Let's Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Future</span> Together
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Kigali, Rwanda • +250 788 712 679 • baraime450@gmail.com
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method, i) => (
            <motion.a
              key={i}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/40 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-primary" size={20} />
              </div>
              
              <div className="size-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {method.icon}
              </div>
              
              <h3 className="text-sm font-black text-primary uppercase tracking-widest mb-2">{method.label}</h3>
              <p className="text-xl font-bold text-white mb-4">{method.value}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{method.description}</p>
              
              <div className="mt-8 flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-primary transition-colors">
                <span>Connect Now</span>
                <Send size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;