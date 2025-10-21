/**
 * YSL-STYLE FOOTER COMPONENT
 * De Beers x Hermès Aesthetic
 * Uses YSL footer classes with React Router and full functionality
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
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setEmail("");

      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1000);
  };

  const footerLinks = {
    support: [
      { label: "Track Your Order", href: "/track-order" },
      { label: "Contact Us", href: "/contact" },
      { label: "Book an Appointment", href: "/appointments" },
      { label: "Frequently Asked Questions", href: "/faq" },
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
      { label: "California Privacy", href: "/california-privacy" },
    ],
  };

  return (
    <footer
      className={`ysl-footer scroll-snap-item ${isScrollSnapLayout ? "min-h-screen flex flex-col justify-center" : ""}`}
      data-section-index={isScrollSnapLayout ? totalSections - 1 : undefined}
    >
      {/* Newsletter Section */}
      <div className="ysl-newsletter border-b border-gray-200 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Heading */}
          <h2 className="mb-8 text-center text-2xl font-light tracking-tight text-luxury-black md:text-3xl">
            Latest from Katherine
          </h2>

          {/* Email Form */}
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-2xl flex-col items-center gap-6 md:flex-row md:gap-4"
          >
            <div className="relative w-full flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
                disabled={isSubmitting || submitStatus === "success"}
                className="ysl-newsletter-input w-full"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || submitStatus === "success"}
              className="ysl-newsletter-button"
            >
              {submitStatus === "success"
                ? "Thank You"
                : isSubmitting
                  ? "Submitting..."
                  : "Sign Up"}
            </button>
          </form>

          {/* Success Message */}
          {submitStatus === "success" && (
            <p className="mt-6 animate-fadeIn text-center text-xs uppercase tracking-[0.15em] text-gray-600">
              You've been added to our mailing list
            </p>
          )}
        </div>
      </div>

      {/* Links Grid Section */}
      <div className="py-16 md:py-24">
        <div className="ysl-footer-grid">
          {/* SUPPORT Column */}
          <div className="ysl-footer-column">
            <h3 className="ysl-footer-heading">Support</h3>
            <nav className="space-y-0">
              {footerLinks.support.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="ysl-footer-link block"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* SERVICES Column */}
          <div className="ysl-footer-column">
            <h3 className="ysl-footer-heading">Services</h3>
            <nav className="space-y-0">
              {footerLinks.services.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="ysl-footer-link block"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ABOUT Column */}
          <div className="ysl-footer-column">
            <h3 className="ysl-footer-heading">About</h3>
            <nav className="space-y-0">
              {footerLinks.about.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="ysl-footer-link block"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* LEGAL Column */}
          <div className="ysl-footer-column">
            <h3 className="ysl-footer-heading">Legal</h3>
            <nav className="space-y-0">
              {footerLinks.legal.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="ysl-footer-link block"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="ysl-footer-bottom">
        <p className="ysl-footer-copyright">
          © {new Date().getFullYear()} All Rights Reserved
        </p>

        {/* Social & Legal Links */}
        <div className="ysl-footer-legal">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ysl-footer-legal-link"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ysl-footer-legal-link"
          >
            Twitter
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ysl-footer-legal-link"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
