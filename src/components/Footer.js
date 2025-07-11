import React from 'react';
import { Container } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
  return (
    <Container fluid className="footer-section">
      <div className="footer-overlay">
        <div className="footer-text-box">
          <h2>Building Trust with Innovation, Quality Panels, and Global Manufacturing Excellence
</h2>
          <p>
           Alutuff delivers world-class aluminium panel solutions with trusted quality, modern design, and sustainable innovation.
            Backed by global presence and decades of expertise, we serve architects, developers, and industries with durable, fire-rated, and aesthetic 
            cladding solutions across India and beyond.

          </p>
          <button className="footer-button">Become a Dealer</button>
          <div className="footer-links">
            <a href="/home">Home</a>
            <a href="/about">About Us</a>
            <a href="/product">Products</a>
            <a href="/career">Career</a>
            <a href="/contact">Contact</a>
           
          </div>
        </div>

        <div className="footer-bottom">
          <img src={require("../assets/footer_logo.png")} alt="logo" />
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className='copyright-div' style={{width:"100%", height:"50px", backgroundColor:"#000", textAlign:"center"}}> Copyright © 2022 <span style={{color:"pink"}}>Alutuff</span>. All Right Reserved.</div>
    </Container>
  );
};

export default Footer;
