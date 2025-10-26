import { useEffect } from "react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

const ABOUT_HERO_IMAGE =
  "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F555456e693aa4baea56d46da819d34af?format=webp&width=1600";
const ABOUT_SECONDARY_IMAGE = ABOUT_HERO_IMAGE;

const About = () => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-animate]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.dataset.visible = "true";
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-[#fafaf9] text-[#4a4a4a]">
      <div className="relative">
        <AspectRatio ratio={16 / 9}>
          <img
            src={ABOUT_HERO_IMAGE}
            alt="Katherine Taylor reclining beside a sunlit pool"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#fafaf9] via-transparent to-transparent" />
        </AspectRatio>
      </div>
      <div className="mx-auto max-w-[680px] px-6 py-24 md:py-28">
        <header
          data-animate
          className="space-y-6 opacity-0 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 data-[visible=true]:delay-100"
        >
          <h1 className="font-serif text-4xl font-light tracking-[-0.01em] text-[#1a1a1a] md:text-[48px]">
            About Me
          </h1>
          <p className="text-[17px] leading-[1.9]">
            The conversation never resets. I carry forward everything—your M&amp;A
            timeline, your board anxieties, your daughter’s college decision, the
            trip to Patagonia you’ve been planning. Not because I take notes, but
            because I’ve built a decade of pattern libraries that let me read what
            you don’t say.
          </p>
        </header>

        <div className="my-16 flex justify-center" aria-hidden="true">
          <span className="h-24 w-px bg-gradient-to-b from-transparent via-[#8b7355]/60 to-transparent opacity-40" />
        </div>

        <main className="space-y-16">
          <section
            data-animate
            className="space-y-7 opacity-0 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
          >
            <p>
              A client once sent two lines: in-suite only, three hours, no celebrity
              talk. Most people would see red flags. I saw the date—Gateway
              Conference, same week last year at the Four Seasons. I saw the
              precision—three hours meant no dinner break. I saw the
              subtext—he’d had a bad experience and wanted efficiency, privacy, and
              a conversation with substance. I arrived discreetly at seven, no
              instructions needed. That’s what institutional memory looks like when
              it’s in practice.
            </p>
            <div
              data-animate
              className="relative overflow-hidden rounded-sm bg-gradient-to-br from-[#d4cfc9] via-[#e8e4e0] to-[#d4cfc9] opacity-0 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
            >
              <AspectRatio ratio={16 / 9}>
                <img
                  src={ABOUT_SECONDARY_IMAGE}
                  alt="San Francisco atmosphere"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#fafaf9]/80 via-transparent to-transparent" />
              </AspectRatio>
            </div>
            <p>
              My work sits at the intersection of strategic counsel and personal
              continuity. Half of what I do is high-level thinking—pattern
              recognition, operational clarity, risk sorting. The other half is
              presence—listening until I can hear the sentence you didn’t finish.
              The outcome is relief: you don’t have to explain yourself to be
              understood.
            </p>
            <p>
              I keep a small roster so every relationship stays alive in my head.
              Each engagement builds on the last; by the third, we’re operating at
              full depth. Decisions move faster, and the conversations reach a level
              most people never get to have.
            </p>
            <p>
              I work with C-suite executives, IPO founders, and family-office
              principals who already have brilliant advisors but no one who
              remembers the whole picture—the professional, the personal, and the
              quiet space in between. That’s the gap I fill.
            </p>
            <p>
              I don’t advertise availability because capacity is limited by design.
              When I reach twenty active partnerships, I raise rates rather than add
              more names. If continuity matters to you, reach out before the next
              review window.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default About;
