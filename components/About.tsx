"use client";

import { motion } from "framer-motion";
import data from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

const terminalLines = [
  { prompt: "$ whoami", response: `> ${data.name} — ${data.bio.split(".")[0]}.` },
  {
    prompt: "$ location",
    response: `> ${data.location} ${data.locationFlag}`,
  },
  { prompt: "$ status", response: `> ${data.status}` },
];

const stats = [
  { label: "YEARS_EXP", value: data.yearsExp, suffix: "+" },
  { label: "PROJECTS_BUILT", value: data.projectsBuilt, suffix: "+" },
  { label: "GITHUB_REPOS", value: data.githubRepos, suffix: "+" },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-2"
        >
          <span className="section-label text-glow-green">{">"} ABOUT_ME</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-title text-3xl md:text-4xl mb-12"
        >
          System Profile
        </motion.h2>

        {/* Split layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left: CLI terminal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="cyber-card p-6">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-cyan-900/30">
                <div className="w-3 h-3 border border-red-500/60" />
                <div className="w-3 h-3 border border-yellow-500/60" />
                <div className="w-3 h-3 border border-green-500/60" />
                <span className="ml-3 font-mono text-[10px] tracking-widest text-gray-600 uppercase">
                  terminal — bash
                </span>
              </div>

              {/* Terminal content */}
              <div className="space-y-4">
                {terminalLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.15 }}
                  >
                    <div className="font-mono text-sm text-cyber-green text-glow-green mb-1">
                      {line.prompt}
                    </div>
                    <div className="font-mono text-sm text-gray-300 pl-2">
                      {line.response}
                    </div>
                  </motion.div>
                ))}
                <div className="font-mono text-sm text-cyber-green text-glow-green mt-4">
                  $ <span className="animate-blink">▌</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Avatar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              {/* Outer glow frame */}
              <div className="absolute -inset-3 border border-cyber-cyan/30 shadow-neon-cyan" />
              <div className="absolute -inset-6 border border-cyber-magenta/15" />

              {/* Avatar container */}
              <div className="w-64 h-64 md:w-72 md:h-72 border border-cyber-cyan/50 bg-black/80 relative overflow-hidden">
                {/* Actual photo */}
                <img
                  src="/avatar.jpg"
                  alt={data.name}
                  className="w-full h-full object-cover object-top"
                  style={{
                    filter: "saturate(0.7) contrast(1.1) brightness(0.9)",
                  }}
                />

                {/* Scanline overlay on avatar */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-20 z-10"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,240,0.06) 2px, rgba(0,255,240,0.06) 4px)",
                  }}
                />

                {/* Subtle cyan tint overlay */}
                <div className="absolute inset-0 bg-cyber-cyan/5 mix-blend-overlay pointer-events-none z-10" />

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-cyber-cyan/70 z-20" />
                <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-cyber-cyan/70 z-20" />
                <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-cyber-cyan/70 z-20" />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-cyber-cyan/70 z-20" />

                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-3 px-3 z-20">
                  <span className="font-mono text-[9px] tracking-[0.25em] text-cyber-cyan/60 uppercase">
                    &gt; identity.verified
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="cyber-card p-6 text-center"
            >
              <div className="font-heading text-4xl font-bold text-cyber-cyan text-glow-cyan mb-2">
                {stat.value}
                <span className="text-cyber-magenta">{stat.suffix}</span>
              </div>
              <div className="font-mono text-xs tracking-[0.2em] text-gray-500 uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
