import styled from "styled-components";
import { theme } from "./theme";

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
