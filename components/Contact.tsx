"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import data from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Simulate send
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 1500);
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-4xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-2"
        >
          <span className="section-label text-glow-green">
            {">"} INIT_CONTACT
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-title text-3xl md:text-4xl mb-4"
        >
          Establish Connection
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-mono text-sm text-gray-500 mb-12 max-w-lg"
        >
          Got a project in mind or want to collaborate? Send a transmission and
          I&apos;ll get back to you at lightspeed.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="font-mono text-[10px] tracking-[0.2em] text-gray-600 uppercase mb-2 block">
                  {">"} name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="enter your name..."
                  className="cli-input"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="font-mono text-[10px] tracking-[0.2em] text-gray-600 uppercase mb-2 block">
                  {">"} email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="enter your email..."
                  className="cli-input"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="font-mono text-[10px] tracking-[0.2em] text-gray-600 uppercase mb-2 block">
                  {">"} message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="type your message..."
                  rows={5}
                  className="cli-input resize-none"
                  required
                />
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="neon-btn w-full justify-center relative overflow-hidden disabled:opacity-50"
              >
                {sending ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-pulse">TRANSMITTING</span>
                    <span className="animate-blink">...</span>
                  </span>
                ) : sent ? (
                  <span className="text-cyber-green">
                    ✓ MESSAGE_SENT_SUCCESSFULLY
                  </span>
                ) : (
                  <>
                    <span className="text-xs">[</span>SEND_MESSAGE
                    <span className="text-xs">]</span>
                    <span className="ml-1">{">>"}</span>
                  </>
                )}

                {/* Scanline on click */}
                {sending && (
                  <motion.div
                    initial={{ top: "-100%" }}
                    animate={{ top: "100%" }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="absolute left-0 w-full h-[2px] bg-cyber-cyan/60 shadow-neon-cyan"
                  />
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-4"
          >
            <span className="font-mono text-[10px] tracking-[0.2em] text-gray-600 uppercase block mb-4">
              {">"} connect
            </span>

            {/* GitHub */}
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 cyber-card group"
            >
              <svg
                className="w-5 h-5 text-gray-500 group-hover:text-cyber-cyan transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <div>
                <div className="font-mono text-xs text-gray-400 group-hover:text-cyber-cyan transition-colors">
                  GitHub
                </div>
                <div className="font-mono text-[10px] text-gray-600">
                  @edjoshua22
                </div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 cyber-card group"
            >
              <svg
                className="w-5 h-5 text-gray-500 group-hover:text-cyber-cyan transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <div>
                <div className="font-mono text-xs text-gray-400 group-hover:text-cyber-cyan transition-colors">
                  LinkedIn
                </div>
                <div className="font-mono text-[10px] text-gray-600">
                  /in/ed-ligan
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${data.email}`}
              className="flex items-center gap-3 p-4 cyber-card group"
            >
              <svg
                className="w-5 h-5 text-gray-500 group-hover:text-cyber-cyan transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <div>
                <div className="font-mono text-xs text-gray-400 group-hover:text-cyber-cyan transition-colors">
                  Email
                </div>
                <div className="font-mono text-[10px] text-gray-600">
                  {data.email}
                </div>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${data.phone}`}
              className="flex items-center gap-3 p-4 cyber-card group"
            >
              <svg
                className="w-5 h-5 text-gray-500 group-hover:text-cyber-cyan transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <div>
                <div className="font-mono text-xs text-gray-400 group-hover:text-cyber-cyan transition-colors">
                  Phone
                </div>
                <div className="font-mono text-[10px] text-gray-600">
                  {data.phone}
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
