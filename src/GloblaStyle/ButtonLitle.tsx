import styled from "styled-components";
import { theme } from "@globalStyle/theme";
type propsType = {
  color?: string;
  active?: boolean;
};
export const ButtonLitle = styled.button`
  width: 113px;
  height: 34px;
  font-style: italic;
  border-radius: 15px;
  margin-right: 10px;
  cursor: pointer;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props: propsType) => props.color || "trasparent"};
  color: ${(props: propsType) => (props.active ? "white" : props.color)};
  background-color: ${(props: propsType) =>
    props.active ? props.color : "transparent"};

  &:hover {
    transform: scale(1.01);
  }
  .active {
    background-color: black;
    color: ${theme.white};
  }
`;
