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
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28199.713591104975!2d79.4075732!3d28.3408507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a000d368192bd3%3A0xfdade61c7f684155!2sAlutuff%20Panels!5e0!3m2!1sen!2sin!4v1721275048813!5m2!1sen!2sin"
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
