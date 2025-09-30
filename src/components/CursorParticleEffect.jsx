import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

// --- Utility to fetch theme colors dynamically ---
const getThemeColors = () => {
  const root = document.documentElement;
  return [
    `hsl(${getComputedStyle(root).getPropertyValue("--primary")})`,
    `hsl(${getComputedStyle(root).getPropertyValue("--foreground")})`,
    `hsl(${getComputedStyle(root).getPropertyValue("--border")})`,
  ];
};

// Different star characters for variety
const STAR_SHAPES = ["✦", "✧", "✺", "✶", "★", "•"];

const CursorParticleEffect = () => {
  const [particles, setParticles] = useState([]);
  const idRef = useRef(0);
  const rafRef = useRef(null);
  const lastPos = useRef({ x: 0, y: 0 });

  // Config
  const lifespan = 1200; // ms
  const particleCount = 3; // per move
  const maxOffset = 80;

  // --- Generate Particle ---
  const generateParticle = useCallback((x, y, speed) => {
    const colors = getThemeColors();
    const color = colors[Math.floor(Math.random() * colors.length)];
    const char = STAR_SHAPES[Math.floor(Math.random() * STAR_SHAPES.length)];

    const newParticle = {
      id: idRef.current++,
      x,
      y,
      createdAt: Date.now(),
      color,
      char,
      size: Math.random() * 14 + 10, // bigger range for stars
      offsetX: (Math.random() - 0.5) * maxOffset * (1 + speed * 0.25),
      offsetY: (Math.random() - 0.5) * maxOffset * (1 + speed * 0.25),
      scale: 0.7 + Math.random() * 0.8,
      rotate: Math.random() * 360,
      depth: Math.random() < 0.5 ? "back" : "front", // some stars smaller/fainter
    };

    setParticles((prev) => [...prev, newParticle]);
  }, []);

  // --- Mouse Movement Listener ---
  useEffect(() => {
    const handleMouseMove = (e) => {
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy) / 12;
      lastPos.current = { x: e.clientX, y: e.clientY };

      for (let i = 0; i < particleCount; i++) {
        generateParticle(e.clientX, e.clientY, speed);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [generateParticle]);

  // --- Cleanup expired particles ---
  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      setParticles((prev) => prev.filter((p) => now - p.createdAt < lifespan));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [lifespan]);

  // --- Render ---
  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute select-none font-bold"
          style={{
            fontSize: p.size,
            color: p.color,
            opacity: p.depth === "back" ? 0.6 : 1,
            textShadow: `0 0 6px ${p.color}, 0 0 14px ${p.color}`,
          }}
          initial={{
            opacity: 1,
            scale: p.scale,
            rotate: p.rotate,
            x: p.x,
            y: p.y,
          }}
          animate={{
            opacity: 0,
            scale: 0,
            x: p.x + p.offsetX,
            y: p.y + p.offsetY + Math.sin(p.id) * 10, // slight curve
            rotate: p.rotate + 180,
          }}
          transition={{
            duration: lifespan / 1000 + Math.random() * 0.3, // random duration
            ease: "easeOut",
          }}
        >
          {p.char}
        </motion.div>
      ))}
    </div>
  );
};

export default CursorParticleEffect;
