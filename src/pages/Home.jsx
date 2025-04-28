// src/pages/Home.jsx
import React from "react";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to Terra Gate Capital</h1>
        <p>Empowering Global Dreams Through Investment, Consulting, and Immigration Solutions.</p>
        <a href="/contact" className="cta-button">Get Started</a>
      </section>

      <section className="intro">
        <h2>Building Bridges to Your Future</h2>
        <p>At Terra Gate Capital, we connect individuals and businesses with strategic opportunities in the United States through investment, expert consulting, and tailored immigration pathways.</p>
      </section>

      <section className="highlight">
        <h2>Explore Our Expertise</h2>
        <div className="highlight-grid">
          <div className="highlight-card">
            <img src="src\assets\investments.jpg" alt="Investments in USA" />
            <h3>Investments in USA</h3>
          </div>
          <div className="highlight-card">
            <img src="/src/assets/businessConsulting.jpg" alt="Business Consulting" />
            <h3>Business Consulting</h3>
          </div>
          <div className="highlight-card">
            <img src="src\assets\immigrationPathway.jpg" alt="Immigration Pathways" />
            <h3>Immigration Pathways</h3>
          </div>
        </div>
      </section>

      <section className="cta">
        <h3>Ready to Grow and Expand?</h3>
        <a href="/services" className="cta-button secondary">Explore Services</a>
      </section>
    </div>
  );
};

export default Home;
