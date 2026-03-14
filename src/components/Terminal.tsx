"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Terminal = () => {
  const [lines, setLines] = useState<string[]>([]);
  const fullText = [
    "> Initializing secure connection...",
    "> Accessing BARIHUJE_CORE_V5.sys",
    "> Identity: Cybersecurity Architect",
    "> Specialization: Zero-Trust Systems",
    "> Status: Ready for deployment",
    "> Location: Kigali, Rwanda",
    "> [SUCCESS] System fully operational."
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < fullText.length) {
        setLines(prev => [...prev, fullText[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden font-mono text-xs sm:text-sm shadow-2xl">
      <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center gap-2">
        <div className="size-2.5 rounded-full bg-red-500/50"></div>
        <div className="size-2.5 rounded-full bg-yellow-500/50"></div>
        <div className="size-2.5 rounded-full bg-green-500/50"></div>
        <span className="ml-2 text-[10px] text-slate-500 uppercase tracking-widest">bash — 80x24</span>
      </div>
      <div className="p-6 space-y-2 min-h-[200px]">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={line.includes('[SUCCESS]') ? "text-green-400" : "text-primary/80"}
          >
            {line}
          </motion.div>
        ))}
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-2 h-4 bg-primary/50 align-middle ml-1"
        />
      </div>
    </div>
  );
};

export default Terminal;