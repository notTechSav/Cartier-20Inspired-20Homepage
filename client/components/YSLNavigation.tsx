import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export interface NavLink {
  label: string;
  url: string;
}

export interface NavColumn {
  header: string;
  headerUrl: string;
  links: NavLink[];
}

export interface NavItem {
  key: string;
  label: string;
  hasMegaMenu: boolean;
  url?: string;
  columns?: NavColumn[];
}

interface DesktopNavigationProps {
  menuItems: NavItem[];
}

interface MobileNavigationProps {
  menuItems: NavItem[];
  useSwiper?: boolean;
  icon?: React.ReactNode;
}

/* ============================================
   DESKTOP NAVIGATION COMPONENT
   ============================================ */
export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  menuItems,
}) => {
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menuKey: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(menuKey);
    }, 150);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 300);
  };

  return (
    <nav className="ysl-nav-desktop" aria-label="Primary navigation">
      {menuItems.map((item) => (
        <div
          key={item.key}
          onMouseEnter={() => item.hasMegaMenu && handleMouseEnter(item.key)}
          onMouseLeave={() => item.hasMegaMenu && handleMouseLeave()}
        >
          {item.hasMegaMenu ? (
            <button
              className="ysl-nav-item"
              aria-expanded={activeMegaMenu === item.key}
              aria-controls={`mega-menu-${item.key}`}
            >
              {item.label}
            </button>
          ) : (
            <a
              href={item.url}
              className="ysl-nav-item"
            >
              {item.label}
            </a>
          )}

          {item.hasMegaMenu && item.columns && (
            <div
              id={`mega-menu-${item.key}`}
              className={`ysl-mega-menu ${
                activeMegaMenu === item.key ? "open" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(item.key)}
              onMouseLeave={handleMouseLeave}
              role="region"
              aria-label={`${item.label} submenu`}
            >
              <div className="ysl-mega-menu-grid">
                {item.columns.map((column, idx) => (
                  <div key={idx} className="ysl-mega-menu-column">
                    <a
                      href={column.headerUrl}
                      className="ysl-section-header"
                    >
                      {column.header}
                    </a>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {column.links.map((link, linkIdx) => (
                        <li key={linkIdx}>
                          <a
                            href={link.url}
                            className="ysl-sub-link"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

/* ============================================
   MOBILE NAVIGATION COMPONENT
   ============================================ */
export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  menuItems,
  isOverlay = false,
  useSwiper = false,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(
    null,
  );

  // Safe scroll-lock: Only use overflow: hidden (no position: fixed)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleAccordion = (key: string) => {
    setExpandedAccordion(expandedAccordion === key ? null : key);
  };

  const handleClose = () => {
    setIsOpen(false);
    setExpandedAccordion(null);
  };

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button - with optional icon prop */}
      <button
        className={`ysl-hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-drawer"
        style={{
          color: isOverlay ? "white" : "var(--nav-color-primary)",
        }}
      >
        {icon ? (
          icon
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 7.5h16"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <path
              d="M4 16.5h16"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {/* Mobile Overlay */}
      <div
        className={`ysl-mobile-overlay ${isOpen ? "visible" : ""}`}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <nav
        id="mobile-navigation-drawer"
        className={`ysl-mobile-drawer ${isOpen ? "open" : ""}`}
        aria-label="Mobile navigation"
      >
        {menuItems.map((item) => (
          <div key={item.key}>
            {item.hasMegaMenu ? (
              <>
                <button
                  className="ysl-accordion-button"
                  onClick={() => toggleAccordion(item.key)}
                  aria-expanded={expandedAccordion === item.key}
                  aria-controls={`accordion-${item.key}`}
                >
                  {item.label}
                  <svg
                    className="ysl-accordion-chevron"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 9l-6 6-6-6"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Accordion Content */}
                <div
                  id={`accordion-${item.key}`}
                  className={`ysl-accordion-content ${
                    expandedAccordion === item.key ? "expanded" : ""
                  }`}
                >
                  {useSwiper && item.columns && item.columns.length > 0 ? (
                    // Swiper variant for horizontal scrolling
                    <Swiper
                      modules={[FreeMode, Pagination]}
                      spaceBetween={24}
                      slidesPerView="auto"
                      freeMode={true}
                      pagination={{ clickable: true }}
                      className="mobile-mega-menu-swiper"
                    >
                      {item.columns.map((column, idx) => (
                        <SwiperSlide key={idx}>
                          <a
                            href={column.headerUrl}
                            className="ysl-section-header"
                            style={{
                              fontSize: "11px",
                              marginBottom: "12px",
                            }}
                            onClick={handleClose}
                          >
                            {column.header}
                          </a>
                          {column.links.map((link, linkIdx) => (
                            <a
                              key={linkIdx}
                              href={link.url}
                              className="ysl-mobile-sub-link"
                              onClick={handleClose}
                            >
                              {link.label}
                            </a>
                          ))}
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    // Standard stacked variant
                    item.columns &&
                    item.columns.map((column, idx) => (
                      <div key={idx}>
                        <a
                          href={column.headerUrl}
                          className="ysl-section-header"
                          style={{ fontSize: "11px", marginBottom: "12px" }}
                          onClick={handleClose}
                        >
                          {column.header}
                        </a>
                        {column.links.map((link, linkIdx) => (
                          <a
                            key={linkIdx}
                            href={link.url}
                            className="ysl-mobile-sub-link"
                            onClick={handleClose}
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ))
                  )}
                </div>
              </>
            ) : (
              <a
                href={item.url}
                className="ysl-accordion-button"
                style={{ borderBottom: "1px solid rgba(26,26,26,0.06)" }}
                onClick={handleClose}
              >
                {item.label}
              </a>
            )}
          </div>
        ))}
      </nav>
    </>
  );
};

/* ============================================
   KATHERINE TAYLOR NAVIGATION CONFIG
   ============================================ */
export const katherineTaylorMenuConfig: NavItem[] = [
  {
    key: "browse",
    label: "BROWSE",
    hasMegaMenu: true,
    columns: [
      {
        header: "BROWSE",
        headerUrl: "/",
        links: [
          { label: "HOME", url: "/" },
          { label: "ABOUT", url: "/about" },
          { label: "GALLERY", url: "/gallery" },
          { label: "JOURNAL", url: "/journal" },
        ],
      },
      {
        header: "FEATURED",
        headerUrl: "/gallery",
        links: [
          { label: "LATEST WORK", url: "/gallery" },
          { label: "FEATURED MOMENTS", url: "/journal" },
          { label: "EDITORIAL", url: "/gallery" },
        ],
      },
      {
        header: "ARCHIVE",
        headerUrl: "/gallery",
        links: [
          { label: "PORTFOLIO", url: "/gallery" },
          { label: "STORIES", url: "/journal" },
          { label: "COLLECTIONS", url: "/gallery" },
        ],
      },
    ],
  },
  {
    key: "experience",
    label: "EXPERIENCE",
    hasMegaMenu: true,
    columns: [
      {
        header: "EXPERIENCE",
        headerUrl: "/gifts",
        links: [
          { label: "GIFTS", url: "/gifts" },
          { label: "RATES", url: "/rates" },
        ],
      },
      {
        header: "PACKAGES",
        headerUrl: "/rates",
        links: [
          { label: "HOURLY RATES", url: "/rates" },
          { label: "GIFT PACKAGES", url: "/gifts" },
          { label: "VIP EXPERIENCES", url: "/rates" },
        ],
      },
      {
        header: "OFFERINGS",
        headerUrl: "/gifts",
        links: [
          { label: "LUXURY GIFTS", url: "/gifts" },
          { label: "CURATED PACKAGES", url: "/gifts" },
          { label: "SPECIAL OCCASIONS", url: "/gifts" },
        ],
      },
    ],
  },
  {
    key: "customer-service",
    label: "CUSTOMER SERVICE",
    hasMegaMenu: true,
    columns: [
      {
        header: "CUSTOMER SERVICE",
        headerUrl: "/faq",
        links: [
          { label: "FAQ", url: "/faq" },
          { label: "INQUIRE", url: "/inquire-luxury" },
        ],
      },
      {
        header: "CONNECT",
        headerUrl: "/contact",
        links: [
          { label: "CONTACT", url: "/contact" },
          { label: "APPOINTMENTS", url: "/appointments" },
          { label: "INQUIRIES", url: "/inquire-luxury" },
        ],
      },
      {
        header: "SUPPORT",
        headerUrl: "/faq",
        links: [
          { label: "HELP CENTER", url: "/faq" },
          { label: "BOOKING INFO", url: "/appointments" },
          { label: "POLICIES", url: "/faq" },
        ],
      },
    ],
  },
];
