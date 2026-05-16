import { ArrowRight, Code, Briefcase, GraduationCap } from "lucide-react";

const Hero = () => {
  return (
    <div className="hero min-h-[85vh] bg-base-200 px-4 md:px-8">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12 max-w-6xl">
        {/* Right Section: Visual Code Card */}
        <div className="flex-1 flex justify-center relative">
          <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-primary to-secondary rounded-full blur-3xl opacity-20 absolute animate-pulse"></div>
          <div className="card w-full max-w-sm bg-base-100 shadow-2xl border border-base-300 backdrop-blur">
            <div className="card-body font-mono text-xs md:text-sm">
              <div className="flex gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>
              <p className="text-secondary">const developer = {"{"}</p>
              <p className="pl-4">
                name: <span className="text-info">"Feras"</span>,
              </p>
              <p className="pl-4">
                role:{" "}
                <span className="text-info">"Full-Stack Web Developer"</span>,
              </p>
              <p className="pl-4">
                location: <span className="text-info">"Hamburg, Germany"</span>,
              </p>
              <p className="pl-4">
                background:{" "}
                <span className="text-info">"Business Management"</span>,
              </p>
              <p className="pl-4 text-success">passionateAbout: [</p>
              <p className="pl-8 text-success">
                "Clean Code", "Automation", "3D Web Design"
              </p>
              <p className="pl-4 text-success">]</p>
              <p className="text-secondary">{"}"};</p>
            </div>
          </div>
        </div>

        {/* Left Section: Content & Intro */}
        <div className="flex-1 text-center lg:text-left">
          <div className="badge badge-primary badge-outline mb-4 gap-2 font-medium py-3 px-4">
            <GraduationCap size={16} /> Web Development Student @ DCI
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none mb-6">
            Building Modern <br className="hidden md:inline" />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Web Experiences
            </span>
          </h1>

          <p className="text-lg text-base-content/70 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Ambitious web developer merging software development passion with
            solid professional background in company management. Focused on
            delivering smart, clean, and scalable digital solutions.
          </p>

          {/* Quick Info Badges */}
          <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto lg:mx-0 text-left">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-base-100 rounded-lg text-primary shadow-sm">
                <Code size={18} />
              </div>
              <span className="text-sm font-semibold">Full-Stack Tech</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-base-100 rounded-lg text-secondary shadow-sm">
                <Briefcase size={18} />
              </div>
              <span className="text-sm font-semibold">Management Mindset</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="https://maxpro3d.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary gap-2 shadow-lg shadow-primary/20 inline-flex items-center justify-center"
            >
              View My Projects <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="btn btn-outline inline-flex items-center justify-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
