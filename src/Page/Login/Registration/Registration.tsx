import { ButtonLarge } from "@globalStyle/ButtonLarge";
import { Input } from "@globalStyle/Input";
import { Title } from "@globalStyle/Title";
import { FC } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { Form } from "../StyledContainerLogin";

const Registration: FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <Title fontsize="35">Registration</Title>
      <Form>
        <Input type="text" id={"nome"} placeholder="Nome" />
        <Input type="text" id={"email"} placeholder="Email" />
        <Input type="password" id={"password"} placeholder="Password" />

        <ButtonLarge color="green">
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
