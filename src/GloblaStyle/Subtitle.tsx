import { theme } from "./theme";
import styled from "styled-components";

type propsType = {
  fontStyle?: string;
};
export const SubTitle = styled.p`
  font-weight: lighter;
  font-style: ${(props: propsType) => props.fontStyle || "italic"};
  font-size: 17px;
  color: ${theme.subTitle};
`;
