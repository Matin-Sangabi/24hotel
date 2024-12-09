"use client"

import React from "react";
import { ChildrenNodes } from "../../types";
import AuthProvider from "../../context/AuthContext";
import MainLayout from "../../components/VerticalLayout";
import { Container } from "reactstrap";

export default function Layout({ children }: ChildrenNodes) {
  return (
    <AuthProvider>
      <MainLayout>
        <div className="page-content">
          <Container fluid>{children}</Container>
        </div>
      </MainLayout>
    </AuthProvider>
  );
}
