import '../App.css';
import React, {Component} from 'react';
import {Logo} from '../styles/fonts';
import {FooterContainer, FooterLeft, FooterRight} from '../styles/Containers';
import {S_Title, MedBodyText, FooterText, FooterTextLeft} from '../styles/fonts';
import {AboutContainer, AboutTitleHolder, AboutContentHolder, FooterHolder} from '../styles/Containers';

class Footer extends Component{
    render(){
        return(
            <div className="footer-section">
                <FooterContainer>
                    <FooterHolder>
                        <FooterLeft>
                            <Logo>Shiluva</Logo>
                        </FooterLeft>

                        <FooterRight>
                            <FooterText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat eros,
                                congue in tortor eu, placerat interdum mauris. Pellentesque 
                            </FooterText>
                        </FooterRight>
                    </FooterHolder>

                    <FooterHolder>
                        <FooterLeft>
                            <FooterTextLeft>&copy; 2020. All rightts reserved.</FooterTextLeft>
                        </FooterLeft>

                        <FooterRight>
                            
                        </FooterRight>
                    </FooterHolder>
                </FooterContainer>
            </div>
        );
    }
}

export default Footer;