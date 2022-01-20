import { FC } from "react";
import { useParams } from "react-router-dom";

import { SectionLogin } from "./StyledContainerLogin";
import { Title } from "@globalStyle/Title";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import ResetPassword from "./ResetPassword/ResetPassword";

const CotainerLogin: FC = () => {
  const params = useParams();

  const handlePages = () => {
    switch (params.page) {
      case "login":
        return <Login />;
      case "registration":
        return <Registration />;
      case "resetPassword":
        return <ResetPassword />;
      default:
        return <Login />;
    }
  };
  return (
    <>
      <SectionLogin>
        <div>
          <div>
            <Title fontsize="65">The Greatest App</Title>
          </div>
          <button>For</button>
          <Title fontsize="83">LOTTERY</Title>
        </div>
        <div>{handlePages()}</div>
      </SectionLogin>
    </>
  );
};
export default CotainerLogin;
