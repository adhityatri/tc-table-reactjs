import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-weight: normal;
    }
    html,body{
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
        text-align: left;
    }
`;

export const AppContainer = styled.div`
  padding: 12px;
  display: flex;
  flex: 1;
`;

export default GlobalStyle