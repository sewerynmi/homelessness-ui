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
        
        font-size: 2rem;
        font-family: Barlow, -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
        color: rgb(51, 51, 51);
        background-color:#000;
    }

    .content, .main-header {
        padding-left: 50px;
        padding-right:150px;
        max-width: 80%;
        min-width: 90%;
        margin: 0px auto;
       
    }

    .content {
        background-color:#fff;
        padding-bottom: 80px;
    }

    .container {
        display:flex;
        flex-direction: row;
    }

    .main-header {
        color: #fff;
        padding-left: 0px;
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

    .arrow {
        font-weight:600;
        font-size:50%;
        position: absolute;
        top: 0px;
    }

    .arrow.arrow-up {
        color: red;
    }
    
    .arrow.arrow-drop {
        color: green;
    }
    
`;

export default GlobalStyle;
