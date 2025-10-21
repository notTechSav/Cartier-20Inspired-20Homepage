"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import { useEffect, useState } from "react";

import Hero from "@/components/site/Hero";
import ImageMosaicSection from "@/components/site/ImageMosaicSection";
import FAQSectionLuxury from "@/components/site/FAQSectionLuxury";
import ImmersiveVideoSection from "@/components/site/ImmersiveVideoSection";
import DesignInMotionSection from "@/components/site/DesignInMotionSection";
import VideoSection from "@/components/site/VideoSection";
import Footer from "@/components/site/Footer";
import GiftsSection from "@/components/site/GiftsSection";
import ScrollSnapLayout from "./ScrollSnapLayout";
import ScrollSnapPanel from "./ScrollSnapPanel";

const Index = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Desktop layout with ScrollSnap
  if (!isMobile) {
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
                Insights, stories, and perspectives on companionship, luxury,
                and the art of connection.
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

        {/* 07. Gifts - Curated gifts and experiences */}
        <ScrollSnapPanel
          id="gifts-section"
          ariaLabel="Gifts section with curated gifts and experiences"
          className="bg-luxury-white"
        >
          <GiftsSection />
        </ScrollSnapPanel>

        {/* 08. Inquire - Contact and engagement video */}
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

        {/* 09. Footer - Email signup and footer navigation */}
        <ScrollSnapPanel
          id="footer-section"
          ariaLabel="Footer section with newsletter signup and site links"
          className="bg-luxury-white !flex-none !items-stretch !justify-start overflow-y-auto"
        >
          <Footer isScrollSnapLayout={true} totalSections={9} />
        </ScrollSnapPanel>
      </ScrollSnapLayout>
    );
  }

  // Mobile layout with Swiper carousel
  return (
    <Swiper
      modules={[Mousewheel, Keyboard]}
      direction="vertical"
      mousewheel={{ forceToAxis: true }}
      keyboard={{ enabled: true }}
      slidesPerView={1}
      spaceBetween={0}
      className="w-full"
      style={{ height: "100vh" }}
    >
      {/* 01. Hero - Main introduction */}
      <SwiperSlide className="!h-screen flex items-center justify-center">
        <div className="w-full h-full">
          <Hero />
        </div>
      </SwiperSlide>

      {/* 02. About - Design in Motion */}
      <SwiperSlide className="!h-screen">
        <div className="flex flex-col items-center justify-center min-h-screen w-full bg-luxury-white px-6 py-16">
          <div className="flex flex-col items-center gap-8 max-w-2xl w-full">
            {/* Image Container with 4/5 Aspect Ratio */}
            <div className="w-full max-w-xs">
              <div className="aspect-[4/5] w-full bg-gray-100 overflow-hidden rounded-sm">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Fbd093f662cb045d19868b4b86fde26e4?format=webp&width=1600"
                  alt="SF Escorts - Katherine Taylor"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Content Below Image */}
            <div className="text-center space-y-6 max-w-xl">
              <h2 className="text-center text-3xl font-light tracking-tight text-luxury-black">
                SF Escorts | Framed Side-By-Side
                <a
                  href="/about"
                  className="ysl-nav-item inline-block text-luxury-black block mt-2"
                >
                  Take a Glimpse
                </a>
              </h2>
              <p className="text-center text-sm font-light leading-relaxed tracking-luxury text-gray-600">
                Every frame captured with intention—curated moments that reveal
                artistry, confidence, and chemistry in equal measure.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* 03. Gallery - Image mosaic collection */}
      <SwiperSlide className="!h-screen">
        <div className="flex flex-col items-center justify-center min-h-screen w-full bg-luxury-white px-6 py-16">
          <div className="flex flex-col items-center gap-8 max-w-2xl w-full">
            {/* Image Container with 4/5 Aspect Ratio */}
            <div className="w-full max-w-xs">
              <div className="aspect-[4/5] w-full bg-gray-100 overflow-hidden rounded-sm">
                <img
                  src="/rose-hero.png"
                  alt="Gallery - Private Collections"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Content Below Image */}
            <div className="text-center space-y-6 max-w-xl">
              <h2 className="text-center text-3xl font-light tracking-tight text-luxury-black">
                Private Collections
                <a
                  href="/gallery"
                  className="ysl-nav-item inline-block text-luxury-black block mt-2"
                >
                  Discover
                </a>
              </h2>
              <p className="text-center text-sm font-light leading-relaxed tracking-luxury text-gray-600">
                Intimate documentation from Northern California to Los Angeles —
                three collections, three moments in time.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* 04. Rates - Video showcase */}
      <SwiperSlide className="!h-screen">
        <div className="w-full h-full">
          <ImmersiveVideoSection />
          <div className="absolute bottom-16 left-6 z-20">
            <a
              href="/rates"
              className="ysl-nav-item-light inline-flex items-center justify-center text-sm text-luxury-white"
            >
              View Rates →
            </a>
          </div>
        </div>
      </SwiperSlide>

      {/* 05. FAQ - Frequently asked questions */}
      <SwiperSlide className="!h-screen">
        <div className="w-full h-full overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center bg-luxury-white px-6 py-16">
            <div className="w-full max-w-2xl">
              <FAQSectionLuxury />
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* 06. Journal - Featured content and articles */}
      <SwiperSlide className="!h-screen">
        <div className="flex flex-col items-center justify-center min-h-screen w-full bg-luxury-white px-6 py-16">
          <div className="flex flex-col items-center gap-8 max-w-2xl w-full">
            {/* Image Container with 4/5 Aspect Ratio */}
            <div className="w-full max-w-xs">
              <div className="aspect-[4/5] w-full bg-gray-100 overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&h=500&fit=crop"
                  alt="Journal - Featured Articles"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Content Below Image */}
            <div className="text-center space-y-6 max-w-xl">
              <h2 className="text-center text-3xl font-light tracking-tight text-luxury-black">
                Journal
              </h2>
              <p className="text-center text-sm font-light leading-relaxed tracking-luxury text-gray-600">
                Insights, stories, and perspectives on companionship, luxury,
                and the art of connection.
              </p>
              <a
                href="/journal"
                className="ysl-nav-item inline-block text-luxury-black"
              >
                Read Journal →
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* 07. Gifts - Curated gifts and experiences */}
      <SwiperSlide className="!h-screen">
        <div className="flex flex-col items-center justify-center min-h-screen w-full bg-luxury-white px-6 py-16">
          <div className="flex flex-col items-center gap-8 max-w-2xl w-full">
            {/* Image Container with 4/5 Aspect Ratio */}
            <div className="w-full max-w-xs">
              <div className="aspect-[4/5] w-full bg-gray-100 overflow-hidden rounded-sm">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Fbd093f662cb045d19868b4b86fde26e4?format=webp&width=1600"
                  alt="Luxury gifts collection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Content Below Image */}
            <div className="text-center space-y-6 max-w-xl">
              <h2 className="text-center text-3xl font-light tracking-tight text-luxury-black">
                Curated Gifts & Experiences
              </h2>
              <p className="text-center text-sm font-light leading-relaxed tracking-luxury text-gray-600">
                Thoughtfully selected gifts and experiences designed for those
                who appreciate the finest details.
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
      </SwiperSlide>

      {/* 08. Inquire - Contact and engagement video */}
      <SwiperSlide className="!h-screen">
        <div className="w-full h-full">
          <VideoSection />
          <div className="absolute bottom-16 left-6 z-20">
            <a
              href="/inquire"
              className="ysl-nav-item-light inline-flex items-center justify-center text-sm text-luxury-white"
            >
              Send Inquiry →
            </a>
          </div>
        </div>
      </SwiperSlide>

      {/* 09. Footer - Email signup and footer navigation */}
      <SwiperSlide className="!h-screen">
        <div className="w-full h-full overflow-y-auto">
          <Footer isScrollSnapLayout={false} totalSections={9} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Index;
