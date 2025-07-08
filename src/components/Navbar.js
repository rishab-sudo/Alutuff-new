import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
  onMouseEnter={() => setDropdownOpen(true)}
  onMouseLeave={() => setDropdownOpen(false)}
>
  <span className="dropdown-toggle">About</span>
  <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
    <li><a href="/about">About Us</a></li>
    <li><a href="/established">Established Exellence</a></li>

  </ul>
</li>

          <li><a href="/product">Product</a></li>
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

          {/* Always visible dropdown in mobile */}
          <li className="side-dropdown">
            <span className="side-about-title">About</span>
            <ul className="side-dropdown-menu">
              <li><a href="/about/company" onClick={toggleMenu}>Company</a></li>
              <li><a href="/about/team" onClick={toggleMenu}>Team</a></li>
              <li><a href="/about/history" onClick={toggleMenu}>History</a></li>
            </ul>
          </li>

          <li><a href="/product" onClick={toggleMenu}>Product</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
