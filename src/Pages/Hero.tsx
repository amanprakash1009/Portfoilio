import BlurText from "../Components/UI/BlurText";
import ShinyText from "../Components/UI/ShinyText";
import Resume from "../Components/UI/Resume";
import Skill from "../Components/UI/Skill";
import { Typewriter } from "react-simple-typewriter";
import ScrollButton from "../Components/UI/Scroll";
import { CiLocationOn } from "react-icons/ci";

const Hero = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-between">
      {/* Hero Content */}
      <div className="relative flex flex-col mb-8 items-center gap-3 sm:gap-8 pt-40">
        {/* Name */}
        <div className="flex flex-col items-center justify-center">
          <BlurText
            text="AMAN PRAKASH"
            direction="top"
            delay={100}
            className="saira-font text-white text-3xl sm:text-6xl"
          />

          <div className="text-lg md:text-2xl text-gray-400">
            <Typewriter
              words={["Web3 Explorer"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-3  pr-12">
          <CiLocationOn className="animate-bounce" fill="white" size={30} />
          <ShinyText
            text="Jalandhar, India"
            speed={5}
            className="text-sm sm:text-lg"
          />
        </div>

        {/* Button */}
        <div className="flex justify-center items-center text-sm">
          <Resume />
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-5">
          {/* GitHub */}
          <a
            target="_blank"
            href="https://github.com/amanprakash1009"
            className="group relative"
          >
            <svg
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              stroke="white"
              fill="none"
              viewBox="0 0 24 24"
              className="w-8 duration-200 hover:scale-125 hover:stroke-white"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>

          {/* LinkedIn */}

          <a
            target="_blank"
            href="https://www.linkedin.com/in/amanprakash1009/"
            className="group relative"
          >
            <svg
              viewBox="0 0 382 382"
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
              className="w-8 duration-200 hover:scale-125 hover:stroke-white"
            >
              <path
                d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 
                   C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z 
                   M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056H65.345
                   c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
                   c5.554,0,10.056,4.502,10.056,10.056V329.844z 
                   M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666
                   S64.289,42.1,86.748,42.1s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z 
                   M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
                   c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021
                   c-28.309,0-34.051,29.066-35.204,42.11v97.079c0,5.106-4.139,9.246-9.246,9.246h-44.426
                   c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
                   c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912
                   c73.552,0,73.131,68.716,73.131,106.472L341.91,330.654z"
              />
            </svg>
          </a>
        </div>

        {/* Skills */}
        <div className="flex items-center justify-center gap-2 sm:gap-5 mt-8">
          <Skill text="React" />
          <Skill text="NextJS" />
          <Skill text="Express" />
        </div>
      </div>
      <ScrollButton />
    </section>
  );
};

export default Hero;
