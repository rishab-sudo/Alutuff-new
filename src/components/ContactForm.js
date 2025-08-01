import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './ContactForm.css';

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

    const form = new FormData();
    for (let key in formData) {
      form.append(key, formData[key]);
    }

    fetch('https://alutuff.in/contact.php', {
      method: 'POST',
      body: form
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          Swal.fire('Success', 'Your message has been sent successfully!', 'success');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: '',
            requirement: ''
          });
        } else {
          Swal.fire('Error', data.message || 'There was an error sending your message.', 'error');
        }
      })
      .catch(error => {
        Swal.fire('Error', 'Something went wrong. Try again later.', 'error');
        console.error(error);
      });
  };

  return (
    <div className={`contact-form-container ${variant === 'pageEnd' ? 'page-end-form' : ''}`}>
      <h2 className="page-heading text-center">Get In Touch</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <input type="text" name="firstName" placeholder="First Name" required value={formData.firstName} onChange={handleChange} />
          <input type="text" name="lastName" placeholder="Last Name" required value={formData.lastName} onChange={handleChange} />
        </div>
        <div className="form-row">
          <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} />
          <input type="text" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} />
        </div>
        <div className="form-row">
          <input type="text" name="requirement" placeholder="Requirement (in Sq. Ft.)" value={formData.requirement} onChange={handleChange} style={{ width: '100%' }} />
        </div>
        <textarea name="message" rows="5" placeholder="Message" required value={formData.message} onChange={handleChange}></textarea>
        <button type="submit" className="pink-button">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
