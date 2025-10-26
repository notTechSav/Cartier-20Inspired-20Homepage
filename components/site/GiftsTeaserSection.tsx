import { Button } from "@/components/ui/button";
import { H2 } from "@/components/ui/luxury-typography";

const GiftsTeaserSection = () => {
  return (
    <section className="bg-luxury-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-luxury px-6 text-center md:px-12">
        <H2 as="p" className="mb-6 text-luxury-black">
          Gifts – What to Give an Escort
        </H2>
        <p className="mx-auto mb-8 max-w-[60ch] text-[0.92rem] leading-7 text-gray-700">
          What’s the etiquette when gifting an escort?
        </p>
        <Button asChild variant="ctaSecondary">
          <a href="/gifts">Explore the Gift Guide</a>
        </Button>
      </div>
    </section>
  );
};

export default GiftsTeaserSection;
