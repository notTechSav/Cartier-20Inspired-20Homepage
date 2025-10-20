import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Navigation links
const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gifts", href: "/gifts" },
  { label: "Journal", href: "/journal" },
  { label: "Rates", href: "/rates" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Inquire", href: "/inquire-luxury" },
];

// Utility bar links (desktop only)
const utilityLinks = [
  { label: "Contact", href: "/contact" },
  { label: "Appointments", href: "/appointments" },
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
    // Try to find the hero section (first full-height section)
    const heroElement = document.querySelector(
      "[data-hero='true'], section:first-of-type"
    );
    heroSectionRef.current = heroElement as HTMLElement | null;

    if (!heroElement) {
      setIsOverlay(isOverlayActive);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Header is in overlay zone when hero section is in viewport
        setIsOverlay(entry.isIntersecting);
      },
      {
        threshold: 0.5,
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
          "hidden md:block fixed top-0 left-0 right-0 z-[999] h-auto bg-white transition-colors duration-300 ease-out",
          isOverlay ? "bg-white" : "bg-white"
        )}
      >
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-3">
          <ul className="flex justify-end gap-8 items-center">
            {utilityLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={cn(
                    "text-xs font-normal uppercase tracking-widest transition-colors duration-300 ease-out whitespace-nowrap",
                    isOverlay ? "text-black hover:text-gray-600" : "text-black hover:text-gray-600"
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
          "fixed top-0 left-0 right-0 md:top-12 z-[998] w-full",
          "transition-colors duration-300 ease-out"
        )}
        style={{
          backgroundColor: isOverlay ? "transparent" : "white",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          {/* Desktop Navigation */}
          <div
            className={cn(
              "hidden md:flex items-center justify-between",
              "h-20 md:h-20"
            )}
          >
            {/* Logo */}
            <a
              href="/"
              className={cn(
                "flex-shrink-0 font-bold text-lg md:text-xl transition-colors duration-300 ease-out",
                isOverlay ? "text-white" : "text-black"
              )}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                letterSpacing: "0.02em",
              }}
            >
              Katherine Taylor
            </a>

            {/* Center Navigation */}
            <nav className="flex items-center gap-8 lg:gap-12">
              <ul className="flex items-center gap-6 lg:gap-8">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={cn(
                        "text-sm font-normal uppercase transition-colors duration-300 ease-out",
                        isOverlay ? "text-white hover:text-gray-300" : "text-black hover:text-gray-600"
                      )}
                      style={{
                        letterSpacing: "0.15em",
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
              "h-16 md:h-20"
            )}
            style={{
              backgroundColor: isOverlay ? "transparent" : "white",
            }}
          >
            {/* Logo - Centered above hamburger on mobile */}
            <a
              href="/"
              className={cn(
                "flex-1 text-center font-bold text-base transition-colors duration-300 ease-out",
                isOverlay ? "text-white" : "text-black"
              )}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "20px",
              }}
            >
              Katherine Taylor
            </a>

            {/* Hamburger Menu Button */}
            <button
              type="button"
              onClick={toggleMenu}
              className={cn(
                "flex-shrink-0 p-2 transition-colors duration-300 ease-out",
                isOverlay ? "text-white" : "text-black"
              )}
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
      </header>

      {/* Mobile Menu Drawer - Full Height, No Animation */}
      {isMenuOpen && (
        <div
          className={cn(
            "fixed inset-0 md:hidden z-[997] top-16",
            "bg-white w-full h-[calc(100vh-64px)] overflow-y-auto"
          )}
        >
          <nav className="max-w-7xl mx-auto px-4">
            <ul className="flex flex-col">
              {navigationLinks.map((link, index) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className={cn(
                      "block py-4 text-base font-normal uppercase transition-colors duration-300 ease-out",
                      "text-black hover:text-gray-600",
                      "border-b border-gray-100",
                      index === navigationLinks.length - 1 ? "border-b-0" : ""
                    )}
                    style={{
                      letterSpacing: "0.15em",
                      lineHeight: "1.5em",
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
