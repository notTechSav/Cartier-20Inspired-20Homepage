import { memo } from "react";
import { cn } from "@/lib/utils";

type PageHeroOverlayProps = {
  title: string;
  subtitle: string;
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
  eyebrow?: string;
  alignment?: "left" | "right";
  gradient?: "horizontal" | "vertical";
  className?: string;
};

const horizontalGradients = {
  left: "linear-gradient(90deg, rgba(17,17,17,0.8) 0%, rgba(17,17,17,0.6) 30%, rgba(17,17,17,0.2) 60%, rgba(17,17,17,0) 100%)",
  right:
    "linear-gradient(270deg, rgba(17,17,17,0.8) 0%, rgba(17,17,17,0.6) 30%, rgba(17,17,17,0.2) 60%, rgba(17,17,17,0) 100%)",
};

const verticalGradient =
  "linear-gradient(180deg, rgba(17,17,17,0.1) 0%, rgba(17,17,17,0.8) 100%)";

const PageHeroOverlay = memo(
  ({
    title,
    subtitle,
    imageSrc,
    imageAlt,
    videoSrc,
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
      <section
        className={cn("relative bg-luxury-white overflow-hidden", className)}
      >
        {/* Hero Container */}
        <figure className="relative w-full bg-[#d6cdc1]">
          {/* Desktop Height */}
          <div className="hidden sm:block relative h-[56vh] min-h-[400px] w-full overflow-hidden">
            {videoSrc ? (
              <video
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            ) : (
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover"
                loading="eager"
              />
            )}
            <div
              className="absolute inset-0"
              style={gradientStyle}
              aria-hidden
            />

            {/* Desktop Overlay Text */}
            <figcaption className="pointer-events-none absolute inset-0 flex items-end">
              <div
                className={cn(
                  "w-full max-w-[1120px] px-6 sm:px-12 lg:px-16",
                  containerAlignment,
                )}
              >
                <div className={cn("flex w-full", desktopJustify)}>
                  <div
                    className={cn(
                      "max-w-2xl pb-12 text-luxury-white lg:pb-16",
                      textAlignment,
                    )}
                  >
                    {eyebrow ? (
                      <p
                        className="mb-4 text-xs font-light uppercase tracking-[0.12em] text-luxury-white/80"
                        style={{ letterSpacing: "0.12em" }}
                      >
                        {eyebrow}
                      </p>
                    ) : null}
                    <h1
                      className="text-5xl md:text-6xl lg:text-7xl font-extralight leading-[1.05] tracking-[-0.02em] text-luxury-white"
                      style={{ fontWeight: 200 }}
                    >
                      {title}
                    </h1>
                    <p className="mt-6 text-base font-light leading-[1.8] text-luxury-white/85 max-w-lg">
                      {subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </figcaption>
          </div>

          {/* Mobile Height */}
          <div className="sm:hidden relative h-[45vh] min-h-[300px] w-full overflow-hidden">
            {videoSrc ? (
              <video
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            ) : (
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover"
                loading="eager"
              />
            )}
            <div
              className="absolute inset-0"
              style={gradientStyle}
              aria-hidden
            />

            {/* Mobile Overlay Text */}
            <figcaption className="pointer-events-none absolute inset-0 flex items-end">
              <div className="w-full px-5 pb-8">
                {eyebrow ? (
                  <p
                    className="mb-3 text-xs font-light uppercase tracking-[0.12em] text-luxury-white/75"
                    style={{ letterSpacing: "0.12em" }}
                  >
                    {eyebrow}
                  </p>
                ) : null}
                <h1
                  className="text-3xl font-extralight leading-[1.1] tracking-[-0.02em] text-luxury-white"
                  style={{ fontWeight: 200 }}
                >
                  {title}
                </h1>
                <p className="mt-3 text-sm font-light leading-[1.7] text-luxury-white/80">
                  {subtitle}
                </p>
              </div>
            </figcaption>
          </div>
        </figure>
      </section>
    );
  },
);

PageHeroOverlay.displayName = "PageHeroOverlay";

export default PageHeroOverlay;
