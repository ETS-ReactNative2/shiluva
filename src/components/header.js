import "../App.css";
import React, { Component } from "react";
import styled from "styled-components";
import { Title, RBodyText, NavItem } from "../styles/fonts";
import {
  Button,
  LandingCarouselHolder,
  Carousel,
  ImageHolder,
  Image,
  HomeNavLinks,
  NavListItem,
} from "../styles/styles";
import {
  LandingContainer,
  LandingTextHolder,
  TitleContainer,
} from "../styles/Containers";
import { ProjectCard, ProjectImage } from "../styles/Containers";
import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.jpg";
import img3 from "../Images/img3.jpg";
import img4 from "../Images/img4.jpg";
import img5 from "../Images/img5.jpg";
import img6 from "../Images/img4.png";
import Typewriter from "typewriter-effect";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./about";
import ContactUs from "./contact";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import { Home, Info, Send, Mail } from "react-feather";
import "../styles/cat.css";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <LandingContainer>
          <LandingTextHolder>
            <TitleContainer className="head-margin-top">
              <div className="header-text">
                <Title>
                  <Title white>Hi! I'm </Title> <Title>Shiluva </Title>{" "}
                  <Title white>a developer.</Title>
                </Title>

                <Title white>
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("I build web interfaces...")
                        .pauseFor(2000)
                        .deleteChars(13)
                        .typeString("applications...")
                        .pauseFor(3000)
                        .deleteChars(19)
                        .typeString("business portfolios & ...")
                        .pauseFor(3000)
                        .deleteChars(25)
                        .typeString("ios and android apps")
                        .start();
                    }}
                  />
                </Title>
              </div>

              <div className="header-sub-text">
                <RBodyText justify header>
                  I dedicate my acumen into striving for optimal and efficient
                  growth within the ever evolving and competitive IT spectrum in
                  order to ensure the grandest quality software solutions.
                </RBodyText>
              </div>

              <HomeNavLinks className="Home-Nav-Links">
                <NavListItem>
                  <span className="icon">
                    <Home
                      className="icon"
                      color="#fff"
                      size="22"
                      strokeWidth="2"
                    />
                  </span>
                  <Link className="Nav-Links" to="/">
                    <span className="Nav-Link-Text">Home</span>
                  </Link>
                </NavListItem>

                <NavListItem>
                  <span className="icon">
                    <Info
                      className="icon"
                      color="#fff"
                      size="24"
                      strokeWidth="2"
                    />
                  </span>
                  <Link className="Nav-Links" to="/about">
                    <span className="Nav-Link-Text">About</span>
                  </Link>
                </NavListItem>

                <NavListItem>
                  <span className="icon">
                    <Mail
                      className="icon"
                      color="#fff"
                      size="24"
                      strokeWidth="2"
                    />
                  </span>
                  <Link className="Nav-Links" to="/contact-me">
                    <span className="Nav-Link-Text">Say Hi!</span>
                  </Link>
                </NavListItem>
              </HomeNavLinks>
            </TitleContainer>
          </LandingTextHolder>

          <LandingCarouselHolder>
            <div class="cat">
              <div class="ear ear--left"></div>
              <div class="ear ear--right"></div>
              <div class="face">
                <div class="eye eye--left">
                  <div class="eye-pupil"></div>
                </div>
                <div class="eye eye--right">
                  <div class="eye-pupil"></div>
                </div>
                <div class="muzzle"></div>
              </div>
            </div>
          </LandingCarouselHolder>
        </LandingContainer>

        {/* <div style={{backgroundColor: 'yellow'}}>
                    <img src="../Icons/arrow-left.svg"/>
                </div> */}
      </div>
    );
  }
}

export default Landing;
