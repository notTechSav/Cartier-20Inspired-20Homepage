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
      className={`min-h-screen w-full flex items-center justify-center scroll-snap-start ${className}`}
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
