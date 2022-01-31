import { resetPassword } from "src/shared/services/resetePassword";
import { Input } from "@Components/index";
import { ButtonLarge } from "@GlobalStyle/ButtonLarge";

import { Title } from "@GlobalStyle/Title";
import { useFormik } from "formik";
import { FC } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Form } from "../StyledContainerLogin";

import {
  ResetInitialValues,
  ResetValidations,
} from "./InitialValuesAndValidations";
const ResetPassword: FC = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: ResetInitialValues,
    validationSchema: ResetValidations,
    onSubmit: async (values, formikBag) => {
      const response = await resetPassword(values.email);
      if (response) {
        formikBag.setFieldValue("email", "", false);
      }
    },
  });
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <Title fontsize="35">Reset password</Title>
      <Form height="190" onSubmit={formik.handleSubmit}>
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

        <ButtonLarge color="green" type="submit">
          Send link
          <AiOutlineArrowRight />
        </ButtonLarge>
      </Form>
      <ButtonLarge onClick={handleClick}>
        <AiOutlineArrowLeft /> Back
      </ButtonLarge>
    </>
  );
};
export default ResetPassword;
