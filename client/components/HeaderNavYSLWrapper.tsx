import { useActiveSlide } from "@/context/ActiveSlideContext";
import HeaderNavYSL from "@/components/HeaderNavYSL";

export default function HeaderNavYSLWrapper() {
  const { activeSlide } = useActiveSlide();

  return <HeaderNavYSL activeSlide={activeSlide} />;
}
