import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import bannerImage from "../assets/banner-bg.jpeg"
import './Contact.css';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://yourdomain.com/contact.php', { // Replace with your PHP hosting path
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(response => response.text())
      .then(data => {
        alert('Your message has been sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch(error => {
        alert('There was an error sending your message.');
        console.error(error);
      });
  };

  return (
    <>
      <div className='w-100' >
              <Banner
                image={bannerImage}
                heading="Certificates "
                subheading="Welcome to our website"
              />
            </div>

      {/* Contact Cards */}
      <div className="contact-cards">
        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h2>Contact</h2>
          <p>+1-202-555-0172</p>
          <p>+1-202-555-0187</p>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h2>Address</h2>
          <p>512 New Hampshire Avenue Northwest</p>
          <p>#100, Washington, United States</p>
        </div>

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h2>Email</h2>
          <p>edificeinterior@Example.com</p>
          <p>edificeinfo@Example.com</p>
        </div>
      </div>

      {/* Google Map and Form */}
      <div className="map-container">
        <iframe
          className="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.0017257064693!2d-77.04948618464818!3d38.89656557957065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7d1a78a7e0f%3A0x8a5298b6c8f2a577!2s512%20New%20Hampshire%20Ave%20NW%2C%20Washington%2C%20DC%2020037%2C%20USA!5e0!3m2!1sen!2sin!4v1658382000000!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>

        <div className="contact-form-container">
          <h2 className='page-heading'>Get In Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" name="firstName" placeholder="First Name" required value={formData.firstName} onChange={handleChange} />
              <input type="text" name="lastName" placeholder="Last Name" required value={formData.lastName} onChange={handleChange} />
            </div>

            <div className="form-row">
              <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} />
              <input type="text" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} />
            </div>

            <textarea name="message" rows="5" placeholder="Message" required value={formData.message} onChange={handleChange}></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact;
