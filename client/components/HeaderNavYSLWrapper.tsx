import { useContext } from "react";
import { ActiveSlideContext } from "@/context/ActiveSlideContext";
import HeaderNavYSL from "@/components/HeaderNavYSL";

export default function HeaderNavYSLWrapper() {
  // Use useContext directly to allow graceful fallback
  const context = useContext(ActiveSlideContext);
  const activeSlide = context?.activeSlide;

  return <HeaderNavYSL activeSlide={activeSlide} />;
}
