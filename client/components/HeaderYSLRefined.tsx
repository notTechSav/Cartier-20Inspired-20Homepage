import React, { useEffect, useRef, useState, useMemo } from "react";
import { useActiveSlide } from "@/context/ActiveSlideContext";

type SubLink = { label: string; url?: string };
type Section = { label: string; url?: string; items?: SubLink[] };
type TopLink = { id: string; label: string; url?: string; sub?: Section[] };

const navigationLinks: TopLink[] = [
  { id: "highlights", label: "Highlights" },
  { id: "women", label: "Women" },
  { id: "men", label: "Men" },
  { id: "beauty", label: "Beauty" },
  { id: "jewelry", label: "Jewelry" },
];

const utilityLinks: TopLink[] = [
  { id: "services", label: "Services", url: "#" },
  { id: "stores", label: "Stores", url: "#" },
  { id: "login", label: "Login", url: "#" },
];

const Styles = () => (
  <style>{`
    :root {
      --size-header: 64px;
      --ease-color: cubic-bezier(0.4, 0, 0.2, 1);
      --ease-overlay: cubic-bezier(0.2, 0, 0.2, 1);
      --color-primary: #111112;
      --color-inverse: #fefdfb;
      --color-hover-primary: rgba(17, 17, 18, 0.8);
      --color-hover-inverse: rgba(254, 253, 251, 0.85);
      --color-blur-bg: rgba(255, 255, 255, 0.4);
      --color-overlay: rgba(0, 0, 0, 0.35);
      --ls-tight: 0.08em;
      --ls-medium: 0.12em;
      --z-header: 40;
      --z-nav-inactive: 20;
      --z-nav-active: 30;
    }

    * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-feature-settings: "kern" 1, "liga" 1;
    }

    main {
      margin-top: var(--size-header);
    }

    .header-ysl-refined {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: var(--z-header);
      height: var(--size-header);
      background: transparent;
      color: var(--color-inverse);
      transition: color 0.3s var(--ease-color);
    }

    .header-ysl-refined.header--primary {
      color: var(--color-primary);
    }

    .header-bar {
      position: relative;
      height: 100%;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      padding: 0 32px;
      gap: 32px;
    }

    .header-bar::before {
      content: "";
      position: absolute;
      inset: 0;
      background: var(--color-blur-bg);
      backdrop-filter: blur(12px);
      opacity: 0;
      transition: opacity 0.3s var(--ease-color);
      z-index: -1;
    }

    .header-bar.header--solid::before {
      opacity: 1;
    }

    /* Left zone: Primary navigation */
    .navPrimary {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 32px;
      position: relative;
      top: 1px;
    }

    .navPrimary li {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .navItemBtn {
      background: none;
      border: 0;
      color: inherit;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: var(--ls-tight);
      line-height: 1;
      cursor: pointer;
      transition: color 0.3s var(--ease-color);
      text-rendering: optimizeLegibility;
    }

    @media (hover: hover) {
      .navItemBtn:hover {
        color: var(--color-hover-primary);
      }

      .navLink:hover {
        color: var(--color-hover-primary);
      }
    }

    .header-ysl-refined.header--primary .navItemBtn:hover {
      color: var(--color-hover-primary);
    }

    .header-ysl-refined.header--inverse .navItemBtn:hover {
      color: var(--color-hover-inverse);
    }

    .navItemBtn:focus-visible {
      outline: none;
      box-shadow: 0 0 0 1px currentColor inset;
    }

    /* Center zone: Brand */
    .brand {
      text-align: center;
    }

    .brand a {
      text-decoration: none;
      color: inherit;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: var(--ls-medium);
      line-height: 1;
      text-transform: uppercase;
      transform: translateX(2px);
      display: inline-block;
      transition: color 0.3s var(--ease-color);
      text-rendering: optimizeLegibility;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    }

    .brand a:focus-visible {
      outline: none;
      box-shadow: 0 0 0 1px currentColor inset;
    }

    /* Right zone: Utility links */
    .navUtility {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 24px;
      justify-content: flex-end;
      position: relative;
      top: 1px;
    }

    .navUtility li {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .utilityBtn {
      background: none;
      border: 0;
      color: inherit;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: var(--ls-tight);
      line-height: 1;
      cursor: pointer;
      transition: color 0.3s var(--ease-color);
      text-rendering: optimizeLegibility;
    }

    .utilityBtn:focus-visible {
      outline: none;
      box-shadow: 0 0 0 1px currentColor inset;
    }

    @media (hover: hover) {
      .utilityBtn:hover {
        color: var(--color-hover-primary);
      }
    }

    .header-ysl-refined.header--inverse .utilityBtn:hover {
      color: var(--color-hover-inverse);
    }

    .mobileMenuBtn {
      display: none;
      background: none;
      border: 0;
      color: inherit;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: var(--ls-tight);
      text-transform: uppercase;
      cursor: pointer;
      transition: color 0.3s var(--ease-color);
    }

    @media (max-width: 768px) {
      .navPrimary,
      .navUtility {
        display: none;
      }

      .mobileMenuBtn {
        display: block;
        justify-self: end;
      }

      .header-bar {
        grid-template-columns: auto 1fr auto;
        padding: 0 16px;
      }

      .brand a {
        font-size: 12px;
        letter-spacing: 0.1em;
      }
    }

    /* Mega menu structure */
    .megaTopPanel {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: var(--size-header);
      background: var(--color-blur-bg);
      backdrop-filter: blur(12px);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s var(--ease-overlay), visibility 0s 0.3s;
      z-index: var(--z-nav-inactive);
    }

    .megaTopPanel.megaTopPanel--open {
      opacity: 1;
      visibility: visible;
      transition: opacity 0.3s var(--ease-overlay), visibility 0s;
      z-index: var(--z-nav-active);
    }

    .megaGrid {
      position: absolute;
      top: var(--size-header);
      left: 0;
      right: 0;
      max-height: calc(100vh - var(--size-header));
      overflow-y: auto;
      background: var(--color-blur-bg);
      backdrop-filter: blur(12px);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.2s var(--ease-overlay), visibility 0s 0.2s;
      z-index: var(--z-nav-inactive);
      padding: 32px 32px 48px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      column-gap: 32px;
      row-gap: 24px;
    }

    .megaGrid.megaGrid--open {
      opacity: 1;
      visibility: visible;
      transition: opacity 0.2s var(--ease-overlay), visibility 0s;
      z-index: var(--z-nav-active);
    }

    .megaSection h3 {
      font-size: 12px;
      font-weight: 700;
      letter-spacing: var(--ls-tight);
      text-transform: uppercase;
      margin: 0 0 12px 0;
      color: inherit;
      line-height: 1;
    }

    .megaSection ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .megaSection li {
      margin: 0;
      padding: 0;
    }

    .navLink {
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.02em;
      color: inherit;
      text-decoration: none;
      display: inline-block;
      padding: 4px 0;
      transition: color 0.3s var(--ease-color);
    }

    .navLink:focus-visible {
      outline: none;
      box-shadow: 0 0 0 1px currentColor inset;
    }

    .pageOverlay {
      position: fixed;
      top: var(--size-header);
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--color-overlay);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.5s var(--ease-overlay), visibility 0s 0.51s;
      pointer-events: none;
      z-index: calc(var(--z-nav-inactive) - 1);
    }

    .pageOverlay.pageOverlay--open {
      opacity: 1;
      visibility: visible;
      transition: opacity 0.5s var(--ease-overlay), visibility 0s 0.1s;
      pointer-events: auto;
    }

    .mobileMenu {
      display: none;
      position: absolute;
      top: var(--size-header);
      left: 0;
      right: 0;
      background: inherit;
      backdrop-filter: blur(12px);
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      padding: 24px 16px;
      z-index: var(--z-nav-active);
    }

    @media (max-width: 768px) {
      .mobileMenu {
        display: block;
      }

      .mobileMenu.mobileMenu--open {
        display: block;
      }
    }

    .mobileMenu ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .mobileMenu li {
      margin: 0;
      padding: 8px 0;
    }

    .mobileMenu a {
      font-size: 14px;
      font-weight: 400;
      color: inherit;
      text-decoration: none;
      display: block;
    }
  `}</style>
);

