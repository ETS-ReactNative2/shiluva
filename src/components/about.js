import "../App.css";
import React, { Component } from "react";
import { S_Title, MedBodyText } from "../styles/fonts";
import {
  AboutContainer,
  AboutTitleHolder,
  AboutContentHolder,
} from "../styles/Containers";
import Testimonial from "./testimonials";
import Projects from "./projects";
import Footer from "./footer";

class About extends Component {
  render() {
    return (
      <div className="About-Section">
        <AboutContainer>
          <AboutTitleHolder>
            <S_Title>
              I design and code beautiful simple websites, and love what I do.
            </S_Title>
          </AboutTitleHolder>

          <AboutContentHolder>
            <MedBodyText justify smaller className=" ">
              I am a Front-End Developer located in Johannesburg. I have great passion for UI effects, 
              animations and creating intuitive, dynamic user experiences. I am a Well-organised person, 
              a problem solver and an independent employee with high attention to detail. I am interested in 
              the entire frontend spectrum and working on ambitious projects with positive people, 
              however, I am quite excited to be dabbling on some backend work as well. <br></br>
              Since beginning my journey as a freelance developer nearly 6 years ago, 
              I have done remote work for a few organisations, consulted, and collaborated 
              with talented people to create web products for both business and consumer use. This is just a sneak peek of what my geekish innate self can do.
              I create successful responsive websites that are fast, easy to use, and built with best practices. 
              The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium 
              web apps, features, animations, and coding interactive layouts.<br></br>
              I also have full-stack developer experience with popular open-source CMS like WordPress and GoDaddy.
            </MedBodyText>
          </AboutContentHolder>
        </AboutContainer>
        <Testimonial></Testimonial>
        <Projects></Projects>
        <Footer></Footer>
      </div>
    );
  }
}

export default About;
