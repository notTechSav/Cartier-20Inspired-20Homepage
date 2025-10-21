/**
 * SITE LAYOUT - CORRECTED FOR SCROLL-SNAP INTEGRATION
 * De Beers x Hermès Aesthetic
 *
 * Key Fix: Footer is now part of the scroll-snap children, not a sibling
 * The Footer component itself handles being section 6 when isScrollSnapLayout={true}
 */

import { PropsWithChildren } from "react";
import Header from "@/components/Header";
import Footer from "@/components/site/Footer";
import ScrollSnapProgress from "@/components/site/ScrollSnapProgress";

const SiteLayout = ({ children }: PropsWithChildren) => {
  // Check if children is ScrollSnapLayout (from Index page)
  const childrenArray = Array.isArray(children) ? children : [children];
  const firstChild = childrenArray[0] as any;
  const isScrollSnapLayout = firstChild?.type?.name === "ScrollSnapLayout";

  if (isScrollSnapLayout) {
    return (
      <div className="relative h-screen w-full overflow-hidden bg-luxury-white text-gray-700 flex flex-col">
        {/* Header - Fixed at top, outside scroll container */}
        <Header />

        {/* Scroll Progress Indicator */}
        <ScrollSnapProgress totalSections={8} />

        {/* Main scroll container - flex-1 allows it to fill remaining space */}
        <div className="flex-1 w-full overflow-hidden">{children}</div>
      </div>
    );
  }

  // Traditional layout - Footer at bottom as usual
  return (
    <div className="flex min-h-screen flex-col bg-luxury-white text-gray-700">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
