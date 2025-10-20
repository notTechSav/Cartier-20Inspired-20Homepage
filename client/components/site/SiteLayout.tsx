import { PropsWithChildren, useMemo } from "react";

import HeaderNavYSL, { SlideMeta } from "@/components/HeaderNavYSL";
import Footer from "@/components/site/Footer";

const SiteLayout = ({ children }: PropsWithChildren) => {
  // Check if children is SwiperLayout (from Index page)
  const childrenArray = Array.isArray(children) ? children : [children];
  const firstChild = childrenArray[0] as any;
  const isSwiperLayout = firstChild?.type?.name === "SwiperLayout";

  // Extract active slide metadata from data attribute if available
  const activeSlideMeta = useMemo(() => {
    if (typeof firstChild?.props?.["data-active-slide"] === "string") {
      try {
        return JSON.parse(firstChild.props["data-active-slide"]) as SlideMeta;
      } catch {
        return undefined;
      }
    }
    return undefined;
  }, [firstChild?.props?.["data-active-slide"]]);

  if (isSwiperLayout) {
    return (
      <div className="relative flex h-screen w-full flex-col bg-luxury-white text-gray-700 overflow-hidden">
        <HeaderNavYSL activeSlide={activeSlideMeta} />
        <div className="flex-1 overflow-hidden">{children}</div>
        <Footer isSwiperLayout={true} totalSections={6} />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-luxury-white text-gray-700">
      <HeaderNavYSL />
      <main className="flex-1 pt-28 md:pt-44 lg:pt-48 max-md:pt-24">{children}</main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
