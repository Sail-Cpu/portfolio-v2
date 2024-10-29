import React, { useEffect, useState, useContext } from "react";
import { firebaseContext } from "../contexts/firebaseContext";
import useContent from "../hook/useContent";
import styled from "styled-components";
import theme from "../styles/Theme";

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
    display: flex; 
    .nb{
      color: ${theme.colors.third};
      margin-right: 5px;
    } 
    .linkname{
      transition: 0.2s ease-in-out;
    }
    cursor: pointer;
  }
  li:hover{
    .linkname{
      color: ${theme.colors.fifth};
    }
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
    width: 50px;
  }
  @media screen and (max-width: 1290px) {
    width: 10%;
  }
`;

const path = "/uploads/img"

const NavBar = (props) => {
  const [navTop, setNavTop] = useState(250);

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

    const {userData} = useContext(firebaseContext);
    const links = useContent(userData, "nav")

  return (
    <StyledNavBarContainer scroll={navTop}>
      {
        links &&
          <StyledNavBar toTop={props.toTop}>
            <ul>
              <li onClick={() => scrollToRef(props.MeRef)}>
                <span className="nb">01.</span> <span className="linkname">{links.link1.toUpperCase()}</span>
              </li>
              <li onClick={() => scrollToRef(props.SkillsRef)}>
                <span className="nb">02.</span> <span className="linkname">{links.link2.toUpperCase()}</span>
              </li>
            </ul>
            <StyledLogo>
              <img src={`${path}/logo.png`} alt="Logo" />
            </StyledLogo>
            <ul>
              <li onClick={() => scrollToRef(props.ProjectRef)}>
                <span className="nb">03.</span> <span className="linkname">{links.link3.toUpperCase()}</span>
              </li>
              <li onClick={() => scrollToRef(props.ContactRef)}>
                <span className="nb">04.</span> <span className="linkname">{links.link4.toUpperCase()}</span>
              </li>
            </ul>
          </StyledNavBar>
      }
    </StyledNavBarContainer>
  );
};

export default NavBar;
