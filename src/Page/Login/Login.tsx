import { FC } from "react";
import { useParams } from "react-router";
import { SectionLogin } from "./LoginStyle";

const Login: FC = () => {
  const params = useParams();
  console.log(params);

  return (
    <SectionLogin>
      <div>Hagleyosn</div>
      <div></div>
    </SectionLogin>
  );
};
export default Login;
