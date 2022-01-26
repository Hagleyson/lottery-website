import { ListGamesMade } from "@api/ListGamesMade";
import Layout from "@componets/Layout/Layout";
import CardGame from "@componets/UI/CardGame/CardGame";
import { ButtonLarge } from "@globalStyle/ButtonLarge";
import { ButtonLitle } from "@globalStyle/ButtonLitle";
import { ContainerCardGame } from "@globalStyle/ContainerCardGame";
import { ContainerFilter } from "@globalStyle/ContainerFilter";
import { SubTitle } from "@globalStyle/Subtitle";
import { Title } from "@globalStyle/Title";
import { RootState } from "@store/index";
import { FC, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Home: FC = () => {
  const navigate = useNavigate();

  const games = useSelector((state: RootState) => state.games.games);

  const handleNewGame = () => {
    navigate("/newbet");
  };
  useEffect(() => {
    const searchGameMade = async () => {
      const response = await ListGamesMade();
      console.log(response);
    };
    searchGameMade();
  }, []);
  return (
    <Layout>
      <section>
        <ContainerFilter>
          <Title fontsize="24">Recent Games</Title>
          <SubTitle>Filters</SubTitle>
          {games.map((game) => (
            <ButtonLitle key={"game.type"} color={"game.color"}>
              {"game.type"}
            </ButtonLitle>
          ))}
        </ContainerFilter>

        <ContainerCardGame isHome>
          <CardGame color="#7F3992" isHome numbers={[1234]} price={2} id={0} />
        </ContainerCardGame>
      </section>
      <section>
        <ButtonLarge color="green" onClick={handleNewGame}>
          New Bet
          <AiOutlineArrowRight />
        </ButtonLarge>
      </section>
    </Layout>
  );
};
export default Home;
