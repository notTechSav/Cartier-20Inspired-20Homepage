import { PropsWithChildren } from "react";

import { ActiveSlideProvider } from "@/context/ActiveSlideContext";
import HeaderNavYSLWrapper from "@/components/HeaderNavYSLWrapper";
import Footer from "@/components/site/Footer";

const SiteLayout = ({ children }: PropsWithChildren) => {
  // Check if children is SwiperLayout (from Index page)
  const childrenArray = Array.isArray(children) ? children : [children];
  const firstChild = childrenArray[0] as any;
  const isSwiperLayout = firstChild?.type?.name === "SwiperLayout";

  if (isSwiperLayout) {
    return (
      <ActiveSlideProvider>
        <div className="relative flex h-screen w-full flex-col bg-luxury-white text-gray-700 overflow-hidden">
          <HeaderNavYSLWrapper />
          <div className="flex-1 overflow-hidden">{children}</div>
          <Footer isSwiperLayout={true} totalSections={6} />
        </div>
      </ActiveSlideProvider>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-luxury-white text-gray-700">
      <HeaderNavYSLWrapper />
      <main className="flex-1 pt-28 md:pt-44 lg:pt-48 max-md:pt-24">{children}</main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
