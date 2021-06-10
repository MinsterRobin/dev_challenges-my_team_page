import styled from "styled-components";
import React from "react";

const TeamMemberCardLayout = styled.div`
    padding-top: ${props => props.index % 3 === 1 ? "80px" : 0};
    justify-self: center;

    max-width: max-content;
    height: max-content;
    display: grid;
    grid-template-columns: minmax(100px, 250px) 15px;
    grid-template-rows: max-content 30px;
    position: relative;
    
    @media(max-width: 992px) {
        padding-top: ${props => props.index % 2 === 1 ? "80px" : 0};
    }
`;

const ProfilePicture = styled.img`
    max-width: 250px;
    width: 100%;
`;

const Name = styled.p`
    font-family: var(--font-family-secondary);
    font-weight: bold;
    font-size: var(--font-size-medium);
`;

const Job = styled.div`
    display: inline-flex;    
    writing-mode: vertical-lr;    
    
    font-family: var(--font-family-primary);
    font-weight: normal;
    font-size: var(--font-size-small);
`;

const TeamMemberCard = (props) => {
    let wtf = props.index % 2 === 1;
    console.log("Index: " + props.index + ", Résultat: " + wtf);
    return(
        <TeamMemberCardLayout index={props.index}>
            <ProfilePicture src={props.src_profile_picture} />
            <Job>{props.role}</Job>
            <Name>{props.name}</Name>
        </TeamMemberCardLayout>
    );
};

export default TeamMemberCard;