import styled from "styled-components";
import { theme } from "./theme";

export const ContainerNumbersGame = styled.div`
  padding: 15px 0;
  width: 100%;
  max-height: 325px;
  overflow: auto;
  display: grid;
  column-gap: 10px;
  row-gap: 15px;
  margin-top: 15px;
  grid-template-columns: repeat(10, 1fr);
  .selected {
    background-color: ${theme.greenLight};
  }

  @media screen and (max-width: 1530px) {
    grid-template-columns: repeat(9, 63px);
  }
  @media screen and (max-width: 1379px) {
    grid-template-columns: repeat(8, 63px);
  }
  @media screen and (max-width: 1326px) {
    grid-template-columns: repeat(7, 63px);
  }
  @media screen and (max-width: 1075px) {
    grid-template-columns: repeat(6, 63px);
  }
  @media screen and (max-width: 1014px) {
    grid-template-columns: repeat(7, 63px);
  }
  @media screen and (max-width: 955px) {
    grid-template-columns: repeat(6, 63px);
  }
  @media screen and (max-width: 888px) {
    grid-template-columns: repeat(10, 63px);
  }
  @media screen and (max-width: 859px) {
    grid-template-columns: repeat(9, 63px);
  }
  @media screen and (max-width: 774px) {
    grid-template-columns: repeat(8, 63px);
  }
  @media screen and (max-width: 691px) {
    grid-template-columns: repeat(7, 63px);
  }
  @media screen and (max-width: 608px) {
    grid-template-columns: repeat(6, 63px);
  }
  @media screen and (max-width: 530px) {
    grid-template-columns: repeat(5, 63px);
  }
`;

type BallType = {
  color: string | undefined;
};
export const Ball = styled.div`
  width: 63px;
  height: 65px;
  border-radius: 50%;
  background-color: ${(props: BallType) =>
    props.color ? props.color : theme.ball};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  > span {
    font-size: 20px;
    color: ${theme.white};
    font-weight: bold;
  }
`;
