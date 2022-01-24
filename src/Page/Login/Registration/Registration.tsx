import { ButtonLarge } from "@globalStyle/ButtonLarge";

import { Title } from "@globalStyle/Title";
import { FC } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Form } from "../StyledContainerLogin";

import { useFormik } from "formik";
import {
  RegisterInitialValues,
  RegisterValidations,
} from "./InitialValuesAndValidations";
import Input from "@componets/UI/Input/Input";
const Registration: FC = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: RegisterInitialValues,
    validationSchema: RegisterValidations,
    onSubmit: (values, formikBag) => {
      // navigate("/home");
      console.log(values);
      formikBag.setFieldValue("user", "", false);
      formikBag.setFieldValue("email", "", false);
      formikBag.setFieldValue("password", "", false);
    },
  });

  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <Title fontsize="35">Registration</Title>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          input={{
            type: "text",
            placeholder: "Name",
            ...formik.getFieldProps("user"),
            autoComplete: "on",
          }}
          error={
            formik.errors.user && formik.touched.user
              ? formik.errors.user
              : null
          }
        />
        <Input
          input={{
            type: "text",
            placeholder: "Email",
            ...formik.getFieldProps("email"),
            autoComplete: "on",
          }}
          error={
            formik.errors.email && formik.touched.email
              ? formik.errors.email
              : null
          }
        />
        <Input
          input={{
            type: "password",
            placeholder: "Password",
            ...formik.getFieldProps("password"),
            autoComplete: "on",
          }}
          error={
            formik.errors.password && formik.touched.password
              ? formik.errors.password
              : null
          }
        />

        <ButtonLarge type="submit" color="green">
          Register
          <AiOutlineArrowRight />
        </ButtonLarge>
      </Form>
      <ButtonLarge onClick={handleClick}>
        <AiOutlineArrowLeft />
        Back
      </ButtonLarge>
    </>
  );
};
export default Registration;
