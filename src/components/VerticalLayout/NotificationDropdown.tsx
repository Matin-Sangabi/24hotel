import Link from "next/link";
import React, { useState } from "react";
import { Col, Dropdown, DropdownMenu, DropdownToggle, Row } from "reactstrap";
import SimpleBar from "simplebar-react";

export default function NotificationDropdown() {
  const [menu, setMenu] = useState(false);

  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="dropdown d-inline-block"
        tag="li"
      >
        <DropdownToggle
          className="btn header-item noti-icon position-relative"
          tag="button"
          id="page-header-notifications-dropdown"
        >
          <i className="bx bx-bell bx-tada" />
          <span className="badge bg-danger rounded-pill">3</span>
        </DropdownToggle>

        <DropdownMenu className="dropdown-menu dropdown-menu-lg p-0 dropdown-menu-end">
          <div className="p-3">
            <Row className="align-items-center">
              <Col>
                <h6 className="m-0"> اعلانات </h6>
              </Col>
              <div className="col-auto">
                <a href="#!" className="small">
                  {" "}
                  مشاهده همه
                </a>
              </div>
            </Row>
          </div>

          <SimpleBar style={{ height: "230px" }}>
            {[1, 2, 3, 4].map((item) => (
              <Link
                key={item}
                href={"/"}
                className="text-reset notification-item"
              >
                <div className="d-flex">
                  <div className="avatar-xs me-3">
                    <span
                      className={`avatar-title ${item === 1 ? "bg-primary" : item ==2 ? "bg-secondary" : "bg-success"} rounded-circle font-size-16`}
                    >
                      <i className="bx bx-cart" />
                    </span>
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="mt-0 mb-1">متن تستی</h6>
                    <div className="font-size-12 text-muted">
                      <p className="mb-1">متن تستی و توضحیات</p>
                      <p className="mb-0">
                        <i className="mdi mdi-clock-outline" /> متن تستی و
                        توضیحات اضافی
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </SimpleBar>
          <div className="p-2 border-top d-grid">
            <Link
              className="btn btn-sm btn-link font-size-14 btn-block text-center"
              href={"/"}
            >
              <i className="mdi mdi-arrow-left-circle me-1"></i> all
            </Link>
          </div>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
}
