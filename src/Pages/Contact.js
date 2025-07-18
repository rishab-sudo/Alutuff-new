import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../components/Banner';
import bannerImage from '../assets/1400.jpg';
import ContactForm from '../components/ContactForm';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <div className="w-100">
        <Banner image={bannerImage} heading="Contact Us" />
      </div>

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

   <div className="map-container">
  <div className="map-form-wrapper">
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
    <ContactForm />
  </div>
</div>

    </>
  );
};

export default Contact;
