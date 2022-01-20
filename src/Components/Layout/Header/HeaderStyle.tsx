import styled from "styled-components";
import { theme } from "@globalStyle/theme";

export const HeaderStyle = styled.header`
  > div {
    width: 80%;
    height: 100%;
    display: flex;
    padding: 15px;
    justify-content: space-between;
    > div {
      display: flex;
      align-items: center;
      justify-content: space-around;
      .logo {
        position: relative;
        display: inline-block;
        text-align: center;
        &::after {
          content: "";
          position: absolute;
          top: 110%;
          left: -5px;
          width: 110%;
          border-radius: 10px;
          height: 0.2em;
          background-color: ${theme.greenLemon};
        }
      }
    }
  }
  .linkMenu {
    color: ${theme.textPrimary};
    cursor: pointer;
    margin-left: 20px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      font-size: 20px;
    }
  }
`;