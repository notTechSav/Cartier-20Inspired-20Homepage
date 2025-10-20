import React, { useEffect, useRef, useState, useMemo } from "react";
import { useActiveSlide } from "@/context/ActiveSlideContext";

type NavItem = {
  id: string;
  label: string;
  href?: string;
  submenu?: {
    label: string;
    href: string;
  }[];
};

const navigationData: NavItem[] = [
  {
    id: "women",
    label: "Women",
    submenu: [
      { label: "Handbags", href: "/women/handbags" },
      { label: "Ready-to-Wear", href: "/women/ready-to-wear" },
      { label: "Shoes", href: "/women/shoes" },
      { label: "Accessories", href: "/women/accessories" },
      { label: "New Arrivals", href: "/women/new" },
    ],
  },
  {
    id: "men",
    label: "Men",
    submenu: [
      { label: "Ready-to-Wear", href: "/men/ready-to-wear" },
      { label: "Shoes", href: "/men/shoes" },
      { label: "Accessories", href: "/men/accessories" },
      { label: "Leather Goods", href: "/men/leather" },
      { label: "New Arrivals", href: "/men/new" },
    ],
  },
  {
    id: "beauty",
    label: "Beauty",
    submenu: [
      { label: "Fragrances", href: "/beauty/fragrances" },
      { label: "Skincare", href: "/beauty/skincare" },
      { label: "Makeup", href: "/beauty/makeup" },
      { label: "Hair Care", href: "/beauty/hair" },
    ],
  },
  {
    id: "about",
    label: "About",
    href: "/about",
  },
  {
    id: "services",
    label: "Services",
    href: "/about#services",
  },
];

const Styles = () => (
  <style>{`
    :root {
      --header-height: 56px;
      --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
      --ease-emphasized: cubic-bezier(0.2, 0, 0, 1);
    }

    * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    main {
      margin-top: 0;
    }

    .header-luxury {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 40;
      height: var(--header-height);
      background: transparent;
      color: inherit;
      transition: background-color 0.3s var(--ease-standard);
    }

    .header-luxury.header-scrolled {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }

    .header-container {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 40px;
      max-width: 1600px;
      margin: 0 auto;
    }

    /* Logo/Brand */
    .brand {
      flex: 0 0 auto;
    }

    .brand a {
      text-decoration: none;
      color: inherit;
      transition: opacity 0.3s var(--ease-standard);
      display: inline-flex;
      align-items: center;
      height: 32px;
    }

    .brand a:hover {
      opacity: 0.7;
    }

    .brand img {
      height: 100%;
      width: auto;
      display: block;
    }

    /* Primary navigation */
    .nav-primary {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 48px;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .nav-item {
      position: relative;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .nav-link {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.1em;
      text-decoration: none;
      text-transform: uppercase;
      color: inherit;
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px 0;
      transition: opacity 0.3s var(--ease-standard);
      position: relative;
    }

    .nav-link:hover {
      opacity: 0.65;
    }

    .nav-link::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: currentColor;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.35s var(--ease-emphasized);
    }

    .nav-link:hover::after,
    .nav-link[aria-expanded="true"]::after {
      transform: scaleX(1);
      transform-origin: left;
    }

    /* Dropdown menu */
    .dropdown {
      position: absolute;
      top: calc(100% + 16px);
      left: 50%;
      transform: translateX(-50%);
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(0, 0, 0, 0.08);
      min-width: 200px;
      opacity: 0;
      visibility: hidden;
      transform: translateX(-50%) translateY(-4px);
      transition: opacity 0.25s var(--ease-standard), visibility 0.25s var(--ease-standard), transform 0.25s var(--ease-standard);
      z-index: 50;
      border-radius: 2px;
    }

    .nav-item:hover .dropdown,
    .nav-link[aria-expanded="true"] ~ .dropdown {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) translateY(0);
    }

    .dropdown-list {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .dropdown-item {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .dropdown-link {
      display: block;
      padding: 12px 20px;
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 0.05em;
      text-decoration: none;
      color: #111;
      transition: background-color 0.2s var(--ease-standard), color 0.2s var(--ease-standard);
      border: none;
      background: none;
      cursor: pointer;
      width: 100%;
      text-align: left;
    }

    .dropdown-link:first-child {
      padding-top: 12px;
    }

    .dropdown-link:last-child {
      padding-bottom: 12px;
    }

    .dropdown-link:hover {
      background-color: rgba(0, 0, 0, 0.04);
      color: #111;
    }

    /* Utility navigation */
    .nav-utility {
      flex: 0 0 auto;
      display: flex;
      gap: 28px;
      list-style: none;
      margin: 0;
      padding: 0;
      align-items: center;
    }

    .utility-link {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.1em;
      text-decoration: none;
      text-transform: uppercase;
      color: inherit;
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px 0;
      transition: opacity 0.3s var(--ease-standard);
    }

    .utility-link:hover {
      opacity: 0.65;
    }

    /* Mobile menu button */
    .menu-toggle {
      display: none;
      background: none;
      border: none;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: inherit;
      cursor: pointer;
      padding: 8px 0;
      transition: opacity 0.3s var(--ease-standard);
    }

    .menu-toggle:hover {
      opacity: 0.65;
    }

    /* Mobile menu */
    .mobile-menu {
      display: none;
    }

    .mobile-menu.open {
      display: block;
      position: absolute;
      top: var(--header-height);
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      padding: 24px 40px;
      z-index: 49;
    }

    .mobile-nav {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .mobile-nav-item {
      list-style: none;
      margin: 0;
      padding: 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }

    .mobile-nav-item:last-child {
      border-bottom: none;
    }

    .mobile-nav-link {
      display: block;
      padding: 12px 0;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.08em;
      text-decoration: none;
      text-transform: uppercase;
      color: #111;
      transition: opacity 0.2s var(--ease-standard);
    }

    .mobile-nav-link:hover {
      opacity: 0.6;
    }

    .mobile-submenu {
      list-style: none;
      margin: 8px 0 0 0;
      padding: 0;
    }

    .mobile-submenu-item {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .mobile-submenu-link {
      display: block;
      padding: 8px 0 8px 16px;
      font-size: 11px;
      font-weight: 400;
      letter-spacing: 0.05em;
      text-decoration: none;
      color: #666;
      transition: color 0.2s var(--ease-standard);
    }

    .mobile-submenu-link:hover {
      color: #111;
    }

    @media (max-width: 1024px) {
      .nav-primary {
        display: none;
      }

      .nav-utility {
        gap: 20px;
      }

      .menu-toggle {
        display: block;
      }

      .header-container {
        padding: 0 24px;
      }
    }

    @media (max-width: 640px) {
      .header-container {
        padding: 0 16px;
      }

      .brand a {
        font-size: 11px;
      }

      .nav-utility {
        gap: 12px;
      }

      .utility-link {
        font-size: 10px;
      }

      .menu-toggle {
        font-size: 10px;
      }

      .mobile-menu.open {
        padding: 16px;
      }
    }
  `}</style>
);

