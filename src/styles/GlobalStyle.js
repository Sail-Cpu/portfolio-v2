import { createGlobalStyle } from "styled-components";
import Gugi from '../font/Gugi-Regular.ttf';
import theme from "./Theme";


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Gugi';
    src: url('${Gugi}') format('truetype');
  }
  html {
    box-sizing: border-box;
    width: 100%;
    
  }
  body {
    background-color: ${theme.colors.primary};
    min-height: 100vh;
    margin: 0;
    padding: 0;
    color: ${theme.colors.secondary};
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
  h1{
    margin: 0;
  }
  h2{
    margin: 0;
  }
  p{
    margin: 0;
  }
`;

export default GlobalStyle;
