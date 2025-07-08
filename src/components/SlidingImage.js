import React, { useState, useEffect } from 'react';
import './SlidingImage.css';

// Correct static imports
import img1 from '../assets/img-2.jpeg';
import img2 from '../assets/img-3.jpeg';
import img3 from '../assets/img-5.jpeg';

const images = [img1, img2, img3];

const SlidingImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      {images.map((image, index) => {
        let className = 'slider-img';

        // Determine position
        if (index === currentIndex) {
          className += ' center';
        } else if (index === (currentIndex + 1) % images.length) {
          className += ' right';
        } else if (index === (currentIndex - 1 + images.length) % images.length) {
          className += ' left';
        } else {
          className += ' hidden';
        }

        return (
          <img
            key={index}
            src={image}
            className={className}
            style={{ width: '650px' }}
            alt={`Slide ${index}`}
          />
        );
      })}
    </div>
  );
};

export default SlidingImage;
