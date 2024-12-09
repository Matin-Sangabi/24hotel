"use client";

import React, { createContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import { AuthContextData, ChildrenNodes } from "../types";

// import { AxiosError } from "axios";
import { verifyToken } from "../service/user.service";

export const AuthContext = createContext<AuthContextData | undefined>(
  undefined
);

export default function AuthProvider({ children }: ChildrenNodes) {
  const pathname = usePathname();

  const { push } = useRouter();

  const { data, status } = useQuery({
    queryKey: ["verifyToken"],
    queryFn: verifyToken,
    retry: false,
    refetchOnWindowFocus: false,
  });



  useEffect(() => {
    if (status === "success" && data?.data === null && !pathname.includes("/auth")) {
      push("/auth/login");
    }
  }, [data, pathname, push, status]);

  if (status === "pending") {
    return <div>Loading...</div>;
  }

  const contextValue: AuthContextData = {
    isLogin: !!data,
    data: data || null,
  };


  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
