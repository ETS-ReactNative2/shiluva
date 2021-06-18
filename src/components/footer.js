import '../App.css';
import React, {Component} from 'react';
import {Logo} from '../styles/fonts';
import {FooterContainer, FooterLeft, FooterRight} from '../styles/Containers';
import {S_Title, MedBodyText, FooterText, FooterTextLeft, ExtSmIntBodyText} from '../styles/fonts';
import {AboutContainer, AboutTitleHolder, AboutContentHolder, FooterHolder} from '../styles/Containers';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IconContext } from 'react-icons/fa';

class Footer extends Component{
    render(){
        return(
            <div className="footer-section">
                <FooterContainer>
                    <FooterHolder>
                        <FooterLeft>
                            <Logo>Shiluva .</Logo>
                        </FooterLeft>

                        <FooterRight>
                            <FooterText>
                                The information contanined on this site is all true.
                            </FooterText>
                        </FooterRight>
                    </FooterHolder>

                    <FooterHolder margin>
                        <FooterLeft>
                            <ExtSmIntBodyText>&copy; 2020. All rightts reserved.</ExtSmIntBodyText>
                        </FooterLeft>

                        <FooterRight icons>
                            <FaGithub className="FooterIcon"/>
                            <FaInstagram className="FooterIcon"/>
                            <FaTwitter className="FooterIcon"/>
                            <FaFacebook className="FooterIcon"/>
                        </FooterRight>
                    </FooterHolder>
                </FooterContainer>
            </div>
        );
    }
}

export default Footer;