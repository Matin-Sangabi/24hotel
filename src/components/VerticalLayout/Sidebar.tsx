import React from "react";
import SidebarContent from "./SidebarContent";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  return (
    <React.Fragment>
      <div className="vertical-menu">
        <div className="navbar-brand-box">
          <Link href="/" className="logo d-block h-100 logo-light">
            <span className="logo-sm">
              {/* <img src={logoLightSvg} alt="" height="22" /> */}
            </span>
            <span className="logo-lg d-block">
              <Image
                src={"/images/logo/logo-light.png"}
                width={120}
                unoptimized
                quality={100}
                alt="test"
                height="22"
              />
            </span>
          </Link>
        </div>
        <div className="navbar-brand-box"></div>
        <div data-simplebar className="h-100">
          <SidebarContent />
        </div>

        <div className="sidebar-background"></div>
      </div>
    </React.Fragment>
  );
}
