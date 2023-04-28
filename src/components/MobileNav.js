import React from "react";
import styled from "styled-components";
import theme from "../styles/Theme";

const StyledMobileNav = styled.nav`
  z-index: 99;
  position: fixed;
  top: 0;
  right: ${(props) => (props.active ? "0px" : "-350px")};
  transition: 0.5s ease;
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100%;
  min-height: 650px;
  background-color: ${theme.colors.primary};
  box-shadow: -10px -15px 15px rgba(0, 0, 0, 0.25);
  .link-list {
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 75%;
  }
  .pseudo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 25%;
    font-size: 30px;
    color: ${theme.colors.fourth};
    h1{
      cursor: pointer;
    }
  }
  @media screen and (min-width: 800px) {
    display: none;
  }
`;

const StyledNavLink = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: ${theme.colors.third};
    font-size: 18px;
  }
  h1 {
    font-size: 22px;
    margin-top: 10px;
  }
  cursor: pointer;
`;

const MobileNav = (props) => {
  const link1 = "Me Connaitre";
  const link2 = "Skills";
  const link3 = "Mes Projets";
  const link4 = "Me Contacter";

  function scrollToRef(ref) {
    window.scrollTo({ top: ref.current.offsetTop - 130, behavior: "smooth" });
  }

  return (
    <StyledMobileNav active={props.openMobileNav}>
      <ul className="link-list">
        <StyledNavLink onClick={() => scrollToRef(props.MeRef)}>
          <h2>01.</h2>
          <h1>{link1.toUpperCase()}</h1>
        </StyledNavLink>
        <StyledNavLink onClick={() => scrollToRef(props.SkillsRef)}>
          <h2>02.</h2>
          <h1>{link2.toUpperCase()}</h1>
        </StyledNavLink>
        <StyledNavLink onClick={() => scrollToRef(props.ProjectRef)}>
          <h2>03.</h2>
          <h1>{link3.toUpperCase()}</h1>
        </StyledNavLink>
        <StyledNavLink onClick={() => scrollToRef(props.ContactRef)}>
          <h2>04.</h2>
          <h1>{link4.toUpperCase()}</h1>
        </StyledNavLink>
      </ul>
      <ul className="pseudo-container">
        <h1 onClick={() => scrollToRef(props.HeroRef)} >SAIL</h1>
      </ul>
    </StyledMobileNav>
  );
};

export default MobileNav;
