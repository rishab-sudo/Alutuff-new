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
        <h2>Card 1</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
          <div>
            </div>
      </div>
      </div>
      </div>
      <div className="card card2" ref={el => cardsRef.current[1] = el}>
        <div className='overlap-card-content'>
           <img  className='overlap-card-img' src={require("../assets/map.png")} alt=""/>
           <div className='overlap-card-text'>
        <h2>Card 2</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
      </div>
      </div>
      </div>
      <div className="card card3" ref={el => cardsRef.current[2] = el}>
       <div className='overlap-card-content'>
         <img  className='overlap-card-img' src={require("../assets/map.png")} alt=""/>
         <div className='overlap-card-text'>
        <h2>Card 3</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default OverlappingCards;
