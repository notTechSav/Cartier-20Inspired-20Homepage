import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBellConcierge } from "@fortawesome/free-solid-svg-icons";
import {
  DesktopNavigation,
  MobileNavigation,
  katherineTaylorMenuConfig,
} from "./YSLNavigation";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <header ref={headerRef} className="ysl-header">
      <div
        style={{
          maxWidth: "80rem",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: 0,
          paddingRight: 0,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* DESKTOP NAVIGATION */}
        <DesktopNavigation menuItems={katherineTaylorMenuConfig} />

        {/* CENTER LOGO - Katherine Taylor */}
        <a
          href="/"
          className="kt-brand-refined"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            whiteSpace: "nowrap",
            transition: "all 320ms cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          KATHERINE TAYLOR
        </a>

        {/* MOBILE NAVIGATION - FontAwesome bell-concierge icon */}
        <MobileNavigation
          menuItems={katherineTaylorMenuConfig}
          useSwiper={false}
          icon={<FontAwesomeIcon icon={faBellConcierge} />}
        />
      </div>
    </header>
  );
};

export default Header;
