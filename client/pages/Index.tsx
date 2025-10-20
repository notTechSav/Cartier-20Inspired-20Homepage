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
      <ScrollSnapPanel className="relative">
        <Hero />
      </ScrollSnapPanel>
      <ScrollSnapPanel className="flex items-center justify-center bg-luxury-white py-16 md:py-32">
        <ImageMosaicSection />
      </ScrollSnapPanel>
      <ScrollSnapPanel className="relative">
        <LegendReinventedSection />
      </ScrollSnapPanel>
      <ScrollSnapPanel className="relative">
        <ImmersiveVideoSection />
      </ScrollSnapPanel>
      <ScrollSnapPanel className="flex items-center justify-center bg-luxury-white py-16 md:py-32">
        <DesignInMotionSection />
      </ScrollSnapPanel>
      <ScrollSnapPanel className="flex items-center justify-center bg-luxury-black py-16 md:py-32">
        <VideoSection />
      </ScrollSnapPanel>
    </ScrollSnapLayout>
  );
};

export default Index;
