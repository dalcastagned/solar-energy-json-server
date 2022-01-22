import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Roboto Slab, sans-serif;
    -webkit-tap-highlight-color: transparent;
}

body {
    background: #FAFAFA;
}

`;

export const Container = styled.div`
    min-height: 100vh;
`
export default GlobalStyle