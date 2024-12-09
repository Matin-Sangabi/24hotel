"use client";
import React from "react";
import NotificationDropdown from "./NotificationDropdown";
import ProfileMenu from "./ProfileMenu";

export default function Header() {
  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex mx-2">
            <form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="جستجو ..."
                />
                <span className="bx bx-search-alt" />
              </div>
            </form>
          </div>
          <div className="d-flex">
            <NotificationDropdown />
            <ProfileMenu />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
