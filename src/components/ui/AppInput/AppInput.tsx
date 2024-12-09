

import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormFeedback, Input, Label } from "reactstrap";
import { AppInputProps } from "../../../types";

export default function AppInput({
  name,
  label,
  type = "text",
  placeholder,
  ...other
}: AppInputProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <>
            <Label
              className="form-label"
              style={{ fontWeight: "900", fontSize: 15 }}
            >
              {label}
            </Label>
            <Input
              className="form-control"
              placeholder={placeholder}
              type={type}
              {...field}
              {...other}
              invalid={!!error}
            />
            {!!error && error?.message ? (
              <FormFeedback type="invalid">{error?.message}</FormFeedback>
            ) : null}
          </>
        </>
      )}
    />
  );
}
