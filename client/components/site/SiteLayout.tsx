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
        <Header />
        <ScrollSnapProgress totalSections={6} />
        <div className="flex-1 overflow-hidden">{children}</div>
        <Footer isScrollSnapLayout={true} totalSections={6} />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-luxury-white text-gray-700">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
