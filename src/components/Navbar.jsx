// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/terraGateLogo.jpg';  // <-- import your logo

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo on the left */}
        <Link to="/" className="logo-link">
          <img src={logo} alt="Terra Gate Capital" className="logo" />
        </Link>

        {/* Nav links pushed to the right */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
