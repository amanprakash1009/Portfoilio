import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  // SiSupabase,
  // SiCloudflare,
  // SiRedux,
  // SiSequelize,
  // SiDocker,
} from "react-icons/si";

export const Skills = () => {
  const skills = [
    {
      name: "React",
      icon: SiReact,
      size: 60,
      className: "text-cyan-400 drop-shadow-[0_0_10px_#22d3ee]",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      size: 60,
      className: "text-white drop-shadow-[0_0_8px_#ffffffaa]",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      size: 60,
      className: "text-sky-400 drop-shadow-[0_0_10px_#38bdf8]",
    },
    {
      name: "Express",
      icon: SiExpress,
      size: 60,
      className: "text-yellow-400 drop-shadow-[0_0_10px_#f1f5f9]",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      size: 60,
      className: "text-blue-500 drop-shadow-[0_0_10px_#3b82f6]",
    },
    // {
    //   name: "Docker",
    //   icon: SiDocker,
    //   size: 60,
    //   className: "text-blue-500 drop-shadow-[0_0_10px_#3b82f6]",
    // },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      size: 60,
      className: "text-green-500 drop-shadow-[0_0_10px_#22c55e]",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      size: 60,
      className: "text-green-400 drop-shadow-[0_0_10px_#22c55e]",
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      size: 60,
      className: "text-sky-500 drop-shadow-[0_0_10px_#0ea5e9]",
    },
    {
      name: "Prisma",
      icon: SiPrisma,
      size: 60,
      className: "text-gray-300 drop-shadow-[0_0_10px_#e2e8f0]",
    },
    // {
    //   name: "Supabase",
    //   icon: SiSupabase,
    //   size: 60,
    //   className: "text-emerald-400 drop-shadow-[0_0_10px_#10b981]",
    // },
    // {
    //   name: "Cloudflare",
    //   icon: SiCloudflare,
    //   size: 60,
    //   className: "text-orange-400 drop-shadow-[0_0_10px_#fb923c]",
    // },
    // {
    //   name: "Redux",
    //   icon: SiRedux,
    //   size: 60,
    //   className: "text-gray-300 drop-shadow-[0_0_10px_#fde047]",
    // },
    // {
    //   name: "Sequelize",
    //   icon: SiSequelize,
    //   size: 60,
    //   className: "text-[#52B0E7] drop-shadow-[0_0_10px_#3b82f6]",
    // },
  ];
  return (
    <section
      id="skills"
      className="relative text-white px-4 flex flex-col items-center md:mt-25 sm:px-6 md:px-10 md:py-10"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl mb-10 animate-pulse saira-font text-white">
        Skills
      </h1>

      <div className="grid w-full text-center mt-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-12">
        {skills.map((skill) => {
          return (
            <div className="lg:col-span-2 flex flex-col items-center justify-center gap-2 p-6 hover:bg-gray-900/70 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
              <skill.icon size={60} className={skill.className} />
              <div className="text-lg font-semibold text-white">
                {skill.name}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
