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
  const [isOverlay, setIsOverlay] = useState(true); // Default to true - forces white text on dark overlays
  const headerRef = useRef<HTMLDivElement>(null);

  // On non-hero pages, detect if we should show normal header
  useEffect(() => {
    const heroElement = document.querySelector("[data-hero='true']");

    // If no hero section exists (non-home pages), set overlay to false
    if (!heroElement) {
      setIsOverlay(false);
    } else {
      // Hero exists, use overlay mode
      setIsOverlay(true);
    }
  }, []);

  // Close menu on escape and manage body overflow
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      window.addEventListener("keydown", handleEscape);
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.classList.remove("menu-open");
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

      {/* Primary Header - Centered Logo, Distributed Nav */}
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
          {/* Desktop Navigation - Compact centered layout */}
          <div
            className={cn(
              "hidden md:flex items-center justify-between",
              "h-16"
            )}
            style={{
              alignItems: "center",
            }}
          >
            {/* Left empty space */}
            <div className="flex-1" />

            {/* Center Logo - Editorial serif hierarchy */}
            <a
              href="/"
              className={cn(
                "flex-shrink-0 whitespace-nowrap transition-colors duration-300 ease-out"
              )}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "1.75rem",
                letterSpacing: "0.05em",
                lineHeight: "1.2",
                color: isOverlay ? "white" : "black",
              }}
            >
              Katherine Taylor
            </a>

            {/* Right Navigation */}
            <nav
              className="flex-1 flex items-center justify-end"
              style={{
                alignItems: "center",
                gap: "20px",
              }}
            >
              <ul
                className="flex items-center"
                style={{
                  gap: "16px",
                  alignItems: "center",
                }}
              >
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={cn(
                        "text-xs font-light uppercase transition-all duration-300 ease-out",
                        isOverlay
                          ? "text-white hover:opacity-70"
                          : "text-black hover:text-gray-600 hover:underline hover:underline-offset-2"
                      )}
                      style={{
                        letterSpacing: "0.15em",
                        fontWeight: 300,
                        fontSize: "11px",
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

            {/* Logo - Mobile optimized, centered */}
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
