import React, { useRef, useState, useCallback } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SwiperLayoutProps {
  children: React.ReactElement[];
  onSlideChange?: (index: number) => void;
}

const SwiperLayout: React.FC<SwiperLayoutProps> = ({ children, onSlideChange }) => {
  const swiperRef = useRef<SwiperType>();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
    onSlideChange?.(swiper.activeIndex);
  }, [onSlideChange]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-luxury-white">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
        modules={[Navigation, Pagination, Keyboard]}
        direction="vertical"
        slidesPerView={1}
        spaceBetween={0}
        loop={false}
        keyboard={{
          enabled: true,
          pageUp: true,
          pageDown: true,
        }}
        speed={800}
        grabCursor={true}
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
