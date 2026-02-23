import { WobbleCard } from "../Components/UI/WobbleCard";

const About = () => {
  return (
    <section id="about" className="relative px-4 sm:px-6 md:px-10">
      <h1 className="text-3xl text-center sm:text-4xl md:text-5xl mt-4 md:mt-10 md:pl-24 lg:pl-0 saira-font text-white">
        About Me
      </h1>

      <div className="flex flex-col justify-center items-center w-full max-w-7xl mx-auto mt-6 pb-10 space-y-6">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <WobbleCard containerClassName="flex-1 h-full bg-white/5 min-h-[250px] lg:min-h-[300px] relative">
            <div className="max-w-xs md:max-w-sm">
              <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Full Stack Developer in the Making
              </h2>
              <p className="mt-4 text-left text-sm md:text-base text-neutral-200">
                As a CSE student, I love building things on the web — from sleek
                frontends to powerful backends. I work with React, Next.js,
                Tailwind, and Prisma to craft responsive, scalable applications.
                Beyond web dev, I’m curious about AI & ML, always exploring how
                intelligent systems can shape the future.
              </p>
            </div>
            <img
              src="/image.png"
              alt="linear demo image"
              className="absolute -right-2 md:-right-[15%] lg:-right-[30%] -bottom-6 w-40 sm:w-56 md:w-72 lg:w-96 object-contain rounded-2xl grayscale"
            />
          </WobbleCard>

          <WobbleCard containerClassName="flex-1 min-h-[250px] relative">
            <div>
              <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Code. Create. Break. Fix. Repeat.
              </h2>
              <p className="mt-4 max-w-md text-left text-sm md:text-base text-neutral-200">
                I believe in disciplined learning — 15-day plans, structured
                study, and steady progress. That same discipline shows outside
                coding too, from my protein-rich diet to my skincare routine.
              </p>
            </div>
          </WobbleCard>
        </div>

        {/* Bottom Row */}
        <WobbleCard containerClassName="w-full bg-blue-500/10 min-h-[300px] md:min-h-[400px] lg:min-h-[300px] relative">
          <div className="max-w-sm md:max-w-md">
            <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Future Explorer
            </h2>
            <p className="mt-4 max-w-md text-left text-sm md:text-base text-neutral-200">
              I’m on a journey to explore AI, Web3, and DevOps — with the dream
              of building state-of-the-art models like DeepSeek GPT. My goal is
              to scale projects, contribute to open source, and keep pushing
              into the unknown.
            </p>
          </div>
          <img
            src="/Ai.webp"
            alt="linear demo image"
            className="absolute -right-4 md:-right-[20%] lg:-right-[10%] -bottom-6 w-44 sm:w-60 md:w-80 lg:w-96 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </section>
  );
};

export default About;
