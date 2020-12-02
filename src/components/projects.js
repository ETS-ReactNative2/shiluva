import '../App.css';
import React, {Component} from 'react';
import {Pink_Med_Title } from '../styles/fonts';
import {ProjectsContainer, TitleHolder, ProTitleHolder, ProjectsHolder, ProjectCard, ProjectImage} from '../styles/Containers';

import img1 from '../Images/img1.jpg';
import netha from '../Images/netha.png';
import chuck from '../Images/chuck.png';
import ikageng from '../Images/ikageng.png';
import lebone from '../Images/lebone.png';
import loqdown from '../Images/loqdown.png';
import todo from '../Images/to-do.png';

class Projects extends Component{

    render(){
        return(
            <div div className="Projects-Section">
                <ProjectsContainer>
                    <ProTitleHolder>
                        <Pink_Med_Title>A few projects I have worked on recently...</Pink_Med_Title>
                        {/* <div style={{backgroundColor: ''}}>
                            <img src="../Icons/arrow-left.svg"/>
                        </div> */}
                    </ProTitleHolder>

                    <ProjectsHolder>

                        <ProjectCard onClick={()=> window.open("https://chuck-joke.web.app", "_blank")}>
                            <ProjectImage src={chuck}></ProjectImage>
                        </ProjectCard>

                        <ProjectCard onClick={()=> window.open("https://www.lebonemedia.co.za/", "_blank")}>
                            <ProjectImage src={lebone}></ProjectImage>
                        </ProjectCard>

                        <ProjectCard onClick={()=> window.open("https://my-to-do-f8d2c.web.app", "_blank")}>
                            <ProjectImage src={todo}></ProjectImage>
                        </ProjectCard>

                        <ProjectCard onClick={()=> window.open("https://www.ikgabo.co.za/", "_blank")}>
                            <ProjectImage src={ikageng} alt=""></ProjectImage>
                        </ProjectCard>

                        <ProjectCard onClick={()=> window.open("http://websitetestlebonemedia.co.za/", "_blank")}>
                            <ProjectImage src={loqdown}></ProjectImage>
                        </ProjectCard>

                        <ProjectCard onClick={()=> window.open("https://netha.co.za/", "_blank")}>
                            <ProjectImage src={netha}></ProjectImage>
                        </ProjectCard>

                    </ProjectsHolder>
                </ProjectsContainer>
            </div>
        );
    }
}

export default Projects;