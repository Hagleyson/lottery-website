import { FC } from "react";

import { Title } from "@Components/index";

import { HeaderStyle } from "./HeaderStyle";

import { AiOutlineArrowRight } from "react-icons/ai";

import { useNavigate } from "react-router";

import { destroySession } from "@helpers/localStorage";
import Swal from "sweetalert2";

const Header: FC<{ showHome?: boolean }> = (props) => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/home");
  };
  const handleLogout = () => {
    Swal.fire({
      title: "Encerrar sessão!",
      text: "Você deseja sair do sistema?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#27C383",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim!",
      cancelButtonText: "Não!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await Swal.fire({
          icon: "success",
          title: "Volte Sempre!",
          showConfirmButton: false,
          timer: 1500,
        });
        await destroySession();
        await navigate("/");
      }
    });
  };

  const handleAccount = () => {
    navigate("/account");
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
          <Title className="linkMenu" onClick={handleAccount}>
            Account
          </Title>
          <Title className="linkMenu" onClick={handleLogout}>
            Log out <AiOutlineArrowRight />
          </Title>
        </div>
      </div>
    </HeaderStyle>
  );
};
export default Header;
