import React from "react";
import { useHardScrollSnap } from "@/hooks/useHardScrollSnap";

interface ScrollSnapLayoutProps {
  children: React.ReactNode;
}

const ScrollSnapLayout: React.FC<ScrollSnapLayoutProps> = ({ children }) => {
  useHardScrollSnap();

  return <div className="scroll-snap-container">{children}</div>;
};

export default ScrollSnapLayout;
