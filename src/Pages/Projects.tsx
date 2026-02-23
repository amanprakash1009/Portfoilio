// import { ProjectCard, type Project } from "./UI/ProjectCard";
import { ProjectCard, type Project } from "../Components/UI/ProjectCard";

const Projects = () => {
  const projects: Project[] = [
    {
      title: "E-Governance Chatbot",
      description:
        "Created a MERN-based chatbot platform that automates public service queries, reduces manual workload, and improves response efficiency.",
      image: "/neuro.png",
      alt: "Preview of NeuroNest Website",
      tags: ["React", "NodeJS", "Express", "MongoDB"],
      githubUrl: "https://github.com/amanprakash1009/gov-assist-chatbot",
    },
    {
      title: "Carbon Footprint Tracker",
      description:
        "Designed a sustainability tracking platform integrating emission calculation algorithms and monthly carbon usage reports.",
      image: "/carbon.png",
      alt: "Preview of Carbon Tracker Website",
      tags: ["React", "NodeJS", "MongoDB", "Express"],
      githubUrl: "https://github.com/amanprakash1009/carbonfoot_print",
    },
    {
      title: "Upcoming: Real-Time Stock Portfolio Tracker",
      description:
        "A real-time stock portfolio tracker with live price updates, analytics dashboard, and JWT-based authentication.",
      image: "/stock.png",
      alt: "Preview of Real-Time Stock Portfolio Tracker Website",
      tags: ["React", "Express", "PostgreSQL", "Prisma"],
      githubUrl:
        "https://github.com/amanprakash1009/Real-Time-Stock-Portfolio-Tracker",
    },
  ];

  return (
    <section
      id="projects"
      className="relative mt-15 text-white px-4 flex flex-col items-center md:mt-25 sm:px-6 md:px-10 md:py-10"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl mb-10 animate-bounce saira-font text-white">
        My Projects
      </h1>

      <div className="grid w-full max-w-7xl gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;