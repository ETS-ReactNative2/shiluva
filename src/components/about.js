import '../App.css';
import React, {Component} from 'react';
import {S_Title, MedBodyText} from '../styles/fonts';
import {AboutContainer, AboutTitleHolder, AboutContentHolder} from '../styles/Containers';

class About extends Component{
    render(){
        return(
            <div className="About-Section">
                <AboutContainer>
                    <AboutTitleHolder>
                        <S_Title>I design and code beautiful simple websites, and love what I do.</S_Title>
                    </AboutTitleHolder>

                    <AboutContentHolder>
                        <MedBodyText justify smaller>
                        I am assiduous, I bring into life the most incapsulating,
                        creative ideas within the UI Dev space. This is just a sneak 
                        peek of what my geekish innate self can do. My work can be labelled
                        as eccentric but yet poised pertaining to finer details. 
                        </MedBodyText>
                    </AboutContentHolder>
                </AboutContainer>
            </div>
            
        );
    }
}

export default About;