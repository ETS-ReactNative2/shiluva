import '../App.css';
import React, {Component} from 'react';
import {Med_Title, LangDesc, Lang } from '../styles/fonts';
import { LangCard, LangIcon } from '../styles/styles';
import { LangContainer } from '../styles/Containers';

class Language extends Component{
    render(){
        return(
            <div className="Language-Section">
                <LangContainer>
                    <LangCard className="no-pad">
                        <Med_Title>The various languages I speak...</Med_Title>
                    </LangCard>
                    <LangCard>
                        <LangIcon></LangIcon>
                        <Lang>HTML</Lang>
                        <LangDesc justify>I use HTML5 to structure my page layouts. I also work with template languages which have been derived from HTML,  i.e Slim.</LangDesc>
                    </LangCard>
                    <LangCard>
                        <LangIcon></LangIcon>
                        <Lang>CSS</Lang>
                        <LangDesc justify>CSS describes how the HTML layouts appear on the screen, althought, recently I have been working with SASS.</LangDesc>
                    </LangCard>                    
                    <LangCard>
                        <LangIcon></LangIcon>
                        <Lang>JavaScript</Lang>
                        <LangDesc justify>I predominantly work with client-side JS. I use it to manipulate my layouts to make them more interactive. </LangDesc>
                    </LangCard>                    
                    <LangCard>
                        <LangIcon></LangIcon>
                        <Lang>JSX</Lang>
                        <LangDesc justify>I use JSX in React to create page layouts, with this I am able to structure my layouts into smaller re-usable componets. </LangDesc>
                    </LangCard>                    
                    <LangCard>
                        <LangIcon></LangIcon>
                        <Lang>JSX</Lang>
                        <LangDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat eros, congue in</LangDesc>
                    </LangCard>
                </LangContainer>
            </div>
        );
    }
}

export default Language;