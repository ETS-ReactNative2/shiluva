import '../App.css';
import React, {Component} from 'react';
import {Pink_Med_Title } from '../styles/fonts';
import {ProjectsContainer, TitleHolder, ProTitleHolder, ProjectsHolder, ProjectCard, ProjectImage} from '../styles/Containers';

class Projects extends Component{
    render(){
        return(
            <div div className="Projects-Section">
                <ProjectsContainer>
                    <ProTitleHolder>
                        <Pink_Med_Title>A few projects I have worked on recently...</Pink_Med_Title>
                        <div style={{backgroundColor: ''}}>
                            <img src="../Icons/arrow-left.svg"/>
                        </div>
                    </ProTitleHolder>

                    <ProjectsHolder>
                        <ProjectCard>
                            <ProjectImage></ProjectImage>
                        </ProjectCard>

                        <ProjectCard>
                            <ProjectImage></ProjectImage>
                        </ProjectCard>

                        <ProjectCard>
                            <ProjectImage></ProjectImage>
                        </ProjectCard>
                    </ProjectsHolder>
                </ProjectsContainer>
            </div>
        );
    }
}

export default Projects;