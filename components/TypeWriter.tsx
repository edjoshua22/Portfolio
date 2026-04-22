"use client";

import { useState, useEffect } from "react";

interface TypeWriterProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export default function TypeWriter({
  text,
  className = "",
  speed = 60,
  delay = 0,
}: TypeWriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed]);

  return (
    <span className={className}>
      {displayed}
      <span className="animate-blink text-cyber-cyan">▌</span>
    </span>
  );
}
