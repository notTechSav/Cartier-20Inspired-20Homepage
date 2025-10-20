import React from "react";

interface ScrollSnapLayoutProps {
  children: React.ReactNode;
}

const ScrollSnapLayout: React.FC<ScrollSnapLayoutProps> = ({ children }) => {
  return (
    <div
      className="scroll-snap-container w-full overflow-y-scroll"
      style={{
        height: "100vh",
        height: "100dvh",
        scrollSnapType: "y mandatory",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollSnapLayout;
