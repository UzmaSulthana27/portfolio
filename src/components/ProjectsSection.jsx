import { ArrowRight, ExternalLink, Github, CheckCircle2 } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Ecommerce Website",
    Description:
      "A modern e-commerce platform that allows users to browse, add products to the cart, and complete purchases seamlessly.",
    image: "/Projects/ecommerce.png",
    demoUrl: "https://shopwave-e.vercel.app/",
    githubUrl: "https://github.com/UzmaSulthana27/ecommerce",
    points: [
      "Dynamic product listing and search",
      "Cart and checkout workflow with validation",
      "Responsive, mobile-first design",
      "Reusable React components and hooks",
    ],
  },
  {
    id: 2,
    title: "Detection of Phishing Website",
    Description:
      "A machine learning-based web app to detect phishing websites, helping users stay safe online.",
    image: "/Projects/phising.png",
    demoUrl: "",
    githubUrl: "https://github.com/UzmaSulthana27/Phishing-website",
    points: [
      "Trained ML model for website classification",
      "Flask API backend for real-time predictions",
      "Clean, simple user interface",
      "Improves cybersecurity awareness",
    ],
  },
   {
    id: 3,
    title: "CineVerse",
    Description:
       "“A responsive and interactive movie discovery website built with React — delivering a cinematic browsing experience.",
    image: "/Projects/Cineverse.png",
    demoUrl: "https://cine-verse-two.vercel.app/",
    githubUrl: "https://github.com/UzmaSulthana27/CineVerse",
    points: [
      "Highlights trending and popular movies with smooth transitions.",
      "Fetches real-time movie data using a third-party API",
      "Login/signup popup for personalized user access",
      "Quickly find movies by category, rating, or keyword.",
    ],
  },
  {
    id: 4,
    title: "Imgnest",
    Description:
      "A sleek platform to search, preview, and download high-quality images from the Unsplash API effortlessly.",
    image: "/Projects/imgnest.png",
    demoUrl: "https://imgnest.netlify.app/",
    githubUrl: "https://github.com/UzmaSulthana27/ImgNest",
    points: [
      "Instant search with preview & download",
      "Integration with Unsplash API",
      "Smooth and responsive React UI",
      "User-friendly interface with grid layout",
    ],
  },
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          🚀 Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A journey through my projects — combining design, performance, and modern tech stacks.
        </p>

        {/* Projects */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col md:flex-row items-start gap-10 md:gap-16 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Project Image */}
              <div className="w-full md:w-1/2 transform transition duration-700 hover:scale-105 hover:rotate-1">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl shadow-xl transition duration-700 ease-in-out hover:shadow-2xl"
                />
              </div>

              {/* Project Details */}
              <div className="w-full md:w-1/2 flex flex-col justify-start animate-fadeIn">
                <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                  {project.Description}
                </p>

                {/* Key Points */}
                <ul className="space-y-2 mb-6">
                  {project.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <CheckCircle2 className="text-primary mt-0.5" size={18} />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="px-6 py-2 bg-primary text-white rounded-md flex items-center gap-2 hover:scale-105 transition shadow-md"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="px-6 py-2 bg-gray-900 text-white rounded-md flex items-center gap-2 hover:scale-105 transition shadow-md"
                  >
                    <Github size={18} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Profile Button */}
        <div className="text-center mt-24">
          <a
            className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition flex items-center gap-2 mx-auto w-fit"
            href="https://github.com/UzmaSulthana27"
            target="_blank"
          >
            Explore More on GitHub <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* Inline animation */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};
