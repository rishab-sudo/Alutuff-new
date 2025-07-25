import React from 'react';
import './Quote.css';
import { FaPhoneAlt } from 'react-icons/fa';
import cataloguePDF from "../assets/pdf/Shade Card (1).pdf"

const QuoteBox = () => {
  return (
  <div
  className="quote-section"
  style={{
    backgroundImage: `url(${require('../assets/Strip-2.jpg')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '45vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px'
  }}
>
      <div className="quote-box">
        <div className="quote-left">
          <h3 style={{fontSize:"2vw",textTransform:"uppercase"}}>Get A Free <br/>
   Quotation Today!</h3>
          <p className='mb-3'>We are here to help. Reach out to us with any questions or inquiries.</p>
<a
style={{marginTop:"15px", textDecoration:"none"}}
  href={cataloguePDF}
  target="_blank"
  rel="noopener noreferrer"
  className="pink-button  catalogue-link"
>
  Download Catalogue
</a>

        </div>
        <div className="quote-right">
          <div className="icon-circle">
            <FaPhoneAlt size={24} color="white" />
          </div>
          <div className="icon-text">
            <span className="say-hello">Say Hello</span>
            <span className="phone-number">+91  63968 54974</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
