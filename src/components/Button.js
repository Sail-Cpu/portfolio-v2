import React from "react";
import styled from "styled-components";
import theme from "../styles/Theme";

const StyledButton = styled.button` 
  position: relative;
  padding: ${(props) => (props.icon ? "5px 25px" : "12px 35px")};
  border: 4px solid ;
  background: none;
  color: ${theme.colors.secondary};
  font-size: ${(props) => (props.icon ? "" : "17px")};
  cursor: pointer;
  overflow: hidden;
  font-family: 'Gugi', serif;
  svg{
  font-size: 40px;
  }
}
  span {
    z-index: 20;
  }
  &:after {
    background: ${theme.colors.secondary};
    content: "";
    height: 155px;
    left: -75px;
    opacity: .2;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: -10;
  }
  :hover {
    &:after {
        left: 120%;
        transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      }
`;

const Button = (props) => {
  const Label = props.label;
  return (
    <>
      {typeof Label === "string" ? (
        <StyledButton>{Label.toUpperCase()}</StyledButton>
      ) : (
        <StyledButton icon>
          <Label />
        </StyledButton>
      )}
    </>
  );
};

export default Button;
