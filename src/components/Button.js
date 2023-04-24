import React from "react";
import styled from "styled-components";

const StyledButton = styled.button` 
  position: relative;
  padding: 12px 35px;
  border: 3px solid #fffbeb;
  background: none;
  color: #fffbeb;
  font-size: 17px;
  cursor: pointer;
  overflow: hidden;
  span {
    z-index: 20;
  }
  &:after {
    background: #fffbeb;
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
  return <StyledButton>{props.label.toUpperCase()}</StyledButton>;
};

export default Button;
