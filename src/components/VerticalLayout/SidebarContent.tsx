import Link from "next/link";
import React from "react";
import SimpleBar from "simplebar-react";

export default function SidebarContent() {
  return (
    <React.Fragment>
      <SimpleBar className="h-100">
        <div id="sidebar-menu" style={{color : "white"}}>
          <ul className="metismenu list-unstyled text-white" id="side-menu">
            <li className="menu-title">{"منو"} </li>
            <li>
              <Link href="/#" className="has-arrow">
                <i className="bx bx-home-circle"></i>
                <span className="text-white">{"داشبورد"}</span>
              </Link>
              {/* <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link href="/dashboard">{props.t("پیش فرض")}</Link>
                </li>
                <li>
                  <Link href="/dashboard-saas">{props.t("Sass")}</Link>
                </li>
                <li>
                  <Link href="/dashboard-crypto">{props.t("رمز ارز")}</Link>
                </li>
                <li>
                  <Link href="/blog">{props.t("وبلاگ")}</Link>
                </li>
                <li>
                  <Link href="/dashboard-job">{props.t("شغل")}</Link>
                </li>
              </ul> */}
            </li>
            <li>
              <Link href="/reserve" className="has-arrow">
                <i className="bx bx-home-circle"></i>
                <span className="text-white">{"رزرواسیون"}</span>
              </Link>
          
            </li>
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  );
}
