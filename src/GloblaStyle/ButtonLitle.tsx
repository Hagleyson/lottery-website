import styled from "styled-components";

type propsType = {
  color?: string;
};
export const ButtonLitle = styled.button`
  width: 113px;
  height: 34px;
  font-style: italic;
  border-radius: 15px;
  margin-left: 10px;
  cursor: pointer;
  border-width: 2px;
  color: ${(props: propsType) => props.color || "black"};
  background-color: transparent;
`;
