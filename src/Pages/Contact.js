import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import bannerImage from "../assets/banner-bg.jpeg";
import './Contact.css';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    requirement: '' // ✅ Added Requirement field
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://yourdomain.com/contact.php', {
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
          message: '',
          requirement: '' // ✅ Reset field
        });
      })
      .catch(error => {
        alert('There was an error sending your message.');
        console.error(error);
      });
  };

  return (
    <>
      {/* Banner */}
      <div className='w-100'>
        <Banner image={bannerImage} heading="Contact" />
      </div>

      {/* Contact Info Cards */}
      <div className="contact-cards">
        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h3>Contact</h3>
          <p>+91 63968 54974</p>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Address</h3>
          <p>Alutuff International</p>
          <p style={{ marginTop: "-8px" }}>Choupla Road, Civil Lines, Bareilly</p>
        </div>

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>sales@alutuff.in</p>
        </div>
      </div>

      {/* Map & Contact Form */}
      <div className="map-container">
        <iframe
          className="testing-google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0468592592423!2d79.4176986!3d28.3408736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a000d368192bd3%3A0xfdade61c7f684155!2sAlutuff%20Panels!5e0!3m2!1sen!2sin!4v1721111234567"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Alutuff Panels Location"
        />

        <div className="contact-form-container">
          <h2 className='page-heading text-center'>Get In Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            {/* ✅ Requirement Field */}
            <div className="form-row">
              <input
                type="text"
                name="requirement"
                placeholder="Requirement (in Sq. Ft.)"
                value={formData.requirement}
                onChange={handleChange}
                style={{ width: '100%' }}
              />
            </div>

            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit" className='pink-button'>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
