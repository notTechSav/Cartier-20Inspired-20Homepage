import React from "react";

interface YSLNavButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  isOverlay?: boolean;
  ariaExpanded?: boolean;
  ariaControls?: string;
  variant?: "dark" | "light";
  className?: string;
}

export const YSLNavButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  YSLNavButtonProps
>(
  (
    {
      label,
      onClick,
      href,
      isOverlay = false,
      ariaExpanded,
      ariaControls,
      variant = "dark",
      className = "",
    },
    ref,
  ) => {
    const baseStyles: React.CSSProperties = {
      position: "relative",
      fontFamily: "var(--nav-font-family)",
      fontSize: "13px",
      fontWeight: "var(--nav-font-weight-thin)",
      lineHeight: 1.8,
      textDecoration: "none",
      textTransform: "uppercase",
      letterSpacing: "var(--nav-letter-spacing-lg)",
      padding: "var(--nav-padding-y) 0",
      cursor: "pointer",
      background: "transparent",
      border: "none",
      transition: "all var(--nav-transition-fast)",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      color: isOverlay
        ? "white"
        : variant === "light"
          ? "inherit"
          : "var(--nav-color-primary)",
    };

    const underlineGradient =
      variant === "light"
        ? "linear-gradient(90deg, rgba(250, 250, 250, 1) 0%, rgba(250, 250, 250, 0.6) 50%, transparent 100%)"
        : "linear-gradient(90deg, var(--nav-color-primary) 0%, rgba(26, 26, 26, 0.6) 50%, transparent 100%)";

    const containerStyle: React.CSSProperties = {
      position: "relative",
      display: "inline-block",
    };

    const underlineStyle: React.CSSProperties = {
      content: '""',
      position: "absolute",
      bottom: "22px",
      left: "0",
      width: "0",
      height: "1px",
      background: underlineGradient,
      transition: "width var(--nav-transition-slow)",
      pointerEvents: "none",
    };

    const Element = href ? "a" : "button";

    return (
      <div style={containerStyle}>
        <Element
          ref={ref as any}
          style={baseStyles}
          href={href}
          onClick={onClick}
          className={className}
          aria-expanded={ariaExpanded}
          aria-controls={ariaControls}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            const underline = el.querySelector(
              "[data-underline]",
            ) as HTMLElement;
            if (underline) {
              underline.style.width = "100%";
            }
            (el as any).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            const underline = el.querySelector(
              "[data-underline]",
            ) as HTMLElement;
            if (underline) {
              underline.style.width = "0";
            }
            (el as any).style.transform = "translateY(0)";
          }}
        >
          {label}
        </Element>
        <div data-underline style={underlineStyle} />
      </div>
    );
  },
);

YSLNavButton.displayName = "YSLNavButton";
