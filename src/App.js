import React, {useEffect} from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";
import IntroAnim from "./components/IntroAnim";
import ReactGA from 'react-ga4';

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

export const initGA = () => {
  ReactGA.initialize(process.env.REACT_APP_GA);
}

function App() {

    useEffect(() => {
      initGA();
      ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
    }, [])

    console.log(window.location.pathname);

  return (
    <AppContainer>
      <GlobalStyle />
      <Main>
          <IntroAnim />
        <Home />
      </Main>
    </AppContainer>
  );
}

export default App;
