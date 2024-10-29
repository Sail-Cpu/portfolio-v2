import React, { useContext, useEffect, useState } from "react";
import { firebaseContext } from "../../contexts/firebaseContext";
import styled from "styled-components";
//Components
import Button from "../../components/Button";
import theme from "../../styles/Theme";
import useContent from "../../hook/useContent";

const StyledHeroBanner = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 650px;
  max-height: 1000px;
  .hero-content {
    position: relative;
    top: ${(props) => props.scrollHero + "px"};
    width: 100%;
    transition: 0.4s ease;
  }
  h1 {
    font-size: 65px;
  }
  h2 {
    margin-top: ${(props) => props.scrollName + "px"};
    transition: 0.4s ease;
    font-size: 60px;
    color: rgba(255, 251, 235, 0.8);
  }
  .presentation-container {
    width: 60%;
    font-size: 20px;
    margin: 5px 0 20px 0;
    color: ${theme.colors.fourth};
    font-family: monospace;
  }
  @media screen and (max-width: 1050px) {
    .hero-content {
      top: ${(props) => props.scrollHero + 10 + "px"};
    }
    .presentation-container {
      width: 100%;
    }
    h1 {
      font-size: 55px;
    }
    h2 {
      margin-top: ${(props) => props.scrollName + 10 + "px"};
      font-size: 50px;
    }
  }
  @media screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    .hero-content {
      top: 0;
    }
    h1 {
      font-size: 8vw;
    }
    h2 {
      margin-top: 0;
      font-size: 6vw;
    }
    .presentation-container {
      margin: 10px 0 20px 0;
      font-size: 16px;
    }
  }
  @media screen and (max-width: 500px) {
    h1 {
      font-size: 40px;
    }
    h2 {
      margin-top: 0;
      font-size: 30px;
    }
  }
`;

const Hero = (props) => {
  const [heroTop, setHeroTop] = useState(165);
  const [jobTop, setJobTop] = useState(135);

  const {userData} = useContext(firebaseContext);
  const content = useContent(userData, "hero");

  useEffect(() => {
    if (props.scroll) {
      setHeroTop(320);
      setJobTop(10);
    } else {
      setHeroTop(165);
      setJobTop(135);
    }
  }, [props.scroll]);

  return (
    <StyledHeroBanner
      ref={props.position}
      scrollHero={heroTop}
      scrollName={jobTop}
    >
      {content &&
        <div className="hero-content">
          <h1>{content.name}</h1>
          <h2>{content.job}</h2>
          <div className="presentation-container">
            <p>{content.presentation}</p>
          </div>
          <a target="_blank" href={content.buttonLink} rel="noreferrer">
            <Button label={content.button} />
          </a>
      </div>
      }
    </StyledHeroBanner>
  );
};

export default Hero;
