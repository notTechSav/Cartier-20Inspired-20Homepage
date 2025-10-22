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
      style={{
        width: "100%",
        height: "min(100vh, 100dvh)",
        touchAction: "pan-x",
        perspective: "1200px",
      }}
    >
      {/* 01. Hero - Main introduction */}
      <SwiperSlide
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100%", height: "100%" }}>
          <Hero />
        </div>
      </SwiperSlide>

      {/* 02. About - Katherine Taylor Background */}
      <SwiperSlide style={{ height: "100vh" }} id="about">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            width: "100%",
            backgroundColor: "var(--color-background-primary)",
            paddingLeft: "var(--spacer-m)",
            paddingRight: "var(--spacer-m)",
            paddingTop: "var(--spacer-4xl)",
            paddingBottom: "var(--spacer-4xl)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "var(--spacer-2xl)",
              maxWidth: "42rem",
              width: "100%",
            }}
          >
            {/* Text Content */}
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: "var(--spacer-xl)",
                maxWidth: "40rem",
              }}
            >
              <h2 style={{ textAlign: "center", lineHeight: 1.2 }}>
                Katherine Taylor
                <br />
                Sacramento Escort
              </h2>
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: 300,
                  letterSpacing: "0.02em",
                }}
              >
                Over a decade of trusted companionship in
                California—professionalism refined, privacy protected.
              </h3>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "16px",
                  fontWeight: 300,
                  color: "var(--color-text-tertiary)",
                }}
              >
                Katherine Taylor has been providing professional escort services
                in Sacramento and San Francisco for over 10 years. Based in
                Midtown Sacramento, she serves clients throughout the region
                with unmatched discretion and elegance.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* 03. Gallery - Image mosaic collection */}
      <SwiperSlide style={{ height: "100vh" }} id="gallery">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            width: "100%",
            backgroundColor: "var(--color-background-primary)",
            paddingLeft: "var(--spacer-m)",
            paddingRight: "var(--spacer-m)",
            paddingTop: "var(--spacer-4xl)",
            paddingBottom: "var(--spacer-4xl)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "var(--spacer-2xl)",
              maxWidth: "42rem",
              width: "100%",
            }}
          >
            {/* Image Container with 4/5 Aspect Ratio */}
            <div style={{ width: "100%", maxWidth: "20rem" }}>
              <div
                style={{
                  aspectRatio: "4/5",
                  width: "100%",
                  backgroundColor: "#f3f4f6",
                  overflow: "hidden",
                  borderRadius: "2px",
                }}
              >
                <img
                  src="/rose-hero.png"
                  alt="Gallery - Sacramento escort Katherine Taylor"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Text Content Below Image */}
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: "var(--spacer-xl)",
                maxWidth: "40rem",
              }}
            >
              <h2 style={{ textAlign: "center" }}>
                Sacramento escort Katherine Taylor
              </h2>
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: 300,
                  letterSpacing: "0.02em",
                }}
              >
                Visual rhythm showcasing Sac escort companionship
              </h3>
              <a
                href="#gallery"
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                  color: "var(--color-text-primary)",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
              >
                Discover →
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* 04. Rates - Escorting rates + Video showcase */}
      <SwiperSlide
        style={{
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
        id="rates"
      >
        {/* Rates Text Section Above Video */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: "var(--spacer-m)",
            paddingRight: "var(--spacer-m)",
            paddingTop: "var(--spacer-2xl)",
            paddingBottom: "var(--spacer-2xl)",
            backgroundColor: "var(--color-background-primary)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "var(--spacer-lg)",
              maxWidth: "42rem",
              width: "100%",
            }}
          >
            <h2 style={{ textAlign: "center", lineHeight: 1.2, margin: 0 }}>
              Escorting rates in California
            </h2>
            <h3
              style={{
                textAlign: "center",
                fontSize: "16px",
                fontWeight: 300,
                letterSpacing: "0.02em",
                margin: 0,
              }}
            >
              Sacramento escorting and san francisco Transparent pricing
            </h3>
            <p
              style={{
                textAlign: "center",
                fontSize: "14px",
                fontWeight: 300,
                color: "var(--color-text-tertiary)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              With a decade long established reputation, my California escort
              rates are comprehensively posted mirror your highest expectations
            </p>
            <a
              href="#rates"
              style={{
                textAlign: "center",
                cursor: "pointer",
                color: "var(--color-text-primary)",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              View Rates →
            </a>
          </div>
        </div>

        {/* Video Section Below Text - Fill Remaining Height */}
        <div
          style={{ flex: 1, width: "100%", overflow: "hidden", minHeight: 0 }}
        >
          <ImmersiveVideoSection />
        </div>
      </SwiperSlide>

      {/* 05. FAQ - Frequently asked questions */}
      <SwiperSlide style={{ height: "100vh" }}>
        <div style={{ width: "100%", height: "100%", overflowY: "auto" }}>
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--color-background-primary)",
              paddingLeft: "var(--spacer-m)",
              paddingRight: "var(--spacer-m)",
              paddingTop: "var(--spacer-4xl)",
              paddingBottom: "var(--spacer-4xl)",
            }}
          >
            <div
              style={{ width: "100%", maxWidth: "42rem", textAlign: "center" }}
            >
              <h2 style={{ marginBottom: "var(--spacer-2xl)" }}>
                Answers about escorting in Sacramento and California escort
                rules and regulations
              </h2>
              <h3
                style={{
                  marginBottom: "var(--spacer-2xl)",
                  fontSize: "18px",
                  fontWeight: 300,
                  letterSpacing: "0.02em",
                }}
              >
                Escorting you, if you will, through your "escorts near me"
                searches
              </h3>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* 06. Journal - Featured content and articles */}
      <SwiperSlide style={{ height: "100vh" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            width: "100%",
            backgroundColor: "var(--color-background-primary)",
            paddingLeft: "var(--spacer-m)",
            paddingRight: "var(--spacer-m)",
            paddingTop: "var(--spacer-4xl)",
            paddingBottom: "var(--spacer-4xl)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "var(--spacer-2xl)",
              maxWidth: "42rem",
              width: "100%",
            }}
          >
            {/* Image Container with 4/5 Aspect Ratio */}
            <div style={{ width: "100%", maxWidth: "20rem" }}>
              <div
                style={{
                  aspectRatio: "4/5",
                  width: "100%",
                  backgroundColor: "#f3f4f6",
                  overflow: "hidden",
                  borderRadius: "2px",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&h=500&fit=crop"
                  alt="Journal - Featured Articles"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Text Content Below Image */}
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: "var(--spacer-xl)",
                maxWidth: "40rem",
              }}
            >
              <h2 style={{ textAlign: "center" }}>Journal</h2>
              <p style={{ textAlign: "center" }}>
                Insights, stories, and perspectives on companionship, luxury,
                and the art of connection.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* 07. Gifts - Curated gifts and experiences */}
      <SwiperSlide style={{ height: "100vh" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            width: "100%",
            backgroundColor: "var(--color-background-primary)",
            paddingLeft: "var(--spacer-m)",
            paddingRight: "var(--spacer-m)",
            paddingTop: "var(--spacer-4xl)",
            paddingBottom: "var(--spacer-4xl)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "var(--spacer-2xl)",
              maxWidth: "42rem",
              width: "100%",
            }}
          >
            {/* Image Container with 4/5 Aspect Ratio */}
            <div style={{ width: "100%", maxWidth: "20rem" }}>
              <div
                style={{
                  aspectRatio: "4/5",
                  width: "100%",
                  backgroundColor: "#f3f4f6",
                  overflow: "hidden",
                  borderRadius: "2px",
                }}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F5b9cc53f5f324d22a1f8c88faaaa270c%2Fbd093f662cb045d19868b4b86fde26e4?format=webp&width=1600"
                  alt="Luxury gifts collection"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Text Content Below Image */}
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: "var(--spacer-xl)",
                maxWidth: "40rem",
              }}
            >
              <h2 style={{ textAlign: "center" }}>
                Curated Gifts & Experiences
              </h2>
              <p style={{ textAlign: "center" }}>
                Thoughtfully selected gifts and experiences designed for those
                who appreciate the finest details.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* 08. Inquire - Contact and engagement video */}
      <SwiperSlide style={{ height: "100vh" }}>
        <div style={{ width: "100%", height: "100%" }}>
          <VideoSection />
          <div
            style={{
              position: "absolute",
              bottom: "var(--spacer-4xl)",
              left: "var(--spacer-m)",
              zIndex: 20,
            }}
          ></div>
        </div>
      </SwiperSlide>

      {/* 09. Footer - Email signup and footer navigation */}
    </Swiper>
  );
};

export default Index;
