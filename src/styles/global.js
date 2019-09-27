import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  *{
    margin:0px;
    padding:0;
    outline:0;
    box-size:border-box;
  }

  body {
    font-family:"Helvetica", Arial, sans-serif;
    font-size:14px;
    text-rendering:optimizeLegibility !important;
    -webkit-font-smoothing:antialiased !important;
  }
  `;

export default GlobalStyle;
