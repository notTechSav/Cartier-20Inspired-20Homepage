/**
 * LUXURY FOOTER COMPONENT
 * De Beers x Hermès Aesthetic
 * Supports both scroll-snap section (100vh) and traditional footer modes
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";

interface FooterProps {
  isScrollSnapLayout?: boolean;
  totalSections?: number;
}

const Footer: React.FC<FooterProps> = ({
  isScrollSnapLayout = false,
  totalSections = 7,
}) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setEmail("");

      // Reset success message after 3s
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1000);
  };

  // Base classes that apply to both modes
  const baseClasses = "relative w-full bg-luxury-white";

  // Conditional classes based on layout mode
  const layoutClasses = isScrollSnapLayout
    ? "scroll-snap-item min-h-screen flex flex-col justify-center"
    : "mt-auto";

  const footerLinks = {
    support: [
      { label: "Track Your Order", href: "/track-order" },
      { label: "Contact Us", href: "/contact" },
      { label: "Book an Appointment", href: "/appointments" },
      { label: "Frequently Asked Questions", href: "/faq" },
      { label: "Shipping & Return Policy", href: "/shipping" },
      { label: "Store Information | Store List", href: "/stores" },
      { label: "Gift Card", href: "/gift-card" },
    ],
    services: [
      { label: "Request Repair", href: "/repair" },
      { label: "Personalization", href: "/personalization" },
      { label: "Business Accounts", href: "/business" },
      { label: "Select Financing", href: "/financing" },
    ],
    about: [
      { label: "Sustainability", href: "/sustainability" },
      { label: "Foundation", href: "/foundation" },
      { label: "Careers", href: "/careers" },
      { label: "For the Press", href: "/press" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Accessibility Statement", href: "/accessibility" },
      { label: "Transparency in Coverage", href: "/transparency" },
      { label: "California Privacy", href: "/california-privacy" },
      {
        label: "Human Rights and Supply Chain Transparency",
        href: "/human-rights",
      },
      {
        label: "Do Not Sell or Share My Personal Information",
        href: "/do-not-sell",
      },
    ],
  };

  return (
    <footer
      className={`${baseClasses} ${layoutClasses}`}
      data-section-index={isScrollSnapLayout ? totalSections - 1 : undefined}
    >
      {/* Newsletter Section */}
      <div className="border-b border-gray-200 px-6 py-16 md:px-12 lg:px-24 xl:px-32">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <h2
            className="newsletter-container mb-12 text-center font-['Cormorant_Garamond'] text-3xl font-light tracking-tight text-luxury-black md:text-4xl lg:text-[2.75rem]"
            style={{
              fontWeight: 300,
              letterSpacing: "-0.01em",
            }}
          >
            Latest from Our Atelier
          </h2>

          {/* Email Form */}
          <form
            onSubmit={handleSubmit}
            className="newsletter-container mx-auto flex max-w-2xl flex-col items-center gap-4 md:flex-row"
          >
            <div className="relative w-full flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL"
                required
                disabled={isSubmitting || submitStatus === "success"}
                className="luxury-input w-full border-b border-gray-300 bg-transparent px-4 py-4 font-['Work_Sans'] text-sm uppercase tracking-[0.15em] text-luxury-black placeholder-gray-400 transition-all duration-300 focus:border-luxury-black focus:outline-none disabled:opacity-50"
                style={{
                  fontWeight: 300,
                  letterSpacing: "0.15em",
                }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || submitStatus === "success"}
              className="btn-luxury-slide group relative overflow-hidden border border-gray-300 bg-transparent px-8 py-4 font-['Work_Sans'] text-xs uppercase tracking-[0.2em] text-luxury-black transition-all duration-500 hover:border-luxury-black disabled:opacity-50 md:px-10"
              style={{
                fontWeight: 300,
                letterSpacing: "0.2em",
              }}
            >
              {/* Background slide effect */}
              <span className="absolute inset-0 -translate-x-full bg-luxury-black transition-transform duration-500 group-hover:translate-x-0" />

              <span className="relative z-10 transition-colors duration-500 group-hover:text-luxury-white">
                {submitStatus === "success"
                  ? "Thank You"
                  : isSubmitting
                    ? "Submitting..."
                    : "Sign Up"}
              </span>
            </button>
          </form>

          {/* Success Message */}
          {submitStatus === "success" && (
            <p
              className="success-message mt-6 text-center font-['Work_Sans'] text-xs uppercase tracking-[0.15em] text-gray-600"
              style={{
                fontWeight: 300,
              }}
            >
              You've been added to our mailing list
            </p>
          )}
        </div>
      </div>

      {/* Links Section */}
      <div className="px-6 py-16 md:px-12 lg:px-24 xl:px-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          {/* SUPPORT Column */}
          <div className="footer-column space-y-6">
            <h3
              className="link-group-header mb-6 font-['Work_Sans'] text-xs uppercase tracking-[0.2em] text-luxury-black"
              style={{
                fontWeight: 400,
                letterSpacing: "0.2em",
              }}
            >
              Support
            </h3>
            <nav className="space-y-4">
              {footerLinks.support.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="link-luxury block font-['Work_Sans'] text-sm text-gray-600 transition-all duration-300 hover:text-luxury-black"
                  style={{
                    fontWeight: 300,
                    letterSpacing: "0.025em",
                    lineHeight: "1.8",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* SERVICES Column */}
          <div className="footer-column space-y-6">
            <h3
              className="link-group-header mb-6 font-['Work_Sans'] text-xs uppercase tracking-[0.2em] text-luxury-black"
              style={{
                fontWeight: 400,
                letterSpacing: "0.2em",
              }}
            >
              Services
            </h3>
            <nav className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="link-luxury block font-['Work_Sans'] text-sm text-gray-600 transition-all duration-300 hover:text-luxury-black"
                  style={{
                    fontWeight: 300,
                    letterSpacing: "0.025em",
                    lineHeight: "1.8",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ABOUT Column */}
          <div className="footer-column space-y-6">
            <h3
              className="link-group-header mb-6 font-['Work_Sans'] text-xs uppercase tracking-[0.2em] text-luxury-black"
              style={{
                fontWeight: 400,
                letterSpacing: "0.2em",
              }}
            >
              About
            </h3>
            <nav className="space-y-4">
              {footerLinks.about.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="link-luxury block font-['Work_Sans'] text-sm text-gray-600 transition-all duration-300 hover:text-luxury-black"
                  style={{
                    fontWeight: 300,
                    letterSpacing: "0.025em",
                    lineHeight: "1.8",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* LEGAL Column */}
          <div className="footer-column space-y-6">
            <h3
              className="link-group-header mb-6 font-['Work_Sans'] text-xs uppercase tracking-[0.2em] text-luxury-black"
              style={{
                fontWeight: 400,
                letterSpacing: "0.2em",
              }}
            >
              Legal
            </h3>
            <nav className="space-y-4">
              {footerLinks.legal.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="link-luxury block font-['Work_Sans'] text-sm text-gray-600 transition-all duration-300 hover:text-luxury-black"
                  style={{
                    fontWeight: 300,
                    letterSpacing: "0.025em",
                    lineHeight: "1.8",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-200 px-6 py-8 md:px-12 lg:px-24 xl:px-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <p
            className="font-['Work_Sans'] text-xs text-gray-500"
            style={{
              fontWeight: 300,
              letterSpacing: "0.05em",
            }}
          >
            © {new Date().getFullYear()} All Rights Reserved
          </p>

          {/* Social Links (optional) */}
          <div className="flex gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Work_Sans'] text-xs uppercase tracking-[0.15em] text-gray-500 transition-colors duration-300 hover:text-luxury-black"
              style={{
                fontWeight: 300,
                letterSpacing: "0.15em",
              }}
            >
              Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Work_Sans'] text-xs uppercase tracking-[0.15em] text-gray-500 transition-colors duration-300 hover:text-luxury-black"
              style={{
                fontWeight: 300,
                letterSpacing: "0.15em",
              }}
            >
              Twitter
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Work_Sans'] text-xs uppercase tracking-[0.15em] text-gray-500 transition-colors duration-300 hover:text-luxury-black"
              style={{
                fontWeight: 300,
                letterSpacing: "0.15em",
              }}
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
