"use client";

import { motion } from "framer-motion";
import data from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-2"
        >
          <span className="section-label text-glow-green">
            {">"} RECENT_PROJECTS
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-title text-3xl md:text-4xl mb-16"
        >
          Deployed Systems
        </motion.h2>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {data.projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="group cyber-card p-0 overflow-hidden"
            >
              {/* Top accent line */}
              <div className="h-[2px] bg-gradient-to-r from-cyber-cyan via-cyber-magenta to-transparent" />

              <div className="p-6 md:p-8">
                {/* Project number + featured badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs tracking-[0.3em] text-cyber-cyan/60">
                    #{project.number}
                  </span>
                  {project.featured && (
                    <span className="font-mono text-[10px] tracking-widest text-cyber-green border border-cyber-green/30 px-2 py-0.5 uppercase">
                      Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl md:text-2xl font-bold tracking-wider text-white mb-3 group-hover:text-cyber-cyan transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-mono text-sm text-gray-500 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-btn text-xs py-2 px-4"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GITHUB
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neon-btn neon-btn-magenta text-xs py-2 px-4"
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                      LIVE_DEMO
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
