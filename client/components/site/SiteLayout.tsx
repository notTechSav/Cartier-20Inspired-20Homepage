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
      <div className="relative flex h-screen w-full flex-col bg-luxury-white text-gray-700">
        {/* Header - Fixed at top, outside scroll container */}
        <Header />

        {/* Scroll Progress Indicator */}
        <ScrollSnapProgress totalSections={7} />

        {/* Main scroll container - contains all 6 sections including Footer */}
        <div className="flex-1 overflow-hidden">
          {children}
          {/*
            IMPORTANT: The Footer is now rendered INSIDE your ScrollSnapLayout
            as the last child. If you're still rendering it here, remove it
            and add it as the 6th child in your ScrollSnapLayout component.

            Example in your ScrollSnapLayout/Index:
            <ScrollSnapLayout>
              <HeroSection />
              <FeaturedSection />
              <CollectionSection />
              <CraftsmanshipSection />
              <TestimonialsSection />
              <Footer isScrollSnapLayout={true} totalSections={6} />
            </ScrollSnapLayout>
          */}
        </div>
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
