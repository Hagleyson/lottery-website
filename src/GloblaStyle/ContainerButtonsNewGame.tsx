import styled from "styled-components";
import { ContainerFilter } from "./ContainerFilter";

export const ContainerButtonsNewGame = styled(ContainerFilter)`
  justify-content: space-between;
  > div {
    display: flex;
    justify-content: space-around;
    max-height: 70px;

    > button {
      margin-right: 15px;
    }
  }
`;
