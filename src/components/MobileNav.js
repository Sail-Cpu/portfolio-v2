import React from "react";
import styled from "styled-components";
import theme from "../styles/Theme";

const StyledMobileNav = styled.nav`
  z-index: 99;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100%;
  min-height: 650px;
  background-color: ${theme.colors.primary};
  box-shadow: -10px -15px 15px rgba(0, 0, 0, 0.25);
  .link-list{
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 75%;
  }
  .pseudo-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 25%;
    font-size: 30px;
    color: ${theme.colors.fourth};
  }
`;

const StyledNavLink = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2{
    color: ${theme.colors.third};
    font-size: 18px;
  }
  h1{
    font-size: 22px;
    margin-top: 10px;
  }
`;

const MobileNav = () => {

    const link1 = "Me Connaitre";
    const link2 = "Skills";
    const link3 = "Mes Projets";
    const link4 = "Me Contacter";

    return(
        <StyledMobileNav>
            <ul className="link-list">
                <StyledNavLink>
                    <h2>01.</h2>
                    <h1>{link1.toUpperCase()}</h1>
                </StyledNavLink>
                <StyledNavLink>
                    <h2>02.</h2>
                    <h1>{link2.toUpperCase()}</h1>
                </StyledNavLink>
                <StyledNavLink>
                    <h2>03.</h2>
                    <h1>{link3.toUpperCase()}</h1>
                </StyledNavLink>
                <StyledNavLink>
                    <h2>04.</h2>
                    <h1>{link4.toUpperCase()}</h1>
                </StyledNavLink>
            </ul>
            <ul className="pseudo-container">
                <h1>SAIL</h1>
            </ul>
        </StyledMobileNav>
    )
};

export default MobileNav;
