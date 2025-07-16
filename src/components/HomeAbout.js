import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import "./HomeAbout.css";

export default function HomeAbout() {
  const navigate = useNavigate();

  return (
    <Container fluid className="home-about-section">
      <Container className="home-about-content-div">
       <div className='home-about-text-div'>
        <p className='section-heading'>About Alutuff</p>
        <p className='page-text'>Turning Your Ideas Into Timeless <br/> Architectural Reality</p>
        <p className='page-text'>
        At Alutuff, we transform your vision into built reality. With over a decade of expertise, cutting-edge facilities in Bareilly spanning 5 lakh sq ft, and a fully‑integrated, ISO‑certified manufacturing setup, our fire‑retardant, weather‑resistant ACPs are precision‑engineered for safety, style, and durability.
        </p>
        <p className='page-text'> 
          Whether it's residential exteriors or large commercial façades, each panel reflects your ideas—crafted with global standards and proud Indian-made excellence.
</p>
<p className='page-text'>Because we don’t just build panels—we build your trust.
</p>
        <button className='pink-button' onClick={() => navigate('/about')} >View More</button>
        </div>

        <div className='home-about-img1-div'>
            <img className='home-about-img1' src={require("../assets/home-about2.jpg")} alt="home-about"/>
        </div>
      </Container>
    </Container>
  );
}

