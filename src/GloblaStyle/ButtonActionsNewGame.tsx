import styled from "styled-components";
import { theme } from "./theme";

type propsType = {
  addToCar?: boolean;
};

export const ButtonActionsNewGame = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  font-weight: ${(props: propsType) => (props.addToCar ? `bold` : `medium`)};
  background-color: ${(props: propsType) =>
    props.addToCar ? theme.greenLight : theme.white};
  color: ${(props: propsType) =>
    props.addToCar ? theme.white : theme.greenLight};
  border: ${(props: propsType) =>
    props.addToCar
      ? `1px solid ${theme.greenLight}`
      : `2px solid ${theme.greenLight}`};

  svg {
    font-size: 20px;
    margin-right: 25px;
  }
`;
