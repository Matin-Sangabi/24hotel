import { ResponseData } from "../types";
import http from "./httpRequest";
import Cookies from "js-cookie";

export interface LoginResponse {
  access_token: string;
}

export async function verifyToken(): Promise<ResponseData | null> {
  const token = Cookies.get("access_token");
  if (token) {
    const formData = { token };

    const { data } = await http.post("/auth/verify", formData);
    return data;
  }
  return null
}
