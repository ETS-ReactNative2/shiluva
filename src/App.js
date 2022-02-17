import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import { Layout, Header } from "react-mdl";
import Landing from "./components/header";
import { Logo } from "./styles/fonts";
import About from "./components/about";
import Language from "./components/languages";
import Testimonial from "./components/testimonials";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./components/contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout fixedHeader>
          <Header title={<Logo>Shiluva .</Logo>}> </Header>
        </Layout>

        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="contactus" element={<Contact />} />
        </Routes>
      </div>
    );
  }
}

export default App;
