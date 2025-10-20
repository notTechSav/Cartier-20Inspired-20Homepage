/**
 * GiftsFooter Component
 * Navigation links with luxury styling - ultra-thin typography, subtle hover effects
 */

interface FooterLink {
  label: string;
  href: string;
}

interface GiftsFooterProps {
  intro: string;
  links: FooterLink[];
}

const GiftsFooter = ({ intro, links }: GiftsFooterProps) => {
  return (
    <footer className="bg-luxury-white py-24 sm:py-32">
      <div className="mx-auto max-w-[680px] px-10 sm:px-12">
        {/* Intro Text - SEO optimized with keywords */}
        <p
          className="mb-12 font-light text-gray-600"
          style={{
            fontSize: "15px",
            fontWeight: 300,
            letterSpacing: "0.01em",
            lineHeight: 1.7,
          }}
        >
          {intro}
        </p>

        {/* Navigation Links - Luxury hover effects */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-block border-b border-transparent font-light text-luxury-black transition-all duration-300 hover:border-gray-500 hover:text-gray-500"
                  style={{
                    fontSize: "14px",
                    fontWeight: 300,
                    letterSpacing: "0.05em",
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default GiftsFooter;
