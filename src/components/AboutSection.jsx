import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Intro */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-bold text-foreground">
              🚀 Passionate Web Developer & Tech Enthusiast
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I’m a dedicated developer with a strong background in{" "}
              <span className="font-medium">Web Technologies, Java, SQL</span>{" "}
              and frameworks like <span className="font-medium">React.js</span>.{" "}
              My goal is to build{" "}
              <span className="font-medium">
                high-performing, scalable, and user-friendly applications
              </span>{" "}
              that bring ideas to life.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond coding, I’m passionate about{" "}
              <span className="font-medium">problem-solving, clean design,</span>{" "}
              and crafting meaningful digital experiences. With a mindset of{" "}
              <span className="font-medium">continuous learning,</span> I strive
              to stay ahead of industry trends and deliver{" "}
              <span className="font-medium">impactful solutions</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                ✉️ Get In Touch
              </a>
              <a
                href="#"
                className="px-6 py-2 rounded-full border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
              >
                📄 Download CV
              </a>
            </div>
          </div>

          {/* Right Side - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="gradient-border p-6 card-hover bg-card rounded-xl shadow-md">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-4 rounded-full bg-primary/10">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-lg">Web Development</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Responsive, dynamic, and visually appealing websites built
                  with modern frameworks.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="gradient-border p-6 card-hover bg-card rounded-xl shadow-md">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-4 rounded-full bg-primary/10">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Clean, intuitive designs ensuring seamless and engaging user
                  experiences.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="gradient-border p-6 card-hover bg-card rounded-xl shadow-md sm:col-span-2">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-4 rounded-full bg-primary/10">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-lg">Project Management</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Driving projects from concept to launch with a focus on
                  collaboration, efficiency, and results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
