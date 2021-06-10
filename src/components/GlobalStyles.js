import {createGlobalStyle} from "styled-components";
import React from "react";

const GlobalStylesSC = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
    }
    
    html {
        --color-background: white;
        --color-text-primary: black;
        --color-text-secondary: #A9A9A9;
        
        --font-size-small: 12px;
        --font-size-medium: 18px;
        --font-size-large: 36px;
        
        --font-family-primary: 'PT Serif', sans-serif;
        --font-family-secondary: 'Poppins', sans-serif;
        --font-family-tertiary: 'Montserrat', serif;
        
        --padding-page: 40px;
        
        @media (max-width: 768px) {
            --font-size-medium: 14px;
            --font-size-small: 10px;
            
            --padding-page: 20px;
        }
    }
`;

const GlobalStyles = (props) => {
    return(
        <>
            <GlobalStylesSC/>
            {props.children}
        </>
    );
};

export default GlobalStyles;