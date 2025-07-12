import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <img className="logo" src={require("../assets/footer_logo.png")} alt="Logo" />

        {/* Nav Links */}
        <ul className="nav-links">
          <li><a href="/home">Home</a></li>

          {/* Dropdown About */}
          <li
            className="dropdown"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <span className="dropdown-toggle">About</span>
            <ul className={`dropdown-menu ${aboutDropdownOpen ? 'show' : ''}`}>
              <li><a href="/about">About Us</a></li>
              <li><a href="/established">Established Excellence</a></li>
            </ul>
          </li>

          <li><a href="/product">Product</a></li>
          <li><a href="/projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="/career" onClick={toggleMenu}>Career</a></li>

          {/* Dropdown More */}
          <li
            className="dropdown"
            onMouseEnter={() => setMoreDropdownOpen(true)}
            onMouseLeave={() => setMoreDropdownOpen(false)}
          >
            <span className="dropdown-toggle">More</span>
            <ul className={`dropdown-menu ${moreDropdownOpen ? 'show' : ''}`}>
              <li><a href="/News">News & Events</a></li>
              <li><a href="/testReport">Test Report</a></li> 
              <li><a href="/certificates">Certificates</a></li>
            </ul>
          </li>

 <li><a href="/catalogues">Catalogues</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Side Menu */}
      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <div className="side-menu-header">
          <img className="side-logo" src={require("../assets/footer_logo.png")} alt="Logo" />
        </div>

        <ul className="side-nav-links">
          <li><a href="/home" onClick={toggleMenu}>Home</a></li>

          {/* About in Mobile */}
          <li className="side-dropdown">
            <span className="side-about-title">About</span>
            <ul className="side-dropdown-menu">
              <li><a href="/about" onClick={toggleMenu}>About Us</a></li>
              <li><a href="/established" onClick={toggleMenu}>Established Excellence</a></li>
            </ul>
          </li>

          <li><a href="/product" onClick={toggleMenu}>Product</a></li>

          {/* More in Mobile */}
          <li className="side-dropdown">
            <span className="side-about-title">More</span>
            <ul className="side-dropdown-menu">
              <li><a href="/news" onClick={toggleMenu}>News & Event</a></li>
              <li><a href="/testReport" onClick={toggleMenu}>Test Report</a></li>
            </ul>
          </li>

          <li><a href="/contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
