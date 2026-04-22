"use client";

import data from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-cyber-cyan/10 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left */}
          <div className="font-mono text-[10px] tracking-[0.2em] text-gray-600 uppercase">
            <span className="text-cyber-cyan/40">{">"}</span> {data.name} ©{" "}
            {year} — All systems operational
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-widest text-gray-600 hover:text-cyber-cyan transition-colors uppercase"
            >
              GitHub
            </a>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-widest text-gray-600 hover:text-cyber-cyan transition-colors uppercase"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${data.email}`}
              className="font-mono text-[10px] tracking-widest text-gray-600 hover:text-cyber-cyan transition-colors uppercase"
            >
              Email
            </a>
            <a
              href={`tel:${data.phone}`}
              className="font-mono text-[10px] tracking-widest text-gray-600 hover:text-cyber-cyan transition-colors uppercase"
            >
              Phone
            </a>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-6 h-[1px] bg-gradient-to-r from-transparent via-cyber-cyan/10 to-transparent" />
        <div className="text-center mt-4">
          <span className="font-mono text-[9px] tracking-[0.3em] text-gray-700 uppercase">
            Built with Next.js • Deployed on the edge
          </span>
        </div>
      </div>
    </footer>
  );
}
