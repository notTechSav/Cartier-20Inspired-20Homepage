/**
 * GiftsContent Component
 * Expandable guidance section with luxury animations (400-600ms cubic-bezier)
 */

import { useCallback, useMemo, useState } from "react";

interface GiftsContentProps {
  paragraphs: string[];
  ctaLabel: string;
  ctaLabelExpanded: string;
}

const GiftsContent = ({
  paragraphs,
  ctaLabel,
  ctaLabelExpanded,
}: GiftsContentProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleGuidance = useCallback(() => {
    setIsExpanded((previous) => !previous);
  }, []);

  const buttonLabel = useMemo(
    () => (isExpanded ? ctaLabelExpanded : ctaLabel),
    [isExpanded, ctaLabel, ctaLabelExpanded],
  );

  return (
    <div className="relative mx-auto max-w-[680px]">
      {/* CTA Button - Luxury hover effects with 480ms transition */}
      <div className="mb-10 px-10 sm:px-12">
        <button
          type="button"
          onClick={toggleGuidance}
          aria-expanded={isExpanded}
          aria-controls="gifts-guidance"
          className="inline-flex items-center justify-center border border-[rgba(26,26,26,0.2)] bg-transparent px-7 py-3 text-[14px] font-light tracking-[0.02em] text-luxury-black transition-all duration-[480ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-[1px] hover:border-[rgba(26,26,26,0.4)] hover:bg-[rgba(26,26,26,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(26,26,26,0.32)]"
          style={{ fontWeight: 300 }}
        >
          {buttonLabel}
        </button>
      </div>

      {/* Expandable Content - Smooth 580ms transition */}
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
        {/* Paragraphs - Ultra-thin typography with 1.85 line-height */}
        <div className="space-y-[28px]">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="font-light"
              style={{
                fontSize: "17px",
                fontWeight: 300,
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
  );
};

export default GiftsContent;
