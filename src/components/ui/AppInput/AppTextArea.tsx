import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormFeedback, Label } from "reactstrap";
import { AppInputProps } from "../../../types";

export default function AppTextArea({
  name,
  label,
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

            <textarea
              id="basicpill-address-input1"
              className="form-control"
              rows={3}
              {...field}
              {...other}
              placeholder={placeholder}
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
