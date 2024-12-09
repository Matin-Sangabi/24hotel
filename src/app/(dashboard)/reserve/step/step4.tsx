import AopSelect from "@/components/ui/AppInput/AppSelect";
import AppTextArea from "@/components/ui/AppInput/AppTextArea";
import FormProvider from "@/providers/FormProvider";
import { Option } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { Col, Row, TabPane } from "reactstrap";
import * as yup from "yup";

export interface StepFourForms {
  reserve: Option;
  description?: string;
}

export default function Step4() {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const numberOfGuests = searchParams.get("numberOfGuests") || 1;

  const schema = yup.object().shape({
    reserve: yup.object({
      label: yup.string().required("Label is required"),
      value: yup.string().required("Value is required"),
    }),
  });

  const defaultValues = useMemo(
    () => ({
      reserve: { value: "", label: "" },
      description: "",
    }),
    []
  );

  const methods = useForm<StepFourForms>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { handleSubmit, getValues } = methods;
  console.log(getValues());

  const onSubmit = (data: StepFourForms) => {
    console.log(data);
  };

  return (
    <>
      <TabPane tabId={4}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Row className="mt-4">
            <Col xl="12">
              <AopSelect
                options={optionGroup}
                name="reserve"
                label="شیوه رزرو"
              />
            </Col>
            <Col xl="12" className="my-2">
              <AppTextArea label="توضیحات" name="description" placeholder="" />
            </Col>
          </Row>
          <Row className="justify-content-start mt-4">
            <div
              className="d-flex w-100 justify-content-end  "
              style={{ columnGap: "0.5rem" }}
            >
              <button
                disabled={false}
                className="btn btn-primary   btn-block"
                type={"button"}
                onClick={() =>
                  push(`/reserve?step=3&numberOfGuests=${numberOfGuests}`)
                }
              >
                قبلی
              </button>
              <button
                disabled={false}
                className="btn btn-primary   btn-block"
                type={"submit"}
              >
                ثبت نهایی
              </button>
            </div>
          </Row>
        </FormProvider>
      </TabPane>
    </>
  );
}

const optionGroup = [
  {
    label: "شیوه رزرو",
    options: [
      { label: "حضوری", value: "office" },
      { label: "تلفنی", value: "tel" },
      { label: "وب سایت", value: "web-site" },
    ],
  },
];
