import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface NavCategory {
  title: string;
  items: Array<{
    label: string;
    href: string;
  }>;
}

const navigationCategories: NavCategory[] = [
  {
    title: "BROWSE",
    items: [
      { label: "HOME", href: "/" },
      { label: "ABOUT", href: "/about" },
      { label: "GALLERY", href: "/gallery" },
      { label: "JOURNAL", href: "/journal" },
    ],
  },
  {
    title: "EXPERIENCE",
    items: [
      { label: "GIFTS", href: "/gifts" },
      { label: "RATES", href: "/rates" },
    ],
  },
  {
    title: "CUSTOMER SERVICE",
    items: [
      { label: "FAQ", href: "/faq" },
      { label: "INQUIRE", href: "/inquire-luxury" },
      { label: "CONTACT", href: "/contact" },
      { label: "APPOINTMENTS", href: "/appointments" },
    ],
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOverlay, setIsOverlay] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<
    string | null
  >(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Detect overlay state based on hero section
  useEffect(() => {
    const heroElement = document.querySelector("[data-hero='true']");
    setIsOverlay(!!heroElement);
  }, []);

  // Manage menu state and body scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
      window.addEventListener("keydown", handleEscape);
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setExpandedMobileCategory(null);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setExpandedMobileCategory(null);
  };

  const handleMobileCategoryToggle = (categoryTitle: string) => {
    setExpandedMobileCategory((prev) =>
      prev === categoryTitle ? null : categoryTitle
    );
  };

  return (
    <>
      {/* YSL-STYLE HEADER */}
      <header
        ref={headerRef}
        className="ysl-header"
        style={{
          backgroundColor: isOverlay
            ? "transparent"
            : "rgba(250, 250, 250, 0.98)",
          color: isOverlay ? "white" : "var(--nav-color-primary)",
        }}
      >
        <div className="max-w-7xl mx-auto px-0 h-full">
          {/* DESKTOP NAVIGATION */}
          <nav className="ysl-nav-desktop">
            {navigationCategories.map((category) => (
              <div
                key={category.title}
                className="relative group"
                onMouseEnter={() => setActiveCategory(category.title)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <button
                  className="ysl-nav-item"
                  style={{
                    color: isOverlay
                      ? "white"
                      : "var(--nav-color-primary)",
                  }}
                >
                  {category.title}
                </button>

                {/* MEGA MENU */}
                <div
                  className={`ysl-mega-menu ${
                    activeCategory === category.title ? "open" : ""
                  }`}
                  style={{
                    backgroundColor: isOverlay
                      ? "rgba(26, 26, 26, 0.95)"
                      : "rgba(250, 250, 250, 0.99)",
                    borderTopColor: isOverlay
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(26, 26, 26, 0.04)",
                    borderBottomColor: isOverlay
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(26, 26, 26, 0.04)",
                  }}
                >
                  <div className="ysl-mega-menu-grid">
                    {navigationCategories.map((col) => (
                      <div key={col.title} className="ysl-mega-menu-column">
                        <a
                          href="#"
                          className="ysl-section-header"
                          style={{
                            color: isOverlay
                              ? "rgba(255, 255, 255, 0.9)"
                              : "var(--nav-color-primary)",
                          }}
                        >
                          {col.title}
                        </a>
                        <ul>
                          {col.items.map((item) => (
                            <li key={item.label}>
                              <a
                                href={item.href}
                                className="ysl-sub-link"
                                style={{
                                  color: isOverlay
                                    ? "rgba(255, 255, 255, 0.65)"
                                    : "rgba(26, 26, 26, 0.65)",
                                }}
                              >
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* CENTER LOGO */}
          <a
            href="/"
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontSize: "1.75rem",
              letterSpacing: "0.05em",
              lineHeight: "1.2",
              color: isOverlay ? "white" : "var(--nav-color-primary)",
              whiteSpace: "nowrap",
            }}
          >
            Katherine Taylor
          </a>

          {/* MOBILE HAMBURGER */}
          <button
            type="button"
            className={`ysl-hamburger ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            style={{
              color: isOverlay ? "white" : "var(--nav-color-primary)",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M3 12H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      {isMenuOpen && (
        <div
          className="ysl-mobile-overlay visible"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* MOBILE DRAWER */}
      <div className={`ysl-mobile-drawer ${isMenuOpen ? "open" : ""}`}>
        {navigationCategories.map((category) => (
          <div key={category.title}>
            <button
              className="ysl-accordion-button"
              onClick={() => handleMobileCategoryToggle(category.title)}
              aria-expanded={expandedMobileCategory === category.title}
            >
              {category.title}
              <svg
                className="ysl-accordion-chevron"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* ACCORDION CONTENT */}
            <div
              className={`ysl-accordion-content ${
                expandedMobileCategory === category.title ? "expanded" : ""
              }`}
            >
              {category.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="ysl-mobile-sub-link"
                  onClick={handleLinkClick}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* YSL NAVIGATION CSS */}
      <style>{`
        :root {
          --nav-font-family: "Work Sans", sans-serif;
          --nav-font-weight-thin: 200;
          --nav-font-weight-light: 300;
          --nav-font-size-sm: 11px;
          --nav-font-size-md: 12px;
          --nav-font-size-lg: 13px;
          --nav-letter-spacing-sm: 0.11em;
          --nav-letter-spacing-md: 0.18em;
          --nav-letter-spacing-lg: 0.22em;
          --nav-gap-desktop: 48px;
          --nav-gap-columns: 96px;
          --nav-padding-x: 64px;
          --nav-padding-y: 24px;
          --nav-color-primary: var(--luxury-black);
          --nav-color-hover: rgba(26, 26, 26, 0.7);
          --nav-color-border: rgba(26, 26, 26, 0.04);
          --nav-bg-header: rgba(250, 250, 250, 0.98);
          --nav-bg-menu: rgba(250, 250, 250, 0.99);
          --nav-shadow-sm: var(--shadow-elevation-low);
          --nav-shadow-md: var(--shadow-elevation-medium);
          --nav-transition-fast: 320ms cubic-bezier(0.16, 1, 0.3, 1);
          --nav-transition-medium: 450ms cubic-bezier(0.16, 1, 0.3, 1);
          --nav-transition-slow: 580ms cubic-bezier(0.16, 1, 0.3, 1);
          --nav-height-desktop: 72px;
          --nav-height-mobile: 64px;
          --nav-height-scrolled: 64px;
        }

        .ysl-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: var(--nav-height-desktop);
          backdrop-filter: blur(12px) saturate(180%);
          -webkit-backdrop-filter: blur(12px) saturate(180%);
          border-bottom: 1px solid var(--nav-color-border);
          box-shadow: var(--nav-shadow-sm);
          z-index: 1000;
          transition: all var(--nav-transition-medium);
          will-change: transform, opacity;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ysl-nav-desktop {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: var(--nav-gap-desktop);
          height: 100%;
          padding: 0 var(--nav-padding-x);
        }

        @media (max-width: 1023px) {
          .ysl-nav-desktop {
            display: none;
          }
        }

        .ysl-nav-item {
          position: relative;
          font-family: var(--nav-font-family);
          font-weight: var(--nav-font-weight-thin);
          font-size: var(--nav-font-size-sm);
          letter-spacing: var(--nav-letter-spacing-lg);
          text-transform: uppercase;
          line-height: 1.8;
          text-decoration: none;
          padding: var(--nav-padding-y) 0;
          cursor: pointer;
          background: transparent;
          border: none;
          transition: all var(--nav-transition-fast);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .ysl-nav-item:hover {
          transform: translateY(-1px);
          opacity: 0.7;
        }

        .ysl-nav-item::after {
          content: "";
          position: absolute;
          bottom: 22px;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            var(--nav-color-primary) 0%,
            rgba(26, 26, 26, 0.6) 50%,
            transparent 100%
          );
          transition: width var(--nav-transition-slow);
        }

        .ysl-nav-item:hover::after {
          width: 100%;
        }

        .ysl-mega-menu {
          position: absolute;
          top: var(--nav-height-desktop);
          left: 0;
          width: 100vw;
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border-top: 1px solid var(--nav-color-border);
          border-bottom: 1px solid var(--nav-color-border);
          box-shadow: var(--nav-shadow-md);
          padding: var(--spacing-xl) 0 72px;
          opacity: 0;
          transform: translateY(-8px);
          pointer-events: none;
          transition: all var(--nav-transition-medium);
          will-change: transform, opacity;
          transform: translateZ(0);
        }

        .ysl-mega-menu.open {
          opacity: 1;
          transform: translateY(0);
          pointer-events: all;
        }

        .ysl-mega-menu-grid {
          display: flex;
          justify-content: center;
          gap: var(--nav-gap-columns);
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 var(--nav-padding-x);
        }

        .ysl-mega-menu-column {
          min-width: 220px;
          max-width: 280px;
          animation: fadeIn var(--nav-transition-medium) forwards;
          animation-fill-mode: both;
        }

        .ysl-section-header {
          font-family: var(--nav-font-family);
          font-weight: var(--nav-font-weight-light);
          font-size: var(--nav-font-size-md);
          letter-spacing: var(--nav-letter-spacing-md);
          text-transform: uppercase;
          line-height: 1.6;
          text-decoration: none;
          display: block;
          margin-bottom: 24px;
          opacity: 1;
          transition: opacity var(--nav-transition-fast);
        }

        .ysl-section-header:hover {
          opacity: 0.6;
        }

        .ysl-sub-link {
          font-family: var(--nav-font-family);
          font-weight: var(--nav-font-weight-thin);
          font-size: var(--nav-font-size-sm);
          letter-spacing: var(--nav-letter-spacing-sm);
          text-transform: uppercase;
          line-height: 2.2;
          text-decoration: none;
          display: block;
          padding: var(--spacing-sm) 0;
          transition: all var(--nav-transition-fast);
        }

        .ysl-sub-link:hover {
          transform: translateX(4px);
          opacity: 1;
        }

        .ysl-hamburger {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          width: 24px;
          height: 24px;
          padding: 12px;
          border: none;
          background: transparent;
          cursor: pointer;
          display: none;
          z-index: 10001;
          transition: all var(--nav-transition-fast);
        }

        @media (max-width: 1023px) {
          .ysl-hamburger {
            display: block;
          }
        }

        .ysl-hamburger svg {
          width: 24px;
          height: 24px;
          transition: all var(--nav-transition-fast);
        }

        .ysl-hamburger svg path {
          stroke: currentColor;
          transition: all var(--nav-transition-fast);
        }

        .ysl-hamburger.open svg path:first-child {
          transform: rotate(45deg) translate(5px, 5px);
          transform-origin: center;
        }

        .ysl-hamburger.open svg path:last-child {
          transform: rotate(-45deg) translate(5px, -5px);
          transform-origin: center;
        }

        .ysl-mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          height: 100dvh;
          background: rgba(26, 26, 26, 0.4);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 9998;
          opacity: 0;
          pointer-events: none;
          transition: opacity var(--nav-transition-medium);
        }

        .ysl-mobile-overlay.visible {
          opacity: 1;
          pointer-events: all;
        }

        .ysl-mobile-drawer {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          max-width: 440px;
          height: 100vh;
          height: 100dvh;
          background: linear-gradient(
            135deg,
            var(--luxury-white) 0%,
            var(--gray-50) 100%
          );
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          box-shadow: 4px 0 32px rgba(26, 26, 26, 0.08),
            2px 0 16px rgba(26, 26, 26, 0.04);
          z-index: 9999;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 88px 32px 48px;
          transform: translateX(-100%);
          opacity: 0;
          transition: all var(--nav-transition-slow);
          will-change: transform, opacity;
          transform: translateZ(0);
          -webkit-overflow-scrolling: touch;
        }

        .ysl-mobile-drawer.open {
          transform: translateX(0);
          opacity: 1;
        }

        .ysl-mobile-drawer::-webkit-scrollbar {
          width: 6px;
        }

        .ysl-mobile-drawer::-webkit-scrollbar-track {
          background: transparent;
        }

        .ysl-mobile-drawer::-webkit-scrollbar-thumb {
          background: var(--gray-300);
          border-radius: 3px;
        }

        .ysl-accordion-button {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 20px 0;
          border: none;
          border-bottom: 1px solid rgba(26, 26, 26, 0.06);
          background: transparent;
          font-family: var(--nav-font-family);
          font-weight: var(--nav-font-weight-thin);
          font-size: var(--nav-font-size-lg);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          line-height: 1.4;
          color: var(--nav-color-primary);
          text-align: left;
          cursor: pointer;
          transition: all var(--nav-transition-fast);
          -webkit-tap-highlight-color: transparent;
        }

        .ysl-accordion-button:active {
          transform: scale(0.98);
        }

        .ysl-accordion-chevron {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
          transition: transform var(--nav-transition-medium);
        }

        .ysl-accordion-button[aria-expanded="true"] .ysl-accordion-chevron {
          transform: rotate(180deg);
        }

        .ysl-accordion-content {
          max-height: 0;
          opacity: 0;
          padding: 0;
          overflow: hidden;
          transition: all var(--nav-transition-medium);
        }

        .ysl-accordion-content.expanded {
          max-height: 2000px;
          opacity: 1;
          padding: var(--spacing-md) 0 24px;
        }

        .ysl-mobile-sub-link {
          font-family: var(--nav-font-family);
          font-size: var(--nav-font-size-sm);
          font-weight: var(--nav-font-weight-thin);
          letter-spacing: var(--nav-letter-spacing-sm);
          text-transform: uppercase;
          color: rgba(26, 26, 26, 0.65);
          text-decoration: none;
          padding: 12px 0 12px var(--spacing-md);
          display: block;
          border-left: 1px solid rgba(26, 26, 26, 0.08);
          margin-left: var(--spacing-sm);
          transition: all var(--nav-transition-fast);
          -webkit-tap-highlight-color: transparent;
        }

        .ysl-mobile-sub-link:hover,
        .ysl-mobile-sub-link:active {
          color: var(--nav-color-primary);
          border-left-color: var(--nav-color-primary);
          transform: translateX(2px);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media (max-width: 1023px) {
          .ysl-header {
            height: var(--nav-height-mobile);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
