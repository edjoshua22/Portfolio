"use client";

import { motion } from "framer-motion";
import data from "@/lib/data";
import SectionWrapper from "./SectionWrapper";
import SkillIcon from "./SkillIcon";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
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
            {">"} TECH_STACK
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-title text-3xl md:text-4xl mb-16"
        >
          Arsenal
        </motion.h2>

        {/* Skill categories */}
        <div className="space-y-12">
          {data.skills.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.15 }}
            >
              {/* Category label */}
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs font-semibold tracking-[0.25em] text-cyber-magenta uppercase text-glow-magenta">
                  // {category.category}
                </span>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-cyber-magenta/30 to-transparent" />
              </div>

              {/* Skill grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.15 + skillIndex * 0.05,
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(0,255,240,0.3)",
                    }}
                    className="cyber-card p-5 flex flex-col items-center gap-3 group"
                  >
                    {/* Icon */}
                    <div className="text-gray-500 group-hover:text-cyber-cyan transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,255,240,0.6)]">
                      <SkillIcon name={skill.name} size={28} />
                    </div>
                    {/* Name */}
                    <span className="font-mono text-[10px] tracking-wider text-gray-500 group-hover:text-cyber-cyan transition-colors duration-300 uppercase text-center leading-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
