import { Code2, Database, Layout, Terminal } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="text-primary" size={24} />,
      skills: [
        "React 19",
        "JavaScript (ES6+)",
        "TypeScript",
        "Tailwind CSS v4",
        "DaisyUI",
      ],
    },
    {
      title: "Backend & Scripting",
      icon: <Code2 className="text-secondary" size={24} />,
      skills: ["Python", "SQL", "RESTful APIs"],
    },
    {
      title: "Automation & Dev Tools",
      icon: <Terminal className="text-info" size={24} />,
      skills: ["Git & GitHub", "Docker", "n8n Automation", "Vite"],
    },
    {
      title: "Management & Workflow",
      icon: <Database className="text-success" size={24} />,
      skills: ["Agile/Scrum", "Project Planning", "Team Coordination"],
    },
  ];

  return (
    <section className="py-16 bg-base-100 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-base-content/70 max-w-md mx-auto">
            A curated overview of languages, frameworks, and management tools I
            utilize to build modern web solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card bg-base-200 border border-base-300 transition-all duration-500 relative overflow-hidden cursor-pointer shadow-[0_0_20px_rgba(59,130,246,0.12)] hover:shadow-[0_0_35px_rgba(59,130,246,0.35)] hover:border-blue-500/40 hover:-translate-y-2 group"
            >
              <div className="card-body">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-base-100 rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-lg leading-tight text-base-content group-hover:text-blue-500 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-base-content/80 font-medium"
                    >
                      <span className="badge badge-xs badge-primary group-hover:bg-blue-500 group-hover:border-blue-500 transition-colors duration-300"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
