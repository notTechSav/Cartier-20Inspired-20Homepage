import { Button } from "@/components/ui/button";
import { H2, H3 } from "@/components/ui/luxury-typography";

const backgroundImage =
  "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Faeb049f55ced4eeca0bd9f5973346df1?format=webp&width=1600";

const LegendReinventedSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-luxury-black">
      <div
        className="relative flex min-h-[520px] w-full items-center justify-start bg-cover bg-center px-6 py-24 md:min-h-[640px] md:py-32 lg:py-40 max-md:min-h-[400px] max-md:px-6 max-md:py-16"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div
          className="absolute inset-0 bg-luxury-black/60 max-sm:bg-white/60 max-sm:left-[221px] max-sm:top-[65px]"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-[560px] space-y-6 text-left text-luxury-white max-md:space-y-4">
          <H2 as="p" className="mb-0 text-luxury-white">
            Katherine Taylor — Elegant San Francisco & Sacramento Escort
          </H2>
          <p className="max-w-[65ch] text-base font-light leading-relaxed tracking-luxury text-white/85">
            Is it possible to find a genuine connection when searching for
            escorts near me? Katherine Taylor is an elegant San Francisco escort
            who transforms uncertainty into warm, authentic companionship that
            puts you at ease — whether in San Francisco or Sacramento.
          </p>
          <Button asChild variant="ctaPrimary">
            <a href="/about">Discover</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LegendReinventedSection;
