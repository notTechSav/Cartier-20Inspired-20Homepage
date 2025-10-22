"use client";

import { useEffect, useState, useCallback } from "react";

const Gifts = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleGuidance = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  useEffect(() => {
    document.title =
      "Gifts | Katherine Taylor Escort - San Francisco & Sacramento";
  }, []);

  const guidance = [
    "The most meaningful ones usually reflect the texture of what we've talked about: a book that deepened a conversation, a bottle tied to a story, a small object that travels well, or an experience that creates calm.",
    "I don't accept extravagant or public gifts. The intention matters more than the scale, and privacy always comes first. If you're uncertain, ask — I'll answer honestly.",
    "The best gift, though, is time well spent. Continuity itself — the ongoing conversation, the trust that builds when you realize I remember the details you didn't need to repeat — that's the one that stays.",
  ];

  return (
    <div
      style={{
        backgroundColor: "var(--color-background-primary)",
        color: "var(--color-text-primary)",
      }}
      id="gifts"
      data-section="gifts"
    >
      {/* Hero Section - matching journal's hero exactly */}
      <section style={{ position: "relative", backgroundColor: "var(--color-background-primary)" }} data-section="gifts-hero">
        <figure style={{ position: "relative", height: "48vh", minHeight: "280px", width: "100%", overflow: "hidden" }}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Fe8959b4139fc4dd9a3ce4786c1b4e8dc?format=webp&width=1600"
            alt="Gifts"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            loading="eager"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(26,26,26,0.05) 0%, rgba(26,26,26,0.65) 100%)",
            }}
            aria-hidden
          />

          {/* Desktop overlay */}
          <figcaption style={{ pointerEvents: "none", position: "absolute", inset: 0, display: "flex", alignItems: "flex-end" }}>
            <div style={{ marginLeft: "auto", marginRight: "auto", width: "100%", maxWidth: "1120px", paddingLeft: "var(--spacer-3xl)", paddingRight: "var(--spacer-3xl)", paddingBottom: "var(--spacer-3xl)" }}>
              <div style={{ maxWidth: "40rem", textAlign: "left", color: "white" }}>
                <p
                  style={{ marginBottom: "var(--spacer-s)", fontSize: "14px", fontWeight: 300, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255, 255, 255, 0.75)" }}
                >
                  A QUIET PROTOCOL
                </p>
                <h1
                  style={{ fontSize: "50px", fontWeight: 200, lineHeight: 1.1, letterSpacing: "-0.02em", color: "white" }}
                >
                  Gifts
                </h1>
                <p style={{ marginTop: "var(--spacer-xl)", fontSize: "16px", fontWeight: 300, color: "rgba(255, 255, 255, 0.8)" }}>
                  A quiet page, by request
                </p>
              </div>
            </div>
          </figcaption>

          {/* Mobile overlay */}
          <figcaption style={{ pointerEvents: "none", position: "absolute", inset: 0, display: "flex", alignItems: "flex-end" }}>
            <div style={{ width: "100%", paddingLeft: "var(--spacer-m)", paddingRight: "var(--spacer-m)", paddingBottom: "var(--spacer-2xl)" }}>
              <p
                style={{ marginBottom: "var(--spacer-xs)", fontSize: "12px", fontWeight: 300, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255, 255, 255, 0.75)" }}
              >
                A QUIET PROTOCOL
              </p>
              <h1
                style={{ fontSize: "32px", fontWeight: 200, lineHeight: 1.15, letterSpacing: "-0.02em", color: "white" }}
              >
                Gifts
              </h1>
              <p style={{ marginTop: "var(--spacer-s)", fontSize: "14px", fontWeight: 300, lineHeight: 1.8, color: "rgba(255, 255, 255, 0.8)" }}>
                A quiet page, by request
              </p>
            </div>
          </figcaption>
        </figure>
      </section>

      {/* Content Section - matching journal's grid section */}
      <section style={{ backgroundColor: "var(--color-background-primary)", paddingLeft: "var(--spacer-m)", paddingRight: "var(--spacer-m)", paddingBottom: "var(--spacer-6xl)", paddingTop: "var(--spacer-4xl)", color: "var(--color-text-primary)" }}>
        <div style={{ marginLeft: "auto", marginRight: "auto", display: "flex", maxWidth: "680px", flexDirection: "column", gap: "var(--spacer-4xl)" }}>
          {/* Microline */}
          <p
            style={{ textAlign: "center", fontSize: "12px", fontWeight: 300, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--color-text-tertiary)" }}
          >
            I don't expect gifts. They're punctuation, not purpose.
          </p>

          {/* Main Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacer-4xl)" }}>
            <article style={{ display: "flex", flexDirection: "column", gap: "var(--spacer-m)", borderTop: "1px solid var(--color-border-tertiary)", paddingTop: "var(--spacer-4xl)", textAlign: "left" }}>
              <header>
                <h2
                  style={{ fontSize: "28px", fontWeight: 200, lineHeight: 1.25, letterSpacing: "-0.02em", color: "var(--color-text-primary)" }}
                >
                  On Thoughtful Gestures
                </h2>
              </header>
              <p style={{ maxWidth: "62ch", fontSize: "18px", fontWeight: 300, lineHeight: 1.75, color: "var(--color-text-tertiary)" }}>
                When they happen, they feel like punctuation — a quiet
                thank-you, a gesture that marks continuity, not transaction.
              </p>
              <button
                type="button"
                onClick={toggleGuidance}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontSize: "14px",
                  fontWeight: 300,
                  letterSpacing: "0.01em",
                  color: "var(--color-text-primary)",
                  transition: "all 350ms var(--ease)",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  padding: 0,
                  textDecoration: "underline",
                  textDecorationLine: "underline",
                  textUnderlineOffset: "6px",
                }}
              >
                {isExpanded ? "Hide guidance" : "Read guidance"}
              </button>
            </article>

            {/* Expandable Content */}
            {isExpanded && (
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacer-xl)", borderTop: "1px solid var(--color-border-tertiary)", paddingTop: "var(--spacer-4xl)" }}>
                {guidance.map((paragraph, index) => (
                  <p
                    key={index}
                    style={{ maxWidth: "62ch", fontSize: "16px", fontWeight: 300, lineHeight: 1.75, color: "var(--color-text-tertiary)" }}
                  >
                    {paragraph}
                  </p>
                ))}
                <p style={{ maxWidth: "62ch", fontSize: "14px", fontWeight: 300, fontStyle: "italic", lineHeight: 1.75, color: "var(--color-text-secondary)", paddingTop: "var(--spacer-xl)" }}>
                  The most meaningful gesture is often the most considered one.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer - matching journal footer exactly */}
      <footer style={{ borderTop: "1px solid var(--color-border-tertiary)", backgroundColor: "var(--color-background-primary)", paddingLeft: "var(--spacer-m)", paddingRight: "var(--spacer-m)", paddingTop: "var(--spacer-4xl)", paddingBottom: "var(--spacer-4xl)" }}>
        <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "620px", display: "flex", flexDirection: "column", gap: "var(--spacer-m)", textAlign: "left" }}>
          <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: 1.7, color: "var(--color-text-tertiary)" }}>
            This page exists by request. Not expectation, not protocol — just
            quiet consideration for those who asked.
          </p>
          <nav style={{ display: "flex", flexWrap: "wrap", gap: "var(--spacer-m)", fontSize: "14px", fontWeight: 300, color: "var(--color-text-primary)" }}>
            <a
              href="/journal"
              style={{ textDecorationLine: "underline", textUnderlineOffset: "4px", transition: "all 300ms var(--ease)" }}
            >
              The High-End Edition
            </a>
            <a
              href="/rates"
              style={{ textDecorationLine: "underline", textUnderlineOffset: "4px", transition: "all 300ms var(--ease)" }}
            >
              Rates & Registry
            </a>
            <a
              href="/about"
              style={{ textDecorationLine: "underline", textUnderlineOffset: "4px", transition: "all 300ms var(--ease)" }}
            >
              About
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Gifts;
