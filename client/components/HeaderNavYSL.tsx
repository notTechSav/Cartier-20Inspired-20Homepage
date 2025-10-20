import React, { useEffect, useMemo, useRef, useState } from "react";

type SubLink = { label: string; url?: string };
type Section = { label: string; url?: string; items?: SubLink[] };
type TopLink = { id: string; label: string; url?: string; sub?: Section[] };

type SlideMeta = {
  id: string;
  dark?: boolean;
  tabletDark?: boolean;
  mobileDark?: boolean;
};

// Navigation data structure for luxury brand
const navigationLinks: TopLink[] = [
  {
    id: "home",
    label: "Home",
    url: "/",
  },
  {
    id: "about",
    label: "About",
    url: "/about",
  },
  {
    id: "gifts",
    label: "Gifts",
    url: "/gifts",
  },
  {
    id: "journal",
    label: "Journal",
    url: "/journal",
  },
  {
    id: "rates",
    label: "Rates",
    url: "/rates",
  },
  {
    id: "gallery",
    label: "Gallery",
    url: "/gallery",
  },
  {
    id: "faq",
    label: "FAQ",
    url: "/faq",
  },
  {
    id: "inquire",
    label: "Inquire",
    url: "/inquire-luxury",
  },
];

const shouldInvertFromSlide = (
  s?: SlideMeta,
  isTablet = false,
  isMobile = false,
) => {
  if (!s) return false;
  return Boolean(
    s.dark || (isTablet && s.tabletDark) || (isMobile && s.mobileDark),
  );
};

const Styles = () => (
  <style>{`
    :root {
      --size-header: 68px;
      --infoBannerHeight: 0px;
      --navHeight: 0px;
      --ease-fade: cubic-bezier(0.2, 0, 0.2, 1);
      --z-content: 0;
      --z-nav-inactive: 20;
      --z-nav-active: 30;
      --z-header: 40;
      --color-primary: #111;
      --color-inverse: #fff;
      --color-tertiary: #6a6a6a;
      --color-blur-bg: rgba(255, 255, 255, 0.5);
      --color-overlay: rgba(0, 0, 0, 0.35);
    }

    main {
      margin-top: calc(var(--size-header) + var(--infoBannerHeight));
    }

    .header-ysl {
      position: fixed;
      left: 0;
      right: 0;
      top: var(--infoBannerHeight);
      z-index: var(--z-header);
      color: var(--color-primary);
      transition: opacity 0.35s var(--ease-fade);
    }

    .header-ysl--inverse {
      color: var(--color-inverse);
    }

    .header-bar {
      position: relative;
      height: var(--size-header);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
    }

    .header-bar::before {
      content: "";
      position: absolute;
      inset: 0;
      background: var(--color-blur-bg);
      backdrop-filter: blur(10px);
      opacity: var(--header-bg-opacity, 0);
      transition: opacity 0.3s var(--ease-fade);
      z-index: -1;
    }

    .header-ysl--solid {
      --header-bg-opacity: 1;
    }

    .brand a {
      text-decoration: none;
      color: inherit;
      letter-spacing: 0.06em;
      font-size: 18px;
      font-weight: 500;
    }

    .navPrimary {
      display: flex;
      gap: 16px;
      align-items: center;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .navItemBtn {
      background: none;
      border: 0;
      padding: 8px 0;
      text-transform: uppercase;
      cursor: pointer;
      color: inherit;
      letter-spacing: 0.06em;
      font-size: 12px;
      font-weight: 300;
      transition: color 0.25s var(--ease-fade);
    }

    @media (hover: hover) {
      .navItemBtn:hover {
        color: var(--color-tertiary);
      }

      .navLink:hover {
        color: var(--color-tertiary);
      }
    }

    .megaTopPanel {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: calc(var(--size-header) + var(--navHeight));
      background: var(--color-blur-bg);
      backdrop-filter: blur(10px);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s var(--ease-fade), visibility 0s 0.3s;
      z-index: var(--z-nav-inactive);
    }

    .megaTopPanel--open {
      opacity: 1;
      visibility: visible;
      transition: opacity 0.3s var(--ease-fade), visibility 0s;
      z-index: var(--z-nav-active);
    }

    .megaGrid {
      position: absolute;
      left: 0;
      right: 0;
      top: var(--size-header);
      max-height: calc(100vh - var(--size-header) - var(--infoBannerHeight));
      overflow: auto;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.2s var(--ease-fade), visibility 0s 0.2s;
      z-index: var(--z-nav-inactive);
      padding: 16px 24px 24px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      column-gap: 16px;
    }

    .megaGrid--open {
      opacity: 1;
      visibility: visible;
      transition: opacity 0.2s var(--ease-fade), visibility 0s;
      z-index: var(--z-nav-active);
    }

    .pageOverlay {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      top: calc(var(--size-header) + var(--navHeight));
      background: var(--color-overlay);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.5s var(--ease-fade), visibility 0s 0.51s;
      pointer-events: none;
      z-index: calc(var(--z-nav-inactive) - 1);
    }

    .pageOverlay--open {
      opacity: 1;
      visibility: visible;
      transition: opacity 1s 0.3s var(--ease-fade);
      pointer-events: auto;
    }

    .colTitle {
      font-size: 12px;
      text-transform: uppercase;
      margin: 0 0 8px 0;
      letter-spacing: 0.06em;
      font-weight: 500;
    }

    .navLink {
      font-size: 14px;
      display: inline-flex;
      padding: 4px 0;
      color: inherit;
      text-decoration: none;
      transition: color 0.25s var(--ease-fade);
    }

    .megaGrid ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .megaGrid li {
      margin: 8px 0;
    }

    @media (max-width: 768px) {
      .navPrimary {
        display: none;
      }

      .header-bar {
        justify-content: space-between;
      }

      .megaTopPanel,
      .megaGrid {
        display: none;
      }
    }
  `}</style>
);

