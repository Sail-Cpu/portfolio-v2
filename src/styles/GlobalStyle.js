import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }
  body{
    background-color: #263159;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }
  ul{
    list-style: none;
    margin: 0;
  }
`;

export default GlobalStyle;
