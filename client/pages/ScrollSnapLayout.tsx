import React from "react";

interface ScrollSnapLayoutProps {
  children: React.ReactNode;
}

const ScrollSnapLayout: React.FC<ScrollSnapLayoutProps> = ({ children }) => {
  return <div className="scroll-snap-container">{children}</div>;
};

export default ScrollSnapLayout;
