import React, { useState } from 'react';
import './Certificates.css';
import { Container } from 'react-bootstrap';
import bannerImage from "../assets/banner-bg.jpeg"
import Banner from '../components/Banner';
import Testing from '../components/TestingSlider';

const images = [
  {
    thumb: require('../assets/certificates/11.jpeg'),
    full: require('../assets/certificates/full11.jpg'),
  },
  {
    thumb: require('../assets/certificates/22.jpg'),
    full: require('../assets/certificates/full22.jpg'),
  },
  {
    thumb: require('../assets/certificates/33.jpg'),
    full: require('../assets/certificates/full33.jpg'),
  },
  {
    thumb: require('../assets/certificates/44.jpg'),
    full: require('../assets/certificates/full44.jpg'),
  },
];

const Certificates = () => {
  const [popupImg, setPopupImg] = useState(null);

  const openImage = (img) => {
    setPopupImg(img);
  };

  const closePopup = () => {
    setPopupImg(null);
  };

  console.log("hello...!");

  return (
<>
     <div className='w-100' >
              <Banner
                image={bannerImage}
                heading="Certificates "
                subheading="Welcome to our website"
              />
            </div>
    <Container fluid className='certificates-wrapper'>
      <div className='d-flex justify-content-center align-items-center mb-5'>
        <p className='page-heading'>Alutuff - Completion & Appreciation Certificates</p>
      </div>

      <Container>
        <div className='cert-grid'>
          {images.map((imgObj, idx) => (
            <div className='cert-card' key={idx} onClick={() => openImage(imgObj.full)}>
              <img src={imgObj.thumb} alt={`Certificate ${idx + 1}`} />
            </div>
          ))}
        </div>

      {popupImg && (
        <div className='popup-overlay'>
          <span className='close-icon' onClick={closePopup}>×</span>
          <img src={popupImg} alt='Popup' className='popup-image' />
        </div>
      )}
      </Container>
    </Container>

    <div className='w-100'>
<Testing/>
    </div>
    </>
  );
};

export default Certificates;
