import React, { createContext, useContext, useState, ReactNode } from "react";
import { SlideMeta, ActiveSlideContextType } from "./types";

const ActiveSlideContext = createContext<ActiveSlideContextType | undefined>(
  undefined
);

export const ActiveSlideProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [activeSlide, setActiveSlide] = useState<SlideMeta | undefined>();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ActiveSlideContext.Provider
      value={{ activeSlide, setActiveSlide, activeIndex, setActiveIndex }}
    >
      {children}
    </ActiveSlideContext.Provider>
  );
};

export const useActiveSlide = () => {
  const context = useContext(ActiveSlideContext);
  if (!context) {
    throw new Error(
      "useActiveSlide must be used within ActiveSlideProvider"
    );
  }
  return context;
};
