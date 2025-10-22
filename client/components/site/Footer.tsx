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
      <div className="ysl-newsletter border-b border-gray-200 py-4 md:py-6">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {/* Heading */}
          <h2 className="mb-3 text-center text-lg text-luxury-black md:text-xl">
            Latest from Katherine
          </h2>

          {/* Email Form */}
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-2xl flex-col items-center gap-2 md:flex-row md:gap-2"
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
                  : "Submit"}
            </button>
          </form>

          {/* Success Message */}
          {submitStatus === "success" && (
            <p className="mt-2 animate-fadeIn text-center text-xs text-gray-600">
              You've been added to our mailing list
            </p>
          )}
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
