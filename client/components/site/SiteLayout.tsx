import { PropsWithChildren } from "react";

import Navigation from "@/components/Navigation";
import Footer from "@/components/site/Footer";

const SiteLayout = ({ children }: PropsWithChildren) => {
  // Check if children is a scroll-snap layout (Index page) or regular layout
  const isScrollSnap = Array.isArray(children);

  if (isScrollSnap) {
    return (
      <div className="relative h-screen w-full bg-luxury-white text-gray-700">
        <Navigation />
        <div className="h-full pt-28 md:pt-44 lg:pt-48 max-md:pt-24">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-luxury-white text-gray-700">
      <Navigation />
      <main className="flex-1 pt-28 md:pt-44 lg:pt-48 max-md:pt-24">{children}</main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
