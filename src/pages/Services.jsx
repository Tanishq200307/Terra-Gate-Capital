// src/pages/Services.jsx
import React from "react";
import "../styles/services.css";

import investmentsImage from "../assets/usaInvestment.jpg";
import businessConsultingImage from "../assets/business101.jpg";
import immigrationPathwaysImage from "../assets/immigration101.jpg";

import businessImmigrationImage from "../assets/businessimmigration.jpg";
import fundingImage from "../assets/funding.jpg";
import realestateImage from "../assets/realestate.jpg";
import daycareImage from "../assets/daycare.jpg";
import seniorImage from "../assets/senior.jpg";
import nailsImage from "../assets/nails.jpg";
import immigrationUSA from "../assets/usa1.jpg";
import eb5 from "../assets/eb5.jpg";
import e2 from "../assets/E-2visa101.png";
import l1 from "../assets/US-L-1-Visa.jpg";



const Services = () => {
  return (
    <div className="services-page">
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>Strategic Investment, Expert Consulting, and Tailored Immigration Solutions for a Global Future.</p>
      </section>

      <section className="main-services">
        <div className="service">
          <img src={investmentsImage} alt="Investments in USA" />
          <h2>Investments in USA</h2>
          <div className="sub-services">
            <div className="sub-service">
              <img src={businessImmigrationImage} alt="Pure Investment" />
              <h3>Pure Investment (In USA)</h3>
            </div>
            <div className="sub-service">
              <img src={immigrationPathwaysImage} alt="Investment for Immigration" />
              <h3>Investments for Immigration</h3>
            </div>
            <div className="sub-service">
              <img src={fundingImage} alt="Funding for Projects" />
              <h3>Funding for Projects</h3>
            </div>
          </div>
        </div>

        <div className="service">
          <img src={businessConsultingImage} alt="Business Consulting" />
          <h2>Business Consulting</h2>
          <div className="sub-services">
            <div className="sub-service">
              <img src={realestateImage} alt="Real Estate" />
              <h3>Real Estate</h3>
            </div>
            <div className="sub-service">
              <img src={daycareImage} alt="Day Care" />
              <h3>Day Care</h3>
            </div>
            <div className="sub-service">
              <img src={seniorImage} alt="Senior Living" />
              <h3>Senior Living</h3>
            </div>
            <div className="sub-service">
              <img src={nailsImage} alt="Nails Franchise" />
              <h3>Nails Franchise</h3>
            </div>
          </div>
        </div>

        <div className="service">
          <img src={immigrationUSA} alt="Immigration Pathways" />
          <h2>Immigration Pathways</h2>
          <div className="sub-services">
            <div className="sub-service">
            <img src={eb5} alt="Senior Living" />
              <h3>EB-5 Visa Program</h3>

            </div>
            <div className="sub-service">
            <img src={l1} alt="Senior Living" />
              <h3>L-1 Visa</h3>
 
            </div>
            <div className="sub-service">
            <img src={e2} alt="Senior Living" />
              <h3>E-2 Visa</h3>
       
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
