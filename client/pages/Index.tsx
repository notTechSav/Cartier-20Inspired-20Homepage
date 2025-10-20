import Hero from "@/components/site/Hero";
import ImageMosaicSection from "@/components/site/ImageMosaicSection";
import LegendReinventedSection from "@/components/site/LegendReinventedSection";
import DesignInMotionSection from "@/components/site/DesignInMotionSection";
import ImmersiveVideoSection from "@/components/site/ImmersiveVideoSection";
import VideoSection from "@/components/site/VideoSection";
import ScrollSnapLayout from "./ScrollSnapLayout";
import ScrollSnapPanel from "./ScrollSnapPanel";

const Index = () => {
  return (
    <ScrollSnapLayout>
      <ScrollSnapPanel className="relative !flex-none">
        <Hero />
      </ScrollSnapPanel>
      <ScrollSnapPanel className="bg-luxury-white !flex-none">
        <div className="w-full px-6 py-16 md:py-32">
          <ImageMosaicSection />
        </div>
      </ScrollSnapPanel>
      <ScrollSnapPanel className="relative !flex-none">
        <LegendReinventedSection />
      </ScrollSnapPanel>
      <ScrollSnapPanel className="relative !flex-none">
        <ImmersiveVideoSection />
      </ScrollSnapPanel>
      <ScrollSnapPanel className="bg-luxury-white !flex-none">
        <div className="w-full px-6 py-16 md:py-32">
          <DesignInMotionSection />
        </div>
      </ScrollSnapPanel>
      <ScrollSnapPanel className="bg-luxury-black !flex-none">
        <div className="w-full px-6 py-16 md:py-32">
          <VideoSection />
        </div>
      </ScrollSnapPanel>
    </ScrollSnapLayout>
  );
};

export default Index;
