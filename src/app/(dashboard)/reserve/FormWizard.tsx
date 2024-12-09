"use client";
import React from "react";
import { Card, CardBody, TabContent } from "reactstrap";
import Tabs from "./tabs";
import { useSearchParams } from "next/navigation";
import Step1 from "./step/step1";
import Step2 from "./step/step2";
import Step4 from "./step/step4";
import Step3 from "./step/step3";

export default function FormWizard() {
  const searchParams = useSearchParams();

  const activeTab = searchParams.get("step") || 1;
  const numberOfGuests = searchParams.get("numberOfGuests") || 1;
  const array = Array(+numberOfGuests).fill("");
  console.log(array);

  return (
    <Card>
      <CardBody>
        <h4 className="card-title mb-4">رزرواسیون</h4>
        <div className="wizard clearfix">
          <Tabs />
          <div className="content clearfix">
            <TabContent activeTab={+activeTab} className="body">
              <Step1 />

              <Step2 />
              <Step3 />
              <Step4 />
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
