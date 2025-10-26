import { AspectRatio } from "@/components/ui/aspect-ratio";

const GIFTS_IMAGE =
  "https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Fbd093f662cb045d19868b4b86fde26e4?format=webp&width=1600";

const GiftsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-luxury-white px-6 md:px-8 py-16 md:py-24">
      <div className="flex flex-col items-center gap-8 max-w-4xl w-full">
        {/* Image Container with 4/5 Aspect Ratio */}
        <div className="w-full max-w-sm">
          <AspectRatio ratio={4 / 5}>
            <img
              src={GIFTS_IMAGE}
              alt="Luxury gifts collection"
              className="h-full w-full object-cover rounded-sm"
            />
          </AspectRatio>
        </div>

        {/* Text Content Below Image */}
        <div className="text-center space-y-6 max-w-2xl">
          <h2 className="text-center text-luxury-black">
            Curated Gifts & Experiences
          </h2>
          <p className="text-center text-gray-600">
            Thoughtfully selected gifts and experiences designed for those who
            appreciate the finest details. From intimate moments to
            unforgettable occasions.
          </p>
          <a
            href="/gifts"
            className="ysl-nav-item inline-block text-luxury-black"
          >
            Explore Gifts
          </a>
        </div>
      </div>
    </div>
  );
};

export default GiftsSection;
