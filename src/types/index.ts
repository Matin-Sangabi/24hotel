import { FormEvent, ReactNode } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

export interface FormProviderProps<T extends FieldValues> {
  methods: UseFormReturn<T>;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}

export type InputType = "text" | "password" | "email" | "number";

type ButtonType = "button" | "submit" | "reset" | undefined;

export interface AppInputProps {
  name: string;
  label: string;
  type?: InputType;
  placeholder?: string;
}

export interface AppButtonProps {
  children: ReactNode;
  type?:ButtonType;
  isLoading?: boolean;
}


interface UserData {
  username: string;
  sub: string;
  fullName: string;
  tenantId: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}

export interface ResponseData {
  isValid: boolean;
  data: UserData;
}

export interface AuthContextData {
  isLogin: boolean;
  data: ResponseData | null | undefined;
}

export interface ChildrenNodes {
  children: ReactNode;
}