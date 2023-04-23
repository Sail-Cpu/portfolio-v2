import React from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/globalStyle";

const AppContainer = styled.div`
  width: 100%;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
    </AppContainer>
  );
}

export default App;
