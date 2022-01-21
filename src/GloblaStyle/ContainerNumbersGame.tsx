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
  > div {
    width: 63px;
    height: 65px;
    border-radius: 50%;
    background-color: ${theme.ball};
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
      font-size: 20px;
      color: ${theme.white};
      font-weight: bold;
    }
  }
`;
