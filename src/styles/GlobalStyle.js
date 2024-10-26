import { createGlobalStyle } from "styled-components";
import Gugi from "../font/Gugi-Regular.ttf";
import theme from "./Theme";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Gugi';
    src: url('${Gugi}') format('truetype');
  }
  *{
    box-sizing: border-box;
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
  a{
    text-decoration: none;
    color: ${theme.colors.secondary};
  }
  p{
    margin: 0;
  }
  ::-webkit-scrollbar {
    width: 7px;
    
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.fourth};
    border-radius: 20px;
  }
`;

export default GlobalStyle;
