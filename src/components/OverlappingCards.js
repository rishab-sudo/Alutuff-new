import React, { useEffect, useRef } from 'react';
import './OverlappingCards.css';
import { Container } from 'react-bootstrap';

const OverlappingCards = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('lift');
          } else {
            entry.target.classList.remove('lift');
          }
        });
      },
      { threshold: 0.5 }
    );

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <Container fluid className='stack-section'>
      <div className='text-center'> 
        <p className='page-heading text-white'>Why Alutuff ?</p>
        </div>
     <Container className="stack-section-card">
      <div className="card card1" ref={el => cardsRef.current[0] = el}>
        <div className='overlap-card-content'>
          <img className='overlap-card-img' src={require("../assets/map.png")} alt=""/>
          <div className='overlap-card-text'>
        <p className='overlap-cards-heading'> Here's why Alutuff is the premier choice for your needs
</p>
        <ul className='overlap-cards-text'>
          <li>We Listen, You Succeed.</li>
          <li>Tailored Design Versatility.</li>
          <li>Solutions That Reflect Your Vision.</li>
          </ul>
          <div>
            </div>
      </div>
      </div>
      </div>
      <div className="card card2" ref={el => cardsRef.current[1] = el}>
        <div className='overlap-card-content'>
           <img  className='overlap-card-img' src={require("../assets/WHY 2.jpg")} alt=""/>
           <div className='overlap-card-text'>
        <p className='overlap-cards-heading'> Alutuff ACP Panels — Made in India, Trusted Nationwide</p>
           <ul className='overlap-cards-text'>
          <li>Proven Performance, Preferred in All 28 States.</li>
          <li>Resilience Engineered, Beauty That Endures.</li>
          <li>Proudly Indian, Globally Trusted Quality.</li>
          </ul>
      </div>
      </div>
      </div>
      <div className="card card3" ref={el => cardsRef.current[2] = el}>
       <div className='overlap-card-content'>
         <img  className='overlap-card-img' src={require("../assets/WHY3.jpg")} alt=""/>
         <div className='overlap-card-text'>
        <p className='overlap-cards-heading'> Alutuff ACP Cross-Section: Unveiling Our Core Strength</p>
           <ul className='overlap-cards-text'>
          <li>Engineered for Extreme Durability.</li>
          <li>Superior Core, Lasting Finish.</li>
          <li>Built to Withstand, Designed to Impress.</li>
          </ul>
        </div>
      </div>
      </div>
    </Container>
    </Container>
  );
};

export default OverlappingCards;
