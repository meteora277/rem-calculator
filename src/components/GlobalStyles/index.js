import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body{
        display:flex;
        justify-content: center;
        background: black;
        color:white;
        font-family: Arial;
    }
`;
export default GlobalStyle;
