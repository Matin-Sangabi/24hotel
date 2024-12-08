import { LoginFormTypes } from "../types/login";
import http from "./httpRequest";


export interface LoginResponse {
  access_token: string;
}


export async function login(values: LoginFormTypes): Promise<LoginResponse> {
  const { data } = await http.post("/auth/login", values);
  return data;
}



