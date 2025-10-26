import { Button } from "@/components/ui/button";

const LoveUnlimitedSection = () => {
  return (
    <section className="border-b border-gray-200 bg-luxury-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto flex max-w-[600px] flex-col items-center gap-4 px-6 text-center">
        <h2 className="text-[0.78rem] uppercase tracking-[0.4em] text-gray-500">
          The New Love Unlimited
        </h2>
        <p className="max-w-[65ch] text-[0.82rem] leading-7 text-gray-700 sm:text-sm">
          Creative, pure, and symbolically powerful, the latest LOVE Unlimited
          designs intensify the original design with luminous flexibility.
        </p>
        <Button variant="ctaSecondary">Shop</Button>
      </div>
    </section>
  );
};

export default LoveUnlimitedSection;
