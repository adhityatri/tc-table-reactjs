import styled from "styled-components";

export const ButtonStyled = styled.button`
  min-height: 35px;
  min-width: 70px;
  border: none;
  padding: 5px 10px;
  border-radius: 2px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin + "px"};
  transition: all ease-in-out .2s;

  &:hover,
  &:focus {
      opacity: .9;
  }
`;
