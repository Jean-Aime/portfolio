"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone, Send, MessageSquare, Copy, Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';

const Contact = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactMethods = [
    {
      icon: <Mail className="text-sky-400" size={24} />,
      label: "Email",
      value: "baraime450@gmail.com",
      copyText: "baraime450@gmail.com",
      href: "mailto:baraime450@gmail.com",
      description: "Available for strategic technical consultation and high-impact projects."
    },
    {
      icon: <Linkedin className="text-blue-500" size={24} />,
      label: "LinkedIn",
      value: "Jean Aimé BARIHUJE",
      copyText: "https://linkedin.com/in/jean-aimé-8827b51b4",
      href: "https://linkedin.com/in/jean-aimé-8827b51b4",
      description: "Connect for professional networking and industry innovation."
    },
    {
      icon: <Phone className="text-emerald-400" size={24} />,
      label: "Phone / WhatsApp",
      value: "+250 788 712 679",
      copyText: "+250788712679",
      href: "tel:+250788712679",
      description: "Direct channel for urgent engagements and executive inquiries."
    }
  ];

  const handleCopy = (text: string, index: number, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    toast.success(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    // Simulate API dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Message sent successfully! Jean Aimé will respond shortly.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-slate-950/40">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-4"
          >
            <MessageSquare size={13} />
            <span>Initiate Contact</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black mb-4 tracking-tight"
          >
            Let's Engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-blue-500">Innovation</span> Together
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Based in Kigali, Rwanda. Open for enterprise tech leadership, full-stack consulting, and digital asset management opportunities.
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between backdrop-blur-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <button
                    onClick={() => handleCopy(method.copyText, i, method.label)}
                    className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-primary/20 transition-all"
                    title="Copy info"
                  >
                    {copiedIndex === i ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                  </button>
                </div>

                <h3 className="text-xs font-black text-primary uppercase tracking-widest mb-1">{method.label}</h3>
                <a 
                  href={method.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-white hover:text-primary transition-colors block mb-3 truncate"
                >
                  {method.value}
                </a>
                <p className="text-xs text-slate-400 leading-relaxed">{method.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-primary transition-colors">
                <a href={method.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                  <span>Open link</span>
                  <Send size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Form & Info Dual Block */}
        <div className="bg-slate-900/80 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-mono uppercase tracking-wider">
              <Sparkles size={12} /> Direct Dispatch
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">Send a Direct Message</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Have a high-scale platform idea, security enterprise project, or digital transformation inquiry? Fill out this form and I will get back to you promptly.
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3 font-mono text-xs text-slate-300">
              <div className="flex items-center justify-between text-slate-400">
                <span>Location:</span>
                <span className="text-white">Kigali, Rwanda (CAT)</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>Availability:</span>
                <span className="text-emerald-400 font-bold">Open for Proposals</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>Avg. Response:</span>
                <span className="text-sky-400">< 12 Hours</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. sarah@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="e.g. Enterprise Platform Development"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-primary transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-1">Message *</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project or technical inquiry..."
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-primary transition-colors text-sm resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl text-sm gap-2 shadow-lg shadow-primary/20"
            >
              {isSubmitting ? (
                <span>Transmitting message...</span>
              ) : (
                <>
                  <Send size={16} />
                  <span>Transmit Message</span>
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;