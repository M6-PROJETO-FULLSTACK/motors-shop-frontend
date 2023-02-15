import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body,html{
    width: 100vw;
    height: 100vh;
    scroll-behavior: smooth;
  }


  a{
    text-decoration: none;
  }

  label{
    font-weight: 500;
    color: ${(props) => props.theme.colors.grey1};
    font-size: 14px;
  }

  input::placeholder {
    font-weight: 400;
    color: ${(props) => props.theme.colors.grey3};
    font-size: 16px;
  }
`;
export default GlobalStyle;
