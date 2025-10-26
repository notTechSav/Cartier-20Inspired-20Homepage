import { memo } from "react";
import JournalCard from "./JournalCard";
import type { JournalEssay } from "@/lib/journal-content";

interface JournalGridProps {
  entries: JournalEssay[];
  microline?: string;
  ctaLabel: string;
  onOpen: (slug: string) => void;
}

const JournalGrid = memo(
  ({ entries, microline, onOpen, ctaLabel }: JournalGridProps) => {
    return (
      <section className="bg-luxury-white px-6 pb-24 pt-16 text-luxury-black sm:px-10">
        <div className="mx-auto flex max-w-[680px] flex-col gap-16 sm:gap-20">
          {microline ? (
            <p
              className="text-center text-[12px] font-light uppercase tracking-[0.16em] text-gray-600"
              style={{ letterSpacing: "0.16em" }}
            >
              {microline}
            </p>
          ) : null}
          <div className="space-y-16">
            {entries.map((entry) => (
              <JournalCard
                key={entry.slug}
                slug={entry.slug}
                title={entry.title}
                excerpt={entry.excerpt}
                onOpen={onOpen}
                ctaLabel={ctaLabel}
              />
            ))}
          </div>
        </div>
      </section>
    );
  },
);

JournalGrid.displayName = "JournalGrid";

export default JournalGrid;
