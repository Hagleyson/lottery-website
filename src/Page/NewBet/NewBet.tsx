import { GamesList } from "@api/Games";
import Layout from "@componets/Layout/Layout";
import CardGame from "@componets/UI/CardGame/CardGame";
import { ButtonActionsNewGame } from "@globalStyle/ButtonActionsNewGame";
import { ButtonLarge } from "@globalStyle/ButtonLarge";
import { ButtonLitle } from "@globalStyle/ButtonLitle";
import { ContainerButtonsNewGame } from "@globalStyle/ContainerButtonsNewGame";
import { ContainerCar } from "@globalStyle/ContainerCar";
import { ContainerCardGame } from "@globalStyle/ContainerCardGame";
import { ContainerFilter } from "@globalStyle/ContainerFilter";
import { Ball, ContainerNumbersGame } from "@globalStyle/ContainerNumbersGame";
import { SubTitle } from "@globalStyle/Subtitle";
import { Title } from "@globalStyle/Title";
import { FC, useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useNavigate } from "react-router";

const initialValue = {
  id: 0,
  type: "Lotofácil",
  description: "",
  range: 0,
  price: 0,
  max_number: 0,
  color: "",
};
const NewBet: FC = () => {
  const navigate = useNavigate();
  const [minCartValue, setMinCartValue] = useState(0);
  const [cart, setCart] = useState([] as any);
  const [games, setGames] = useState([initialValue]);
  const [currentGame, setCurrentGame] = useState(initialValue);
  const [selectedNumbers, setSelectedNumbers] = useState([] as any);
  const handleSave = () => {
    navigate("/home");
  };

  useEffect(() => {
    const searchGame = async () => {
      const response = await GamesList();
      await setMinCartValue(Number(response.min_cart_value));
      await setGames(response.types);
      setCurrentGame(response.types[0]);
    };

    searchGame();
  }, []);

  const handleGame = (id: number) => {
    const newGame = games.filter((g) => g.id === id);
    setCurrentGame(newGame[0]);
    handlerClear();
  };
  const ListButonsFilter = () =>
    games.map((game: { id: number; color: string; type: string }) => (
      <ButtonLitle
        key={game.id}
        color={game.color}
        onClick={handleGame.bind(null, game.id)}
        active={game.id === currentGame.id}
      >
        {game.type}
      </ButtonLitle>
    ));
  const ListNumbersGame = () => {
    const numbers = Array(currentGame.range).fill(0);
    return numbers.map((n, c) => {
      const itemIsSelected = !!selectedNumbers.find(
        (element: number) => element === c + 1
      );
      return (
        <Ball
          key={c}
          color={itemIsSelected ? currentGame.color : undefined}
          onClick={handlerSelectNumber.bind(null, c + 1)}
        >
          <span>{c + 1 < 10 ? `0${c + 1}` : c + 1}</span>
        </Ball>
      );
    });
  };
  const handleComplete = () => {
    let currentNumberSelected: number[] = [...selectedNumbers];
    if (currentNumberSelected.length === currentGame["max_number"]) {
      alert("Não é possivel mais adicionar números");
    }
    for (
      let index = 0;
      currentNumberSelected.length < currentGame["max_number"];
      index++
    ) {
      const aleatorio = Math.ceil(Math.random() * currentGame.range);
      if (currentNumberSelected.length <= 0) {
        currentNumberSelected.push(aleatorio);
      }
      if (!currentNumberSelected.some((element) => element === aleatorio)) {
        currentNumberSelected.push(aleatorio);
      }
    }
    setSelectedNumbers(currentNumberSelected);
    ListNumbersGame();
  };
  const handlerSelectNumber = (number: number) => {
    let currentNumberSelected: number[] = [...selectedNumbers];

    if (currentNumberSelected.some((element: number) => element === number)) {
      currentNumberSelected.splice(currentNumberSelected.indexOf(number), 1);
    } else if (currentNumberSelected.length >= currentGame["max_number"]) {
      alert("Não é possivel mais adicionar números ");
    } else if (
      !currentNumberSelected.some((element: number) => element === number)
    ) {
      currentNumberSelected.push(number);
    }
    setSelectedNumbers(currentNumberSelected);
    ListNumbersGame();
  };
  const handlerClear = () => {
    setSelectedNumbers([]);
  };

  useEffect(() => {
    console.log(selectedNumbers);
  }, [selectedNumbers]);
  return (
    <Layout showHome>
      <section>
        <Title fontsize="24">
          NEW BET <span> FOR {currentGame.type.toLocaleUpperCase()}</span>
        </Title>
        <SubTitle>Choose a Game</SubTitle>
        <ContainerFilter>{games ? ListButonsFilter() : null}</ContainerFilter>
        <Title fontsize="17">Fill your bet</Title>
        <SubTitle>{currentGame.description}</SubTitle>
        <ContainerNumbersGame>
          {currentGame ? ListNumbersGame() : null}
        </ContainerNumbersGame>
        <ContainerButtonsNewGame>
          <div>
            <ButtonActionsNewGame onClick={handleComplete}>
              Complete game
            </ButtonActionsNewGame>
            <ButtonActionsNewGame onClick={handlerClear}>
              Clear game
            </ButtonActionsNewGame>
          </div>
          <div>
            <ButtonActionsNewGame addToCar>
              <HiOutlineShoppingCart />
              Add to cart
            </ButtonActionsNewGame>
          </div>
        </ContainerButtonsNewGame>
      </section>
      <section>
        <ContainerCar>
          <Title fontsize="24">CART</Title>
          <ContainerCardGame>
            {cart.length <= 0 && <h1>carrinho vazio!!!</h1>}
            {/* <CardGame color="#7F3992" />
            <CardGame color="#01AC66" />
            <CardGame color="#b89ac0" />
            <CardGame color="#00ff0d" />
            <CardGame color="#001aff" /> */}
          </ContainerCardGame>

          <Title>
            CART <span>TOTAL: R$ {cart.length <= 0 ? "00,00" : "12,00"} </span>
          </Title>
          <ButtonLarge onClick={handleSave}>
            Save
            <AiOutlineArrowRight />
          </ButtonLarge>
        </ContainerCar>
      </section>
    </Layout>
  );
};
export default NewBet;
