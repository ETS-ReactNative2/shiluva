import '../App.css';
import React, {Component} from 'react';
import styled from 'styled-components';
import {Title, RBodyText, NavItem} from '../styles/fonts'; 
import {Button, LandingCarouselHolder, Carousel, ImageHolder, Image} from '../styles/styles';
import {LandingContainer, LandingTextHolder, TitleContainer} from '../styles/Containers';
// import Logo from '../Icons/arrow-left.svg'



class Landing extends Component{
    render(){
        return(
            <div className="Landing">
                <LandingContainer>
                    <LandingTextHolder>
                        <TitleContainer className="head-margin-top">
                            <Title>Hi, I'm Shiluva,<br></br> a Web Developer.</Title><br/>
                            <RBodyText justify>I have pertinaciously invested my dev skills and
                                acumen into striving for optimal and efficient growth 
                                within the ever evolving and competitive IT spectrum.
                            </RBodyText>
                            <Button className="btn-margin-top">Hire me</Button>
                        </TitleContainer>
                    </LandingTextHolder>

                    <LandingCarouselHolder>
                        <Carousel>
                            <ImageHolder>
                                <Image>01</Image>
                            </ImageHolder>
                            <ImageHolder>
                                <Image>02</Image>
                            </ImageHolder>
                            <ImageHolder>
                                <Image>03</Image>
                            </ImageHolder>
                        </Carousel>
                    </LandingCarouselHolder>
                </LandingContainer>

                <div style={{backgroundColor: 'yellow'}}>
                    <img src="../Icons/arrow-left.svg"/>
                </div>
            </div>
        );
    }
}

export default Landing;