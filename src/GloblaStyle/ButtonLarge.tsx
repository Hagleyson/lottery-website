import styled from "styled-components";
import { theme } from "@globalStyle/theme";

type propsType = {
  color?: string;
  fontsize?: string;
  height?: string;
};
export const ButtonLarge = styled.button`
  display: flex;
  justify-content: center;
  background-color: transparent;
  align-items: center;
  width: 100%;
  height: 42px;
  border: none;
  opacity: 1;
  outline: none;
  margin-top: 10px;
  cursor: pointer;
  font-weight: bold;
  font-style: italic;
  font-size: 24px;
  letter-spacing: 0px;
  opacity: 1;
  color: ${(props: propsType) =>
    props.color === "green" ? theme.greenLemon : theme.textPrimary};
`;
