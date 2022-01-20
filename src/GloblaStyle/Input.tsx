import styled from "styled-components";
import { theme } from "@globalStyle/theme";

export const Input = styled.input`
  top: 376px;
  left: 795px;
  width: 100%;
  padding: 20px 5px;
  border: none;
  border-bottom: 2px solid #ebebeb;

  text-align: left;
  font-weight: bold;
  font-style: italic;
  font-size: 17px;
  color: ${theme.textSecondary};
  :focus {
    outline: none;
  }
`;
