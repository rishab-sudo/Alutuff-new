import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import './HomeBanner.css';

const slides = [
  {
    image: require('../assets/1.jpg'),
    heading: 'India’s Leading ACP',
    description: ' Trusted for premium aluminium panels across India’s skyline.',
    buttonText: 'Explore Now',
  },
  {
    image: require('../assets/3.jpg'),
    heading: 'Styled for Safety',
    description: ' Fire-retardant, weatherproof panels with a high-end finish.',
    buttonText: 'Explore Now',
  },
  {
    image: require('../assets/4.jpg'),
    heading: 'Made in India, Trusted Globally',
    description: ' Decade of expertise with standards backed by global trust.',
    buttonText: 'Explore Now',
  },
  {
    image: require('../assets/2.jpg'),
    heading: 'Made in India, Trusted Globally',
    description: ' Decade of expertise with standards backed by global trust.',
    buttonText: 'Explore Now',
  },
];

const HomeBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="home-banner">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        speed={800}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="banner-image"
              />

              {/* Mobile heading */}
              <div className="mobile-heading">
                <h1>{slide.heading}</h1>
              </div>

              {/* Desktop content box */}
              <div className={`content-box ${activeIndex === index ? 'show-text' : ''}`}>
                <h2>{slide.heading}</h2>
                <p>{slide.description}</p>
                <Link to="/product">
                  <button className="pink-button">{slide.buttonText}</button>
                </Link>
              </div>

              {/* Mobile content box */}
              <div className={`mobile-content-box ${activeIndex === index ? 'show-text' : ''}`}>
                <h2>{slide.heading}</h2>
                <p>{slide.description}</p>
                <Link to="/product">
                  <button className="pink-button">{slide.buttonText}</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeBanner;
