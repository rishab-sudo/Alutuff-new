import React from 'react';
import { Container } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
  return (
    <Container fluid className="footer-section">
      <div className="footer-overlay">
    <div className="footer-content-wrapper">
  {/* Left Section */}
  <div className="footer-column-wrapper">
    <div className="footer-left">
      <img src={require("../assets/footer_logo.png")} alt="logo" className="footer-logo" />

      <div className="trust-text">
        <h2>Building Trust with Innovation, Quality Panels, and Global Manufacturing Excellence</h2>
        <p>
          Alutuff delivers world-class aluminium panel solutions with trusted quality, modern design, and sustainable innovation.
          Backed by global presence and decades of expertise, we serve architects, developers, and industries with durable, fire-rated, and aesthetic 
          cladding solutions across India and beyond.
        </p>
      </div>
            <div className="social-icons">
        <a href="https://www.facebook.com/profile.php?id=61578129710470"><FaFacebook /></a>
        <a href="https://www.linkedin.com/company/alutuff/"><FaLinkedin /></a>
        <a href="https://www.instagram.com/alutuff.panels/"><FaInstagram /></a>
      </div>

    </div>
  </div>

  {/* Quick Links */}
  
  <div className="footer-column-wrapper">
    <div className="footer-column">
      <div className='col-text-div'>
      <h4>Quick Links</h4>
      <div className="footer-links-column">
        <a href="/home">Home</a>
        <a href="/about">About Us</a>
        <a href="/product">Products</a>
        <a href="/career">Career</a>
        <a href="/contact">Contact</a>
        <a href="/dealer">Become a Dealer</a>
      </div>
      </div>
    </div>
  </div>

  {/* Contact Info */}
  <div className="footer-column-wrapper">
    <div className="footer-column">
       <div className='col-text-div'>
      <h4>Contact Info</h4>
      <div className="footer-contact-info">
        <p><strong>Address:</strong><br />Alutuff International,<br />Choupla Road, Civil Lines, Bareilly.</p>
  <p><strong>Phone:</strong><br />
  <a href="tel:+916396854974">+91  63968 54974</a>
</p>

<p><strong>Email:</strong><br />
  <a href="mailto:sales@alutuff.in">sales@alutuff.in</a>
</p>

      </div>
      </div>
    </div>
  </div>
</div>

      </div>

      <div className='copyright-div'>
        Copyright © 2022 <span style={{ color:"#ea3138"}}>Alutuff</span>. All Right Reserved.
      </div>
    </Container>
  );
};

export default Footer;
