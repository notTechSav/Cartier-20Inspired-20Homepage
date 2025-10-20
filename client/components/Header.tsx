import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Navigation links - ALL CAPS for display
const navigationLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "GIFTS", href: "/gifts" },
  { label: "JOURNAL", href: "/journal" },
  { label: "RATES", href: "/rates" },
  { label: "GALLERY", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "INQUIRE", href: "/inquire-luxury" },
];

// Utility bar links (desktop only) - ALL CAPS
const utilityLinks = [
  { label: "CONTACT", href: "/contact" },
  { label: "APPOINTMENTS", href: "/appointments" },
];

interface HeaderProps {
  isOverlayActive?: boolean;
}

const Header = ({ isOverlayActive = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOverlay, setIsOverlay] = useState(isOverlayActive);
  const headerRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLElement | null>(null);

  // Detect overlay state using Intersection Observer
  useEffect(() => {
    const heroElement = document.querySelector("[data-hero='true']");
    heroSectionRef.current = heroElement as HTMLElement | null;

    if (!heroElement) {
      setIsOverlay(isOverlayActive);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOverlay(entry.isIntersecting && entry.boundingClientRect.top <= 0);
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(heroElement);

    return () => {
      observer.disconnect();
    };
  }, [isOverlayActive]);

  // Close menu on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      window.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Utility Bar - Desktop Only */}
      <div
        className={cn(
          "hidden md:block sticky top-0 left-0 right-0 z-[1000] bg-white",
          "transition-colors duration-300 ease-out"
        )}
        style={{
          minHeight: "32px",
          paddingTop: "4px",
        }}
      >
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-3">
          <ul className="flex justify-end gap-8 items-center">
            {utilityLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={cn(
                    "text-xs font-light uppercase whitespace-nowrap",
                    "text-black transition-all duration-300 ease-out",
                    "hover:text-gray-600 hover:underline hover:underline-offset-2"
                  )}
                  style={{
                    letterSpacing: "0.1em",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Primary Header - Desktop + Mobile */}
      <header
        ref={headerRef}
        className={cn(
          "sticky top-0 left-0 right-0 md:top-12 z-[999] w-full",
          "transition-all duration-300 ease-out"
        )}
        style={{
          backgroundColor: isOverlay ? "transparent" : "white",
          color: isOverlay ? "white" : "black",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          {/* Desktop Navigation */}
          <div
            className={cn(
              "hidden md:flex items-center justify-between",
              "h-20"
            )}
            style={{
              alignItems: "center",
            }}
          >
            {/* Logo - Editorial serif hierarchy */}
            <a
              href="/"
              className={cn(
                "flex-shrink-0 transition-colors duration-300 ease-out"
              )}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "2rem",
                letterSpacing: "0.05em",
                lineHeight: "1.2",
                color: isOverlay ? "white" : "black",
              }}
            >
              Katherine Taylor
            </a>

            {/* Center Navigation with proper spacing */}
            <nav
              className="flex items-center"
              style={{
                alignItems: "center",
              }}
            >
              <ul
                className="flex items-center"
                style={{
                  gap: "24px",
                  alignItems: "center",
                }}
              >
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={cn(
                        "text-sm font-light uppercase transition-all duration-300 ease-out",
                        isOverlay
                          ? "text-white hover:opacity-70"
                          : "text-black hover:text-gray-600 hover:underline hover:underline-offset-2"
                      )}
                      style={{
                        letterSpacing: "0.15em",
                        fontWeight: 300,
                        fontSize: "14px",
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Mobile Navigation Bar */}
          <div
            className={cn(
              "md:hidden flex items-center justify-between",
              "h-16"
            )}
            style={{
              backgroundColor: isOverlay ? "transparent" : "white",
              alignItems: "center",
            }}
          >
            {/* Empty space on left for now */}
            <div className="flex-1" />

            {/* Logo - Mobile optimized */}
            <a
              href="/"
              className={cn(
                "flex-1 text-center transition-colors duration-300 ease-out"
              )}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "1.5rem",
                letterSpacing: "0.05em",
                lineHeight: "1.2",
                color: isOverlay ? "white" : "black",
              }}
            >
              Katherine Taylor
            </a>

            {/* Hamburger Menu Button - Right aligned */}
            <div className="flex-1 flex justify-end">
              <button
                type="button"
                onClick={toggleMenu}
                className={cn(
                  "flex-shrink-0 p-2 transition-colors duration-300 ease-out"
                )}
                style={{
                  color: isOverlay ? "white" : "black",
                }}
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer - Full Height, No Animation */}
      {isMenuOpen && (
        <div
          className={cn(
            "fixed inset-0 md:hidden z-[998] top-16",
            "bg-white w-full overflow-y-auto"
          )}
          style={{
            height: "calc(100vh - 64px)",
          }}
        >
          <nav className="w-full px-4">
            <ul className="flex flex-col">
              {navigationLinks.map((link, index) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className={cn(
                      "block text-base font-light uppercase transition-all duration-300 ease-out",
                      "text-black hover:text-gray-600 hover:underline hover:underline-offset-2",
                      index !== navigationLinks.length - 1 ? "border-b" : ""
                    )}
                    style={{
                      letterSpacing: "0.15em",
                      lineHeight: "1.5em",
                      padding: "16px 0",
                      fontWeight: 300,
                      borderColor: "#f0f0f0",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
