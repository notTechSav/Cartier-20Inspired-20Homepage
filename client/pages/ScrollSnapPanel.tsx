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
      className={`scroll-snap-item w-full flex-none flex items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollSnapPanel;
