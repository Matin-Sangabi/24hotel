import { ResponseData } from "../types";
import http from "./httpRequest";
import Cookies from "js-cookie";

export interface LoginResponse {
  access_token: string;
}

export interface ReturnNull {
  data: null;
}

export async function verifyToken(): Promise<ResponseData | ReturnNull> {
  const token = Cookies.get("access_token");
  if (token) {
    const formData = { token };

    const { data } = await http.post("/auth/verify", formData);
    return data;
  }
  return { data: null };
}
