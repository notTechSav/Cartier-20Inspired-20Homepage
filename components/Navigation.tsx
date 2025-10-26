import * as React from "react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Route prefetch mapping for lazy-loaded pages
const routePrefetchMap: Record<string, () => Promise<any>> = {
  "/about": () => import("@/pages/About"),
  "/gifts": () => import("@/pages/Gifts"),
  "/journal": () => import("@/pages/Journal"),
  "/rates": () => import("@/pages/Rates"),
  "/gallery": () => import("@/pages/Gallery"),
  "/faq": () => import("@/pages/FAQ"),
  "/inquire": () => import("@/pages/Inquire"),
  "/inquire-luxury": () => import("@/pages/InquireLuxury"),
};

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

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    setIsMenuOpen((previous) => !previous);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Prefetch route on hover for instant navigation
  const handleMouseEnter = (href: string) => {
    const prefetch = routePrefetchMap[href];
    if (prefetch) {
      prefetch().catch(() => {
        // Silently fail if prefetch errors
      });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-400 ease-out",
        scrolled
          ? "bg-luxury-white/95 shadow-luxury-sm backdrop-blur-sm"
          : "bg-luxury-white/80 backdrop-blur-sm",
      )}
    >
      {/* Desktop Navigation */}
      <div
        className={cn(
          "hidden md:flex mx-auto px-8 md:px-12 lg:px-16 max-w-7xl items-center justify-between",
          scrolled ? "py-4" : "py-6 md:py-8",
        )}
      >
        <a
          href="/"
          className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 flex-shrink-0"
        >
          <span className="text-lg md:text-xl lg:text-2xl font-serif font-extralight uppercase tracking-wide leading-tight text-luxury-black whitespace-nowrap">
            Katherine Taylor
          </span>
        </a>
        <ul className="flex items-center gap-8 lg:gap-12">
          {navigationLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onMouseEnter={() => handleMouseEnter(link.href)}
                className="text-xs lg:text-sm font-light uppercase tracking-wide text-luxury-black transition-opacity duration-250 ease-out hover:opacity-60 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 whitespace-nowrap"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between px-6 py-4">
        <a
          href="/"
          className="flex items-center focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
        >
          <span className="text-sm font-serif font-extralight uppercase tracking-wide leading-tight text-luxury-black">
            Katherine Taylor
          </span>
        </a>
        <button
          type="button"
          onClick={toggleMenu}
          className="p-2 text-luxury-black transition-opacity duration-250 hover:opacity-60 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-sm"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-luxury-white/98 backdrop-blur-sm px-6 py-6 animate-in fade-in slide-in-from-top-2 duration-300">
          <ul className="flex flex-col gap-1">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block py-4 text-sm font-light uppercase tracking-wide text-luxury-black transition-opacity duration-250 ease-out hover:opacity-60 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 border-b border-gray-100 last:border-b-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
