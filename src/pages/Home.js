import React from "react";
import styled from "styled-components";
/* Components */
import Hero from "./section/Hero";

const HomeContainer = styled.div`
  width: 100%;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
    </HomeContainer>
  );
};

export default Home;
