/**
 * GiftsHero Component
 * Luxury design: ultra-thin typography (100-300 weight), 0.05em letter-spacing, gradient overlay
 */

interface GiftsHeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}

const GiftsHero = ({ title, subtitle, imageSrc, imageAlt }: GiftsHeroProps) => {
  return (
    <section className="relative isolate min-h-[60vh]">
      {/* Background Image with Responsive Srcset */}
      <img
        src={`${imageSrc}?format=webp&width=1600`}
        srcSet={`
          ${imageSrc}?format=webp&width=400 400w,
          ${imageSrc}?format=webp&width=800 800w,
          ${imageSrc}?format=webp&width=1200 1200w,
          ${imageSrc}?format=webp&width=1600 1600w,
          ${imageSrc}?format=webp&width=2400 2400w
        `}
        sizes="100vw"
        alt={imageAlt}
        loading="eager"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        style={{
          objectPosition: "center 35%",
          filter: "grayscale(8%)",
          opacity: 0.65,
        }}
      />

      {/* Gradient Overlay - Luxury refinement */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, rgba(250, 250, 247, 0.4) 0%, rgba(250, 250, 247, 0.2) 100%)",
        }}
      />

      {/* Content Container - Following 8-point grid spacing */}
      <div className="relative mx-auto max-w-[680px]">
        <div className="flex flex-col px-10 pb-16 pt-32 sm:px-12 sm:pt-40">
          <header className="mb-8">
            {/* Title - Ultra-thin font weight 200, tight letter-spacing */}
            <h1
              className="mb-4 font-light text-luxury-gray-800"
              style={{
                fontWeight: 200,
                fontSize: "48px",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              {title}
            </h1>

            {/* Subtitle - Font weight 300, refined spacing */}
            <p
              className="font-light text-luxury-black/70"
              style={{
                fontSize: "16px",
                letterSpacing: "0.01em",
                lineHeight: 1.6,
              }}
            >
              {subtitle}
            </p>
          </header>
        </div>
      </div>
    </section>
  );
};

export default GiftsHero;
