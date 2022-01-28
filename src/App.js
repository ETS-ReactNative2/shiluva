import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import {Layout, Navigation, Drawer, Header} from 'react-mdl';
import Landing from './components/header';
import {Logo, NavItem} from './styles/fonts';
import About from './components/about';
import Language from './components/languages';
import Testimonial from './components/testimonials';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';


class App extends Component {
  render() {
    return (
      <div className="App">      
        <Layout fixedHeader>
            <Header title={<Logo>Shiluva .</Logo>}>
                {/* <Navigation>
                    <a href="#"><NavItem>Home</NavItem></a>
                    <a href="#"><NavItem>About</NavItem></a>
                    <a href="#"><NavItem>Skills</NavItem></a>
                    <a href="#"><NavItem>Work</NavItem></a>
                    <a href="#"><NavItem>Testimonials</NavItem></a>
                    <a href="#"><NavItem>Get In Touch</NavItem></a>
                </Navigation> */}
            </Header>
        </Layout>
        <Landing></Landing>
        <About></About>
        <Language></Language>
        <Projects></Projects>
        <Testimonial></Testimonial>
        <Contact></Contact>
        <Footer></Footer>
      </div>
      
      
    );
  }
}

export default App;
