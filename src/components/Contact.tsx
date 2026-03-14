"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Let's Build Something Together</h2>
          <p className="text-muted-foreground mb-12">I'm currently open to new opportunities and remote work.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <Button asChild size="lg" variant="outline" className="h-24 flex-col gap-2">
              <a href="mailto:baraime450@gmail.com">
                <Mail size={24} />
                <span>baraime450@gmail.com</span>
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-24 flex-col gap-2">
              <a href="https://www.linkedin.com/in/jean-aimé-8827b51b4" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
                <span>LinkedIn Profile</span>
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-24 flex-col gap-2">
              <a href="tel:+250788712679">
                <Phone size={24} />
                <span>+250 788 712 679</span>
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;