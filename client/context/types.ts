export type SlideMeta = {
  id: string;
  dark?: boolean;
  tabletDark?: boolean;
  mobileDark?: boolean;
};

export interface ActiveSlideContextType {
  activeSlide?: SlideMeta;
  setActiveSlide: (slide: SlideMeta | undefined) => void;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}
