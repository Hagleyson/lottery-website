import { SubTitle } from "@globalStyle/Subtitle";
import { Title } from "@globalStyle/Title";
import { CardGamesStyle } from "./CardGameStyle";
import { IoTrashOutline } from "react-icons/io5";
const CardGame = (props: { color?: string; isHome?: boolean }) => {
  const { color, isHome } = props;
  return (
    <CardGamesStyle color={color} isHome={isHome}>
      {!isHome ? <IoTrashOutline /> : null}
      <div>
        <Title fontsize={`${isHome ? "20" : "15"}`}>
          01, 02, 03, 04, 05, 09, 11, 15, 16, 20, 24, 23, 32, 40, 25, 90
        </Title>
        {isHome ? <SubTitle>{`20/01/2022 - (${"R$ 2,50"})`}</SubTitle> : null}
        <Title fontsize={`${isHome ? "20" : "17"}`} color={color}>
          Lotomania {!isHome ? <SubTitle>{`  ${"R$ 2,50"} `}</SubTitle> : null}
        </Title>
      </div>
    </CardGamesStyle>
  );
};
export default CardGame;
