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
    <div className="bg-luxury-white text-luxury-black">
      {/* Hero Section - matching journal's hero exactly */}
      <section className="relative bg-luxury-white">
        <figure className="relative h-[48vh] min-h-[280px] w-full overflow-hidden sm:h-[52vh]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Fe8959b4139fc4dd9a3ce4786c1b4e8dc?format=webp&width=1600"
            alt="Gifts"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(26,26,26,0.05) 0%, rgba(26,26,26,0.65) 100%)",
            }}
            aria-hidden
          />

          {/* Desktop overlay */}
          <figcaption className="pointer-events-none absolute inset-0 hidden items-end sm:flex">
            <div className="mx-auto w-full max-w-[1120px] px-12 pb-14">
              <div className="max-w-xl text-left text-luxury-white">
                <p
                  className="mb-3 text-sm font-light uppercase tracking-[0.12em] text-luxury-white/75"
                  style={{ letterSpacing: "0.12em", fontWeight: 200 }}
                >
                  A QUIET PROTOCOL
                </p>
                <h1
                  className="text-4xl font-extralight leading-[1.1] tracking-[-0.02em] sm:text-[50px]"
                  style={{ fontWeight: 200 }}
                >
                  Gifts
                </h1>
                <p className="mt-5 text-base font-light text-luxury-white/80">
                  A quiet page, by request
                </p>
              </div>
            </div>
          </figcaption>

          {/* Mobile overlay */}
          <figcaption className="pointer-events-none absolute inset-0 flex items-end sm:hidden">
            <div className="w-full px-8 pb-10">
              <p
                className="mb-2 text-xs font-light uppercase tracking-[0.12em] text-luxury-white/75"
                style={{ letterSpacing: "0.12em", fontWeight: 200 }}
              >
                A QUIET PROTOCOL
              </p>
              <h1
                className="text-[32px] font-extralight leading-[1.15] tracking-[-0.02em] text-luxury-white"
                style={{ fontWeight: 200 }}
              >
                Gifts
              </h1>
              <p className="mt-4 text-sm font-light leading-[1.8] text-luxury-white/80">
                A quiet page, by request
              </p>
            </div>
          </figcaption>
        </figure>
      </section>

      {/* Content Section - matching journal's grid section */}
      <section className="bg-luxury-white px-6 pb-24 pt-16 text-luxury-black sm:px-10">
        <div className="mx-auto flex max-w-[680px] flex-col gap-16 sm:gap-20">
          {/* Microline */}
          <p
            className="text-center text-[12px] font-light uppercase tracking-[0.16em] text-gray-600"
            style={{ letterSpacing: "0.16em" }}
          >
            I don't expect gifts. They're punctuation, not purpose.
          </p>

          {/* Main Content */}
          <div className="space-y-16">
            <article className="group space-y-4 border-t border-gray-200 pt-10 text-left first:border-t-0 first:pt-0">
              <header>
                <h2
                  className="text-[28px] font-extralight leading-[1.25] tracking-[-0.02em] text-luxury-black"
                  style={{ fontWeight: 200 }}
                >
                  On Thoughtful Gestures
                </h2>
              </header>
              <p className="max-w-[62ch] text-[18px] font-light leading-[1.75] text-gray-600">
                When they happen, they feel like punctuation — a quiet
                thank-you, a gesture that marks continuity, not transaction.
              </p>
              <button
                type="button"
                onClick={toggleGuidance}
                className="inline-flex items-center text-[14px] font-light tracking-[0.01em] text-luxury-black transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-luxury-black/40 focus-visible:ring-offset-4 focus-visible:ring-offset-luxury-white"
                style={{
                  transitionDuration: "350ms",
                  letterSpacing: "0.01em",
                }}
              >
                <span
                  className="underline-offset-[6px] transition-all hover:underline"
                  style={{ transitionDuration: "350ms" }}
                >
                  {isExpanded ? "Hide guidance" : "Read guidance"}
                </span>
              </button>
            </article>

            {/* Expandable Content */}
            {isExpanded && (
              <div className="space-y-6 border-t border-gray-200 pt-10">
                {guidance.map((paragraph, index) => (
                  <p
                    key={index}
                    className="max-w-[62ch] text-[16px] font-light leading-[1.75] text-gray-600"
                  >
                    {paragraph}
                  </p>
                ))}
                <p className="max-w-[62ch] text-[14px] font-light italic leading-[1.75] text-gray-500 pt-4">
                  The most meaningful gesture is often the most considered one.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer - matching journal footer exactly */}
      <footer className="border-t border-gray-200 bg-luxury-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-[620px] space-y-4 text-left">
          <p className="text-[14px] font-light leading-[1.7] text-gray-600">
            This page exists by request. Not expectation, not protocol — just
            quiet consideration for those who asked.
          </p>
          <nav className="flex flex-wrap gap-3 text-[14px] font-light text-luxury-black">
            <a
              href="/journal"
              className="underline-offset-[4px] transition-colors duration-300 hover:text-gray-600 hover:underline"
            >
              The High-End Edition
            </a>
            <a
              href="/rates"
              className="underline-offset-[4px] transition-colors duration-300 hover:text-gray-600 hover:underline"
            >
              Rates & Registry
            </a>
            <a
              href="/about"
              className="underline-offset-[4px] transition-colors duration-300 hover:text-gray-600 hover:underline"
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