export default function HeaderLuxury() {
  const { activeSlide } = useActiveSlide();
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleMouseEnter = (id: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(id);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const navItems = useMemo(() => navigationData, []);

  return (
    <>
      <Styles />
      <header className={`header-luxury ${isScrolled ? "header-scrolled" : ""}`}>
        <div className="header-container">
          {/* Brand */}
          <div className="brand">
            <a href="/">Katherine Taylor</a>
          </div>

          {/* Primary Navigation (Desktop) */}
          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="nav-primary">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className="nav-item"
                  onMouseEnter={() =>
                    item.submenu ? handleMouseEnter(item.id) : null
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  {item.submenu ? (
                    <>
                      <button
                        className="nav-link"
                        aria-expanded={openDropdown === item.id}
                        onMouseEnter={() => handleMouseEnter(item.id)}
                      >
                        {item.label}
                      </button>
                      {item.submenu && (
                        <div className="dropdown">
                          <ul className="dropdown-list">
                            {item.submenu.map((subitem) => (
                              <li key={subitem.label} className="dropdown-item">
                                <a
                                  href={subitem.href}
                                  className="dropdown-link"
                                >
                                  {subitem.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  ) : (
                    <a href={item.href} className="nav-link">
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Utility Navigation */}
          <nav aria-label="Utility navigation" className="hidden lg:block">
            <ul className="nav-utility">
              <li>
                <a href="/services" className="utility-link">
                  Services
                </a>
              </li>
              <li>
                <a href="/inquire-luxury" className="utility-link">
                  Inquire
                </a>
              </li>
              <li>
                <button className="utility-link" aria-label="Search">
                  Search
                </button>
              </li>
              <li>
                <button className="utility-link" aria-label="Account">
                  Account
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="menu-toggle lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="mobile-nav">
            {navItems.map((item) => (
              <li key={item.id} className="mobile-nav-item">
                {item.submenu ? (
                  <>
                    <span className="mobile-nav-link">{item.label}</span>
                    <ul className="mobile-submenu">
                      {item.submenu.map((subitem) => (
                        <li key={subitem.label} className="mobile-submenu-item">
                          <a
                            href={subitem.href}
                            className="mobile-submenu-link"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subitem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}
