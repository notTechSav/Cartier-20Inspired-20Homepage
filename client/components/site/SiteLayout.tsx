import { PropsWithChildren } from "react";

import { ActiveSlideProvider } from "@/context/ActiveSlideContext";
import HeaderYSLRefined from "@/components/HeaderYSLRefined";
import Footer from "@/components/site/Footer";

const SiteLayout = ({ children }: PropsWithChildren) => {
  // Always wrap with provider - it's safe even for non-Swiper pages
  return (
    <ActiveSlideProvider>
      <SiteLayoutContent>{children}</SiteLayoutContent>
    </ActiveSlideProvider>
  );
};

const SiteLayoutContent = ({ children }: PropsWithChildren) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  const firstChild = childrenArray[0] as any;

  // Check if this is a Swiper layout by looking for the presence of slide-like children
  // or by checking if the component is SwiperLayout
  const isSwiperLayout =
    firstChild?.type?.name === "SwiperLayout" ||
    firstChild?.type?.$$typeof !== undefined; // React element

  // A more reliable way: check if the first child has Swiper-specific props
  // But the safest approach is to detect based on the route/page structure
  // For now, we'll check if it looks like a Swiper by examining props
  const hasSwiperProps = firstChild?.props?.slides !== undefined;

  if (isSwiperLayout || hasSwiperProps) {
    return (
      <div className="relative flex h-screen w-full flex-col bg-luxury-white text-gray-700 overflow-hidden">
        <HeaderYSLRefined />
        <div className="flex-1 overflow-hidden">{children}</div>
        <Footer isSwiperLayout={true} totalSections={6} />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-luxury-white text-gray-700">
      <HeaderYSLRefined />
      <main className="flex-1 pt-16 md:pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
