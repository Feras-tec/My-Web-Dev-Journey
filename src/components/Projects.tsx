import { Folder, ExternalLink } from "lucide-react";

const Projects = () => {
  const projectList = [
    {
      title: "maxpro3d",
      description:
        "An advanced interactive 3D web application for a premium car detailing service. It features a real-time 3D configurator where users can customize car colors and finishes, along with an immersive 3D 'Plaza' environment to showcase luxury vehicles.",
      tech: ["React", "Three.js", "Tailwind CSS", "Vite"],
      githubLink: "https://github.com/Feras-tec/neodrive-dashboard",
      liveLink: "https://maxpro3d.netlify.app/",
    },
    {
      title: "CREATIVE FERAS",
      description:
        "A modern web portfolio showcasing my projects and skills, featuring an integrated interactive Chatbot to engage with visitors. Built for performance and seamless user experience.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      githubLink: "https://github.com/Feras-tec/portfolio",
      liveLink: "https://creativeferas.netlify.app/",
    },
    {
      title: "YogaTags",
      description:
        "A responsive landing page designed for a Yoga studio, built using pure HTML and CSS to ensure high performance and clean UI design.",
      tech: ["HTML", "CSS"],
      githubLink: "https://github.com/Feras-tec/Yoga",
      liveLink: "https://yogatag.netlify.app/",
    },
    {
      title: "Daily Grind",
      description:
        "A sleek and cozy web interface for 'The Daily Grind' cafe, showcasing a craft coffee experience with a clean, user-friendly menu navigation.",
      tech: ["HTML", "CSS", "Tailwind CSS"],
      githubLink: "https://github.com/Feras-tec/daily-grind",
      liveLink: "https://daily-grind0.netlify.app/",
    },
    {
      title: "Celebration 2026",
      description:
        "An interactive New Year 2026 celebration page featuring vibrant animations, glowing typography, and dynamic backgrounds to create an engaging festive user experience.",
      tech: ["JavaScript", "HTML", "CSS"],
      githubLink: "https://github.com/Feras-tec/Celebration-2026",
      liveLink: "https://celebration-2026.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-base-200 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-base-content/70 max-w-md mx-auto">
            A real-world showcase of my built applications, covering full-stack
            architectures, interactive 3D elements, and clean responsive
            designs.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl border border-base-300 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="card-body justify-between">
                <div>
                  {/* Top Icon and Links */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-primary">
                      <Folder size={32} />
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-ghost btn-sm btn-circle text-base-content/70 hover:text-primary flex items-center justify-center"
                      >
                        <svg
                          height="20"
                          width="20"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                      </a>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-ghost btn-sm btn-circle text-base-content/70 hover:text-secondary"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="card-title text-xl font-bold mb-2 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-base-content/70 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((techItem, idx) => (
                    <span
                      key={idx}
                      className="badge badge-sm badge-outline font-mono text-xs py-2 px-2"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
