import React from "react";
import styled from "styled-components";
/* Components */
import NavBar from "../components/NavBar";

const HomeContainer = styled.div`
  width: 100%;
`;
const Home = () => {
  return (
    <HomeContainer>
      <NavBar />
    </HomeContainer>
  );
};

export default Home;
