import styled from "styled-components";

const media = {
  mobile: "@media(max-width: 425px)",
};

// button component(s)
export const Button = styled.button`
  background: #c32865;
  border-radius: 5px;
  border: none;
  color: #fff;
  width: 160px;
  height: 52px;
  font-size: 20px;
  font-weight: 600;
  font-family: "Raleway", sans-serif;
  letter-spacing: 0.5px;
  margin-top: 30px;
  line-height: 34px;

  ${media.mobile} {
    width: 140px;
    height: 40px;
    font-size: 15px;
  }
`;

// home-nav-links list
export const HomeNavLinks = styled.ul`
  list-style: none;
  text-decoration: none;
  display: flex;
  margin-top: 10%;
  /* background-color: yellow; */
  justify-content: safe;
  padding: 0;
`;

// home-nav-links list items
export const NavListItem = styled.li`
  width: 50px;
  height: 43px;
  background-color: white;
  background: #c32865;
  border-radius: 47%;
  border: none;
  margin-right: 5%;
  text-align: center;
  transition: all ease-out 0.2s;
  overflow: hidden;
  vertical-align: auto;
  line-height: 35px;
  padding-top: 5px;

  &:hover {
    width: 140px;
    border-radius: 25px;
    padding-bottom: 3px;
  }
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
  background-color: #00c2ba;
  margin-bottom: 5%;
  display: flex;
  justify-content: space-around;
`;

//testimonial card
export const TestCard = styled.div`
  width: 300px;
  height: 300px;
  background-color: #00c2ba;
  padding: 30px 40px;
  border-radius: 6px;
`;

export const TestTextHolder = styled.div`
  min-height: 220px;
  background-color: #00c2ba;
`;

export const TestNameHolder = styled.div`
  width: 100%;
  display: flex;
`;

export const IconHolder = styled.div`
  width: 20%;
  background-color: #00c2ba;
`;

export const TestIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
`;

export const NameHolder = styled.div`
  width: 80%;
`;

// carousel components styles
export const LandingCarouselHolder = styled.div`
  width: 50%;
  height: inherit;
  margin-top: 0%;
  justify-content: center;
  vertical-align: middle;
  display: inherit;

  ${media.mobile} {
    width: 100%;
    position: absolute;
  }
`;

export const Carousel = styled.div`
  position: relative;
  height: inherit;
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow-x: scroll;
  background-color: pink;
`;

export const ImageHolder = styled.div`
  min-width: 300px !important;
`;

export const Image = styled.div`
  width: 265px !important;
  height: 54vh;
  background-color: #ff8fcf;
  border-radius: 10px;
  margin-top: 0 !important;
`;

//input tags
export const Input = styled.input`
  width: 95%;
  color: #ff8fcf;
  padding: 0 20px;
  min-height: 60px;
  margin-bottom: 3%;
  border-radius: 6px;
  border: 1px solid #ff8fcf;
  font-weight: 200;
  font-size: 16px;
  font-family: "Raleway", sans-serif;
  background-color: inherit;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #ff8fcf;
    opacity: 0.8;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #ff8fcf;
    opacity: 0.8;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #ff8fcf;
    opacity: 0.8;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #ff8fcf;
    opacity: 0.8;
  }
`;

export const TextArea = styled.textarea`
  width: 95%;
  color: #ff8fcf;
  padding: 5px 20px;
  margin-bottom: 3%;
  border-radius: 6px;
  border: 1px solid #ff8fcf;
  min-height: 130px;
  font-weight: 200;
  font-size: 16px;
  font-family: "Raleway", sans-serif;
  background-color: inherit;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #ff8fcf;
    opacity: 0.8;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #ff8fcf;
    opacity: 0.8;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #ff8fcf;
    opacity: 0.8;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #ff8fcf;
    opacity: 0.8;
  }
`;

export const Submit = styled(Input)`
  width: 30%;
  color: #fff;
  background: #ff8fcf;
  border-radius: 5px;
  border: none;
  font-size: 20px;
  height: 60px;
  font-weight: 600;
  font-family: "Raleway", sans-serif;
  letter-spacing: 0.5px;
  margin-top: 30px;
  line-height: 34px;
`;

//contact details
export const Contacts = styled.div`
  margin-top: 12%;
`;
