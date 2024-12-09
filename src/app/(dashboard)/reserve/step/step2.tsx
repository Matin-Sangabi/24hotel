import AppInput from "@/components/ui/AppInput/AppInput";
import AppTextArea from "@/components/ui/AppInput/AppTextArea";
import FormProvider from "@/providers/FormProvider";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Col, Modal, ModalHeader, Row, TabPane } from "reactstrap";
import * as yup from "yup";

export interface StepTwoForms {
  first_name: string;
  last_name: string;
  phone_number: string;
  email?: string;
  cart_number?: string;
  car_number?: string;
  address?: string;
  type?: string;
}

export default function Step2() {
  const [openModal, setOpenModal] = useState(false);

  const { push } = useRouter();
  const searchParams = useSearchParams();
  const numberOfGuests = searchParams.get("numberOfGuests");

  const schema = yup.object().shape({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    phone_number: yup.string().required(),
    email: yup.string().email(),
    cart_number: yup.string(),
    car_number: yup.string(),
    address: yup.string(),
  });

  const defaultValues = useMemo(
    () => ({
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      cart_number: "",
      car_number: "",
      address: "",
    }),
    []
  );

  const methods = useForm<StepTwoForms>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { handleSubmit, getValues, trigger } = methods;

  const onSubmit = (data: StepTwoForms) => {
    saveData(data, "رزرو");
    // push(`/reserve?step=3&numberOfGuests=${numberOfGuests}`);
  };

  const saveData = (values: StepTwoForms, type: string) => {
    const storedData = window.localStorage.getItem("reserve");
    const oldData = storedData ? JSON.parse(storedData) : [];
    const data = { ...values, type };
    window.localStorage.setItem("reserve", JSON.stringify([...oldData, data]));
    push(`/reserve?step=3&numberOfGuests=${numberOfGuests}`);
  };

  return (
    <>
      <TabPane tabId={2}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Row className="mt-4">
            <Col xl="6">
              <AppInput label="نام" name="first_name" placeholder="" />
            </Col>
            <Col xl="6">
              <AppInput label="نام خانوادگی" name="last_name" placeholder="" />
            </Col>
          </Row>
          <Row className="my-1">
            <Col xl="6">
              <AppInput
                label="شماره"
                name="phone_number"
                placeholder=""
                type="tel"
              />
            </Col>
            <Col xl="6">
              <AppInput
                label="ایمیل"
                name="email"
                placeholder=""
                type="email"
              />
            </Col>
          </Row>
          <Row className="my-1">
            <Col xl="6">
              <AppInput
                label="شماره کارت شناسایی"
                name="cart_number"
                placeholder="شماره ملی یا پاسپورت "
              />
            </Col>
            <Col xl="6">
              <AppInput label="پلاک خوردرو" name="car_number" placeholder="" />
            </Col>
          </Row>
          <Row className="my-1">
            <Col xl="12">
              <AppTextArea name="address" label="آدرس" placeholder="آدرس خود" />
            </Col>
          </Row>
          <Row className="justify-content-start my-4">
            <div className="d-flex w-100 justify-content-start ">
              <button
                disabled={false}
                className="btn btn-success  btn-block"
                type={"button"}
                onClick={async () => {
                  const isValid = await trigger();
                  if (isValid) {
                    setOpenModal(true);
                  }
                }}
              >
                رزرو موقت
              </button>
            </div>
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
                onClick={() => push("/reserve?step=1")}
              >
                قبلی
              </button>
              <button
                disabled={false}
                className="btn btn-primary   btn-block"
                type={"submit"}
              >
                بعدی
              </button>
            </div>
          </Row>
        </FormProvider>
      </TabPane>
      <Modal
        isOpen={openModal}
        role="dialog"
        autoFocus={true}
        centered
        data-toggle="modal"
        toggle={() => {
          setOpenModal(!openModal);
        }}
      >
        <div>
          <ModalHeader
            className="border-bottom-0"
            toggle={() => {
              setOpenModal(!openModal);
            }}
          ></ModalHeader>
        </div>
        <div className="modal-body">
          <div className="text-center mb-4">
            <div className="avatar-md mx-auto mb-4">
              <div className="avatar-title bg-light  rounded-circle text-primary h1">
                <i className="bx bx-calendar"></i>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-xl-10">
                <h4 className="text-primary">رزرو موقت</h4>
                <p className="text-muted font-size-14 mb-4">
                  برای رزرو موقت روی دکمه زیر کلیک کنید
                </p>

                <Button
                  onClick={() => {
                    saveData(getValues(), "رزرو موقت");
                    setOpenModal(false);
                  }}
                  color="primary"
                  type="button"
                  id="button-addon2"
                >
                  رزرو موقت
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
