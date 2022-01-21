import Layout from "@componets/Layout/Layout";
import CardGame from "@componets/UI/CardGame/CardGame";
import { ButtonLarge } from "@globalStyle/ButtonLarge";
import { ButtonLitle } from "@globalStyle/ButtonLitle";
import { ContainerCardGame } from "@globalStyle/ContainerCardGame";
import { ContainerFilter } from "@globalStyle/ContainerFilter";
import { ContainerNumbersGame } from "@globalStyle/ContainerNumbersGame";
import { SubTitle } from "@globalStyle/Subtitle";
import { Title } from "@globalStyle/Title";
import { FC } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const NewBet: FC = () => {
  return (
    <Layout>
      <section>
        <Title fontsize="24">NEW BET FOR MEGA-SENA</Title>
        <SubTitle>Choose a Game</SubTitle>
        <ContainerFilter>
          {games.types.map((game) => (
            <ButtonLitle key={game.type} color={game.color}>
              {game.type}
            </ButtonLitle>
          ))}
        </ContainerFilter>
        <Title fontsize="17">Fill your bet</Title>
        <SubTitle>
          Mark as many numbers as you want up to a maximum of 50. win by hitting
          15,16,17,18,19,20 or none 20 numbers drawn
        </SubTitle>
        <ContainerNumbersGame>
          <div>
            <span> 1</span>
          </div>
          <div>
            <span>2</span>
          </div>
          <div>
            <span>3</span>
          </div>
          <div>
            <span>4</span>
          </div>
          <div>
            <span>5</span>
          </div>
          <div>
            <span>6</span>
          </div>
          <div>
            <span>7</span>
          </div>
          <div>
            <span>8</span>
          </div>
          <div>
            <span>9</span>
          </div>
          <div>
            <span>10</span>
          </div>
          <div>
            <span>11</span>
          </div>
          <div>
            <span>12</span>
          </div>
          <div>
            <span> 1</span>
          </div>
          <div>
            <span>2</span>
          </div>
          <div>
            <span>3</span>
          </div>
          <div>
            <span>4</span>
          </div>
          <div>
            <span>5</span>
          </div>
          <div>
            <span>6</span>
          </div>
          <div>
            <span>7</span>
          </div>
          <div>
            <span>8</span>
          </div>
          <div>
            <span>9</span>
          </div>
          <div>
            <span>10</span>
          </div>
          <div>
            <span>11</span>
          </div>
          <div>
            <span>12</span>
          </div>
          <div>
            <span>2</span>
          </div>
          <div>
            <span>3</span>
          </div>
          <div>
            <span>4</span>
          </div>
          <div>
            <span>5</span>
          </div>
          <div>
            <span>6</span>
          </div>
          <div>
            <span>7</span>
          </div>
          <div>
            <span>8</span>
          </div>
          <div>
            <span>9</span>
          </div>
          <div>
            <span>10</span>
          </div>
          <div>
            <span>11</span>
          </div>
          <div>
            <span>12</span>
          </div>
          <div>
            <span>2</span>
          </div>
          <div>
            <span>3</span>
          </div>
          <div>
            <span>4</span>
          </div>
          <div>
            <span>5</span>
          </div>
          <div>
            <span>6</span>
          </div>
          <div>
            <span>7</span>
          </div>
          <div>
            <span>8</span>
          </div>
          <div>
            <span>9</span>
          </div>
          <div>
            <span>10</span>
          </div>
          <div>
            <span>11</span>
          </div>
          <div>
            <span>12</span>
          </div>
          <div>
            <span> 1</span>
          </div>
          <div>
            <span>2</span>
          </div>
          <div>
            <span>3</span>
          </div>
          <div>
            <span>4</span>
          </div>
          <div>
            <span>5</span>
          </div>
          <div>
            <span>6</span>
          </div>
          <div>
            <span>7</span>
          </div>
          <div>
            <span>8</span>
          </div>
          <div>
            <span>9</span>
          </div>
          <div>
            <span>10</span>
          </div>
          <div>
            <span>11</span>
          </div>
          <div>
            <span>12</span>
          </div>
          <div>
            <span>2</span>
          </div>
          <div>
            <span>3</span>
          </div>
          <div>
            <span>4</span>
          </div>
          <div>
            <span>5</span>
          </div>
          <div>
            <span>6</span>
          </div>
          <div>
            <span>7</span>
          </div>
          <div>
            <span>8</span>
          </div>
          <div>
            <span>9</span>
          </div>
          <div>
            <span>10</span>
          </div>
          <div>
            <span>11</span>
          </div>
          <div>
            <span>12</span>
          </div>
        </ContainerNumbersGame>
      </section>
      <section>
        <Title fontsize="24">Cart</Title>
        <ContainerCardGame>
          <CardGame color="#7F3992" />
          <CardGame color="#01AC66" />
          <CardGame color="#b89ac0" />
          <CardGame color="#00ff0d" />
          <CardGame color="#001aff" />
          <Title>CART TOTAL: R$ 15,00</Title>
          <ButtonLarge>
            Save
            <AiOutlineArrowRight />
          </ButtonLarge>
        </ContainerCardGame>
      </section>
    </Layout>
  );
};
export default NewBet;
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
