import Hero from "@/components/site/Hero";
import ImageMosaicSection from "@/components/site/ImageMosaicSection";
import FAQSectionLuxury from "@/components/site/FAQSectionLuxury";
import ImmersiveVideoSection from "@/components/site/ImmersiveVideoSection";
import DesignInMotionSection from "@/components/site/DesignInMotionSection";
import VideoSection from "@/components/site/VideoSection";
import ScrollSnapLayout from "./ScrollSnapLayout";
import ScrollSnapPanel from "./ScrollSnapPanel";

const Index = () => {
  return (
    <ScrollSnapLayout>
      {/* 01. Hero */}
      <ScrollSnapPanel className="relative">
        <Hero />
      </ScrollSnapPanel>

      {/* 02. About */}
      <ScrollSnapPanel className="bg-luxury-white">
        <div className="w-full max-w-luxury px-6 md:px-8">
          <ImageMosaicSection />
        </div>
      </ScrollSnapPanel>

      {/* 03. Rates (video section linking to /rates) */}
      <ScrollSnapPanel className="relative !flex-none !items-end !justify-start pb-16 md:pb-24">
        <ImmersiveVideoSection />
        <div className="absolute bottom-16 left-6 z-20 md:bottom-24 md:left-8">
          <a
            href="/rates"
            className="inline-flex items-center justify-center rounded-[2px] border border-white/50 bg-white/10 px-8 py-4 text-sm font-light uppercase tracking-uppercase text-white transition-all duration-250 ease-out hover:border-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            View Rates →
          </a>
        </div>
      </ScrollSnapPanel>

      {/* 04. FAQ */}
      <ScrollSnapPanel className="bg-luxury-white !flex-none !items-stretch !justify-start overflow-y-auto py-8 md:py-12">
        <div className="w-full">
          <FAQSectionLuxury />
        </div>
      </ScrollSnapPanel>

      {/* 05. Journal (featured content preview) */}
      <ScrollSnapPanel className="bg-luxury-white">
        <div className="w-full max-w-luxury px-6 md:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-light mb-4 text-luxury-black">Journal</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Insights, stories, and perspectives on companionship, luxury, and the art of connection.
            </p>
            <a
              href="/journal"
              className="inline-flex items-center justify-center rounded-[2px] border border-gray-400 bg-transparent px-8 py-4 text-sm font-light uppercase tracking-uppercase text-gray-700 transition-all duration-250 ease-out hover:border-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Read Journal →
            </a>
          </div>
        </div>
      </ScrollSnapPanel>

      {/* 06. Inquire (video section linking to /inquire) */}
      <ScrollSnapPanel className="relative !flex-none !items-end !justify-start pb-16 md:pb-24">
        <VideoSection />
        <div className="absolute bottom-16 left-6 z-20 md:bottom-24 md:left-8">
          <a
            href="/inquire"
            className="inline-flex items-center justify-center rounded-[2px] border border-white/50 bg-white/10 px-8 py-4 text-sm font-light uppercase tracking-uppercase text-white transition-all duration-250 ease-out hover:border-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            Send Inquiry →
          </a>
        </div>
      </ScrollSnapPanel>
    </ScrollSnapLayout>
  );
};

export default Index;
