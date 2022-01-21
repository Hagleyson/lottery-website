import { Title } from "@globalStyle/Title";
import { FC } from "react";
import { HeaderStyle } from "./HeaderStyle";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router";
const Header: FC<{ showHome?: boolean }> = (props) => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/home");
  };
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <HeaderStyle>
      <div>
        <div>
          <Title className="logo" fontsize="44">
            TGL <span></span>
          </Title>
          {props.showHome && (
            <Title onClick={handleHome} className="linkMenu">
              Home
            </Title>
          )}
        </div>
        <div>
          <Title className="linkMenu">Account</Title>
          <Title className="linkMenu" onClick={handleLogout}>
            Log out <AiOutlineArrowRight />
          </Title>
        </div>
      </div>
    </HeaderStyle>
  );
};
export default Header;
