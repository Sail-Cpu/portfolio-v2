import React from "react";
import styled from "styled-components";
import theme from "../styles/Theme";

const StyledPseudo = styled.div`
  position: fixed;
  bottom: 20px;
  right: 50px;
  font-size: 35px;
  color: ${theme.colors.fourth};
  @media screen and (max-width: 1050px){
    right: 35px;
  }
  @media screen and (max-width: 800px){
    right: 15px;
  }
`;

const pseudo = "SAIL";

const Pseudo = () => {
  return <StyledPseudo>{pseudo}</StyledPseudo>;
};

export default Pseudo;
