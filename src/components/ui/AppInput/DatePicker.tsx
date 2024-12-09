import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormGroup, InputGroup, Label } from "reactstrap";
import { AppInputProps } from "../../../types";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";

export default function DatePicker({ name, label, ...other }: AppInputProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <FormGroup className="mb-4">
            <Label style={{ fontWeight: "900", fontSize: 15 }}>{label}</Label>
            <InputGroup>
              <Flatpickr
                className="form-control d-block"
                placeholder="dd M,yyyy"
                value={field.value}
                onChange={([date]) => field.onChange(date)}
                {...other}
                options={{
                  altInput: true,
                  altFormat: "F j, Y",
                  dateFormat: "Y-m-d",
                }}
              />
            </InputGroup>
          </FormGroup>
        </>
      )}
    />
  );
}
