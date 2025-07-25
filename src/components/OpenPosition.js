import React from 'react';
import './OpenPosition.css';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { Container } from 'react-bootstrap';

const OpenPosition = () => {
  return (
    <section className="career-position-section">
      <Container className="career-position__container">
        <div className='m-auto text-center justify-content-center'>
             <h2 className="page-heading" style={{marginBottom:"0px"}}>We Are Hiring</h2>
             <p style={{fontWeight:"bold", textTransform:"capitalize", marginTop:"-3.5%"}}>"Reputed brand, career growth opportunities, and a great work environment."</p>
        </div>
       
<div style={{marginTop:"5%"}}>
        <p className="career-position__item"><strong>Position:</strong> Executive / Sr. Executive</p>
        <p className="career-position__item"><strong>Industry:</strong> ACP / Plywood / Laminate / Glass / Paint</p>
        <p className="career-position__item"><strong>Experience Required:</strong> 2 - 6 Years</p>

        <p className="career-position__item">
          <strong>Location:</strong><br />
          Guwahati | Patna | Delhi | Chennai | Hubli | Bangalore | Tricity | Jaipur | Noida | Gurugram | Ghaziabad | Lucknow | Western Mumbai | Marine | Central Mumbai
        </p>
</div>
        <div className="career-position__apply-box">
          <h3 className="career-position__apply-heading">How to Apply</h3>
          <div className="career-position__apply-method">
            <FaEnvelope className="career-position__icon" />
            <span>Send your resume to: </span>
            <a href="mailto:vp.hr@alutuff.net">vp.hr@alutuff.net</a>, <a href="mailto:hr@ashokafoam.com">hr@ashokafoam.com</a>
          </div>
          <div className="career-position__apply-method">
            <FaWhatsapp className="career-position__icon" />
            <span>WhatsApp your resume to: </span>
            <a href="https://wa.me/917500251501" target="_blank" rel="noopener noreferrer">7500251501</a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OpenPosition;
