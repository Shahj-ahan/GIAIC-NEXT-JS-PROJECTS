'use client'
import Footer from "../components/Footer/page";
import Header from "../components/Header/page";
import React from 'react';


const Home = () => {
  return (
    <div>
      
        <Header />
      
        <div className="hero">
        <div className="content">
          <h1 className="title">Welcome to Auction Table</h1>
          <p className="subtitle">
            Buy, sell, and discover amazing deals in one place.
          </p>
          <a href="#" className="ctaButton">
            Get Started
          </a>
        </div>
      </div>
        <Footer/>
    </div>


                
  );
};

export default Home;