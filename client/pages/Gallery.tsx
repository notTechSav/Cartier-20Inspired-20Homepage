import DeckBuilderPreview from "@/components/gallery/DeckBuilderPreview";
import PageHeroOverlay from "@/components/site/PageHeroOverlay";

const GALLERY_HERO_IMAGE = "/rose-hero.png";

const Gallery = () => {
  return (
    <div className="bg-luxury-white text-luxury-black">
      <PageHeroOverlay
        title="Private Collections"
        subtitle="Intimate documentation from Northern California to Los Angeles — three collections, three moments in time."
        eyebrow="Katherine Taylor"
        imageSrc={GALLERY_HERO_IMAGE}
        imageAlt="Cream-colored rose with flowing ribbon on linen fabric in warm afternoon light"
        alignment="left"
      />
      <DeckBuilderPreview />
    </div>
  );
};

export default Gallery;
