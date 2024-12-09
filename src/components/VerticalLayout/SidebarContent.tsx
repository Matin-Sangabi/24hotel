import { activePath } from "@/utils/format";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import SimpleBar from "simplebar-react";

export default function SidebarContent() {

  const pathname = usePathname()
  

  return (
    <React.Fragment>
      <SimpleBar className="h-100">
        <div id="sidebar-menu" style={{ color: "white" }}>
          <ul className="metismenu list-unstyled text-white" id="side-menu">
            <li className="menu-title">{"منو"} </li>
            {sidebarData.map((item, index) => (
              <li key={index}>
                <Link
                  href={`${item.path}`}
                  className={`${item?.isArrow ? "has-arrow" : ""} ${
                    activePath(item.path, pathname) ? "mm-active" : " "
                  }`}
                >
                  <i className={item.icon}></i>
                  <span className="text-white">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  );
}

const sidebarData = [
  { title: "داشبورد", path: "/", icon: "bx bx-home-circle", isArrow: false },
  {
    title: "رزرواسیون",
    path: "/reserve",
    icon: "bx bx-calendar",
    isArrow: false,
  },
];
{
  /* <ul className="sub-menu" aria-expanded="false">
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
              </ul> */
}
