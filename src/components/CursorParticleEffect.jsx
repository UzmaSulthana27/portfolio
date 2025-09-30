import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

// --- Particle Settings ---
const PARTICLE_COUNT = 1; // Number of particles generated per mouse move event
const PARTICLE_LIFESPAN = 500; // milliseconds
const PARTICLE_COLORS = ['text-cyan-400', 'text-pink-400', 'text-white']; 

const CursorParticleEffect = () => {
  // State to hold all active particles
  const [particles, setParticles] = useState([]);
  let particleId = 0; // Simple counter for unique IDs

  // Function to generate and clean up particles
  const generateParticle = useCallback((x, y) => {
    // 1. Create the particle object
    const newParticle = {
      id: particleId++,
      x: x,
      y: y,
      color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
      // Random offset for splash effect
      offsetX: (Math.random() - 0.5) * 50, // -25 to +25
      offsetY: (Math.random() - 0.5) * 50, // -25 to +25
    };

    // 2. Add particle to state
    setParticles(prevParticles => [...prevParticles, newParticle]);

    // 3. Set a timeout to remove the particle after its lifespan (cleanup)
    setTimeout(() => {
      setParticles(prevParticles => prevParticles.filter(p => p.id !== newParticle.id));
    }, PARTICLE_LIFESPAN);
  }, []); // Empty dependency array means this function is created once

  // Effect to handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        // Debounce particle creation slightly to avoid excessive rendering
        if (Math.random() > 0.8) { 
            generateParticle(e.clientX, e.clientY);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [generateParticle]);


  // Render the particles
  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className={`absolute text-xl leading-none font-bold ${p.color}`}
          initial={{ 
            opacity: 1, 
            scale: 0.8, 
            x: p.x, 
            y: p.y,
            textShadow: `0 0 5px currentColor, 0 0 10px currentColor` // Subtle glow
          }}
          animate={{
            opacity: 0, // Fade out
            scale: 0, // Shrink
            x: p.x + p.offsetX, // Splash movement
            y: p.y + p.offsetY, // Splash movement
          }}
          transition={{ duration: PARTICLE_LIFESPAN / 1000, ease: 'easeOut' }}
          // Particle content (the "bit") - you can use any character or icon
        >
          {/* Example character: a small star, dot, or binary bit */}
          *
        </motion.div>
      ))}
    </div>
  );
};

export default CursorParticleEffect;