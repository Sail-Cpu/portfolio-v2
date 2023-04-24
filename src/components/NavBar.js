import React from "react";
import styled from "styled-components";
import theme from "../styles/Theme";
//Image
import Logo from "../assets/img/logo.png"

const StyledNavBarContainer = styled.div`
  position: fixed;
  top: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: inherit;
  width: 70%;
  max-width: 1200px;
  height: 130px;
`;

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 45px;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.primary};
  box-shadow: 0 0 26px 18px rgba(0, 0, 0, 0.2);
  ul {
    width: 35%;
    display: flex;
    justify-content: space-between;
  }
  li {
    span {
      color: ${theme.colors.third};
    }
    font-size: 18px;
    cursor: pointer;
  }
`;

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 100%;
  img {
    width: 60px;
  }
`;

const li1 = "ME CONNAITRE";
const li2 = "VALEURS";
const li3 = "PROJETS";
const li4 = "ME CONTACTER";

const NavBar = () => {
  return (
    <StyledNavBarContainer>
      <StyledNavBar>
        <ul>
          <li>
            <span>01.</span> {li1}
          </li>
          <li>
            <span>02.</span> {li2}
          </li>
        </ul>
        <StyledLogo>
          <img src={Logo} alt='Logo'/>
        </StyledLogo>
        <ul>
          <li>
            <span>03.</span> {li3}
          </li>
          <li>
            <span>04.</span> {li4}
          </li>
        </ul>
      </StyledNavBar>
    </StyledNavBarContainer>
  );
};

export default NavBar;