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
      <ScrollSnapPanel className="bg-luxury-white">
        <div className="w-full max-w-luxury px-6 md:px-8">
          <ImageMosaicSection />
        </div>
      </ScrollSnapPanel>
      <ScrollSnapPanel className="relative">
        <LegendReinventedSection />
      </ScrollSnapPanel>
      <ScrollSnapPanel className="relative">
        <ImmersiveVideoSection />
      </ScrollSnapPanel>
      <ScrollSnapPanel className="bg-luxury-white">
        <div className="w-full max-w-luxury px-6 md:px-8">
          <DesignInMotionSection />
        </div>
      </ScrollSnapPanel>
      <ScrollSnapPanel className="bg-luxury-black">
        <div className="w-full max-w-luxury px-6 md:px-8">
          <VideoSection />
        </div>
      </ScrollSnapPanel>
    </ScrollSnapLayout>
  );
};

export default Index;
