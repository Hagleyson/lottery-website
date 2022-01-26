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
  display: flex;
  flex-direction: column;
  overflow: auto;
  margin: 20px 0;
  > h1:last-child {
    font-size: 1rem;
    font-style: italic;
    color: ${theme.subTitle};
  }
`;
