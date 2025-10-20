import { memo } from "react";

import { cn } from "@/lib/utils";

type PageHeroOverlayProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  eyebrow?: string;
  alignment?: "left" | "right";
  gradient?: "horizontal" | "vertical";
  className?: string;
};

const horizontalGradients = {
  left: "linear-gradient(90deg, rgba(17,17,17,0.75) 0%, rgba(17,17,17,0.5) 35%, rgba(17,17,17,0.1) 70%, rgba(17,17,17,0) 100%)",
  right:
    "linear-gradient(270deg, rgba(17,17,17,0.75) 0%, rgba(17,17,17,0.5) 35%, rgba(17,17,17,0.1) 70%, rgba(17,17,17,0) 100%)",
};

const verticalGradient =
  "linear-gradient(180deg, rgba(17,17,17,0.1) 0%, rgba(17,17,17,0.65) 100%)";

const PageHeroOverlay = memo(
  ({
    title,
    subtitle,
    imageSrc,
    imageAlt,
    eyebrow,
    alignment = "left",
    gradient = "horizontal",
    className,
  }: PageHeroOverlayProps) => {
    const gradientStyle =
      gradient === "horizontal"
        ? {
            background:
              alignment === "right"
                ? horizontalGradients.right
                : horizontalGradients.left,
          }
        : { background: verticalGradient };

    const desktopAlignment = "items-end";
    const desktopJustify =
      alignment === "right" ? "justify-end" : "justify-start";
    const textAlignment = alignment === "right" ? "text-right" : "text-left";
    const containerAlignment =
      alignment === "right" ? "ml-auto mr-0" : "mr-auto ml-0";

    return (
      <section className={cn("relative bg-luxury-white", className)}>
        <figure className="relative h-[48vh] min-h-[320px] w-full overflow-hidden bg-[#d6cdc1] sm:h-[56vh]">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0" style={gradientStyle} aria-hidden />

          {/* Desktop overlay */}
          <figcaption
            className={cn(
              "pointer-events-none absolute inset-0 hidden sm:flex",
              desktopAlignment,
            )}
          >
            <div
              className={cn(
                "w-full max-w-[1120px] px-6 sm:px-12 lg:px-16",
                containerAlignment,
              )}
            >
              <div className={cn("flex w-full", desktopJustify)}>
                <div
                  className={cn(
                    "max-w-xl pb-8 text-luxury-white lg:pb-10",
                    textAlignment,
                  )}
                >
                  {eyebrow ? (
                    <p
                      className="mb-3 text-xs font-light uppercase tracking-[0.12em] text-luxury-white/75"
                      style={{ letterSpacing: "0.12em" }}
                    >
                      {eyebrow}
                    </p>
                  ) : null}
                  <h1
                    className="text-4xl font-extralight leading-[1.08] tracking-[-0.02em] text-luxury-white sm:text-[50px]"
                    style={{ fontWeight: 200 }}
                  >
                    {title}
                  </h1>
                  <p className="mt-5 text-base font-light leading-[1.8] text-luxury-white/80">
                    {subtitle}
                  </p>
                </div>
              </div>
            </div>
          </figcaption>

          {/* Mobile overlay */}
          <figcaption className="pointer-events-none absolute inset-0 flex items-end sm:hidden">
            <div className="w-full px-6 pb-10">
              {eyebrow ? (
                <p
                  className="mb-2 text-xs font-light uppercase tracking-[0.12em] text-luxury-white/70"
                  style={{ letterSpacing: "0.12em" }}
                >
                  {eyebrow}
                </p>
              ) : null}
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

PageHeroOverlay.displayName = "PageHeroOverlay";

export default PageHeroOverlay;
