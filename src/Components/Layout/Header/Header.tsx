import { Title } from "@globalStyle/Title";
import { FC } from "react";
import { HeaderStyle } from "./HeaderStyle";
import { AiOutlineArrowRight } from "react-icons/ai";
const Header: FC = () => {
  return (
    <HeaderStyle>
      <div>
        <div>
          <Title className="logo" fontsize="44">
            TGL <span></span>
          </Title>
          <Title className="linkMenu">Home</Title>
        </div>
        <div>
          <Title className="linkMenu">Account</Title>
          <Title className="linkMenu">
            Log out <AiOutlineArrowRight />
          </Title>
        </div>
      </div>
    </HeaderStyle>
  );
};
export default Header;
