import { useCallback, useEffect, useState } from "react";

export const useScrollSnapNavigation = (totalSections: number) => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const container = document.querySelector(".scroll-snap-container");
    if (!container) return;

    const handleScroll = () => {
      const sections = container.querySelectorAll(".scroll-snap-item");
      let active = 0;

      sections.forEach((section, index) => {
        const rect = (section as HTMLElement).getBoundingClientRect();
        if (rect.top < window.innerHeight / 2) {
          active = index;
        }
      });

      setCurrentSection(active);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSection = useCallback((sectionIndex: number) => {
    const container = document.querySelector(".scroll-snap-container");
    const sections = container?.querySelectorAll(".scroll-snap-item");

    if (sections?.[sectionIndex]) {
      (sections[sectionIndex] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  const nextSection = useCallback(() => {
    if (currentSection < totalSections - 1) {
      goToSection(currentSection + 1);
    }
  }, [currentSection, totalSections, goToSection]);

  const prevSection = useCallback(() => {
    if (currentSection > 0) {
      goToSection(currentSection - 1);
    }
  }, [currentSection, goToSection]);

  return {
    currentSection,
    nextSection,
    prevSection,
    canGoNext: currentSection < totalSections - 1,
    canGoPrev: currentSection > 0,
  };
};
