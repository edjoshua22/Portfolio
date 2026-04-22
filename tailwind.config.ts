import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: "#000000",
          cyan: "#00FFF0",
          magenta: "#FF00FF",
          green: "#39FF14",
          darkCyan: "#003333",
          darkMagenta: "#330033",
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      letterSpacing: {
        widest: "0.2em",
        mega: "0.35em",
      },
      boxShadow: {
        "neon-cyan": "0 0 8px #00FFF0, 0 0 20px rgba(0,255,240,0.3)",
        "neon-magenta": "0 0 8px #FF00FF, 0 0 20px rgba(255,0,255,0.3)",
        "neon-green": "0 0 8px #39FF14, 0 0 20px rgba(57,255,20,0.3)",
        "neon-cyan-intense":
          "0 0 12px #00FFF0, 0 0 40px rgba(0,255,240,0.4), 0 0 80px rgba(0,255,240,0.1)",
      },
      animation: {
        "glitch": "glitch 4s infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "scanline": "scanline 8s linear infinite",
        "blink": "blink 1s step-end infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        glitch: {
          "0%, 90%, 100%": { transform: "translate(0)" },
          "91%": { transform: "translate(-2px, 1px)" },
          "92%": { transform: "translate(2px, -1px)" },
          "93%": { transform: "translate(-1px, -1px)" },
          "94%": { transform: "translate(1px, 2px)" },
          "95%": { transform: "translate(-1px, 1px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 8px #00FFF0, 0 0 20px rgba(0,255,240,0.3)" },
          "50%": { boxShadow: "0 0 16px #00FFF0, 0 0 40px rgba(0,255,240,0.5)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
