import { Button } from "@/components/ui/button";

const braceletImage =
  "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2F3787c432450b4b348ab6d2d5752be09d?format=webp&width=1600";

const LoveStorySection = () => {
  return (
    <section className="bg-luxury-white py-16 md:py-32 lg:py-40 max-md:py-16">
      <div className="mx-auto grid max-w-luxury items-center gap-6 px-6 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:gap-12 lg:gap-16 max-md:gap-6 max-md:px-6">
        <div className="relative flex items-center justify-center overflow-hidden border border-gray-200 bg-gray-50 shadow-luxury-md transition-shadow duration-400 ease-out hover:shadow-luxury-lg">
          <div
            className="aspect-[4/5] w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${braceletImage})` }}
            role="img"
            aria-label="Cartier Love bracelets against Brooklyn Bridge"
          />
        </div>
        <div className="space-y-6 text-left max-md:space-y-4">
          <span className="text-xs font-light uppercase tracking-uppercase text-gray-600">
            A Love Story Without Limits
          </span>
          <p className="max-w-[65ch] text-base font-light leading-relaxed tracking-luxury text-gray-700">
            A true feat of innovation, the bracelet is the result of over one
            hundred trials and prototypes by the Manufacture and the
            Maison&apos;s design studios. Radiant as one or linked to another
            bracelet: its special clasp can connect, making a pair, or an
            endless amount.
          </p>
          <Button variant="ctaSecondary">Shop Love Bracelets</Button>
        </div>
      </div>
    </section>
  );
};

export default LoveStorySection;
