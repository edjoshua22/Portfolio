"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "@/lib/data";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md border-b border-cyber-cyan/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-heading text-lg font-bold tracking-widest text-cyber-cyan text-glow-cyan"
          >
            {"<"}
            <span className="text-white">{data.name.split(" ")[0].toUpperCase()}</span>
            {"/>"}
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative font-mono text-xs font-medium tracking-[0.2em] text-gray-400 hover:text-cyber-cyan transition-colors duration-300"
              >
                {item.label}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-cyber-cyan shadow-neon-cyan group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1px] bg-cyber-cyan shadow-neon-cyan"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[1px] bg-cyber-cyan shadow-neon-cyan"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1px] bg-cyber-cyan shadow-neon-cyan"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[60px] left-0 w-full bg-black/95 backdrop-blur-lg z-[99] border-b border-cyber-cyan/20 md:hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="font-mono text-sm tracking-[0.2em] text-gray-400 hover:text-cyber-cyan transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
