import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../styles/Theme";
import NavContent from "../content/Nav";

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
    h1 {
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
    font-weight: 100;
  }
  h1 {
    font-size: 22px;
    margin-top: 10px;
    font-weight: 100;
    transition: 0.2s ease-in-out;
  }
  h1:hover {
    color: ${theme.colors.fifth};
  }
  cursor: pointer;
`;

const MobileNav = (props) => {
  const [links, setLinks] = useState(NavContent.fr);

  function scrollToRef(ref) {
    window.scrollTo({ top: ref.current.offsetTop - 130, behavior: "smooth" });
  }

  useEffect(() => {
    if (props.language.name === "fr") setLinks(NavContent.fr);
    if (props.language.name === "en") setLinks(NavContent.en);
  }, [props.language]);

  return (
    <StyledMobileNav active={props.openMobileNav}>
      <ul className="link-list">
        <StyledNavLink onClick={() => scrollToRef(props.MeRef)}>
          <h2>01.</h2>
          <h1>{links.link1.toUpperCase()}</h1>
        </StyledNavLink>
        <StyledNavLink onClick={() => scrollToRef(props.SkillsRef)}>
          <h2>02.</h2>
          <h1>{links.link2.toUpperCase()}</h1>
        </StyledNavLink>
        <StyledNavLink onClick={() => scrollToRef(props.ProjectRef)}>
          <h2>03.</h2>
          <h1>{links.link3.toUpperCase()}</h1>
        </StyledNavLink>
        <StyledNavLink onClick={() => scrollToRef(props.ContactRef)}>
          <h2>04.</h2>
          <h1>{links.link4.toUpperCase()}</h1>
        </StyledNavLink>
      </ul>
      <ul className="pseudo-container">
        <h1 onClick={() => scrollToRef(props.HeroRef)}>SAIL</h1>
      </ul>
    </StyledMobileNav>
  );
};

export default MobileNav;
