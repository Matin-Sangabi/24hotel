import AppInput from "@/components/ui/AppInput/AppInput";
import FormProvider from "@/providers/FormProvider";
import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { Col, Row, TabPane } from "reactstrap";
import DatePicker from "@/components/ui/AppInput/DatePicker";
import AppButton from "@/components/ui/button/AppButton";
import { StepOneForm } from "@/types";
import { formatDate } from "@/utils/format";
import queryString from "query-string";
import { useRouter } from "next/navigation";
// import { yupResolver } from "@hookform/resolvers/yup";

export default function Step1() {
  const { push } = useRouter();

  const defaultValues = useMemo(
    () => ({
      adult: 1,
      child: 0,
      child_without_service: 0,
      baby: 0,
      fromDate: new Date(),
      toDate: new Date(),
    }),
    []
  );

  const methods = useForm<StepOneForm>({
    defaultValues,
    // resolver: yupResolver(schema),
  });

  const { handleSubmit ,reset } = methods;

  const onSubmit = async (data: StepOneForm) => {
    try {
      const child = data?.child || 0;
      const numberOfGuests = +data.adult + Number(child);
      const formData = {
        step: 1,
        numberOfGuests,
        formDate: formatDate(data.fromDate),
        toDate: formatDate(data.toDate),
      };
      const queryStringResult = queryString.stringify(formData);
      push(`/reserve?${queryStringResult}`);
      reset()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TabPane tabId={1}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Row className="my-4">
          <Col xl="3">
            <AppInput
              label="بزرگسال"
              name="adult"
              placeholder="تعداد بزرگسال"
              type="number"
            />
          </Col>
          <Col xl="3">
            <AppInput
              label="کودک با سرویس"
              name="child"
              placeholder="تعداد کودک با سرویس"
              type="number"
            />
          </Col>
          <Col xl="3">
            <AppInput
              label="کودک بدون سرویس"
              name="child_without_service"
              placeholder="تعداد کودک بدون سرویس"
              type="number"
            />
          </Col>
          <Col xl="3">
            <AppInput
              label="نوزاد"
              name="baby"
              placeholder="تعداد نوزاد "
              type="number"
            />
          </Col>
        </Row>
        <Row>
          <Col xl={6}>
            <DatePicker label="از تاریخ" name="fromDate" />
          </Col>
          <Col xl={6}>
            <DatePicker label="تا تاریخ" name="toDate" />
          </Col>
        </Row>
        <Row className="justify-content-end">
          <div className="d-flex w-100 justify-content-end ">
            <AppButton type="submit">جستجو اتاق</AppButton>
          </div>
        </Row>
      </FormProvider>
    </TabPane>
  );
}
