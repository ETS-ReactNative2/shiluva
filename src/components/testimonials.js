import '../App.css';
import React, {Component} from 'react';
import {Med_Title, IntBodyText, MedIntBodyText, SmIntBodyText} from '../styles/fonts';
import {AboutContainer, TitleHolder} from '../styles/Containers';
import {TestCard, TestTextHolder, IconHolder, TestNameHolder, TestIcon, NameHolder} from '../styles/styles';


class Testimonial extends Component{
    render(){
        return(
            <div className="Testimonial-Section">

                <TitleHolder>
                    <Med_Title>What people have to say...</Med_Title>
                </TitleHolder>
                
                <AboutContainer>
                    <TestCard>
                        <TestTextHolder>
                            <IntBodyText>
                                “Amazing experience i love it a lot. Thanks to the team that dreams
                                come true, great! Really appreciate there approach”
                            </IntBodyText>
                        </TestTextHolder>

                        <TestNameHolder>
                            <IconHolder>
                                <TestIcon></TestIcon>
                            </IconHolder>
                            <NameHolder>
                                <MedIntBodyText>Lassy Chester</MedIntBodyText>
                                <SmIntBodyText>Art Director</SmIntBodyText>
                            </NameHolder>
                        </TestNameHolder>
                        
                    </TestCard>
                    
                    <TestCard>
                        <TestTextHolder>
                            <IntBodyText>
                                “Amazing experience i love it a lot. Thanks to the team that dreams
                                come true, great! Really appreciate there approach”
                            </IntBodyText>
                        </TestTextHolder>

                        <TestNameHolder>
                            <IconHolder>
                                <TestIcon></TestIcon>
                            </IconHolder>
                            <NameHolder>
                                <MedIntBodyText>Lassy Chester</MedIntBodyText>
                                <SmIntBodyText>Art Director</SmIntBodyText>
                            </NameHolder>
                        </TestNameHolder>
                        
                    </TestCard>
                    <TestCard>
                        <TestTextHolder>
                            <IntBodyText>
                                “Amazing experience i love it a lot. Thanks to the team that dreams
                                come true, great! Really appreciate there approach”
                            </IntBodyText>
                        </TestTextHolder>

                        <TestNameHolder>
                            <IconHolder>
                                <TestIcon></TestIcon>
                            </IconHolder>
                            <NameHolder>
                                <MedIntBodyText>Lassy Chester</MedIntBodyText>
                                <SmIntBodyText>Art Director</SmIntBodyText>
                            </NameHolder>
                        </TestNameHolder>
                        
                    </TestCard>
                </AboutContainer>
            </div>
        );
    }
}

export default Testimonial;