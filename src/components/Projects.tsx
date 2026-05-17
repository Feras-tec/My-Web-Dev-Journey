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
      image: "/maxpro3d.png",
    },
    {
      title: "CREATIVE FERAS",
      description:
        "A modern web portfolio showcasing my projects and skills, featuring an integrated interactive Chatbot to engage with visitors. Built for performance and seamless user experience.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      githubLink: "https://github.com/Feras-tec/portfolio",
      liveLink: "https://creativeferas.netlify.app/",
      image: "/CREATIVE FERAS.jpg",
    },
    {
      title: "YogaTags",
      description:
        "A responsive landing page designed for a Yoga studio, built using pure HTML and CSS to ensure high performance and clean UI design.",
      tech: ["HTML", "CSS"],
      githubLink: "https://github.com/Feras-tec/Yoga",
      liveLink: "https://yogatag.netlify.app/",
      image: "/YogaTags.jpg",
    },
    {
      title: "Daily Grind",
      description:
        "A sleek and cozy web interface for 'The Daily Grind' cafe, showcasing a craft coffee experience with a clean, user-friendly menu navigation.",
      tech: ["HTML", "CSS", "Tailwind CSS"],
      githubLink: "https://github.com/Feras-tec/daily-grind",
      liveLink: "https://daily-grind0.netlify.app/",
      image: "/Daily Grind.jpg",
    },
    {
      title: "Celebration 2026",
      description:
        "An interactive New Year 2026 celebration page featuring vibrant animations, glowing typography, and dynamic backgrounds to create an engaging festive user experience.",
      tech: ["JavaScript", "HTML", "CSS"],
      githubLink: "https://github.com/Feras-tec/Celebration-2026",
      liveLink: "https://celebration-2026.netlify.app/",
      image: "/Celebration 2026.jpg",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-base-200 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="relative mb-4 group">
            <div className="absolute inset-0 bg-red-500 rounded-full blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
            <img
              src="/feras.jpg"
              alt="Feras - Full-Stack Web Developer Portfolio Preview Image"
              className="w-24 h-24 rounded-full object-cover border-2 border-red-500/50 relative z-10 shadow-lg"
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-base-content">
            Featured{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-base-content font-extrabold max-w-xl mx-auto leading-relaxed opacity-90">
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
              className="card bg-base-100 border border-base-300 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden shadow-[0_0_20px_rgba(239,68,68,0.08)] hover:shadow-[0_0_30px_rgba(239,68,68,0.25)] hover:border-red-500/40"
            >
              {/* Project Image Card */}
              <figure className="relative h-48 w-full bg-base-300 overflow-hidden border-b border-base-300">
                <img
                  src={project.image}
                  alt={`Desktop layout screenshot preview of the development project named ${project.title}`}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </figure>

              <div className="card-body p-6 justify-between">
                <div>
                  {/* Top Icon and Links */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-red-500">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-folder"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <title>Folder Icon</title>
                        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                      </svg>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-ghost btn-sm btn-circle text-base-content hover:text-red-500 flex items-center justify-center transition-colors"
                        aria-label={`Open and read full GitHub source repository architecture code for ${project.title}`}
                      >
                        <svg
                          height="20"
                          width="20"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <title>GitHub Code Repository Platform Logo</title>
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                      </a>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-ghost btn-sm btn-circle text-base-content hover:text-red-500 flex items-center justify-center transition-colors"
                        aria-label={`Maps directly to deployment production live preview page of ${project.title}`}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-external-link"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <title>
                            External Live Hyperlink Redirection Icon
                          </title>
                          <path d="M15 3h6v6" />
                          <path d="M10 14 21 3" />
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Content - text-base-content auto switches color dynamically */}
                  <h3 className="card-title text-xl font-black mb-3 tracking-tight text-base-content">
                    {project.title}
                  </h3>
                  <p className="text-sm text-base-content font-extrabold leading-relaxed mb-6 opacity-90">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((techItem, idx) => (
                    <span
                      key={idx}
                      className="badge badge-sm badge-outline font-mono font-black text-xs py-2.5 px-2.5 text-base-content border-base-300 bg-base-300/30 transition-all duration-300 hover:bg-red-500 hover:text-white hover:border-red-500"
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
