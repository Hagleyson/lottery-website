import { useNavigate } from "react-router-dom";
import { ButtonLarge } from "@globalStyle/ButtonLarge";
import { Input } from "@globalStyle/Input";
import { Title } from "@globalStyle/Title";
import { FC } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Form } from "../StyledContainerLogin";

const Login: FC = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/registration");
  };
  const handleLogin = () => {
    navigate("/home");
  };
  return (
    <>
      <Title fontsize="35">Authentication</Title>
      <Form>
        <Input type="text" id={"email"} placeholder="Email" />
        <Input type="password" id={"password"} placeholder="Password" />
        <Link to="/resetPassword">I forgot my password</Link>
        <ButtonLarge color="green" onClick={handleLogin}>
          Log In
          <AiOutlineArrowRight />
        </ButtonLarge>
      </Form>
      <ButtonLarge onClick={handleRegister}>
        Sign Up <AiOutlineArrowRight />
      </ButtonLarge>
    </>
  );
};
export default Login;
