/**
 * SITE LAYOUT - CORRECTED FOR SCROLL-SNAP INTEGRATION
 * De Beers x Hermès Aesthetic
 *
 * Key Fix: Footer is now part of the scroll-snap children, not a sibling
 * The Footer component itself handles being section 6 when isScrollSnapLayout={true}
 */

import { PropsWithChildren } from "react";
import Header from "@/components/Header";
import ScrollSnapProgress from "@/components/site/ScrollSnapProgress";

const SiteLayout = ({ children }: PropsWithChildren) => {
  // Check if children is ScrollSnapLayout (from Index page)
  const childrenArray = Array.isArray(children) ? children : [children];
  const firstChild = childrenArray[0] as any;
  const isScrollSnapLayout = firstChild?.type?.name === "ScrollSnapLayout";

  if (isScrollSnapLayout) {
    return (
      <div
        style={{
          position: "relative",
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          backgroundColor: "var(--color-background-primary)",
          color: "#374151",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header - Fixed at top, outside scroll container */}
        <Header />

        {/* Scroll Progress Indicator */}
        <ScrollSnapProgress totalSections={8} />

        {/* Main scroll container - flex-1 allows it to fill remaining space */}
        <div
          style={{
            flex: 1,
            width: "100%",
            overflow: "hidden",
          }}
        >
          {children}
        </div>
      </div>
    );
  }

  // Traditional layout - Header and main content only
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        backgroundColor: "var(--color-background-primary)",
        color: "#374151",
      }}
    >
      <Header />
      <main style={{ flex: 1 }}>{children}</main>
    </div>
  );
};

export default SiteLayout;
