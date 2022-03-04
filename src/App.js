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
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout fixedHeader>
          <Header
            title={
              <Link className="Nav-Links" to="/">
                <Logo>Shiluva .</Logo>
              </Link>
            }
          >
            {" "}
          </Header>
        </Layout>

        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="contact-me" element={<Contact />} />
        </Routes>
      </div>
    );
  }
}

export default App;
