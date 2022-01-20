import styled from "styled-components";
import { theme } from "@globalStyle/theme";
export const LayoutStyle = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  > header {
    width: 100%;
    height: 72px;
    border-bottom: 2px solid ${theme.line};
    opacity: 1;
    display: flex;
    justify-content: center;
    background-color: aliceblue;
  }
  main {
    width: 100%;
    height: calc(100% - 72px);
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
      width: 80%;
      height: 100%;
      display: grid;
      grid-template-columns: 70% 30%;
      > section:first-child {
        background-color: gold;
      }
      > section:last-child {
        background-color: royalblue;
      }
    }
  }
`;
