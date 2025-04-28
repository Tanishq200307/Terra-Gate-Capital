import React from "react";
import "../styles/about.css";
import teamImage from "../assets/team.jpg";  // Team image
import businessImage from "../assets/business.jpg";  // Business image

const About = () => {
  return (
    <div className="about-page">
      {/* About Us Section */}
      <h1>About Us</h1>
      <div className="content">
        <p>
          We are passionate about providing top-tier immigration services, helping individuals and businesses navigate the complex landscape of immigration pathways.
        </p>
        <h2>Our Mission</h2>
        <p>
          At our company, we are committed to ensuring smooth immigration transitions for individuals, entrepreneurs, and companies. We believe in delivering efficient, professional, and customized immigration solutions tailored to your needs.
        </p>
        <h2>What We Offer</h2>
        <ul>
          <li>Comprehensive business immigration consulting.</li>
          <li>Strategic investment opportunities to enhance immigration pathways.</li>
          <li>Consulting for various industries, including real estate, childcare, and senior services.</li>
        </ul>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <div className="team-text">
          <h2>Meet Our Team</h2>
          <p>
            Our team of dedicated professionals brings years of expertise in immigration law, business consulting, and investment strategies. We pride ourselves on our personalized approach to helping clients achieve their immigration and business goals.
          </p>
        </div>
        <img src={teamImage} alt="Our Team" />
      </div>

      {/* Business Image Section */}
      <div className="team-section">
        <img src={businessImage} alt="Business Consultation" />
        <div className="team-text">
          <h2>Business Consulting</h2>
          <p>
            We specialize in offering guidance to entrepreneurs looking to invest or establish businesses in a new country. Our expert consultants provide insights into market conditions, regulatory environments, and investment opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
