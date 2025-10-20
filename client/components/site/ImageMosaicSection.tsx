import { cn } from "@/lib/utils";

type OverlayVariant = "dark" | "sepia";

type ImageTile = {
  src: string;
  alt: string;
  overlay?: OverlayVariant;
  heading?: string;
  subheading?: string;
};

type ImageMosaicSectionProps = {
  title?: string;
  subtitle?: string;
  tiles?: ImageTile[];
  withOverlay?: boolean;
  footerHeading?: string;
  footerLinkLabel?: string;
  footerLinkHref?: string;
};

const defaultTiles: ImageTile[] = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Feb43c94d56914a3e9070f0803602ba8e?format=webp&width=800",
    alt: "Portrait of Katherine Taylor in tailored attire",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Fd3ec1e31a22847378a6aaa373933f6b7?format=webp&width=800",
    alt: "Overhead view of a white luxury car",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F2eeac4f0544d4ec5952dafcbdbce130b?format=webp&width=800",
    alt: "Katherine Taylor wearing a fur coat",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F49821e94c0e742a6afe147811dfebac6?format=webp&width=800",
    alt: "Katherine Taylor posing on a staircase",
  },
];

const DEFAULT_TITLE =
  "Escorts Near Me | The High-End Experience by Katherine Taylor";
const DEFAULT_SUBTITLE =
  "For over a decade, Katherine Taylor escort has been the trusted choice for discerning clients in San Francisco and Sacramento.";

const overlayClasses: Record<OverlayVariant, string> = {
  dark: "bg-gradient-to-b from-black/20 via-black/45 to-black/75",
  sepia: "bg-gradient-to-b from-[#3a2414]/20 via-[#4a2d18]/55 to-[#2b1a10]/80",
};

const captionTextClasses: Record<OverlayVariant, string> = {
  dark: "text-luxury-white",
  sepia: "text-[#f8ebdc]",
};

const ImageMosaicSection = ({
  title = DEFAULT_TITLE,
  subtitle = DEFAULT_SUBTITLE,
  tiles,
  withOverlay = false,
  footerHeading,
  footerLinkHref,
  footerLinkLabel,
}: ImageMosaicSectionProps) => {
  const displayTiles = tiles ?? defaultTiles;

  return (
    <section className="bg-luxury-white py-16 md:py-32 lg:py-40 max-md:py-16">
      <div className="mx-auto flex max-w-luxury flex-col gap-12 px-8">
        <div className="space-y-4 text-center">
          <h1 className="text-xs font-light uppercase tracking-uppercase text-gray-600">
            {title}
          </h1>
          <h2 className="mx-auto max-w-[65ch] text-base font-light leading-relaxed tracking-luxury text-gray-700">
            {subtitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:gap-16 max-md:gap-6">
          {displayTiles.map((tile) => {
            const overlayKey =
              tile.overlay ??
              (withOverlay || tile.heading || tile.subheading
                ? "dark"
                : undefined);
            const captionTone: OverlayVariant = overlayKey ?? "dark";

            return (
              <article
                key={tile.src}
                className="group bg-luxury-white p-4 shadow-luxury-md transition-shadow duration-400 ease-out md:p-10 lg:p-12 max-md:p-4 hover:shadow-luxury-lg"
              >
                <div className="relative mb-6 aspect-[4/5] overflow-hidden">
                  <img
                    src={tile.src}
                    alt={tile.alt}
                    width={800}
                    height={1000}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-400 ease-out group-hover:scale-105"
                  />
                  {overlayKey ? (
                    <div
                      className={cn(
                        "pointer-events-none absolute inset-0 opacity-90 mix-blend-multiply transition-opacity duration-400 ease-out group-hover:opacity-100",
                        overlayClasses[overlayKey],
                      )}
                    />
                  ) : null}
                  {(tile.heading || tile.subheading) && (
                    <div
                      className={cn(
                        "pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-1 px-6 pb-6 pt-16 text-left",
                        captionTextClasses[captionTone],
                      )}
                    >
                      {tile.heading ? (
                        <span className="text-[0.7rem] font-light uppercase tracking-uppercase">
                          {tile.heading}
                        </span>
                      ) : null}
                      {tile.subheading ? (
                        <span className="text-sm font-light leading-relaxed">
                          {tile.subheading}
                        </span>
                      ) : null}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
        {footerHeading || (footerLinkHref && footerLinkLabel) ? (
          <div className="border-t border-gray-100 pt-8 text-left">
            <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between max-md:gap-3 max-md:flex-col">
              {footerHeading ? (
                <span className="text-xs font-light uppercase tracking-uppercase text-gray-600">
                  {footerHeading}
                </span>
              ) : (
                <span className="sr-only">Gift guide prompt</span>
              )}
              {footerLinkHref && footerLinkLabel ? (
                <a
                  href={footerLinkHref}
                  className="inline-flex items-center gap-3 text-sm font-light uppercase tracking-uppercase text-luxury-black underline underline-offset-4 transition-opacity duration-250 ease-out hover:opacity-70"
                >
                  {footerLinkLabel}
                  <span aria-hidden="true">→</span>
                </a>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default ImageMosaicSection;
