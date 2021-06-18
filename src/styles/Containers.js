import styled from 'styled-components';


//header main container
export const LandingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 75vh;
    width: 100%;
    margin-top: 5%;
    /* background-color: green !important; */
`;

export const LandingTextHolder = styled.div`
    width: 80%;
    position: relative;
    display: flex;
    height: 100%;
    /* background-color: yellow !important; */
`;

export const TitleContainer = styled.div`
    position: relative;
    /* width: 75%; */
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

    text-align: ${props => props.justify ? "justify" : "unset"};
`;

export const ProjectCard = styled.div`
    margin-right: 5%;
    width: ${props => props.header ? "270px" : "350px"};
    height: ${props => props.header ? "45vh" : "350px"};
    
`;

export const ProjectImage = styled.img`
    width: inherit;
    height: inherit;
    border-radius: 10px;
    background-color: #FF8FCF;
    object-fit: cover;
    text-align: ${props => props.justify ? "justify" : "unset"};
`;

//contact main container
export const ContactContainer = styled(AboutContainer)`
`;

export const ContactDetails = styled.div`
    width: 35%;
`;

export const ContactFormHolder = styled.div`
    width: 60%;
`;


//footer
export const FooterContainer = styled.div`
    margin-top: 3%;
    background-color: #1A1A1A;
    padding: 5%;
`;

export const FooterHolder = styled(AboutContainer)`
    padding: 0;
    width: 100%;

    margin-top: ${props => props.margin ? "40px" : "0"};
`;

export const FooterLeft = styled.div`
    width: 50%;
    padding: 0;
    text-align: left;
`;

export const FooterRight = styled.div`
    /* width: 50%; */
    width: ${ props => props.icons ? "20%" : "50%"};
    display: ${ props => props.icons ? "flex" : "revert"};
    justify-content: ${ props => props.icons ? "space-around" : "initial"};
`;