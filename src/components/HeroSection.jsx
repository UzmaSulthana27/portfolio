import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// List of job titles to rotate through
const titles = [
  "Frontend Developer",
  "React Developer",
  "Full-Stack Enthusiast",
  "UI/UX Advocate",
];

export const HeroSection = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [showShimmer, setShowShimmer] = useState(false);

  // Effect to cycle through the titles and start the shimmer
  useEffect(() => {
    // 1. Title Rotation Interval
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change title every 3 seconds

    // 2. Shimmer Activation Timeout
    // Starts the shimmer after the initial paragraph fade-in (animate-fade-in-delay-3)
    const shimmerTimeout = setTimeout(() => {
        setShowShimmer(true);
    }, 3500); // 3.5s delay for a clean start

    return () => {
        clearInterval(interval);
        clearTimeout(shimmerTimeout);
    };
  }, []);

  // Framer Motion Variants for the rotating text animation
  const textVariants = {
    enter: { y: 20, opacity: 0 },
    center: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { y: -20, opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
  };

  // Conditional class application for the shimmer effect
  const shimmerClass = showShimmer ? 'shimmer-text' : '';

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {/* Sequential Name Fade-in */}
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Uzma
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Sulthana
            </span>

            {/* Rotating Job Title Section (Framer Motion) */}
            <span className="block pt-2 text-3xl md:text-5xl font-extrabold text-secondary h-12 md:h-16 overflow-hidden mx-auto max-w-lg">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTitleIndex} // Key change triggers the exit/enter animation
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="inline-block" 
                >
                  {titles[currentTitleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          {/* Paragraph with Conditional Shimmer Effect */}
          <p 
            // Note: max-w-2xl is used instead of max-2-2xl
            className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 ${shimmerClass}`}
          >
            I'm passionate about software development, problem-solving, and
            building innovative applications. Skilled in full-stack development.
            Always eager to learn, adapt, and contribute to impactful projects.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};