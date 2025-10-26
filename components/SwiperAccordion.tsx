import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface SwiperAccordionProps {
  items: AccordionItem[];
  allowMultipleOpen?: boolean;
  className?: string;
  slidePerView?: number;
  spaceBetween?: number;
}

const SwiperAccordion = ({
  items,
  allowMultipleOpen = false,
  className,
  slidePerView = 1,
  spaceBetween = 24,
}: SwiperAccordionProps) => {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleAccordion = (id: string) => {
    const newExpandedIds = new Set(expandedIds);

    if (newExpandedIds.has(id)) {
      newExpandedIds.delete(id);
    } else {
      if (!allowMultipleOpen) {
        newExpandedIds.clear();
      }
      newExpandedIds.add(id);
    }

    setExpandedIds(newExpandedIds);
  };

  return (
    <div className={cn("w-full", className)}>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={slidePerView}
        spaceBetween={spaceBetween}
        navigation
        pagination={{ clickable: true }}
        a11y={{
          enabled: true,
        }}
        style={{
          overflow: "visible",
        }}
        breakpoints={{
          640: {
            slidesPerView: Math.min(2, items.length),
          },
          768: {
            slidesPerView: Math.min(3, items.length),
          },
          1024: {
            slidesPerView: Math.min(4, items.length),
          },
        }}
      >
        {items.map((item) => {
          const isExpanded = expandedIds.has(item.id);

          return (
            <SwiperSlide key={item.id} className="!h-auto">
              <div className="flex flex-col bg-white border border-gray-200 rounded-sm overflow-hidden h-full">
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className={cn(
                    "w-full px-4 py-4 md:px-6 md:py-5 flex items-center justify-between",
                    "transition-all duration-300 ease-out",
                    "hover:bg-gray-50 active:bg-gray-100",
                    "text-left font-light uppercase tracking-widest text-sm md:text-base",
                    "text-black border-b border-gray-100",
                  )}
                  style={{
                    letterSpacing: "0.15em",
                    fontWeight: 300,
                  }}
                  aria-expanded={isExpanded}
                  aria-controls={`accordion-content-${item.id}`}
                >
                  <span>{item.title}</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 md:h-5 md:w-5 flex-shrink-0 transition-transform duration-300 ease-out",
                      isExpanded && "rotate-180",
                    )}
                  />
                </button>

                {/* Accordion Content */}
                <div
                  id={`accordion-content-${item.id}`}
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-out",
                    isExpanded ? "max-h-96" : "max-h-0",
                  )}
                >
                  <div className="px-4 py-4 md:px-6 md:py-5 text-sm md:text-base font-light leading-relaxed text-gray-700 border-t border-gray-100">
                    {item.content}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Custom Swiper Styles */}
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          background-color: transparent;
          border: 1px solid #e0e0e0;
          width: 40px;
          height: 40px;
          border-radius: 4px;
          transition: all 300ms cubic-bezier(0.25, 0.1, 0.25, 1);
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          border-color: #000;
          background-color: #f5f5f5;
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 16px;
          font-weight: 300;
          color: #000;
        }

        .swiper-pagination-bullet {
          background-color: #e0e0e0;
          opacity: 1;
          width: 8px;
          height: 8px;
          margin: 0 6px;
          border-radius: 50%;
          transition: all 300ms cubic-bezier(0.25, 0.1, 0.25, 1);
        }

        .swiper-pagination-bullet-active {
          background-color: #000;
          width: 24px;
          border-radius: 4px;
        }

        .swiper-slide {
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default SwiperAccordion;
