import React from "react";

interface ScrollSnapPanelProps {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  id?: string;
}

const ScrollSnapPanel: React.FC<ScrollSnapPanelProps> = ({
  children,
  className = "",
  ariaLabel,
  id,
}) => {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`scroll-snap-item w-full flex-none flex items-center justify-center ${className}`}
    >
      {children}
    </section>
  );
};

export default ScrollSnapPanel;
