import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormFeedback, Label } from "reactstrap";
import { AppInputProps } from "../../../types";
import Select from "react-select";

export default function AopSelect({
  name,
  label,
  options,
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
            <Select
              {...field}
              options={options}
              {...other}
              className="select2-selection"
              placeholder="انتخاب کنید ..."
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
