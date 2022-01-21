import styled from "styled-components";
import { theme } from "@globalStyle/theme";

export const LayoutStyle = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
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
    position: absolute;
    bottom: 0;
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
    height: calc(100vh - 72px -72px);
    max-height: calc(100% - 72px -72px);
    overflow: auto;

    > div {
      width: 80%;
      /* max-width: 1200px; */
      height: 100%;
      display: grid;
      grid-template-columns: 60% 40%;
      > section {
        padding-top: 50px;
      }
    }
  }
`;
