import styled from "styled-components";
import { theme } from "./theme";

type propsType = {
  isHome?: boolean;
};
export const ContainerCar = styled.div`
  width: 100%;
  max-width: 100%;
  position: relative;
  height: 484px;
  max-height: 484px;
  padding-left: ${(props: propsType) => (props.isHome ? `0` : `10px`)};
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 20px;
  box-shadow: ${theme["box-shadow-cards"]};
  margin-left: 10px;
  button {
    color: ${theme.greenBold}!important;
    font-size: 35px;
    height: 96px !important;
    padding: 15px;
    margin-top: 15px;
    border-top: 2px solid ${theme.line};
    &:hover {
      transform: scale(1.01);
    }
  }
`;
