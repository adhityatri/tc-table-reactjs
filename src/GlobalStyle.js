import styled, { createGlobalStyle } from "styled-components";
import Theme from "./Theme";

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
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
        text-align: left;
    }
    .app{
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: ${Theme.colors.backgroundColor};
    }
    input, select{
        border-radius: 0;
        border: 1px solid ${Theme.colors.outlineColor};
        height: 30px;
        background-color: ${Theme.colors.outlineColor};
        padding: 0 4px;
        width: 100%;
    }
`;

export const AppContainer = styled.div`
  padding: ${Theme.padding};
  display: flex;
  height: 500px;
  background-color: white;
  flex-direction:column;
`;

export default GlobalStyle