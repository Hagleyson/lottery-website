import Layout from "@componets/Layout/Layout";
import CardGame from "@componets/UI/CardGame/CardGame";
import { ButtonLarge } from "@globalStyle/ButtonLarge";
import { ButtonLitle } from "@globalStyle/ButtonLitle";
import { ContainerCardGame } from "@globalStyle/ContainerCardGame";
import { ContainerFilter } from "@globalStyle/ContainerFilter";
import { SubTitle } from "@globalStyle/Subtitle";
import { Title } from "@globalStyle/Title";
import { FetchBet } from "@store/Bet";
import { FetchListGames } from "@store/Games";
import { RootState } from "@store/index";
import { FC, useCallback, useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Home: FC = () => {
  const navigate = useNavigate();
  const bet = useSelector((state: RootState) => state.games.games);
  const { types } = useSelector((state: RootState) => state.ListGames.list);
  const dispatch = useDispatch();
  const [filters, setFilters] = useState<string[]>([]);

  const handleNewGame = () => {
    navigate("/newbet");
  };

  const ListCarts = useCallback(() => {
    return bet.map((cur: any) => {
      const color = types.filter((t) => t.id === cur.game_id)[0].color;
      return (
        <CardGame
          key={cur.id}
          id={cur.id}
          color={color}
          numbers={cur.choosen_numbers
            .replace(/,/g, "")
            .split("")
            .map((cur: string) => Number(cur))}
          price={cur.price}
          name={cur.type.type}
          isHome
        />
      );
    });
  }, [bet, types]);
  const handlerFilter = useCallback(
    (type: string) => {
      let newFilter = filters;
      const idx = newFilter.indexOf(type);
      idx > -1 ? newFilter.splice(idx, 1) : newFilter.push(type);
      setFilters(newFilter);
      dispatch(FetchBet(newFilter));
    },
    [filters, dispatch]
  );
  const ButtonsList = useCallback(() => {
    return types.map((game) => {
      const isActive = filters.indexOf(game.type) >= 0;
      return (
        <ButtonLitle
          key={game.type}
          color={game.color}
          onClick={handlerFilter.bind(null, game.type)}
          active={isActive}
        >
          {game.type}
        </ButtonLitle>
      );
    });
  }, [types, filters, handlerFilter]);

  useEffect(() => {
    dispatch(FetchBet());
    dispatch(FetchListGames());
  }, [dispatch]);

  return (
    <Layout>
      <section>
        <ContainerFilter>
          <Title fontsize="24">Recent Games</Title>
          <SubTitle>Filters</SubTitle>
          {types && ButtonsList()}
        </ContainerFilter>

        <ContainerCardGame isHome>
          {bet.length > 0 && types.length > 0 ? ListCarts() : null}
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