interface HeaderNavYSLProps {
  activeSlide?: SlideMeta;
  isTablet?: boolean;
  isMobile?: boolean;
}

function Header({
  activeSlide,
  isTablet = false,
  isMobile = false,
}: HeaderNavYSLProps) {
  const [inverse, setInverse] = useState(false);
  const [solid, setSolid] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInverse(shouldInvertFromSlide(activeSlide, isTablet, isMobile));
  }, [activeSlide, isTablet, isMobile]);

  useEffect(
    () => setSolid(Boolean(openId) || isMenuOpen),
    [openId, isMenuOpen],
  );

  useEffect(() => {
    const px = openId && gridRef.current ? gridRef.current.offsetHeight : 0;
    document.documentElement.style.setProperty("--navHeight", `${px}px`);
  }, [openId]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenId(null);
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const topLinks = useMemo(() => navigationLinks, []);

  return (
    <>
      <Styles />
      <header
        className={`header-ysl ${inverse ? "header-ysl--inverse" : ""} ${
          solid ? "header-ysl--solid" : ""
        }`}
      >
        <div className="header-bar">
          <div className="brand">
            <a href="/" aria-label="Katherine Taylor Home">
              Katherine Taylor
            </a>
          </div>

          <nav aria-label="Primary" className="navPrimary hidden md:flex">
            {topLinks.map((l) => (
              <li key={l.id}>
                <button
                  className="navItemBtn"
                  aria-expanded={openId === l.id}
                  onMouseEnter={() =>
                    l.sub?.length ? setOpenId(l.id) : setOpenId(null)
                  }
                  onFocus={() =>
                    l.sub?.length ? setOpenId(l.id) : setOpenId(null)
                  }
                  onClick={() => {
                    if (!l.sub?.length && l.url) {
                      window.location.href = l.url;
                    }
                  }}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-sm font-light uppercase tracking-wider text-inherit transition-opacity duration-250 ease-out hover:opacity-60"
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        <div className={`megaTopPanel ${openId ? "megaTopPanel--open" : ""}`} />
        <div
          ref={gridRef}
          className={`megaGrid ${openId ? "megaGrid--open" : ""}`}
          onMouseLeave={() => setOpenId(null)}
          role="region"
          aria-label="Mega menu"
        >
          {topLinks
            .filter((x) => x.id === openId)
            .map((active) => (
              <React.Fragment key={active.id}>
                {(active.sub ?? []).map((section, i) => (
                  <div key={i} style={{ paddingLeft: 16 }}>
                    <div className="colTitle">
                      {section.url ? (
                        <a className="navLink" href={section.url}>
                          {section.label}
                        </a>
                      ) : (
                        section.label
                      )}
                    </div>
                    <ul>
                      {(section.items ?? []).map((it, j) => (
                        <li key={j}>
                          {it.url ? (
                            <a className="navLink" href={it.url}>
                              {it.label}
                            </a>
                          ) : (
                            <span className="navLink">{it.label}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </React.Fragment>
            ))}
        </div>

        <div
          className={`pageOverlay ${openId ? "pageOverlay--open" : ""}`}
          onClick={() => setOpenId(null)}
          aria-hidden={!openId}
        />

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 px-2 pt-6 bg-inherit">
            <ul className="flex flex-col gap-4 pb-6">
              {topLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.url || "#"}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-sm font-light uppercase tracking-wider text-inherit transition-opacity duration-250 ease-out hover:opacity-60"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
export type { HeaderNavYSLProps, SlideMeta };
