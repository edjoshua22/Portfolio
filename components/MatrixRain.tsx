"use client";

import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/{}[]|\\!@#$%^&*()_+-=";
    const charArray = chars.split("");
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);


    for (let i = 0; i < drops.length; i++) {
      drops[i] = Math.random() * -100;
    }

    const draw = () => {

      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;


        ctx.fillStyle = "#39FF14";
        ctx.globalAlpha = 0.9;
        ctx.fillText(char, x, y);


        ctx.fillStyle = "#00FF41";
        ctx.globalAlpha = 0.15;
        const prevChar = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(prevChar, x, y - fontSize);


        if (Math.random() > 0.975) {
          ctx.fillStyle = "#FFFFFF";
          ctx.globalAlpha = 0.8;
          ctx.fillText(char, x, y);
        }

        ctx.globalAlpha = 1;


        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ opacity: 0.4 }}
    />
  );
}
