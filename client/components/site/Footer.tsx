import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useScrollSnapNavigation } from "@/hooks/useScrollSnapNavigation";

interface FooterProps {
  isScrollSnapLayout?: boolean;
  totalSections?: number;
}

const Footer = ({ isScrollSnapLayout = false, totalSections = 6 }: FooterProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { nextSection, prevSection, canGoNext, canGoPrev } =
    useScrollSnapNavigation(totalSections);

  // Only show navigation in scroll-snap layout
  useEffect(() => {
    setIsVisible(isScrollSnapLayout);
  }, [isScrollSnapLayout]);

  return (
    <footer className="w-full bg-luxury-white">
      {/* Email Signup Section */}
      <section className="border-t border-gray-100 py-16 md:py-32 max-md:py-16">
        <div className="mx-auto flex max-w-luxury flex-col items-center px-6 text-center md:px-8 max-md:px-6">
          <h2 className="text-sm font-light uppercase tracking-uppercase text-gray-700">
            Latest from Katherine Taylor
          </h2>
          <form className="mt-8 flex w-full max-w-2xl flex-col gap-3 md:flex-row md:items-center md:mt-12 max-md:gap-3 max-md:mt-8">
            <label htmlFor="email-signup" className="sr-only">
              Email address
            </label>
            <input
              id="email-signup"
              type="email"
              name="email"
              placeholder="your@email.com"
              autoComplete="email"
              className="w-full flex-1 border border-gray-200 bg-white px-6 py-4 text-base font-light tracking-luxury text-gray-700 placeholder:text-gray-400 transition-colors duration-250 ease-out focus:border-gray-400 focus:outline-none"
            />
            <Button
              type="submit"
              variant="ctaPrimary"
              className="max-md:w-full md:w-auto"
            >
              Sign Up
            </Button>
          </form>
        </div>
      </section>

      {/* Section Navigation (Scroll-snap only) */}
      {isVisible && (
        <section className="border-t border-gray-100 py-8 md:py-12 max-md:py-8">
          <div className="mx-auto flex max-w-luxury items-center justify-between px-6 md:px-8 max-md:px-6">
            <button
              onClick={prevSection}
              disabled={!canGoPrev}
              aria-label="Go to previous section"
              className="inline-flex items-center justify-center rounded-[2px] border border-gray-400 bg-transparent px-6 py-3 text-sm font-light uppercase tracking-uppercase text-gray-700 transition-all duration-250 ease-out disabled:opacity-40 disabled:cursor-not-allowed hover:enabled:border-gray-700 hover:enabled:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              ← Back
            </button>
            <button
              onClick={nextSection}
              disabled={!canGoNext}
              aria-label="Go to next section"
              className="inline-flex items-center justify-center rounded-[2px] border border-gray-400 bg-transparent px-6 py-3 text-sm font-light uppercase tracking-uppercase text-gray-700 transition-all duration-250 ease-out disabled:opacity-40 disabled:cursor-not-allowed hover:enabled:border-gray-700 hover:enabled:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Next →
            </button>
          </div>
        </section>
      )}

      {/* Footer Links */}
      <section className="py-12 px-6 border-t border-gray-100 md:py-16 md:px-8 max-md:py-12 max-md:px-6">
        <div className="max-w-luxury mx-auto flex flex-col gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left md:gap-8 max-md:gap-6">
          <p className="text-sm font-light tracking-wide text-gray-600">
            © 2025 Katherine Taylor
          </p>
          <nav className="flex flex-col items-center gap-3 md:flex-row md:gap-8 max-md:gap-3">
            <a
              href="#"
              className="text-sm font-light tracking-wide text-gray-600 transition-colors hover:text-gray-900"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-sm font-light tracking-wide text-gray-600 transition-colors hover:text-gray-900"
            >
              Press
            </a>
            <a
              href="#"
              className="text-sm font-light tracking-wide text-gray-600 transition-colors hover:text-gray-900"
            >
              Careers
            </a>
            <a
              href="#"
              className="text-sm font-light tracking-wide text-gray-600 transition-colors hover:text-gray-900"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm font-light tracking-wide text-gray-600 transition-colors hover:text-gray-900"
            >
              Terms
            </a>
          </nav>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
