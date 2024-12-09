import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import WelcomeComp from "./WelcomeComp";
import BreadCrumbs from "@/components/ui/BreadCrumb/BreadCrumbs";

export default function page() {
  return (
    <>
      <BreadCrumbs title="داشبورد" href="/" />
      <Row>
        <Col xl="4">
          <WelcomeComp />
        </Col>
        <Col xl={8}>
          <Row>
            {/* Reports Render */}
            {(reports || [])?.map((report, key) => (
              <Col md="4" key={"_col_" + key}>
                <Card className="mini-stats-wid">
                  <CardBody>
                    <div className="d-flex">
                      <div className="flex-grow-1">
                        <p className="text-muted fw-medium">{report.title}</p>
                        <h4 className="mb-0">{report.description}</h4>
                      </div>
                      <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                        <span className="avatar-title rounded-circle bg-primary">
                          <i
                            className={
                              "bx " + report.iconClass + " font-size-24"
                            }
                          ></i>
                        </span>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
}

const reports = [
  { title: "سفارشات", iconClass: "bx-copy-alt", description: "0" },
  { title: "درآمد", iconClass: "bx-archive-in", description: "تومان0 " },
  {
    title: "قیمت میانگین",
    iconClass: "bx-purchase-tag-alt",
    description: "0 تومان",
  },
];
