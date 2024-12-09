import { FormEvent, ReactNode } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

export interface FormProviderProps<T extends FieldValues> {
  methods: UseFormReturn<T>;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}
 
export interface Option {
  label: string;
  value: string;
}

interface OptionGroup {
  label: string;
  options: Option[];
}

export type InputType = "text" | "password" | "email" | "number" | "tel";

type ButtonType = "button" | "submit" | "reset" | undefined;

export interface AppInputProps {
  name: string;
  label: string;
  type?: InputType;
  placeholder?: string;
  options?: OptionGroup[];
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


export interface StepOneForm {
  adult: number;
  child: number;
  child_without_service: number;
  baby: number;
  fromDate: Date;
  toDate: Date;
}
