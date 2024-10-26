import React, {useContext} from "react";
import { firebaseContext } from "../contexts/firebaseContext";
import styled from "styled-components";
import theme from "../styles/Theme";

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

  const {userData} = useContext(firebaseContext);

  return (
    <StyledPseudo onClick={() => scrollToRef(props.HeroRef)}>
      {userData?.pseudo}
    </StyledPseudo>
  );
};

export default Pseudo;