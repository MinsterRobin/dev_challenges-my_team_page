import React from "react";
import LayoutSC from "./LayoutSC";
import Footer from "../../components/Footer";
import Header, {H3Header, HeaderTitle, InfosHeader, PHeader} from "../../components/Header";
import styled from "styled-components";
import TeamMemberCard from "./TeamMemberCard";
import TeamMembers from "./data";

const GridLayoutSC = styled.div`
    justify-items: auto;
    align-content: center;
    flex: 1;
    height: 100%;
    //background-color: red; //DEBUG
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    column-gap: 1em;
    //row-gap: 90px;
    
    div {
        //background-color: blue; //DEBUG
        width: 100%;
    }
    
    @media (max-width: 992px) {
        grid-template-columns: repeat(2, minmax(155px, 1fr));
    }
`;

function Index() {
    return (
        <LayoutSC>

            <Header>
                <HeaderTitle>The creative crew</HeaderTitle>
                <InfosHeader>
                    <H3Header>WHO WE ARE</H3Header>
                    <PHeader>We are team of creatively diverse. driven. innovative individuals working in various locations from the world.</PHeader>
                </InfosHeader>
            </Header>

            <GridLayoutSC>
                {TeamMembers.map((Member, index) => {
                    return(
                        <TeamMemberCard
                            key={index}
                            index={index}
                            name={Member.name}
                            role={Member.role}
                            src_profile_picture={Member.pp}
                        />
                    );
                })}
            </GridLayoutSC>

            <Footer/>
        </LayoutSC>
    );
}

export default Index;
