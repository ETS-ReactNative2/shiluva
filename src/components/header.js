import '../App.css';
import React, {Component} from 'react';
import styled from 'styled-components';
import {Title, RBodyText, NavItem} from '../styles/fonts'; 
import {Button, LandingCarouselHolder, Carousel, ImageHolder, Image} from '../styles/styles';
import {LandingContainer, LandingTextHolder, TitleContainer} from '../styles/Containers';
import {ProjectCard, ProjectImage} from '../styles/Containers';
import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.jpg';
import img4 from '../Images/img4.jpg';
import img5 from '../Images/img5.jpg';
import img6 from '../Images/img4.png';
import Typewriter from 'typewriter-effect';


class Landing extends Component{
    
    render(){
        // var app = document.getElementById('app');

        // var typewriter = new Typewriter(app, {
        //     loop: true,
            // delay: 75,
        //   });

        return(
            <div className="Landing">
                <LandingContainer>
                    <LandingTextHolder>
                        <TitleContainer className="head-margin-top">
                            <div className="header-text">
                                <Title>
                                <Title white>Hi! I'm </Title> <Title>Shiluva </Title> <Title white>a developer.</Title>
                                </Title>
    
                                <Title white>
                                    <Typewriter onInit = {(typewriter) => {
                                        typewriter
                                        .typeString("I build web interfaces...")
                                        .pauseFor(2000)
                                        .deleteChars(13)
                                        .typeString("applications...")
                                        .pauseFor(3000)
                                        .deleteChars(19)
                                        .typeString("business portfolios and...")
                                        .pauseFor(3000)
                                        .deleteChars(26)
                                        .typeString("ios and android apps")
                                        .start();
                                    }}/>
                                </Title>

                            </div>

                            <div className="header-sub-text">
                                <RBodyText justify header>I dedicate my
                                    acumen into striving for optimal and efficient growth 
                                    within the ever evolving and competitive IT spectrum 
                                    in order to ensure that your products areof the grandest quality.
                                </RBodyText>
                            </div>
                            

                            <Button className="btn-margin-top" onClick={()=> window.scrollTo({ top: 3800, behavior: 'smooth'})}>Let's Chat</Button>
                        </TitleContainer>
                    </LandingTextHolder>

                    <LandingCarouselHolder>
                        <Carousel>

                            {/* <ProjectCard header>
                                <ProjectImage src={img2} alt=""></ProjectImage>
                            </ProjectCard>

                            <ProjectCard header>
                                <ProjectImage src={img5} alt=""></ProjectImage>
                            </ProjectCard>

                            <ProjectCard header>
                                <ProjectImage src={img4} alt=""></ProjectImage>
                            </ProjectCard> */}

                        </Carousel>
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