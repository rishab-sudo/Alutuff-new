import React, { useEffect, useRef } from 'react';
import './OverlappingCards.css';

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
    <div className="stack-section">
      <div className='text-center'> 
        <h2>Why Alutuff</h2>
        </div>
     
      <div className="card card1" ref={el => cardsRef.current[0] = el}>
        <div className='overlap-card-content'>
          <img className='overlap-card-img' src={require("../assets/map.png")} alt=""/>
          <div className='overlap-card-text'>
        <h2> Here's why Alutuff is the premier choice for your needs
</h2>
        <ul>
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
           <img  className='overlap-card-img' src={require("../assets/map.png")} alt=""/>
           <div className='overlap-card-text'>
        <h2> Alutuff ACP Panels — Made in India, Trusted Nationwide</h2>
           <ul>
          <li>Proven Performance, Preferred in All 28 States.</li>
          <li>Resilience Engineered, Beauty That Endures.</li>
          <li>Proudly Indian, Globally Trusted Quality.</li>
          </ul>
      </div>
      </div>
      </div>
      <div className="card card3" ref={el => cardsRef.current[2] = el}>
       <div className='overlap-card-content'>
         <img  className='overlap-card-img' src={require("../assets/map.png")} alt=""/>
         <div className='overlap-card-text'>
        <h2> Alutuff ACP Cross-Section: Unveiling Our Core Strength</h2>
           <ul>
          <li>Engineered for Extreme Durability.</li>
          <li>Superior Core, Lasting Finish.</li>
          <li>Built to Withstand, Designed to Impress.</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
};

export default OverlappingCards;
