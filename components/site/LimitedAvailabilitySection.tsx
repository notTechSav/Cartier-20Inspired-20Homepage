import { Button } from "@/components/ui/button";

const LimitedAvailabilitySection = () => {
  return (
    <section className="bg-luxury-white py-16 md:py-32 lg:py-40 max-md:py-16">
      <div className="mx-auto max-w-luxury px-6 text-center md:px-12 max-md:px-6">
        <p className="mb-3 text-xs font-light uppercase tracking-uppercase text-gray-600 max-md:mb-2">
          Limited Availability
        </p>
        <p className="mx-auto mb-8 max-w-[65ch] text-base font-light leading-relaxed tracking-luxury text-gray-700 max-md:mb-6">
          Currently accepting 3-4 bookings monthly among SF escorts and
          Sacramento escorts. December has two remaining opportunities.
        </p>
        <Button variant="ctaSecondary" asChild className="max-md:w-full md:w-auto">
          <a href="/booking">Reserve Your Experience</a>
        </Button>
      </div>
    </section>
  );
};

export default LimitedAvailabilitySection;
