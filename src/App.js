import React from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";

const AppContainer = styled.div`
  width: 100%;
`;

const Main = styled.main`
  width: 70%;
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 1050px){
    width: 80%;
  }
  @media screen and (max-width: 800px){
    width: 85%;
  }
  @media screen and (max-width: 700px){
    width: 90%;
  }
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Main>
        <Home />
      </Main>
    </AppContainer>
  );
}

export default App;
