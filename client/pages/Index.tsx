import Hero from "@/components/site/Hero";
import ImageMosaicSection from "@/components/site/ImageMosaicSection";
import FAQSectionLuxury from "@/components/site/FAQSectionLuxury";
import ImmersiveVideoSection from "@/components/site/ImmersiveVideoSection";
import DesignInMotionSection from "@/components/site/DesignInMotionSection";
import VideoSection from "@/components/site/VideoSection";
import Footer from "@/components/site/Footer";
import ScrollSnapLayout from "./ScrollSnapLayout";
import ScrollSnapPanel from "./ScrollSnapPanel";

const Index = () => {
  return (
    <ScrollSnapLayout>
      {/* 01. Hero - Main introduction */}
      <ScrollSnapPanel
        id="hero-section"
        ariaLabel="Hero section with introduction and call to action"
        className="relative"
      >
        <Hero />
      </ScrollSnapPanel>

      {/* 02. About Me / Design in Motion - About section */}
      <ScrollSnapPanel
        id="about-section"
        ariaLabel="About Katherine Taylor - Design in Motion section"
        className="bg-luxury-white"
      >
        <DesignInMotionSection />
      </ScrollSnapPanel>

      {/* 03. Gallery - Image mosaic collection */}
      <ScrollSnapPanel
        id="gallery-section"
        ariaLabel="Gallery section featuring intimate collections and photography"
        className="bg-luxury-white"
      >
        <div className="w-full max-w-luxury px-6 md:px-8">
          <ImageMosaicSection
            title="Gallery"
            subtitle="A Collection of Intimate Moments"
          />
        </div>
      </ScrollSnapPanel>

      {/* 04. Rates - Video showcase with rates information */}
      <ScrollSnapPanel
        id="rates-section"
        ariaLabel="Rates section with immersive video and pricing information"
        className="relative !flex-none !items-end !justify-start pb-16 md:pb-24"
      >
        <ImmersiveVideoSection />
        <div className="absolute bottom-16 left-6 z-20 md:bottom-24 md:left-8">
          <a
            href="/rates"
            className="ysl-nav-item-light inline-flex items-center justify-center text-sm text-luxury-white"
          >
            View Rates →
          </a>
        </div>
      </ScrollSnapPanel>

      {/* 05. FAQ - Frequently asked questions */}
      <ScrollSnapPanel
        id="faq-section"
        ariaLabel="FAQ section with frequently asked questions"
        className="bg-luxury-white !flex-none !items-stretch !justify-start overflow-y-auto py-8 md:py-12"
      >
        <div className="w-full">
          <FAQSectionLuxury />
        </div>
      </ScrollSnapPanel>

      {/* 06. Journal - Featured content and articles */}
      <ScrollSnapPanel
        id="journal-section"
        ariaLabel="Journal section with featured articles and insights"
        className="bg-luxury-white"
      >
        <div className="w-full max-w-luxury px-6 md:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-light mb-4 text-luxury-black">
              Journal
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Insights, stories, and perspectives on companionship, luxury, and
              the art of connection.
            </p>
            <a
              href="/journal"
              className="ysl-nav-item inline-flex items-center justify-center text-sm text-luxury-black"
            >
              Read Journal →
            </a>
          </div>
        </div>
      </ScrollSnapPanel>

      {/* 07. Inquire - Contact and engagement video */}
      <ScrollSnapPanel
        id="inquire-section"
        ariaLabel="Inquire section with engagement video and contact call to action"
        className="relative !flex-none !items-end !justify-start pb-16 md:pb-24"
      >
        <VideoSection />
        <div className="absolute bottom-16 left-6 z-20 md:bottom-24 md:left-8">
          <a
            href="/inquire"
            className="ysl-nav-item-light inline-flex items-center justify-center text-sm text-luxury-white"
          >
            Send Inquiry →
          </a>
        </div>
      </ScrollSnapPanel>

      {/* 08. Footer - Email signup and footer navigation */}
      <ScrollSnapPanel
        id="footer-section"
        ariaLabel="Footer section with newsletter signup and site links"
        className="bg-luxury-white !flex-none !items-stretch !justify-start overflow-y-auto"
      >
        <Footer isScrollSnapLayout={true} totalSections={8} />
      </ScrollSnapPanel>
    </ScrollSnapLayout>
  );
};

export default Index;
