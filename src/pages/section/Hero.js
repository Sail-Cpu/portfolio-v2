import React from "react";
import styled from "styled-components";
//Components
import Button from "../../components/Button";

const StyledHeroBanner = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 650px;
  max-height: 750px;
  .hero-content {
    position: relative;
    top: 165px;
    width: 100%;
  }
  h1 {
    font-size: 65px;
  }
  h2 {
    margin-top: 135px;
    font-size: 60px;
    color: rgba(255, 251, 235, 0.8);
  }
  .presentation-container {
    width: 60%;
    font-size: 18px;
    margin-top: 5px;
    color: rgba(255, 251, 235, 0.5);
  }
  button{
    margin-top: 20px;
  }
`;

const name = "Sofiane Lasoa";
const job = "Je suis Developpeur Web";
const presentation =
  "Véritablement passionne par le développement " +
  "web je suis actuellement à la recherche d’un stage " +
  "dans ce domaine";

const Hero = () => {
  return (
    <StyledHeroBanner>
      <div className="hero-content">
        <h1>{name}</h1>
        <h2>{job}</h2>
        <div className="presentation-container">
          <p>{presentation}</p>
        </div>
          <Button label="Mon Cv"/>
      </div>
    </StyledHeroBanner>
  );
};

export default Hero;
