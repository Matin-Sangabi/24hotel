"use client";
import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { LoginFormTypes } from "../../../../types/login";
import FormProvider from "../../../../providers/FormProvider";
import AppInput from "../../../../components/ui/AppInput/AppInput";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AppButton from "../../../../components/ui/button/AppButton";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../../../service/auth.service";
import { Alert } from "reactstrap";
import { AxiosError } from "axios";
import Cookies from "js-cookie";

export default function Form() {
  const defaultValues = useMemo(() => ({ username: "", password: "" }), []);

  const schema = yup.object().shape({
    username: yup.string().required("لطفا نام کاربری خود را وارد کنید"),
    password: yup.string().required("لطفا رمز عبور خود را وارد کنید"),
  });

  const methods = useForm<LoginFormTypes>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { handleSubmit } = methods;

  const { isPending, mutateAsync ,error } = useMutation({ mutationFn: login });

  const onSubmit = async (data: LoginFormTypes) => {
    try {
      const res = await mutateAsync(data);
      	Cookies.set("access_token", res.access_token, { expires: 1 });
        window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className="form-horizontal">
        {error && (
          <Alert color="danger">
            {error instanceof AxiosError && error.response?.data?.message}
          </Alert>
        )}
        <div className="mb-3">
          <AppInput
            label="نام کاربری"
            placeholder="نام کاربری را وارد کنید "
            name="username"
          />
        </div>

        <div className="mb-3">
          <AppInput
            name="password"
            label="رمز عبور"
            placeholder="رمز عبور خود را وارد کنید "
            type="password"
          />
        </div>

        <div className="mt-3 d-grid">
          <AppButton type="submit" isLoading={isPending}>
            ورود
          </AppButton>
        </div>
      </div>
    </FormProvider>
  );
}
