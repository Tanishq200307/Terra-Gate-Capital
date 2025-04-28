// src/pages/Contact.jsx
import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <div className="contact-container">
        <div className="contact-info">
          <p><strong>Email:</strong> contact@immigrationservices.com</p>
          <p><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p><strong>Address:</strong> 123 Main Street, City, Country</p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
