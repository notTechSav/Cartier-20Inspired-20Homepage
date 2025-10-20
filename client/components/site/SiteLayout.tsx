import { PropsWithChildren } from "react";

import Navigation from "@/components/Navigation";
import Footer from "@/components/site/Footer";

const SiteLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen flex-col bg-luxury-white text-gray-700">
      <Navigation />
      <main className="flex-1 pt-28 md:pt-44 lg:pt-48 max-md:pt-24">{children}</main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
