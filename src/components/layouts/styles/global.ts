import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color : ${({theme}) => theme.body.fgColor};
    background : ${({theme}) => theme.body.bgColor};
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
  .navigator{
        display:flex; 
        padding-bottom:10px;
        margin-bottom:10px;
        border-bottom: 1px solid ${({theme}) => theme.navigator.a};;
        div{
            margin: 0 15px;
            a{
                color : ${({theme}) => theme.navigator.a};
                cursor: pointer;
            }
        }
        
    }
`;

export default GlobalStyle;