export default function HeaderYSLRefined() {
  const { activeSlide } = useActiveSlide();
  const [isPrimary, setIsPrimary] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  // Determine if header should be in primary (dark text) mode
  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.8;
      const isDark = window.scrollY > threshold || activeSlide?.dark === false;
      setIsPrimary(isDark);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSlide]);

  // Close menu on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenId(null);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Update CSS variable for mega grid height
  useEffect(() => {
    const px = openId && gridRef.current ? gridRef.current.offsetHeight : 0;
    document.documentElement.style.setProperty("--megaGridHeight", `${px}px`);
  }, [openId]);

  const primaryNavLinks = useMemo(() => navigationLinks, []);
  const utilLinks = useMemo(() => utilityLinks, []);

  return (
    <>
      <Styles />
      <header
        className={`header-ysl-refined ${isPrimary ? "header--primary" : ""}`}
      >
        <div
          className={`header-bar ${openId || isMobileMenuOpen ? "header--solid" : ""}`}
        >
          {/* Left zone: Primary navigation */}
          <nav
            aria-label="Primary navigation"
            className="navPrimary hidden md:flex"
          >
            {primaryNavLinks.map((link) => (
              <li key={link.id}>
                <button
                  className="navItemBtn"
                  onMouseEnter={() =>
                    link.sub?.length ? setOpenId(link.id) : null
                  }
                  onClick={() => {
                    if (!link.sub?.length && link.url) {
                      window.location.href = link.url;
                    }
                  }}
                  aria-expanded={openId === link.id}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </nav>

          {/* Center zone: Brand */}
          <div className="brand">
            <a href="/" aria-label="Katherine Taylor Home">
              Katherine Taylor
            </a>
          </div>

          {/* Right zone: Utility links */}
          <nav
            aria-label="Utility navigation"
            className="navUtility hidden md:flex"
          >
            {utilLinks.map((link) => (
              <li key={link.id}>
                <button
                  className="utilityBtn"
                  onClick={() => {
                    if (link.url) window.location.href = link.url;
                  }}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <button className="utilityBtn" aria-label="Search">
                🔍
              </button>
            </li>
            <li>
              <button className="utilityBtn" aria-label="Shopping bag">
                👜
              </button>
            </li>
          </nav>

          {/* Mobile menu button */}
          <button
            className="mobileMenuBtn md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mega menu backdrop */}
        <div className={`megaTopPanel ${openId ? "megaTopPanel--open" : ""}`} />

        {/* Mega menu grid */}
        <div
          ref={gridRef}
          className={`megaGrid ${openId ? "megaGrid--open" : ""}`}
          role="region"
          aria-label="Expanded navigation menu"
          onMouseLeave={() => setOpenId(null)}
        >
          {primaryNavLinks
            .filter((link) => link.id === openId && link.sub)
            .map((link) => (
              <React.Fragment key={link.id}>
                {link.sub?.map((section, idx) => (
                  <div key={idx} className="megaSection">
                    <h3>
                      {section.url ? (
                        <a
                          href={section.url}
                          className="navLink"
                          style={{ display: "inline" }}
                        >
                          {section.label}
                        </a>
                      ) : (
                        section.label
                      )}
                    </h3>
                    {section.items && (
                      <ul>
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            {item.url ? (
                              <a href={item.url} className="navLink">
                                {item.label}
                              </a>
                            ) : (
                              <span className="navLink">{item.label}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </React.Fragment>
            ))}
        </div>

        {/* Page overlay when menu is open */}
        <div
          className={`pageOverlay ${openId ? "pageOverlay--open" : ""}`}
          onClick={() => setOpenId(null)}
          aria-hidden={!openId}
        />

        {/* Mobile menu */}
        <div
          className={`mobileMenu ${isMobileMenuOpen ? "mobileMenu--open" : ""}`}
        >
          <ul>
            {primaryNavLinks.map((link) => (
              <li key={link.id}>
                <a href={link.url || "#"}>{link.label}</a>
              </li>
            ))}
          </ul>
          <hr className="my-4 border-t border-current opacity-20" />
          <ul>
            {utilLinks.map((link) => (
              <li key={link.id}>
                <a href={link.url || "#"}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}
