"use client"

import React from "react";
import { ChildrenNodes } from "../../types";
import AuthProvider from "../../context/AuthContext";
import MainLayout from "../../components/VerticalLayout";

export default function Layout({ children }: ChildrenNodes) {
  return (
    <AuthProvider>
      <MainLayout>{children}</MainLayout>
    </AuthProvider>
  );
}
