import AppInput from "@/components/ui/AppInput/AppInput";
import AppTextArea from "@/components/ui/AppInput/AppTextArea";
import FormProvider from "@/providers/FormProvider";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Fragment } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Col, Row, TabPane } from "reactstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export interface StepTwoForms {
  first_name: string;
  last_name: string;
  phone_number: string;
  email?: string; // از نوع string | undefined استفاده کنید
  cart_number?: string;
  car_number?: string;
  address?: string;
  type?: string;
}

export interface StepThreeForms {
  data: StepTwoForms[]; // آرایه‌ای از StepTwoForms
}
export default function Step3() {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const numberOfGuests = searchParams.get("numberOfGuests") || 1;

  const schema = yup.object({
    data: yup
      .array()
      .of(
        yup.object().shape({
          first_name: yup.string().required(),
          last_name: yup.string().required(),
          phone_number: yup.string().required(),
          email: yup.string().email(),
          cart_number: yup.string(),
          car_number: yup.string(),
          address: yup.string(),
        })
      )
      .required(),
  });

  const methods = useForm<StepThreeForms>({
    defaultValues: {
      data: Array(+numberOfGuests).fill({
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        cart_number: "",
        car_number: "",
        address: "",
      }),
    },
    resolver: yupResolver(schema),
  });

  const { control, handleSubmit } = methods;

  const { fields } = useFieldArray({
    control,
    name: "data",
  });

  const onSubmit = (data: StepThreeForms) => {
    console.log(data);
    push(`/reserve?step=4&numberOfGuests=${numberOfGuests}`);
  };

  return (
    <>
      <TabPane tabId={3}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          {fields.map((item, index) => (
            <Fragment key={item.id}>
              <Row className="mt-4">
                <Col xl="6">
                  <AppInput
                    label="نام"
                    name={`data[${index}].first_name`}
                    placeholder=""
                  />
                </Col>
                <Col xl="6">
                  <AppInput
                    label="نام خانوادگی"
                    name={`data[${index}].last_name`}
                    placeholder=""
                  />
                </Col>
              </Row>
              <Row className="my-1">
                <Col xl="6">
                  <AppInput
                    label="شماره"
                    name={`data[${index}].phone_number`}
                    placeholder=""
                    type="tel"
                  />
                </Col>
                <Col xl="6">
                  <AppInput
                    label="ایمیل"
                    name={`data[${index}].email`}
                    placeholder=""
                    type="email"
                  />
                </Col>
              </Row>
              <Row className="my-1">
                <Col xl="6">
                  <AppInput
                    label="شماره کارت شناسایی"
                    name={`data[${index}].cart_number`}
                    placeholder="شماره ملی یا پاسپورت"
                  />
                </Col>
                <Col xl="6">
                  <AppInput
                    label="پلاک خوردرو"
                    name={`data[${index}].car_number`}
                    placeholder=""
                  />
                </Col>
              </Row>
              <Row className="my-1">
                <Col xl="12">
                  <AppTextArea
                    name={`data[${index}].address`}
                    label="آدرس"
                    placeholder="آدرس خود"
                  />
                </Col>
              </Row>
              <hr />
            </Fragment>
          ))}
          <Row className="justify-content-start mt-4">
            <div
              className="d-flex w-100 justify-content-end"
              style={{ columnGap: "0.5rem" }}
            >
              <button
                disabled={false}
                className="btn btn-primary btn-block"
                type="button"
                onClick={() => push("/reserve?step=1")}
              >
                قبلی
              </button>
              <button
                disabled={false}
                className="btn btn-primary btn-block"
                type="submit"
              >
                بعدی
              </button>
            </div>
          </Row>
        </FormProvider>
      </TabPane>
    </>
  );
}
