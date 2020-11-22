import styled from 'styled-components';

export const Logo = styled.p`
  color: #fff;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  font-family: Montserrat;
  margin: 0;
`;

export const Title = styled(Logo)`
  font-size: 46px;
  margin: auto;
  line-height: 64px;
  letter-spacing: 1.7px;
`;

export const S_Title = styled(Title)`
  font-size: 32px;
  color: #FF8FCF;
  line-height: 42px;
  font-weight: 600;
`;

export const Med_Title = styled(S_Title)`
  font-size: 36px;
  line-height: 52px;
  color: #FFF;
  margin: initial;
`;

export const Lang = styled(Med_Title)`
  font-size: 22px;
  line-height: 34px;
  margin-bottom: 5%;
`;

export const Pink_Med_Title = styled(Med_Title)`
  color: #FF8FCF;
`;

export const NavItem = styled.p`
  color: #fff;
  font-weight: 300;
  font-size: 15.5px;
  font-family: Raleway; 
  opacity: 1;
  margin: 0;
`;

export const RBodyText = styled(NavItem)`
  font-size: 18px;
  line-height: 32px;
`;

export const MedBodyText = styled(RBodyText)`
  font-size: 19px;
  text-align: left;
  letter-spacing: 0px;
  
  text-align: ${props => props.justify ? "justify" : "unset"};
  font-size: ${props => props.smaller ? "16px" : "19px"};

`;

export const LangDesc = styled(MedBodyText)`
  color: #00C2BA;
`;

export const IntBodyText = styled(MedBodyText)`
  font-size: 19px;
  text-align: left;
  letter-spacing: 0px;
  opacity: 1;
  margin: 0;
  line-height: 34px;
  color: #fff;
  font-weight: 300;
`;

export const MedIntBodyText = styled(IntBodyText)`
  font-size: 17px;
  line-height: 32px;
`;

export const SmIntBodyText = styled(MedIntBodyText)`
  font-size: 15px;
  line-height: 24px;
`;

export const Contact_Title = styled.p`
  color: #fff;
  font-size: 46px;
  line-height: 64px;
  font-style: normal;
  font-weight: 700;
  font-family: Montserrat;
  margin: 0;
  margin-bottom: 40%;
`;

export const ContType = styled(IntBodyText)`
  color: #FF8FCF;
  font-weight: 700;

`;

export const FooterText = styled(SmIntBodyText)`
  text-align: right;
`;

export const FooterTextLeft = styled(SmIntBodyText)`
  text-align: left;
`;
