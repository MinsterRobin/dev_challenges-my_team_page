import styled from "styled-components";
import React from "react";

const FooterSC = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2em;
`;

const PSC = styled.div`
    font-family: var(--font-family-tertiary);
    font-size: 14px;
    font-weight: 500;
    color: var(--color-text-secondary);
`;

const Footer = () => {
    return(
        <FooterSC>
            <PSC>created by <b>Minster Robin</b> - devChallenges.io</PSC>
        </FooterSC>
    );
};

export default Footer;