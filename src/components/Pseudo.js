import React from "react";
import styled from "styled-components";
import theme from "../styles/Theme";
import MyPseudo from "../content/Pseudo";

const StyledPseudo = styled.div`
  position: fixed;
  bottom: 20px;
  right: 50px;
  font-size: 35px;
  color: ${theme.colors.fourth};
  @media screen and (max-width: 1050px) {
    right: 35px;
  }
  @media screen and (max-width: 800px) {
    right: 15px;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
  cursor: pointer;
`;


const Pseudo = (props) => {
  function scrollToRef(ref) {
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  }

  function getPseudo(){
    let myPseudo = "";
    let tab = MyPseudo.name.split(' ');
    for(let i = 0; i < tab.length; i++){
      myPseudo += tab[i][0].toUpperCase();
    }
    return myPseudo;
  }
  return (
    <StyledPseudo onClick={() => scrollToRef(props.HeroRef)}>
      {getPseudo()}
    </StyledPseudo>
  );
};

export default Pseudo;