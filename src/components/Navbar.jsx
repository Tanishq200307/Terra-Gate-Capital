// src/components/Navbar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/terraGateLogo.jpg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo-link">
        <div className="logo">Terra Gate Capital</div>
        </Link>

    
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>

        {/* Hamburger for mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <FaTimes className="close-btn" onClick={closeMenu} />
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
