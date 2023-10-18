import { createGlobalStyle } from "styled-components";
import TungstenBold from '../assets/fonts/Tungsten-Bold/TungstenBold.woff';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'TungstenBold';
        src: local('TungstenBold'), local('Tungsten-Bold'), url(${TungstenBold}) format('woff');
    }

    * {
        font-family: 'TungstenBold', 'Arial';
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;