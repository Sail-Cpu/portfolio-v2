import { createGlobalStyle } from "styled-components";
import Gugi from '../font/Gugi-Regular.ttf';


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Gugi';
    src: url('${Gugi}') format('truetype');
  }
  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }
  body {
    background-color: #263159;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    color: #FFFBEB;
    font-family: 'Gugi', serif;
  }
  nav{
    list-style: none;
  }
  ul {    
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
