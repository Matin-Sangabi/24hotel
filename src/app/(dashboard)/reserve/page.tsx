"use client";

import React from "react";
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
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { availableRoom } from "@/service/reserve.service";
import Link from "next/link";
import BreadCrumbs from "@/components/ui/BreadCrumb/BreadCrumbs";
import AppSpinner from "@/components/ui/spiner/Spinner";

export default function Page() {
  const searchParams = useSearchParams();
  const numberOfGuests = searchParams.get("numberOfGuests");
  const fromDate = searchParams.get("formDate");
  console.log(fromDate);
  const toDate = searchParams.get("toDate");

  const { isLoading, data, isError } = useQuery({
    queryKey: ["available-room", numberOfGuests, fromDate, toDate],
    queryFn: () => availableRoom({ numberOfGuests, fromDate, toDate }),
    enabled: Boolean(numberOfGuests) || Boolean(fromDate) || Boolean(toDate),
    retry: 3,
  });

  console.log(data);

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
          <Col xl="12" className="my-4">
            <h4>لیست اتاق ها </h4>
          </Col>
          {data ? (
            data?.data?.length > 0 ? (
              data?.data?.map((item) => (
                <Col xl="4" sm="6" key={item.roomId}>
                  <Card>
                    <CardBody>
                      <div className="d-flex">
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
                          <p className="text-muted mb-4">{item.price} تومان</p>

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
                          <UncontrolledTooltip placement="top" target="dueDate">
                            سر رسید
                          </UncontrolledTooltip>
                        </li>{" "}
                      </ul>
                    </div>
                  </Card>
                </Col>
              ))
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
    </>
  );
}
