import { PropsWithChildren } from "react";

import Navigation from "@/components/Navigation";
import Footer from "@/components/site/Footer";

const SiteLayout = ({ children }: PropsWithChildren) => {
  // Check if children has scroll-snap-container class (ScrollSnapLayout from Index)
  // by examining the first child
  const childrenArray = Array.isArray(children) ? children : [children];
  const firstChild = childrenArray[0] as any;
  const isScrollSnapLayout =
    firstChild?.type?.name === "ScrollSnapLayout" ||
    (firstChild?.props?.className &&
      firstChild.props.className.includes("scroll-snap-container"));

  if (isScrollSnapLayout) {
    return (
      <div className="relative h-screen w-full bg-luxury-white text-gray-700">
        <Navigation />
        <div className="h-[calc(100vh-var(--nav-height))] pt-28 md:pt-44 lg:pt-48 max-md:pt-24">
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
