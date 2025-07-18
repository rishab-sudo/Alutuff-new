import React, { useState } from 'react';
import './ContactForm.css'; // ✅ Extract form styles here (optional)

const ContactForm = ({ variant }) => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    requirement: ''
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
      .then(() => {
        alert('Your message has been sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
          requirement: ''
        });
      })
      .catch(error => {
        alert('There was an error sending your message.');
        console.error(error);
      });
  };

  return (
 <div className={`contact-form-container ${variant === 'pageEnd' ? 'page-end-form' : ''}`}>

      <h2 className="page-heading text-center">Get In Touch</h2>
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

        <button type="submit" className="pink-button">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
