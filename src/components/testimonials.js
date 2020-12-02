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
                    <Med_Title>What my team mates have to say...</Med_Title>
                </TitleHolder>
                
                <AboutContainer>
                    <TestCard>
                        <TestTextHolder>
                            <IntBodyText>
                                “You have an amazing eye for design. You accurately capture
                                every element I design. I'm glad to be working with you.”
                            </IntBodyText>
                        </TestTextHolder>

                        <TestNameHolder>
                            <IconHolder>
                                <TestIcon></TestIcon>
                            </IconHolder>
                            <NameHolder>
                                <MedIntBodyText>Kirsten Fraser</MedIntBodyText>
                                <SmIntBodyText>Designer</SmIntBodyText>
                            </NameHolder>
                        </TestNameHolder>
                        
                    </TestCard>
                    
                    <TestCard>
                        <TestTextHolder>
                            <IntBodyText>
                                “Shiluva is a good team player, a fast learner and has a good eye for design.
                                I enjoyed working with her, she’s a hard worker and always pays attention to detail .”
                            </IntBodyText>
                        </TestTextHolder>

                        <TestNameHolder>
                            <IconHolder>
                                <TestIcon></TestIcon>
                            </IconHolder>
                            <NameHolder>
                                <MedIntBodyText>Danny Simfukwe</MedIntBodyText>
                                <SmIntBodyText>Senior Developer</SmIntBodyText>
                            </NameHolder>
                        </TestNameHolder>
                        
                    </TestCard>
                    <TestCard>
                        <TestTextHolder>
                            <IntBodyText>
                                “wow! Shiluva writes efficient clean code. It was great working with her”
                            </IntBodyText>
                        </TestTextHolder>

                        <TestNameHolder>
                            <IconHolder>
                                <TestIcon></TestIcon>
                            </IconHolder>
                            <NameHolder>
                                <MedIntBodyText>Lwazi Nontuma</MedIntBodyText>
                                <SmIntBodyText>Designer</SmIntBodyText>
                            </NameHolder>
                        </TestNameHolder>
                        
                    </TestCard>
                </AboutContainer>
            </div>
        );
    }
}

export default Testimonial;