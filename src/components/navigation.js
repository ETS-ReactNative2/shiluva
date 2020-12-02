import '../App.css';
import React, {Component} from 'react';
import styled from 'styled-components';
import {Layout, Navigation, Drawer, Header} from 'react-mdl';


const Logo = styled.p`
    color: #fff;
    font-size: 40px;
    font-style: normal;
    font-weight: 800;
    font-family: Montserrat;
`;


class Nav extends Component{
    render(){
        return(
            <div style={{height: '300px', position: 'relative'}}>
                <Layout fixedHeader>
                    <Header title={<Logo>Shiluva</Logo>}>
                        <Navigation className="nav-margin-top">
                            <a href="#">Home</a>
                            <a href="#About-Section">About</a>
                            <a href="#">Skills</a>
                            <a href="#">Work</a>
                            <a href="#">Testimonials</a>
                            <a href="#">Get In Touch</a>
                        </Navigation>
                    </Header>
                    {/* <Drawer title="Title">
                        <Navigation>
                            <a href="#">Link</a>
                            <a href="#">Link</a>
                            <a href="#">Link</a>
                            <a href="#">Link</a>
                        </Navigation>
                    </Drawer> */}
                </Layout>
            </div>
        );
    }
}

export default Nav;