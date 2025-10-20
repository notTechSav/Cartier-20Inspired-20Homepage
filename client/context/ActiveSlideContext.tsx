import React, { createContext, useContext, useState, ReactNode } from "react";
import { SlideMeta } from "@/components/HeaderNavYSL";

interface ActiveSlideContextType {
  activeSlide?: SlideMeta;
  setActiveSlide: (slide: SlideMeta | undefined) => void;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const ActiveSlideContext = createContext<ActiveSlideContextType | undefined>(
  undefined
);

export function ActiveSlideProvider({ children }: { children: ReactNode }) {
  const [activeSlide, setActiveSlide] = useState<SlideMeta | undefined>();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ActiveSlideContext.Provider
      value={{ activeSlide, setActiveSlide, activeIndex, setActiveIndex }}
    >
      {children}
    </ActiveSlideContext.Provider>
  );
}

export function useActiveSlide() {
  const context = useContext(ActiveSlideContext);
  if (!context) {
    throw new Error(
      "useActiveSlide must be used within ActiveSlideProvider"
    );
  }
  return context;
}
