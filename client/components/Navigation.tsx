import * as React from "react";
import { useEffect, useState } from "react";

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
        "fixed top-0 z-50 w-full px-8 transition-all duration-400 ease-out",
        scrolled
          ? "bg-luxury-white/95 py-4 backdrop-blur-sm shadow-luxury-sm"
          : "bg-luxury-white/80 py-8 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex max-w-luxury items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
        >
          <span className="text-2xl font-serif font-extralight uppercase tracking-uppercase leading-[1.1] text-luxury-black max-md:text-xl">
            KATHERINE TAYLOR
          </span>
        </a>
        <button
          type="button"
          onClick={toggleMenu}
          className="text-sm font-light uppercase tracking-uppercase text-luxury-black transition-opacity duration-250 ease-out hover:opacity-60 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 max-md:block hidden"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
        <ul className="max-md:hidden flex items-center gap-12">
          {navigationLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onMouseEnter={() => handleMouseEnter(link.href)}
                className="text-sm font-light uppercase tracking-uppercase text-luxury-black transition-opacity duration-250 ease-out hover:opacity-60 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {isMenuOpen && (
        <div className="mt-6 border-t border-gray-200 px-2 pt-6 max-md:block hidden">
          <ul className="flex flex-col gap-4">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block py-4 text-sm font-light uppercase tracking-uppercase text-luxury-black transition-opacity duration-250 ease-out hover:opacity-60 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
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
