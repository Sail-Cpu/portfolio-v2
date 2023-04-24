import React from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

const AppContainer = styled.div`
  width: 100%;
`;

const Main = styled.main`
  width: 70%;
  max-width: 1200px;
  margin: 0 auto;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Main>
        <NavBar />
        <Home />
      </Main>
    </AppContainer>
  );
}

export default App;
