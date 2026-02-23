import { useEffect } from "react";
import { useActiveStore } from "../store/active";

const SectionWatcher = () => {
  const setActive = useActiveStore((state) => state.setActive);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    // Decide threshold based on viewport
    const threshold = window.innerWidth < 768 ? 0.3 : 0.6; // mobile: 30%, desktop: 60%

    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let mostVisibleId: string | null = null;

        entries.forEach((entry) => {
          // check intersection ratio
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleId = entry.target.id;
          }
        });

        if (mostVisibleId) {
          setActive(mostVisibleId);
          console.log(mostVisibleId);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px", // trigger slightly before full section
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [setActive]);

  return null;
};

export default SectionWatcher;
