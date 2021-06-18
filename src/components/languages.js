import '../App.css';
import React, {Component} from 'react';
import {Med_Title, LangDesc, Lang } from '../styles/fonts';
import { LangCard, LangIcon } from '../styles/styles';
import { LangContainer } from '../styles/Containers';
import { DiJavascript1, DiReact, DiCssTricks, DiHtml5 } from 'react-icons/di';
import { RiFlutterFill} from 'react-icons/ri';

class Language extends Component{
    render(){
        return(
            <div className="Language-Section">
                <LangContainer>
                    <LangCard className="no-pad">
                        <Med_Title>I specialize in ...</Med_Title>
                    </LangCard>
                    <LangCard>
                        <LangIcon><DiHtml5 className="LangIcons" /></LangIcon>
                        <Lang>Web development</Lang>
                        <LangDesc >I use HTML5 to structure my page layouts. I also work with template languages which have been derived from HTML,  i.e Slim.</LangDesc>
                    </LangCard>
                    <LangCard>
                    <LangIcon><DiCssTricks className="LangIcons" /></LangIcon>
                        <Lang>Mobile Applications</Lang>
                        <LangDesc >CSS describes how the HTML layouts appear on the screen, althought, recently I have been working with SASS.</LangDesc>
                    </LangCard>                    
                    <LangCard>
                    <LangIcon><DiJavascript1 className="LangIcons" /></LangIcon>
                        <Lang>UI/UX Design</Lang>
                        <LangDesc >I predominantly work with client-side JS. I use it to manipulate my layouts to make them more interactive. </LangDesc>
                    </LangCard>                    
                    {/* <LangCard>
                    <LangIcon><DiReact className="LangIcons" /></LangIcon>
                        <Lang>JSX</Lang>
                        <LangDesc >I use JSX in React to create page layouts, with this I am able to structure my layouts into smaller re-usable componets. </LangDesc>
                    </LangCard>                    
                    <LangCard>
                    <LangIcon><RiFlutterFill className="LangIcons" /></LangIcon>
                        <Lang>dart</Lang>
                        <LangDesc>I am also a mobile developer and have recently started dabbling around with Flutter.</LangDesc>
                    </LangCard> */}
                </LangContainer>
            </div>
        );
    }
}

export default Language;