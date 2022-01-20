import styled from "styled-components";
import { theme } from "@globalStyle/theme";

export const LayoutStyle = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  > header,
  footer {
    width: 100%;
    height: 72px;
    opacity: 1;
    display: flex;
    justify-content: center;
    background-color: ${theme.background};
  }
  > header {
    border-bottom: 2px solid ${theme.line};
  }
  > footer {
    border-top: 2px solid ${theme.line};
    align-items: center;
    > p {
      font: normal normal normal 15px/70px Helvetica Neue;
      color: ${theme.textPrimary};
    }
  }
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(80% - 72px -72px);
    max-height: calc(80% - 72px -72px);
    overflow: auto;

    > div {
      width: 80%;
      height: 100%;
      display: grid;
      grid-template-columns: 70% 30%;
      > section:first-child {
        padding-top: 50px;
      }
      > section:last-child {
        padding-top: 50px;
      }
    }
  }
`;
