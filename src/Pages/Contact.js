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
    message: '',
    requirement: ''  // ✅ Added new field
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
          requirement: '' // ✅ Clear after submit
        });
      })
      .catch(error => {
        alert('There was an error sending your message.');
        console.error(error);
      });
  };

  return (
    <>
      {/* ... banner and contact cards remain unchanged ... */}

      <div className="map-container">
        <iframe
          className="testing-google-map"
          src="https://www.google.com/maps/embed?pb=..."
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Alutuff Panels Location"
        />

        <div className="contact-form-container ">
          <div className=' text-center'>
          <h2 className='page-heading'>Get In Touch</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" name="firstName" placeholder="First Name" required value={formData.firstName} onChange={handleChange} />
              <input type="text" name="lastName" placeholder="Last Name" required value={formData.lastName} onChange={handleChange} />
            </div>

            <div className="form-row">
              <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} />
              <input type="text" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} />
            </div>

            {/* ✅ New Requirement Field */}
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


            <textarea name="message" rows="5" placeholder="Message" required value={formData.message} onChange={handleChange}></textarea>

            <button type="submit" className='pink-button'>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact;
