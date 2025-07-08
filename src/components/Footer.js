import React from 'react';
import { Container } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
  return (
    <Container fluid className="footer-section">
      <div className="footer-overlay">
        <div className="footer-text-box">
          <h2>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h2>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
            Excepteur sint occaecat cupidatat non proident.
          </p>
          <button className="footer-button">Purchase Now</button>
          <div className="footer-links">
            <a href="#">home</a>
            <a href="#">about us</a>
            <a href="#">portfolio</a>
            <a href="#">services</a>
            <a href="#">blog</a>
            <a href="#">contact us</a>
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
