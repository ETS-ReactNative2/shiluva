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
                            <Button className="btn-margin-top" onClick={()=> window.scrollTo({ top: 2800, behavior: 'smooth'})}>Say Hi</Button>
                        </TitleContainer>
                    </LandingTextHolder>

                    <LandingCarouselHolder>
                        <Carousel>

                            <ProjectCard header>
                                <ProjectImage src={img2} alt=""></ProjectImage>
                            </ProjectCard>

                            <ProjectCard header>
                                <ProjectImage src={img5} alt=""></ProjectImage>
                            </ProjectCard>

                            <ProjectCard header>
                                <ProjectImage src={img4} alt=""></ProjectImage>
                            </ProjectCard>

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