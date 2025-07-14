import React from 'react';
import { Container } from 'react-bootstrap';
import "./Separate.css";

const Separate = () => {
  return (
    <Container>
      <div className='separate-section-content'>
        <div className="text-content">
          <p className='page-text'>
            Alutuff stands as a trusted name for Aluminium Composite Panels and Wall Panels across India. 
            Our panels, built with cutting-edge technology and precision manufacturing, have earned nationwide preference.
          </p>
        </div>
        <div className="image-content">
          <img src={require("../assets/Image2.png")} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Separate;
