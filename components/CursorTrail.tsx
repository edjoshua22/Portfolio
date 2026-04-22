"use client";

import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const trailsRef = useRef<HTMLDivElement[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const positions = useRef<{ x: number; y: number }[]>([]);
  const TRAIL_COUNT = 8;

  useEffect(() => {
    // Create trail elements
    const container = document.createElement("div");
    container.style.cssText =
      "position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;";
    document.body.appendChild(container);

    const trails: HTMLDivElement[] = [];
    for (let i = 0; i < TRAIL_COUNT; i++) {
      const el = document.createElement("div");
      const size = Math.max(3, 8 - i);
      const opacity = Math.max(0.1, 0.7 - i * 0.08);
      el.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        background: #00FFF0;
        border-radius: 50%;
        pointer-events: none;
        opacity: ${opacity};
        box-shadow: 0 0 ${6 + (TRAIL_COUNT - i) * 2}px rgba(0,255,240,${0.3 + (TRAIL_COUNT - i) * 0.05});
        transition: transform 0.05s ease;
        transform: translate(-50%, -50%);
        z-index: 9999;
      `;
      container.appendChild(el);
      trails.push(el);
    }
    trailsRef.current = trails;

    // Initialize positions
    positions.current = Array(TRAIL_COUNT).fill({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animId: number;
    const animate = () => {
      const newPositions = [...positions.current];
      newPositions[0] = { ...mousePos.current };

      for (let i = 1; i < TRAIL_COUNT; i++) {
        const prev = newPositions[i - 1];
        const curr = newPositions[i];
        newPositions[i] = {
          x: curr.x + (prev.x - curr.x) * 0.35,
          y: curr.y + (prev.y - curr.y) * 0.35,
        };
      }

      positions.current = newPositions;

      trails.forEach((el, i) => {
        el.style.left = `${newPositions[i].x}px`;
        el.style.top = `${newPositions[i].y}px`;
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
      container.remove();
    };
  }, []);

  return null;
}
