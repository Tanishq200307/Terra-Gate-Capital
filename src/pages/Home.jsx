// src/pages/Home.jsx
import React from "react";
import "../styles/home.css";
import investmentsImage from '../assets/investments.jpg';
import consultingImage from '../assets/businessConsulting.jpg';
import immigrationImage from '../assets/immigrationPathway.jpg';


const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-title">
          <h1>Terra Gate Capital</h1>
        </div>
        <p>Empowering Global Dreams Through Investment, Consulting, and Immigration Solutions.</p>
      </section>

      <section className="intro">
        <h2>Building Bridges to Your Future</h2>
        <p>At Terra Gate Capital, we connect individuals and businesses with strategic opportunities in the United States through investment, expert consulting, and tailored immigration pathways.</p>
      </section>

      <section className="highlight">
        <h2>Explore Our Expertise</h2>
        <div className="highlight-grid">
          <div className="highlight-card">
          <img src={investmentsImage} alt="Investments in USA" />
            <h3>Investments in USA</h3>
          </div>
          <div className="highlight-card">
          <img src={consultingImage} alt="Business Consulting" />
            <h3>Business Consulting</h3>
          </div>
          <div className="highlight-card">
          <img src={immigrationImage} alt="Immigration Pathways" />
            <h3>Immigration Pathways</h3>
          </div>
        </div>

        {/* Explore Services button BELOW the 3 services */}
        <div className="highlight-button">
          <a href="/services" className="cta-button secondary fade-in">Explore Services</a>
        </div>
      </section>

      <section className="cta">
        <div className="cta-content">
          <h3 className="fade-in">Ready to Shape Your Global Future?</h3>
          <div className="cta-buttons">
            <a href="/contact" className="cta-button primary fade-in">Get Started</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
