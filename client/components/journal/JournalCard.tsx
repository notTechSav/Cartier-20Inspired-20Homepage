import { memo } from "react";

interface JournalCardProps {
  title: string;
  excerpt: string;
  slug: string;
  onOpen: (slug: string) => void;
  ctaLabel: string;
}

const JournalCard = memo(
  ({ title, excerpt, onOpen, slug, ctaLabel }: JournalCardProps) => {
    return (
      <article className="group space-y-4 border-t border-gray-200 pt-10 text-left first:border-t-0 first:pt-0">
        <header>
          <h2
            className="text-[28px] font-extralight leading-[1.25] tracking-[-0.02em] text-luxury-black"
            style={{ fontWeight: 200 }}
          >
            {title}
          </h2>
        </header>
        <p className="max-w-[62ch] text-[18px] font-light leading-[1.75] text-gray-600">
          {excerpt}
        </p>
        <button
          type="button"
          onClick={() => onOpen(slug)}
          className="inline-flex items-center text-[14px] font-light tracking-[0.01em] text-luxury-black transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-luxury-black/40 focus-visible:ring-offset-4 focus-visible:ring-offset-luxury-white"
          style={{
            transitionDuration: "350ms",
            letterSpacing: "0.01em",
          }}
        >
          <span
            className="underline-offset-[6px] transition-all group-hover:underline"
            style={{ transitionDuration: "350ms" }}
          >
            {ctaLabel}
          </span>
        </button>
      </article>
    );
  },
);

JournalCard.displayName = "JournalCard";

export default JournalCard;
