import { useEffect, useRef } from "react";

export const useHardScrollSnap = () => {
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const container = document.querySelector(".scroll-snap-container");
    if (!container) return;

    const handleScroll = () => {
      isScrollingRef.current = true;

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // After scroll ends (300ms of no scrolling), snap to nearest section
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
        snapToNearest();
      }, 300);
    };

    const snapToNearest = () => {
      const sections = container.querySelectorAll(".scroll-snap-item");
      const containerHeight = container.clientHeight;
      const scrollTop = container.scrollTop;

      let closest = 0;
      let closestDistance = Infinity;

      sections.forEach((section, index) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const distance = Math.abs(sectionTop - scrollTop);

        if (distance < closestDistance) {
          closestDistance = distance;
          closest = index;
        }
      });

      // Snap to the closest section
      const targetSection = sections[closest] as HTMLElement;
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);
};
