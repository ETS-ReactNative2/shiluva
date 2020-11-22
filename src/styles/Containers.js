import styled from 'styled-components';


//header main container
export const LandingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 54vh;
    width: 100%;
    margin-top: 12%;
`;

export const LandingTextHolder = styled.div`
    width: 50%;
    position: relative;
    display: flex;
    height: 54vh;
`;

export const TitleContainer = styled.div`
    position: relative;
    width: 75%;
    margin: auto;
    position: absolute;
    left: 10%;
`;

//about main container
export const AboutContainer = styled(LandingContainer)`
    width: 90%; 
    padding: 1% 5%;
    height: unset;
    margin-top: 10%;
`;

export const AboutTitleHolder = styled.div`
    width: 52%;
`;

export const AboutContentHolder = styled.div`
    width: 50%;
`;

//languages main container
export const LangContainer = styled(AboutContainer)`
    flex-wrap: wrap;
    justify-content: space-between;
`;

//testimonials main container
export const TitleHolder = styled(AboutContainer)`
    margin-top: 5%;
    margin-bottom: -5%;
`;

//projects main container
export const ProjectsContainer = styled(AboutContainer)`
    margin-top: 5%;
`;

export const ProTitleHolder = styled.div`
    width: 25%;
`;

export const ProjectsHolder = styled.div`
    display: flex;
    width: 60%;
    overflow-x: scroll;

`;

export const ProjectCard = styled.div`
    width: 350px;
    height: 350px;
    margin-right: 5%;
    
`;

export const ProjectImage = styled.div`
    width: inherit;
    height: inherit;
    border-radius: 10px;
    background-color: #FF8FCF;
`;

//contact main container
export const ContactContainer = styled(AboutContainer)`
`;

export const ContactDetails = styled.div`
    width: 35%;
`;

export const ContactFormHolder = styled.div`
    width: 65%;
`;


//footer
export const FooterContainer = styled.div`
    margin-top: 3%;
    background-color: #1A1A1A;
    padding: 5%;
`;

export const FooterHolder = styled(AboutContainer)`
    padding: 0;
    margin-top: 0;
    width: 100%;
`;

export const FooterLeft = styled.div`
    width: 50%;
    padding: 0;
    text-align: left;
`;

export const FooterRight = styled.div`
    width: 50%;
`;