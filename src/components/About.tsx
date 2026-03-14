"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Terminal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm">
              <span className="h-0.5 w-8 bg-primary"></span>
              About Me
            </div>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              Bridging <span className="text-primary">Systems</span> and <span className="text-primary">Software</span>.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi, I'm Jean Aimé BARIHUJE. I am an Industrial Information Technology graduate specializing in network security, cybersecurity, and web development.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div><p className="text-3xl font-bold">5+</p><p className="text-sm text-muted-foreground">Years Exp.</p></div>
              <div><p className="text-3xl font-bold">20+</p><p className="text-sm text-muted-foreground">Projects</p></div>
              <div><p className="text-3xl font-bold">10+</p><p className="text-sm text-muted-foreground">Certs</p></div>
            </div>
          </motion.div>
          
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl bg-card p-6 border border-border shadow-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <Shield className="text-primary" size={32} />
                <div>
                  <h3 className="font-bold">Network Security</h3>
                  <p className="text-sm text-muted-foreground">Firewalls & IDS/IPS</p>
                </div>
              </div>
              <div className="h-1.5 w-full bg-accent rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[90%]"></div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-xl bg-card p-6 border border-border shadow-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <Terminal className="text-primary" size={32} />
                <div>
                  <h3 className="font-bold">Web Development</h3>
                  <p className="text-sm text-muted-foreground">React, Node.js, SQL</p>
                </div>
              </div>
              <div className="h-1.5 w-full bg-accent rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[85%]"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;