"use client";
import React from "react";

import { Row, Col, Card, CardBody } from "reactstrap";

import useUser from "../hooks/useUser";
import Avatar from "@/components/Avatar/Avatar";
import Link from "next/link";
import Image from "next/image";

const WelcomeComp = () => {
  const user = useUser();

  return (
    <React.Fragment>
      <Card className="overflow-hidden">
        <div className="bg-primary-subtle">
          <Row>
            <Col xs="7">
              <div className="text-primary p-3">
                <h5 className="text-primary">خوش برگشتی !</h5>
                <p>{user?.data?.data?.email}</p>
              </div>
            </Col>
            <Col xs="5" className="align-self-end">
              <Image
                src={"/images/logo/profile-img.png"}
                alt="test"
                width={120}
                height={120}
                className="img-fluid"
              />
            </Col>
          </Row>
        </div>
        <CardBody className="pt-0">
          <Row>
            <Col sm="4">
              <div className="avatar-md profile-user-wid mb-4">
                <Avatar />
              </div>
              <h5 className="font-size-15 text-truncate">
                {user?.data?.data?.fullName}
              </h5>
              <p className="text-muted mb-0 text-truncate">
                {user?.data?.data?.role}
              </p>
            </Col>

            <Col sm="8">
              <div className="pt-4">
                <Row>
                  <Col xs="6">
                    <h5 className="font-size-15">0</h5>
                    <p className="text-muted mb-0">پروژه ها</p>
                  </Col>
                  <Col xs="6">
                    <h5 className="font-size-15"> تومان 0</h5>
                    <p className="text-muted mb-0">درآمد</p>
                  </Col>
                </Row>
                <div className="mt-4">
                  <Link href="/" className="btn btn-primary  btn-sm">
                    مشاهده پروفایل <i className="mdi mdi-arrow-left ms-1"></i>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};
export default WelcomeComp;
