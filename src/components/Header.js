import styled from "styled-components";
import React from "react";

const HeaderSC = styled.header`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 2em;
`;

const HeaderTitle = styled.h1`
    min-width: max-content;
    flex: 1;
    font-family: var(--font-family-primary);
    font-weight: bold;
    font-size: var(--font-size-large);
`;

const InfosHeader = styled.div`
    flex: 1;
    min-width: 300px;
    
    display: flex;
    flex-direction: column;
`;

const PHeader= styled.p`
    font-family: var(--font-family-secondary);
    font-weight: 400;
    font-size: var(--font-size-medium);
`;

const H3Header = styled.p`
    font-family: var(--font-family-secondary);
    font-weight: 600;
    font-size: 18px;
`;

const Header = (props) => {
    return(
        <HeaderSC>
            {props.children}
        </HeaderSC>
    );
};

export default Header;
export {HeaderTitle, InfosHeader, PHeader, H3Header};