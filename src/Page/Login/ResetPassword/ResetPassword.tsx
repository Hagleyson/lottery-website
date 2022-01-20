import { ButtonLarge } from "@globalStyle/ButtonLarge";
import { Input } from "@globalStyle/Input";
import { Title } from "@globalStyle/Title";
import { FC } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Form } from "../StyledContainerLogin";

const ResetPassword: FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <Title fontsize="35">Reset password</Title>
      <Form height="190">
        <Input type="text" id={"email"} placeholder="Email" />
        <ButtonLarge color="green">
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
