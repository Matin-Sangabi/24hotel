import useUser from "@/app/hooks/useUser";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

export default function ProfileMenu() {
  const [menu, setMenu] = useState(false);

  const user = useUser();

  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="d-inline-block"
      >
        <DropdownToggle
          className="btn header-item "
          id="page-header-user-dropdown"
          tag="button"
        >
          <Image
            className="rounded-circle header-profile-user"
            src={"/images/users/avatar-1.jpg"}
            alt="Header Avatar"
            width={40}
            height={40}
            unoptimized
          />
          <span className="d-none d-xl-inline-block ms-2 me-1">
            {user?.data?.data?.username}
          </span>
          <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <DropdownItem tag={Link} href="/profile">
            {" "}
            <i className="bx bx-user font-size-16 align-middle me-1" />
            پروفایل
          </DropdownItem>
          <DropdownItem tag="a" href="/crypto-wallet">
            <i className="bx bx-wallet font-size-16 align-middle me-1" />
            کیف پول
          </DropdownItem>

          <div className="dropdown-divider" />
          <button
            onClick={() => {
              Cookies.remove("access_token");
              window.location.href = "/auth/login";
            }}
            className="dropdown-item"
          >
            <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
            <span>{"خروج"}</span>
          </button>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
}
