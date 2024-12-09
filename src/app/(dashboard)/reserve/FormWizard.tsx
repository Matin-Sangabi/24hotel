"use client";
import Link from "next/link";
import React from "react";
import { Card, CardBody, TabContent, TabPane } from "reactstrap";
import Tabs from "./tabs";
import { useRouter, useSearchParams } from "next/navigation";
import Step1 from "./step/step1";

export default function FormWizard() {
  const searchParams = useSearchParams();

  const activeTab = searchParams.get("step") || 1;
  const { push } = useRouter();

  return (
    <Card>
      <CardBody>
        <h4 className="card-title mb-4">رزرواسیون</h4>
        <div className="wizard clearfix">
          <Tabs />
          <div className="content clearfix">
            <TabContent activeTab={+activeTab} className="body">
              <Step1 />
              <TabPane tabId={2}>
                <div>2</div>
              </TabPane>
              <TabPane tabId={3}>
                <div>3</div>
              </TabPane>
              <TabPane tabId={4}>
                <div className="row justify-content-center">4</div>
              </TabPane>
            </TabContent>
          </div>
          {/* <div className="actions clearfix">
            <ul>
              <li
                className={activeTab === 1 ? "previous disabled" : "previous"}
              >
                <Link href={"/"}>قبلی</Link>
              </li>
              <li className={+activeTab === 4 ? "next disabled" : "next"}>
                <Link href={"/"}>بعدی</Link>
              </li>
            </ul>
          </div> */}
        </div>
      </CardBody>
    </Card>
  );
}
