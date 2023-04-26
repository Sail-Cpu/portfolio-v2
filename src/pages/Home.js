import React, { useEffect, useState } from "react";
import styled from "styled-components";
/* Secton */
import Hero from "./section/Hero";
import Me from "./section/Me";
import NavBar from "../components/NavBar";
import Skills from "./section/Skills";
import SocialMedia from "../components/SocialMedia";
import Pseudo from "../components/Pseudo";
import Project from "./section/Project";
import Contact from "./section/Contact";

const HomeContainer = styled.div`
  width: 100%;
`;

const Home = () => {
  const [scroll, setScroll] = useState(false);
  const [toTop, setToTop] = useState(true);
  const [y, setY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      if (window.scrollY > y) {
        setToTop(false);
      } else {
        setToTop(true);
      }
      setY(scrollTop);
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [y]);

  return (
    <HomeContainer>
      <NavBar scroll={scroll} toTop={toTop} />
      <SocialMedia />
      <Pseudo />
      <Hero scroll={scroll} />
      <Me />
      <Skills />
      <Project />
      <Contact />
    </HomeContainer>
  );
};

export default Home;
