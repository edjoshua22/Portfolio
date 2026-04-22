"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative py-24 md:py-32 ${className}`}
    >
      {/* Side decoration line */}
      <div className="absolute top-0 left-6 md:left-12 w-[1px] h-full bg-gradient-to-b from-transparent via-cyber-cyan/10 to-transparent" />

      {children}
    </section>
  );
}
