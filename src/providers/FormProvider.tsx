
import React from "react";
import { FieldValues, FormProvider as Form } from "react-hook-form";
import { FormProviderProps } from "../types";

export default function FormProvider<T extends FieldValues>({
  methods,
  onSubmit,
  children,
}: FormProviderProps<T>) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit} className="w-full">
        {children}
      </form>
    </Form>
  );
}
