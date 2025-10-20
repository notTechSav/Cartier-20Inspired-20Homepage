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
      className={`w-full flex-none ${className}`}
      style={{
        minHeight: "100vh",
        minHeight: "100dvh",
        height: "100vh",
        height: "100dvh",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollSnapPanel;
