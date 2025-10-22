"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";

import Hero from "@/components/site/Hero";
import ImageMosaicSection from "@/components/site/ImageMosaicSection";
import FAQSectionLuxury from "@/components/site/FAQSectionLuxury";
import ImmersiveVideoSection from "@/components/site/ImmersiveVideoSection";
import DesignInMotionSection from "@/components/site/DesignInMotionSection";
import VideoSection from "@/components/site/VideoSection";
import GiftsSection from "@/components/site/GiftsSection";

const Index = () => {
  // Swiper carousel layout for both mobile and desktop - YSL implementation
  return (
    <Swiper
      modules={[Mousewheel, Keyboard]}
      direction="vertical"
      mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
      keyboard={{ enabled: true, onlyInViewport: true }}
      slidesPerView={1}
      spaceBetween={0}
      speed={600}
      resistance={true}
      resistanceRatio={0.85}
      grabCursor={true}
      centeredSlides={false}
      initialSlide={0}
      watchSlidesProgress={true}
      preloadImages={false}
      lazy={{
        loadPrevNext: true,
        loadPrevNextAmount: 1,
      }}
      className="w-full"
      style={{
        height: "min(100vh, 100dvh)",
        touchAction: "pan-x",
        perspective: "1200px",
      }}
    >
      {/* 01. Hero - Main introduction */}
      <SwiperSlide style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '100%', height: '100%' }}>
          <Hero />
        </div>
      </SwiperSlide>

      {/* 02. About - Design in Motion */}
      <SwiperSlide style={{ height: '100vh' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', width: '100%', backgroundColor: 'var(--color-background-primary)', paddingLeft: 'var(--spacer-m)', paddingRight: 'var(--spacer-m)', paddingTop: 'var(--spacer-4xl)', paddingBottom: 'var(--spacer-4xl)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacer-2xl)', maxWidth: '42rem', width: '100%' }}>
            {/* Image Container with 4/5 Aspect Ratio */}
            <div style={{ width: '100%', maxWidth: '20rem' }}>
              <div style={{ aspectRatio: '4/5', width: '100%', backgroundColor: '#f3f4f6', overflow: 'hidden', borderRadius: '2px' }}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Fbd093f662cb045d19868b4b86fde26e4?format=webp&width=1600"
                  alt="SF Escorts - Katherine Taylor"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Text Content Below Image */}
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 'var(--spacer-xl)', maxWidth: '40rem' }}>
              <h2 style={{ textAlign: 'center' }}>SF Escorts | Framed Side-By-Side</h2>
              <p style={{ textAlign: 'center' }}>
                Every frame captured with intention—curated moments that reveal
                artistry, confidence, and chemistry in equal measure.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* 03. Gallery - Image mosaic collection */}
      <SwiperSlide style={{ height: '100vh' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', width: '100%', backgroundColor: 'var(--color-background-primary)', paddingLeft: 'var(--spacer-m)', paddingRight: 'var(--spacer-m)', paddingTop: 'var(--spacer-4xl)', paddingBottom: 'var(--spacer-4xl)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacer-2xl)', maxWidth: '42rem', width: '100%' }}>
            {/* Image Container with 4/5 Aspect Ratio */}
            <div style={{ width: '100%', maxWidth: '20rem' }}>
              <div style={{ aspectRatio: '4/5', width: '100%', backgroundColor: '#f3f4f6', overflow: 'hidden', borderRadius: '2px' }}>
                <img
                  src="/rose-hero.png"
                  alt="Gallery - Private Collections"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Text Content Below Image */}
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 'var(--spacer-xl)', maxWidth: '40rem' }}>
              <h2 style={{ textAlign: 'center' }}>Private Collections</h2>
              <p style={{ textAlign: 'center' }}>
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
          <div className="absolute bottom-16 left-6 z-20"></div>
        </div>
      </SwiperSlide>

      {/* 05. FAQ - Frequently asked questions */}
      <SwiperSlide className="!h-screen">
        <div className="w-full h-full overflow-y-auto">
          <div className="min-h-screen flex flex-col items-center justify-center bg-luxury-white px-6 py-16">
            <div className="w-full max-w-2xl text-center">
              <h2 className="mb-8">Frequently Asked Questions</h2>
              <p className="mb-8">
                After more than a decade in this practice, I answer what quick
                searches never cover.
              </p>
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
              <h2 className="text-center">Journal</h2>
              <p className="text-center">
                Insights, stories, and perspectives on companionship, luxury,
                and the art of connection.
              </p>
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
              <h2 className="text-center">Curated Gifts & Experiences</h2>
              <p className="text-center">
                Thoughtfully selected gifts and experiences designed for those
                who appreciate the finest details.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* 08. Inquire - Contact and engagement video */}
      <SwiperSlide className="!h-screen">
        <div className="w-full h-full">
          <VideoSection />
          <div className="absolute bottom-16 left-6 z-20"></div>
        </div>
      </SwiperSlide>

      {/* 09. Footer - Email signup and footer navigation */}
    </Swiper>
  );
};

export default Index;
