import React, { useState } from 'react';
import './LinkTree.css';

const LinkTree = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpen = () => setShowPopup(true);
  const handleClose = () => setShowPopup(false);

  return (
    <>
      <button className="open-popup-btn" onClick={handleOpen}>Explore More</button>

      {showPopup && (
        <div className="popup-overlay">
          <div className='popup-content'>
            <button className="close-btn" onClick={handleClose}>×</button>
            <h2 className="popup-heading">Alutuff Social Links</h2>
            <ul className="social-links">
              <li><a href="https://www.facebook.com/profile.php?id=61578129710470" target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a href="https://www.instagram.com/alutuff.panels/" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://wa.me/916396854974" target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li><a href="https://www.linkedin.com/company/alutuff/" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li ><a href="/projects" target="_blank" rel="noreferrer">Projects Portfolio</a></li>
            <li><a href="mailto:sales@alutuff.in">Email</a></li>  
              <li><a href="tel:+916396854974">Call Us</a></li>


             {/*  <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li> */}

            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default LinkTree;
