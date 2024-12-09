"use client";

import React, { useEffect, useState } from "react";
import {
  Alert,
  Badge,
  Card,
  CardBody,
  Col,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
import FormWizard from "./FormWizard";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { availableRoom } from "@/service/reserve.service";
import Link from "next/link";
import AppSpinner from "@/components/ui/spiner/Spinner";
import { StepTwoForms } from "./step/step2";

export default function Page() {
  const [reserve, setReserve] = useState<StepTwoForms[]>([]);

  const { push } = useRouter();

  const searchParams = useSearchParams();
  const numberOfGuests = searchParams.get("numberOfGuests");
  const fromDate = searchParams.get("formDate");
  const step = searchParams.get("step");
  const toDate = searchParams.get("toDate");

  const { isLoading, data, isError } = useQuery({
    queryKey: ["available-room", numberOfGuests, fromDate, toDate],
    queryFn: () => availableRoom({ numberOfGuests, fromDate, toDate }),
    enabled: Boolean(numberOfGuests) && Boolean(fromDate) && Boolean(toDate),
    retry: 3,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = window.localStorage.getItem("reserve");
      const oldData = storedData ? JSON.parse(storedData) : [];
      setReserve(oldData);
    }
  }, [step]);

  return (
    <>
      <Row>
        <Col xl="12">
          <FormWizard />
        </Col>
      </Row>
      {isLoading ? (
        <Row className="position-relative" style={{ marginTop: "7rem" }}>
          <AppSpinner />
        </Row>
      ) : (
        <Row style={{ marginTop: "7rem" }}>
          {data ? (
            data?.data?.length > 0 ? (
              <>
                <Col xl="12" className="my-4">
                  <h4>لیست اتاق ها </h4>
                </Col>
                {data?.data?.map((item) => (
                  <Col xl="4" sm="6" key={item.roomId}>
                    <Card>
                      <CardBody>
                        <div
                          onClick={() =>
                            push(
                              `/reserve?step=2&numberOfGuests=${numberOfGuests}&placeId=${item.placeId}&roomId=${item.roomId}`
                            )
                          }
                          className="d-flex"
                          style={{ cursor: "pointer" }}
                        >
                          <div className="avatar-md me-4">
                            <span className="avatar-title rounded-circle bg-light text-danger font-size-16">
                              {item.roomCapacity}
                            </span>
                          </div>

                          <div className="flex-grow-1 overflow-hidden">
                            <h5 className="text-truncate font-size-15">
                              <Link
                                href={`/projects-overview/${item.roomId}`}
                                className="text-dark"
                              >
                                {item.roomName}
                              </Link>
                            </h5>
                            <p className="text-muted mb-4">
                              {item.price} تومان
                            </p>

                            <div
                              className="avatar-group d-flex"
                              style={{ columnGap: "0.9rem" }}
                            >
                              {item.addonsIncluded.map((team, key) => (
                                <React.Fragment key={key}>
                                  <div
                                    className="avatar-group-item d-flex "
                                    style={{ columnGap: "0.9rem" }}
                                  >
                                    <Link
                                      href={"#"}
                                      className="d-flex align-items-center rounded-sm"
                                      id={"member" + team}
                                    >
                                      <div className="">
                                        <span
                                          className={
                                            "avatar-title px-1  bg-primary"
                                          }
                                        >
                                          {team}
                                        </span>
                                        <UncontrolledTooltip
                                          placement="top"
                                          target={"member" + team}
                                        >
                                          {team}
                                        </UncontrolledTooltip>
                                      </div>
                                    </Link>
                                  </div>
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardBody>
                      <div className="px-4 py-3 border-top">
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-3">
                            <Badge
                              className={
                                "bg-" + item.isPlanned
                                  ? "bg-success"
                                  : "bg-danger"
                              }
                            >
                              {item.isPlanned ? "تکمیل شده" : "تکمیل نشده "}
                            </Badge>
                          </li>
                          <li className="list-inline-item me-3" id="dueDate">
                            <i className="bx bx-calendar me-1" /> {item.date}
                            <UncontrolledTooltip
                              placement="top"
                              target="dueDate"
                            >
                              سر رسید
                            </UncontrolledTooltip>
                          </li>{" "}
                        </ul>
                      </div>
                    </Card>
                  </Col>
                ))}
              </>
            ) : (
              <Col xl="12">
                <Alert className="bg-warning text-center">
                  هیچ آیتمی پیدا نشد
                </Alert>
              </Col>
            )
          ) : (
            isError && (
              <Col xl="12">
                <Alert className="bg-danger text-center">خطایی رخ داده</Alert>
              </Col>
            )
          )}
        </Row>
      )}

      {reserve && reserve?.length > 0 && (
        <Row style={{ marginTop: "-3rem" }}>
          <>
            <Col xl="12" className="my-4">
              <h4>لیست رزروی ها</h4>
            </Col>
            {reserve?.map((item, key) => (
              <Col xl="4" sm="6" key={key}>
                <Card>
                  <CardBody>
                    <div
                      onClick={() => console.log("data")}
                      className="d-flex"
                      style={{ cursor: "pointer" }}
                    >
                      <div className="avatar-md me-4">
                        <span className="avatar-title rounded-circle bg-light text-danger font-size-16">
                          {item.first_name}
                        </span>
                      </div>

                      <div className="flex-grow-1 overflow-hidden">
                        <h5 className="text-truncate font-size-15">
                          <Link href={`#`} className="text-dark">
                            {item.first_name} {item.last_name}
                          </Link>
                        </h5>
                        <p className="text-muted ">
                          {item?.phone_number || "---"}
                        </p>
                        <p className="text-muted ">{item?.email || "---"}</p>

                        <div
                          className="avatar-group d-flex"
                          style={{ columnGap: "0.9rem" }}
                        >
                          <div
                            className="avatar-group-item d-flex "
                            style={{ fontSize: "12" }}
                          >
                            {item?.address || "---"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                  <div className="px-4 py-3 border-top">
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item me-3">
                        <Badge className={"bg-success"}>{item.type}</Badge>
                      </li>
                      <li className="list-inline-item me-3" id="dueDate">
                        <i className="" /> {item.car_number}
                      </li>
                      <li className="list-inline-item me-3" id="dueDate">
                        <i className="" /> {item.cart_number}
                      </li>
                    </ul>
                  </div>
                </Card>
              </Col>
            ))}
          </>
        </Row>
      )}
    </>
  );
}
