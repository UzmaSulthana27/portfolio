import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";
import { SiMysql, SiPostman } from "react-icons/si";

// Skill data with icons
const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "JavaScript", level: 90, category: "frontend", icon: <FaJs className="text-yellow-400" /> },
  { name: "React JS", level: 90, category: "frontend", icon: <FaReact className="text-sky-400" /> },

  { name: "Java", level: 80, category: "programming", icon: <FaJava className="text-red-500" /> },
  { name: "Python", level: 70, category: "programming", icon: <FaPython className="text-blue-500" /> },

  { name: "MySQL", level: 90, category: "database", icon: <SiMysql className="text-blue-600" /> },

  { name: "Git/GitHub", level: 80, category: "tools", icon: <FaGithub className="text-gray-800" /> },
  { name: "Eclipse", level: 80, category: "tools", icon: <FaCode className="text-purple-600" /> },
  { name: "Postman", level: 85, category: "tools", icon: <SiPostman className="text-orange-600" /> },
];

const categories = ["all", "frontend", "programming", "database", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [animated, setAnimated] = useState(false);

  // Animate circles when mounted
  useEffect(() => {
    const timeout = setTimeout(() => setAnimated(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize shadow-sm",
                activeCategory === category
                  ? "bg-primary text-primary-foreground scale-105"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 flex flex-col items-center"
            >
              {/* Icon + Name */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">{skill.icon}</div>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              {/* Circular Level Badge */}
              <div
                className={cn(
                  "w-20 h-20 flex items-center justify-center rounded-full font-bold text-white text-lg shadow-md transition-all duration-700",
                  "bg-gradient-to-tr from-primary to-primary/70",
                  animated ? "scale-100 opacity-100" : "scale-0 opacity-0"
                )}
              >
                {skill.level}%
              </div>
              <p className="text-sm text-muted-foreground mt-2">Proficiency</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
