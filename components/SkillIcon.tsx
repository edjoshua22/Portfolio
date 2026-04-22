"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiLinux,
  SiFigma,
  SiJavascript,
  SiFirebase,
  SiArduino,
} from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import { TbApi, TbBrandSocketIo, TbBrandReactNative } from "react-icons/tb";
import { SiRedis, SiPrisma, SiStripe, SiOpenai } from "react-icons/si";
import { GoGear } from "react-icons/go";
import type { IconType } from "react-icons";

// Map skill names to their corresponding react-icon components
const iconMap: Record<string, IconType> = {
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "TypeScript": SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Framer Motion": SiFramer,
  "HTML5 / CSS3": SiHtml5,
  "Node.js": SiNodedotjs,
  "Express": SiExpress,
  "Python": SiPython,
  "PostgreSQL": SiPostgresql,
  "MongoDB": SiMongodb,
  "REST APIs": TbApi,
  "Git / GitHub": SiGithub,
  "Docker": SiDocker,
  "Vercel": SiVercel,
  "Linux": SiLinux,
  "CI/CD": GoGear,
  "Figma": SiFigma,
  // Project tech stack icons
  "Socket.io": TbBrandSocketIo,
  "Redis": SiRedis,
  "Prisma": SiPrisma,
  "Stripe": SiStripe,
  "OpenAI API": SiOpenai,
  "React Native": TbBrandReactNative,
  "JavaScript": SiJavascript,
  "Firebase": SiFirebase,
  "Arduino IDE": SiArduino,
};

interface SkillIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function SkillIcon({ name, className = "", size = 24 }: SkillIconProps) {
  const Icon = iconMap[name];

  if (!Icon) {
    // Fallback: render a terminal-style bracket icon
    return (
      <span
        className={`inline-flex items-center justify-center font-mono font-bold text-current ${className}`}
        style={{ fontSize: size * 0.6 }}
      >
        {"</>"}
      </span>
    );
  }

  return <Icon size={size} className={className} />;
}

// Export the map so other components can check if an icon exists
export { iconMap };
