import React, { useEffect, useRef, useState, useContext } from "react";
import { firebaseContext } from "../contexts/firebaseContext";
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
import NavIcon from "../components/NavIcon";
import MobileNav from "../components/MobileNav";
import Language from "../components/Language";

const HomeContainer = styled.div`
  width: 100%;
  animation: 1s opacity ease-in-out;
  @keyframes opacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Home = () => {
  const [scroll, setScroll] = useState(false);
  const [toTop, setToTop] = useState(true);
  const [y, setY] = useState(0);

  const {userData} = useContext(firebaseContext)

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

  const HeroRef = useRef(null);
  const MeRef = useRef(null);
  const SkillsRef = useRef(null);
  const ProjectRef = useRef(null);
  const ContactRef = useRef(null);

  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [language, setLanguage] = useState(null);

  useEffect(() => {
    setLanguage(userData?.language[0]);
  }, [userData])

  return (
    <>
      {
        userData && language &&
          <HomeContainer>
            <>
              <NavIcon
                setOpenMobileNav={setOpenMobileNav}
                openMobileNav={openMobileNav}
              />
              <MobileNav
                setOpenMobileNav={setOpenMobileNav}
                openMobileNav={openMobileNav}
                MeRef={MeRef}
                SkillsRef={SkillsRef}
                ProjectRef={ProjectRef}
                ContactRef={ContactRef}
                HeroRef={HeroRef}
                language={language}
              />
              <NavBar
                scroll={scroll}
                toTop={toTop}
                MeRef={MeRef}
                SkillsRef={SkillsRef}
                ProjectRef={ProjectRef}
                ContactRef={ContactRef}
                language={language}
              />
              <Language setLanguage={setLanguage} language={language} />
              <SocialMedia />
              <Pseudo HeroRef={HeroRef} />
              <Hero position={HeroRef} scroll={scroll} language={language} />
              <Me position={MeRef} language={language}/>
              <Skills userData={userData} position={SkillsRef} language={language} />
              <Project position={ProjectRef} language={language}/>
              <Contact position={ContactRef} language={language}/>
            </>
          </HomeContainer>
      }
    </>
  );
};

export default Home;
