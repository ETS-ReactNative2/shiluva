import "../App.css";
import React, { Component } from "react";
import { Logo } from "../styles/fonts";
import { FooterContainer, FooterLeft, FooterRight } from "../styles/Containers";
import {
  S_Title,
  MedBodyText,
  FooterText,
  FooterTextLeft,
  ExtSmIntBodyText,
} from "../styles/fonts";
import {
  AboutContainer,
  AboutTitleHolder,
  AboutContentHolder,
  FooterHolder,
} from "../styles/Containers";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { IconContext } from "react-icons/fa";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer-section">
        <FooterContainer>
          <FooterHolder>
            <FooterLeft>
              <Logo>Shiluva .</Logo>
            </FooterLeft>

            <FooterRight>
              <FooterText>
                The information contanined on this site is true and accurate.
              </FooterText>
            </FooterRight>
          </FooterHolder>

          <FooterHolder margin>
            <FooterLeft>
              <ExtSmIntBodyText>
                <ExtSmIntBodyText>All rightts reserved.</ExtSmIntBodyText>
                &copy; 2022
              </ExtSmIntBodyText>
            </FooterLeft>

            <FooterRight icons>
              <FaGithub
                className="FooterIcon"
                onClick={() =>
                  window.open("https://github.com/shiluva-fortunate")
                }
              />

              <FaInstagram
                className="FooterIcon"
                onClick={() =>
                  window.open("https://www.instagram.com/shiluvafortunate/")
                }
              />
              <FaTwitter
                className="FooterIcon"
                onClick={() =>
                  window.open(
                    "https://twitter.com/shiluva_f?t=KA4oRknJ8N-CLFJNBHkIGg&s=09"
                  )
                }
              />
              <FaFacebook
                className="FooterIcon"
                onClick={() =>
                  window.open("https://www.facebook.com/shiluva.hlungwani.9/")
                }
              />
            </FooterRight>
          </FooterHolder>
        </FooterContainer>
      </div>
    );
  }
}

export default Footer;
