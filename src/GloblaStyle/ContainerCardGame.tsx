import styled from "styled-components";
import { theme } from "./theme";

type propsType = {
  isHome?: boolean;
};
export const ContainerCardGame = styled.div`
  width: 100%;
  max-width: 100%;
  position: relative;
  height: ${(props: propsType) => (props.isHome ? `auto` : `484px`)};
  padding-left: ${(props: propsType) => (props.isHome ? `0` : `10px`)};
  display: flex;

  flex-direction: column;
  overflow: auto;
  margin-top: 20px;
  box-shadow: ${(props: propsType) =>
    props.isHome ? null : theme["box-shadow-cards"]};
  button {
    color: ${theme.greenBold}!important;
    font-size: 35px;
    height: 96px !important;
    padding: 15px;
    margin-top: 15px;
  }
`;
