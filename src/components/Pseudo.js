import React from 'react';
import styled from "styled-components";
import theme from "../styles/Theme";

const StyledPseudo = styled.div`
  position: fixed;
  bottom: 20px;
  right: 50px;
  font-size: 35px;
  color: ${theme.colors.fourth};
`;

const pseudo = "SAIL";

const Pseudo = () => {
    return(
        <StyledPseudo>
            {pseudo}
        </StyledPseudo>
    )
}

export default Pseudo;