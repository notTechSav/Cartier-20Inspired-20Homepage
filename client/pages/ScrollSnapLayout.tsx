import React from "react";

interface ScrollSnapLayoutProps {
  children: React.ReactNode;
}

const ScrollSnapLayout: React.FC<ScrollSnapLayoutProps> = ({ children }) => {
  return (
    <div
      className="scroll-snap-container h-screen overflow-y-scroll scroll-smooth"
      style={{
        scrollSnapType: "y mandatory",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollSnapLayout;
