import { theme } from "./theme";
import styled from "styled-components";

type propsType = {
  fontsize?: string;
  color?: string;
};
export const Title = styled.h1`
  font-weight: bold;
  font-style: italic;
  font-size: ${(props: propsType) => props.fontsize || 25}px;
  color: ${(props: propsType) => props.color || theme.textPrimary};
`;
