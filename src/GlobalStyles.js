import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html{
  scroll-behavior: smooth;
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }
`;
