import React from 'react';
import Header from '../components/Header/Header';
import Footer  from "../components/Header/Footer";
const About = () => {
    return (
      <div>
          <Header></Header>
<div className="hero">
        <div className="content">
          <h1 className="title">Welcome to About Page</h1>
          <p className="subtitle">
            This About Page!
          </p>
          <a href="#" className="ctaButton">
            Get Started
          </a>
        </div>
      </div>


                <Footer></Footer>

      </div>
    );
  };
  
  export default About;
  