"use client";

import { useCallback, useMemo, useState } from "react";

const BACKGROUND_IMAGE_URL =
  "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Fe8959b4139fc4dd9a3ce4786c1b4e8dc?format=webp&width=1600";

const GUIDANCE_COPY = [
  "I don't expect gifts. When they happen, they feel like punctuation — a quiet thank-you, a gesture that marks continuity, not transaction.",
  "The most meaningful ones usually reflect the texture of what we've talked about: a book that deepened a conversation, a bottle tied to a story, a small object that travels well, or an experience that creates calm. Anything chosen with thought rather than size always lands right.",
  "I don't accept extravagant or public gifts. The intention matters more than the scale, and privacy always comes first. If you're uncertain, ask — I'll answer honestly.",
  "The best gift, though, is time well spent. Continuity itself — the ongoing conversation, the trust that builds when you realize I remember the details you didn't need to repeat — that's the one that stays.",
];

const Gifts = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleGuidance = useCallback(() => {
    setIsExpanded((previous) => !previous);
  }, []);

  const revealButtonLabel = useMemo(
    () => (isExpanded ? "Hide guidance" : "Show guidance"),
    [isExpanded],
  );

  return (
    <div className="bg-luxury-white text-luxury-black">
      <section className="relative isolate min-h-[60vh]">
        <div
          className="absolute inset-0 -z-20"
          aria-hidden
          style={{
            backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
            backgroundSize: "cover",
            backgroundPosition: "center 35%",
            filter: "grayscale(8%)",
            opacity: 0.65,
          }}
        />
        <div
          className="absolute inset-0 -z-10"
          aria-hidden
          style={{
            background:
              "linear-gradient(180deg, rgba(245, 243, 240, 0.4) 0%, rgba(245, 243, 240, 0.2) 100%)",
          }}
        />

        <div className="relative mx-auto max-w-[620px]">
          <div className="flex flex-col px-10 pb-[60px] pt-[120px] sm:px-12">
            <header className="mb-8">
              <h1
                className="font-light text-luxury-gray-800"
                style={{
                  fontWeight: 200,
                  fontSize: "48px",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  marginBottom: "16px",
                }}
              >
                Gifts
              </h1>
              <p
                className="font-light text-luxury-black/70"
                style={{
                  fontSize: "16px",
                  letterSpacing: "0.01em",
                  lineHeight: 1.6,
                  marginBottom: "32px",
                }}
              >
                A quiet page, by request.
              </p>
            </header>

            <div className="mb-10">
              <button
                type="button"
                onClick={toggleGuidance}
                aria-expanded={isExpanded}
                aria-controls="gifts-guidance"
                className="inline-flex items-center justify-center border border-[rgba(26,26,26,0.2)] bg-transparent px-7 py-3 text-[14px] font-light tracking-[0.02em] text-luxury-black transition-all duration-[480ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-[1px] hover:border-[rgba(26,26,26,0.4)] hover:bg-[rgba(26,26,26,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(26,26,26,0.32)]"
              >
                {revealButtonLabel}
              </button>
            </div>
          </div>

          <div
            id="gifts-guidance"
            style={{
              opacity: isExpanded ? 1 : 0,
              maxHeight: isExpanded ? "1200px" : "0px",
              transition:
                "opacity 580ms cubic-bezier(0.4, 0, 0.2, 1), max-height 580ms cubic-bezier(0.4, 0, 0.2, 1)",
              paddingTop: isExpanded ? "48px" : "0px",
              paddingBottom: isExpanded ? "120px" : "0px",
            }}
            className="overflow-hidden px-10 sm:px-12"
            aria-hidden={!isExpanded}
          >
            <div className="space-y-[28px]">
              {GUIDANCE_COPY.map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-light"
                  style={{
                    fontSize: "17px",
                    letterSpacing: "0.008em",
                    lineHeight: 1.85,
                    color: "var(--gray-600)",
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gifts;
