// src/components/SkillsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Code, Server, Wrench } from "lucide-react";

// Import tech logos
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiSpringboot,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedux,
  SiWebpack,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiRender,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// Define skills grouped by category
const skills = {
  frontend: {
    title: "Frontend Development",
    icon: <Code className="w-6 h-6 text-blue-400" />,
    items: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
    ],
  },
  backend: {
    title: "Backend Development",
    icon: <Server className="w-6 h-6 text-green-400" />,
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-600" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "REST APIs", icon: <Server className="w-4 h-4 text-gray-300" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    ],
  },
  tools: {
    title: "Tools & Technologies",
    icon: <Wrench className="w-6 h-6 text-pink-400" />,
    items: [
      { name: "VS Code", icon: <VscVscode className="text-blue-400" /> },
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
      { name: "Webpack", icon: <SiWebpack className="text-blue-400" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Netlify", icon: <SiNetlify className="text-cyan-400" /> },
      { name: "Render", icon: <SiRender className="text-indigo-400" /> },
    ],
  },
};

// Skill Card Component (with Blur Mirror Effect)
const SkillCard = ({ title, icon, items }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
    whileHover={{ scale: 1.03 }}
    viewport={{ once: true, amount: 0.3 }}
    
    // Core Blur Mirror Classes
    className="relative flex flex-col p-6 rounded-2xl border border-white/20 
               bg-white/5 backdrop-blur-xl shadow-2xl group overflow-hidden 
               transition-all duration-300 hover:border-white/40"
  >
    
    {/* Inner Reflection / Shine (The "Mirror" Touch) */}
    <div className="absolute inset-0 rounded-2xl opacity-0 
                     bg-gradient-to-br from-white/20 to-transparent 
                     transition-opacity duration-500 group-hover:opacity-100 
                     pointer-events-none z-0">
    </div>

    {/* Outer Glow Effect (Ambient Light) */}
    <div className="absolute inset-0 rounded-2xl 
                    bg-gradient-to-tr from-purple-500/30 via-pink-500/20 to-indigo-500/30
                    opacity-40 blur-3xl -z-10
                    transition-all duration-500 group-hover:opacity-60"></div>

    {/* Header (z-10 ensures it stays above the reflection layer) */}
    <div className="flex items-center gap-3 mb-4 z-10">
      <div className="p-2 rounded-lg bg-white/10">{icon}</div>
      <h2 className="text-xl font-semibold text-white">{title}</h2>
    </div>

    {/* Skills (z-10 ensures it stays above the reflection layer) */}
    <div className="flex flex-wrap gap-3 z-10">
      {items.map((item, i) => (
        <motion.span
          key={i}
          whileHover={{
            scale: 1.1,
            backgroundColor: "rgba(255,255,255,0.25)", // Stronger hover background
          }}
          transition={{ duration: 0.15 }}
          className="flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 
                     rounded-full text-gray-200 text-sm cursor-pointer transition-all 
                     hover:border-white/40 shadow-md"
        >
          {item.icon} <span className="whitespace-nowrap">{item.name}</span>
        </motion.span>
      ))}
    </div>
  </motion.div>
);

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      // Assuming the parent component provides a dark background for the text-white to work well
      className="py-24 px-6 md:px-12 lg:px-24 bg-transparent text-white"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Title with motion for entrance effect */}
        <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-center mb-16 relative"
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Skills</span>
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-3">
          {/* Skill Cards using the data object */}
          <SkillCard {...skills.frontend} />
          <SkillCard {...skills.backend} />
          <SkillCard {...skills.tools} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;