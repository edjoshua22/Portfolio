"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import data from "@/lib/data";

const terminalLines = [
  { prompt: "$ whoami", response: `> ${data.name} — ${data.bio.split(".")[0]}.` },
  {
    prompt: "$ location",
    response: `> ${data.location} ${data.locationFlag}`,
  },
  { prompt: "$ status", response: `> ${data.status}` },
];


export default function About() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className="relative w-full min-h-screen overflow-hidden flex items-center"
    >
      {/* ── Cyberpunk ambient gradient backdrop ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 65% 50%, rgba(0,255,240,0.06) 0%, rgba(0,80,80,0.04) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 80% at 75% 45%, rgba(255,0,255,0.04) 0%, transparent 60%)",
        }}
      />

      {/* ── Side decoration line ── */}
      <div className="absolute top-0 left-6 md:left-12 w-[1px] h-full bg-gradient-to-b from-transparent via-cyber-cyan/10 to-transparent" />

      {/* ── Avatar — large, right-aligned, cinematic ── */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute right-0 top-0 w-[55%] h-full hidden md:block"
        style={{ zIndex: 1 }}
      >
        <div className="absolute inset-0 overflow-hidden">
          {/* Dark base layer to kill any white bleed */}
          <div className="absolute inset-0 bg-black" />
          <img
            src="/avatar.jpg"
            alt={data.name}
            className="w-full h-full object-cover object-top"
            style={{
              filter: "saturate(0.5) contrast(1.2) brightness(0.6)",
              maskImage:
                "linear-gradient(to left, black 10%, transparent 85%)",
              WebkitMaskImage:
                "linear-gradient(to left, black 10%, transparent 85%)",
              transform: `translateY(${scrollY * 0.03}px)`,
            }}
          />
          {/* Cyan tint overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,255,240,0.08) 0%, rgba(255,0,255,0.05) 50%, rgba(0,0,0,0.5) 100%)",
              mixBlendMode: "color",
            }}
          />
          {/* Top fade to black */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, black 0%, transparent 30%)",
            }}
          />
          {/* Bottom fade to black */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, black 0%, transparent 40%)",
            }}
          />
          {/* Left fade to black */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, black 0%, transparent 55%)",
            }}
          />
          {/* Right fade to black */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to left, black 0%, transparent 25%)",
            }}
          />

          {/* Scanline overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-15"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,240,0.04) 2px, rgba(0,255,240,0.04) 4px)",
            }}
          />
          {/* Corner accents on avatar */}
          <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-cyber-cyan/30 z-10" />
          <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-cyber-cyan/30 z-10" />
        </div>
      </motion.div>

      {/* ── Mobile avatar (background for small screens) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 md:hidden pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <img
          src="/avatar.jpg"
          alt={data.name}
          className="w-full h-full object-cover object-top"
          style={{
            filter: "saturate(0.3) contrast(1.1) brightness(0.25)",
            opacity: 0.4,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, black 15%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.7) 100%)",
          }}
        />
      </motion.div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
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

        {/* Main grid */}
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

          {/* Right: empty on desktop (avatar is the bg), avatar card on mobile is the bg */}
          <div className="hidden md:block" />
        </div>


      </div>

      {/* ── Decorative corner marks ── */}
      <div className="absolute top-6 left-6 w-6 h-6 pointer-events-none hidden md:block border-t border-l border-cyber-cyan/20" />
      <div className="absolute bottom-6 right-6 w-6 h-6 pointer-events-none hidden md:block border-b border-r border-cyber-cyan/20" />

      {/* ── Bottom gradient line ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,255,240,0.2), transparent)",
        }}
      />
    </section>
  );
}
