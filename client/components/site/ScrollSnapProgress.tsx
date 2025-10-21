import { useEffect, useState } from "react";

interface ScrollSnapProgressProps {
  totalSections: number;
  sectionNames?: string[];
}

const ScrollSnapProgress: React.FC<ScrollSnapProgressProps> = ({
  totalSections,
  sectionNames = ["Hero", "About", "Rates", "FAQ", "Journal", "Inquire"],
}) => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const container = document.querySelector(".scroll-snap-container");
    if (!container) return;

    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const sections = container.querySelectorAll(".scroll-snap-item");
        let active = 0;

        sections.forEach((section, index) => {
          const rect = (section as HTMLElement).getBoundingClientRect();
          // If section is in the upper half of viewport, it's the active one
          if (rect.top < window.innerHeight / 2) {
            active = index;
          }
        });

        setActiveSection(active);
      }, 50);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="fixed right-8 top-1/2 z-50 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 max-lg:hidden">
      {Array.from({ length: totalSections }).map((_, index) => (
        <button
          key={index}
          aria-label={`Go to ${sectionNames[index] || `section ${index + 1}`}`}
          onClick={() => {
            const container = document.querySelector(".scroll-snap-container");
            const sections = container?.querySelectorAll(".scroll-snap-item");
            if (sections?.[index]) {
              (sections[index] as HTMLElement).scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ease-out ${
            activeSection === index
              ? "bg-luxury-black w-8 h-2.5"
              : "bg-luxury-black/30 hover:bg-luxury-black/50"
          }`}
          title={sectionNames[index]}
        />
      ))}
    </div>
  );
};

export default ScrollSnapProgress;
