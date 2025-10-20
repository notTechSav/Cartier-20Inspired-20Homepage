import React from "react";

interface ScrollSnapPanelProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollSnapPanel: React.FC<ScrollSnapPanelProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`scroll-snap-panel w-full ${className}`}
      style={{
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollSnapPanel;
