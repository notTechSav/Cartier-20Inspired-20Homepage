import React, { useRef, useCallback, useMemo } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Mousewheel } from "swiper/modules";
import { useActiveSlide } from "@/context/ActiveSlideContext";
import { SlideMeta } from "@/context/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SwiperLayoutProps {
  children: React.ReactElement[];
  slides?: SlideMeta[];
}

const SwiperLayout: React.FC<SwiperLayoutProps> = ({ children, slides }) => {
  const swiperRef = useRef<SwiperType>();
  const { setActiveIndex, setActiveSlide } = useActiveSlide();

  // Define default slides if not provided
  const defaultSlides: SlideMeta[] = useMemo(
    () => [
      { id: "hero", dark: true },
      { id: "mosaic", dark: false },
      { id: "immersive", dark: true },
      { id: "faq", dark: false },
      { id: "journal", dark: false },
      { id: "inquire", dark: true },
    ],
    [],
  );

  const slideMetadata = slides || defaultSlides;

  const handleSlideChange = useCallback(
    (swiper: SwiperType) => {
      setActiveIndex(swiper.activeIndex);
      if (slideMetadata[swiper.activeIndex]) {
        setActiveSlide(slideMetadata[swiper.activeIndex]);
      }
    },
    [slideMetadata, setActiveIndex, setActiveSlide],
  );

  return (
    <div className="relative h-screen w-full overflow-hidden bg-luxury-white">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
        modules={[Navigation, Pagination, Keyboard, Mousewheel]}
        direction="vertical"
        slidesPerView={1}
        spaceBetween={0}
        loop={false}
        keyboard={{
          enabled: true,
          pageUp: true,
          pageDown: true,
        }}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
          thresholdDelta: 10,
        }}
        speed={800}
        grabCursor={true}
        touchEventsTarget="container"
        touchRatio={1}
        touchAngle={45}
        simulateTouch={true}
        className="h-full w-full"
        style={{
          height: "100vh",
          height: "100dvh",
        }}
      >
        {React.Children.map(children, (child) => (
          <SwiperSlide
            key={child?.key}
            className="!h-screen !min-h-screen md:!h-screen"
            style={{
              height: "100vh",
              height: "100dvh",
            }}
          >
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperLayout;
