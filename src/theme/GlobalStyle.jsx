import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,400;0,600;0,700;0,800;0,900;1,100&display=swap');


    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%;
    }

    body {
        padding-left: 150px;
        padding-right:150px;
        font-size: 2rem;
        font-family: Barlow, -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
        color: rgb(51, 51, 51);
    }

    .container {
        display:flex;
        flex-direction: row;
    }

    .one-half {
        display:inline-block;
        width:49%;
    }
    .one-half-last {
        display:inline-block;
        width:48%;
        margin-left:2%;
    }
    .underscore {
        text-decoration: underline;
    }

    ul {
        padding: 0px;
        margin: 0px;
    }
    ul, li {
        list-style:none;

        margin-bottom: 20px;
    }
    ul, li a {
        color: rgb(36, 98, 245);
    }
    .ib {
        display: inline-block;
    }
    .p10 {
        padding-top:10px;
    }
`;

export default GlobalStyle;
