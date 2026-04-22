"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import data from "@/lib/data";
import MatrixRain from "./MatrixRain";
import TypeWriter from "./TypeWriter";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Matrix Rain Canvas */}
      <MatrixRain />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black z-[1]" />

      {/* Content */}
      <div className="relative z-[2] text-center px-6 max-w-5xl mx-auto">
        {/* SYS_INIT label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <span className="section-label text-glow-green">
            {">"} SYS_INIT — PORTFOLIO v2.0
          </span>
        </motion.div>

        {/* Name - Glitch effect */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glitch font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[0.15em] text-white mb-6"
          data-text={data.name.toUpperCase()}
        >
          {data.name.toUpperCase()}
        </motion.h1>

        {/* Subtitle - Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mb-10"
        >
          <TypeWriter
            text={`> ${data.role}_`}
            className="font-mono text-lg md:text-xl text-cyber-cyan text-glow-cyan"
            speed={80}
            delay={1200}
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <a href="#projects" className="neon-btn">
            <span className="text-xs mr-1">[</span>VIEW_WORK
            <span className="text-xs ml-1">]</span>
          </a>
          <a href="#contact" className="neon-btn neon-btn-magenta">
            <span className="text-xs mr-1">[</span>CONTACT_ME
            <span className="text-xs ml-1">]</span>
          </a>
        </motion.div>

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-gray-500 hover:text-cyber-cyan transition-colors duration-300"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            github.com/edjoshua22
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-gray-600 uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-cyber-cyan/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
