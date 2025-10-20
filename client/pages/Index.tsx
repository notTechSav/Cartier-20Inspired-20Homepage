import { useMemo } from "react";
import Hero from "@/components/site/Hero";
import ImageMosaicSection from "@/components/site/ImageMosaicSection";
import FAQSectionLuxury from "@/components/site/FAQSectionLuxury";
import ImmersiveVideoSection from "@/components/site/ImmersiveVideoSection";
import DesignInMotionSection from "@/components/site/DesignInMotionSection";
import VideoSection from "@/components/site/VideoSection";
import SwiperLayout from "./SwiperLayout";
import { SlideMeta } from "@/context/types";

const Index = () => {
  // Define slide metadata for header inversion
  const slides: SlideMeta[] = useMemo(
    () => [
      { id: "hero", dark: true }, // Hero has dark background
      { id: "mosaic", dark: false }, // Mosaic is light
      { id: "immersive", dark: true }, // Video is dark
      { id: "faq", dark: false }, // FAQ is light
      { id: "journal", dark: false }, // Journal is light
      { id: "inquire", dark: true }, // Video is dark
    ],
    [],
  );

  return (
    <SwiperLayout slides={slides}>
      {/* 01. Hero */}
      <Hero />

      {/* 02. About */}
      <div className="flex h-full min-h-screen w-full items-center justify-center bg-luxury-white">
        <div className="w-full max-w-luxury px-6 md:px-8">
          <ImageMosaicSection />
        </div>
      </div>

      {/* 03. Rates */}
      <div className="relative h-full min-h-screen w-full">
        <ImmersiveVideoSection />
        <div className="absolute bottom-6 left-6 z-20 md:bottom-8 md:left-8">
          <a
            href="/rates"
            className="inline-flex items-center justify-center rounded-[2px] border border-white/50 bg-white/10 px-8 py-4 text-sm font-light uppercase tracking-uppercase text-white transition-all duration-250 ease-out hover:border-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            View Rates →
          </a>
        </div>
      </div>

      {/* 04. FAQ */}
      <div className="flex h-full min-h-screen w-full items-center justify-center overflow-y-auto bg-luxury-white">
        <div className="w-full py-8 md:py-12 max-md:py-8">
          <FAQSectionLuxury />
        </div>
      </div>

      {/* 05. Journal */}
      <div className="flex h-full min-h-screen w-full items-center justify-center bg-luxury-white">
        <div className="w-full max-w-luxury px-6 md:px-8 text-center">
          <h2 className="text-4xl font-light mb-4 text-luxury-black">
            Journal
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Insights, stories, and perspectives on companionship, luxury, and
            the art of connection.
          </p>
          <a
            href="/journal"
            className="inline-flex items-center justify-center rounded-[2px] border border-gray-400 bg-transparent px-8 py-4 text-sm font-light uppercase tracking-uppercase text-gray-700 transition-all duration-250 ease-out hover:border-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            Read Journal →
          </a>
        </div>
      </div>

      {/* 06. Inquire */}
      <div className="relative h-full min-h-screen w-full">
        <VideoSection />
        <div className="absolute bottom-6 left-6 z-20 md:bottom-8 md:left-8">
          <a
            href="/inquire"
            className="inline-flex items-center justify-center rounded-[2px] border border-white/50 bg-white/10 px-8 py-4 text-sm font-light uppercase tracking-uppercase text-white transition-all duration-250 ease-out hover:border-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            Send Inquiry →
          </a>
        </div>
      </div>
    </SwiperLayout>
  );
};

export default Index;
