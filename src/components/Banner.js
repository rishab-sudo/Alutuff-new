import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css';

const Banner = ({ image, heading, subheading }) => {
  return (
    <Container
      fluid
      className="banner-fluid-section"
      style={{
        backgroundImage: `url(${image})`
      }}
    >
   <div>
    
   </div>
      <Container  className="banner-content-div">
        <div className="banner-text">
          <p className="banner-heading">{heading}</p>
          {/* <p className="banner-subheading">{subheading}</p> */}
        </div>
      </Container>
    </Container>
  );
};

export default Banner;
