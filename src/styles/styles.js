import styled from 'styled-components';


// button component(s)
export const Button = styled.button`
    background: #FF8FCF;
    border-radius: 5px;
    border: none;
    color: #fff;
    width: 160px;
    height: 60px;
    font-size: 20px;
    font-weight: 600;
    font-family: Raleway; 
    letter-spacing: 0.5px;
    margin-top: 30px;
    line-height: 34px;
`;


//language card
export const LangCard = styled.div`
    width: 300px;
    height: 250px;
    margin-bottom: 7%;
    padding: 0 50px;
`;

export const LangIcon = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #00C2BA;
    margin-bottom: 5%;
`;


//testimonial card
export const TestCard = styled.div`
    width: 300px;
    height: 300px;
    background-color: #00C2BA;
    padding: 30px 40px;
    border-radius: 6px;
`;

export const TestTextHolder = styled.div`
    min-height: 220px;
    background-color: #00C2BA;
`;

export const TestNameHolder = styled.div`
    width: 100%;
    display: flex;
`;

export const IconHolder = styled.div`
    width: 20%;
    background-color: #00C2BA;
`;

export const TestIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
`;

export const NameHolder = styled.div`
    width: 80%;
`;



// carousel components styles
export const LandingCarouselHolder = styled.div`
    width: 50%;
    height: inherit;
`;

export const Carousel = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    overflow-x: scroll;
`;


export const ImageHolder = styled.div`
    min-width: 300px !important; 
`;

export const Image = styled.div`
    width: 265px !important;
    height: 54vh;
    background-color: #FF8FCF;
    border-radius: 10px;
    margin-top: 0 !important;
`;


//input tags
export const Input = styled.input`
    width: 95%;
    color: #FF8FCF;
    padding: 0 20px;
    min-height: 60px;
    margin-bottom: 3%;
    border-radius: 6px;
    border: 1px solid #FF8FCF;

    font-weight: 400;
    font-size: 16px;
    font-family: Raleway; 
    background-color: inherit;
`;

export const TextArea = styled.textarea`
    width: 95%;
    color: #FF8FCF;
    padding: 5px 20px;
    margin-bottom: 3%;
    border-radius: 6px;
    border: 1px solid #FF8FCF;
    min-height: 130px;

    font-weight: 400;
    font-size: 16px;
    font-family: Raleway;
    background-color: inherit;
`;

export const Submit = styled(Input)`
    width: 30%;
    color: #fff;
    background: #FF8FCF;
    border-radius: 5px;
    border: none;
    font-size: 20px;
`;


//contact details
export const Contacts = styled.div`
    margin-top: 12%;
`;





