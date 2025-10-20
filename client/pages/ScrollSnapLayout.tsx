import React from "react";

interface ScrollSnapLayoutProps {
  children: React.ReactNode;
}

/**
 * ScrollSnapLayout - Full-screen scroll-snap carousel container
 * Provides semantic HTML structure compatible with Swiper.js animation patterns
 * - Main container has role="region" for screen readers
 * - Uses CSS scroll-snap for keyboard navigation and touch support
 * - Sections are properly isolated with semantic <section> tags
 */
const ScrollSnapLayout: React.FC<ScrollSnapLayoutProps> = ({ children }) => {
  return (
    <div
      className="scroll-snap-container"
      role="region"
      aria-label="Full-screen carousel of main content sections"
    >
      {children}
    </div>
  );
};

export default ScrollSnapLayout;
