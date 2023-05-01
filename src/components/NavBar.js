import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../styles/Theme";
import NavContent from "../content/Nav";
//Image
import Logo from "../assets/img/logo.png";

const StyledNavBarContainer = styled.div`
  z-index: 100;
  position: fixed;
  top: ${(props) => props.scroll + "px"};
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: inherit;
  width: 70%;
  max-width: 1200px;
  height: 130px;
  font-size: 18px;
  @media screen and (max-width: 1050px) {
    width: 80%;
    font-size: 15px;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
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
  opacity: ${(props) => (props.toTop ? "1" : "0.35")};
  transition: 0.4s ease;
  ul {
    width: 35%;
    display: flex;
    justify-content: space-between;
  }
  li {
    span {
      color: ${theme.colors.third};
    }
    cursor: pointer;
  }
  @media screen and (max-width: 1290px) {
    padding: 0 25px;
    ul {
      width: 42%;
    }
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
  @media screen and (max-width: 1290px) {
    width: 10%;
  }
`;

const NavBar = (props) => {
  const [navTop, setNavTop] = useState(250);
  const [links, setLinks] = useState(NavContent.fr)

    function scrollToRef(ref) {
      window.scrollTo({ top: ref.current.offsetTop - 180, behavior: "smooth" });
    }

    useEffect(() => {
      if (props.scroll) {
        setNavTop(30);
      } else {
        setNavTop(250);
      }
    }, [props.scroll]);

    useEffect(() => {
      if (props.language.name === "fr") setLinks(NavContent.fr);
      if (props.language.name === "en") setLinks(NavContent.en);
    }, [props.language]);

  return (
    <StyledNavBarContainer scroll={navTop}>
      <StyledNavBar toTop={props.toTop}>
        <ul>
          <li onClick={() => scrollToRef(props.MeRef)}>
            <span>01.</span> {links.link1.toUpperCase()}
          </li>
          <li onClick={() => scrollToRef(props.SkillsRef)}>
            <span>02.</span> {links.link2.toUpperCase()}
          </li>
        </ul>
        <StyledLogo>
          <img src={Logo} alt="Logo" />
        </StyledLogo>
        <ul>
          <li onClick={() => scrollToRef(props.ProjectRef)}>
            <span>03.</span> {links.link3.toUpperCase()}
          </li>
          <li onClick={() => scrollToRef(props.ContactRef)}>
            <span>04.</span> {links.link4.toUpperCase()}
          </li>
        </ul>
      </StyledNavBar>
    </StyledNavBarContainer>
  );
};

export default NavBar;
