import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBellConcierge } from "@fortawesome/free-solid-svg-icons";
import {
  DesktopNavigation,
  MobileNavigation,
  katherineTaylorMenuConfig,
} from "./YSLNavigation";

const Header = () => {
  const [isOverlay, setIsOverlay] = useState(true);
  const headerRef = useRef<HTMLDivElement>(null);

  // Detect overlay state based on hero section
  useEffect(() => {
    const heroElement = document.querySelector("[data-hero='true']");
    setIsOverlay(!!heroElement);
  }, []);

  return (
    <header
      ref={headerRef}
      className="ysl-header"
      style={{
        backgroundColor: isOverlay
          ? "transparent"
          : "rgba(250, 250, 250, 0.98)",
        color: isOverlay ? "white" : "var(--nav-color-primary)",
      }}
    >
      <div className="max-w-7xl mx-auto px-0 h-full flex items-center justify-center relative">
        {/* DESKTOP NAVIGATION */}
        <DesktopNavigation
          menuItems={katherineTaylorMenuConfig}
          isOverlay={isOverlay}
        />

        {/* CENTER LOGO - Katherine Taylor */}
        <a
          href="/"
          className="kt-brand-refined absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-[320ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-y-[-3px]"
          style={{
            color: isOverlay ? "white" : "var(--nav-color-primary)",
            whiteSpace: "nowrap",
          }}
        >
          KATHERINE TAYLOR
        </a>

        {/* MOBILE NAVIGATION - FontAwesome bell-concierge icon */}
        <MobileNavigation
          menuItems={katherineTaylorMenuConfig}
          isOverlay={isOverlay}
          useSwiper={false}
          icon={<FontAwesomeIcon icon={faBellConcierge} />}
        />
      </div>
    </header>
  );
};

export default Header;
