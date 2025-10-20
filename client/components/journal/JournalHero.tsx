import { memo } from "react";

interface JournalHeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}

const overlayGradient =
  "linear-gradient(180deg, rgba(26,26,26,0.05) 0%, rgba(26,26,26,0.65) 100%)";

const JournalHero = memo(
  ({ title, subtitle, imageSrc, imageAlt }: JournalHeroProps) => {
    return (
      <section className="relative bg-luxury-white">
        <figure className="relative h-[48vh] min-h-[280px] w-full overflow-hidden sm:h-[52vh]">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{ background: overlayGradient }}
            aria-hidden
          />

          {/* Desktop text overlay */}
          <figcaption className="pointer-events-none absolute inset-0 hidden items-end sm:flex">
            <div className="mx-auto w-full max-w-[1120px] px-12 pb-14">
              <div className="max-w-xl text-left text-luxury-white">
                <p
                  className="mb-3 text-sm font-light uppercase tracking-[0.12em] text-luxury-white/75"
                  style={{ letterSpacing: "0.12em" }}
                >
                  THE HIGH-END EDITION
                </p>
                <h1
                  className="text-4xl font-extralight leading-[1.1] tracking-[-0.02em] text-luxury-white sm:text-[50px]"
                  style={{ fontWeight: 200 }}
                >
                  {title}
                </h1>
                <p className="mt-5 text-base font-light text-luxury-white/80">
                  {subtitle}
                </p>
              </div>
            </div>
          </figcaption>

          {/* Mobile text overlay - now inside figure with absolute positioning */}
          <figcaption className="pointer-events-none absolute inset-0 flex items-end sm:hidden">
            <div className="w-full px-8 pb-10">
              <p
                className="mb-2 text-xs font-light uppercase tracking-[0.12em] text-luxury-white/75"
                style={{ letterSpacing: "0.12em" }}
              >
                THE HIGH-END EDITION
              </p>
              <h1
                className="text-[32px] font-extralight leading-[1.15] tracking-[-0.02em] text-luxury-white"
                style={{ fontWeight: 200 }}
              >
                {title}
              </h1>
              <p className="mt-4 text-sm font-light leading-[1.8] text-luxury-white/80">
                {subtitle}
              </p>
            </div>
          </figcaption>
        </figure>
      </section>
    );
  },
);

JournalHero.displayName = "JournalHero";

export default JournalHero;
