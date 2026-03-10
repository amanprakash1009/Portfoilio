import { ChevronDown } from "lucide-react";

const ScrollButton = () => {
  const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className="flex flex-col items-center cursor-pointer gap-3 p-4 group transition-all duration-300 hover:scale-105"
    >
      {/* Text */}
      <span className="text-white/70 text-sm group-hover:text-white transition-colors">
        Scroll for more
      </span>

      {/* Arrow */}
      <ChevronDown className="w-5 h-5 text-white/50 group-hover:text-white animate-bounce transition-colors" />
    </button>
  );
};

export default ScrollButton;
