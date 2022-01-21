import Layout from "@componets/Layout/Layout";
import CardGame from "@componets/UI/CardGame/CardGame";
import { ButtonLarge } from "@globalStyle/ButtonLarge";
import { ButtonLitle } from "@globalStyle/ButtonLitle";
import { ContainerCardGame } from "@globalStyle/ContainerCardGame";
import { ContainerFilter } from "@globalStyle/ContainerFilter";
import { SubTitle } from "@globalStyle/Subtitle";
import { Title } from "@globalStyle/Title";
import { FC } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router";

const Home: FC = () => {
  const navigate = useNavigate();
  const handleNewGame = () => {
    navigate("/newbet");
  };
  return (
    <Layout>
      <section>
        <ContainerFilter>
          <Title fontsize="24">Recent Games</Title>
          <SubTitle>Filters</SubTitle>
          {games.types.map((game) => (
            <ButtonLitle key={game.type} color={game.color}>
              {game.type}
            </ButtonLitle>
          ))}
        </ContainerFilter>

        <ContainerCardGame isHome>
          <CardGame color="#7F3992" isHome />
          <CardGame color="#01AC66" isHome />
          <CardGame color="#b89ac0" isHome />
          <CardGame color="#00ff0d" isHome />
          <CardGame color="#001aff" isHome />
        </ContainerCardGame>
      </section>
      <section>
        <ButtonLarge onClick={handleNewGame}>
          New Bet
          <AiOutlineArrowRight />
        </ButtonLarge>
      </section>
    </Layout>
  );
};
export default Home;
const games = {
  "min-cart-value": 30,
  types: [
    {
      type: "Lotofácil",
      description:
        "Escolha 15 números para apostar na lotofácil. Você ganha acertando 11, 12, 13, 14 ou 15 números. São muitas chances de ganhar, e agora você joga de onde estiver!",
      range: 25,
      price: 2.5,
      "max-number": 15,
      color: "#7F3992",
    },
    {
      type: "Mega-Sena",
      description:
        "Escolha 6 números dos 60 disponíveis na mega-sena. Ganhe com 6, 5 ou 4 acertos. São realizados dois sorteios semanais para você apostar e torcer para ficar milionário.",
      range: 60,
      price: 4.5,
      "max-number": 6,
      color: "#01AC66",
    },
    {
      type: "Quina",
      description:
        "Escolha 5 números dos 80 disponíveis na quina. 5, 4, 3 ou 2 acertos. São seis sorteios semanais e seis chances de ganhar.",
      range: 80,
      price: 2,
      "max-number": 5,
      color: "#F79C31",
    },
  ],
};
