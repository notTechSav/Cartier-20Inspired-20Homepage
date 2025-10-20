import { PropsWithChildren } from "react";

import Navigation from "@/components/Navigation";
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
        <Navigation />
        <ScrollSnapProgress totalSections={6} />
        {children}
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
