import React from 'react';
import Slider from 'react-slick';
import './Testing.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  require('../assets/testing-icon/Shri-Ram.png'),
  require('../assets/testing-icon/beckers.png'),
  require('../assets/testing-icon/ce.png'),
  require('../assets/testing-icon/energy.png'),
  require('../assets/testing-icon/exova.png'),
  require('../assets/testing-icon/iso.png'),
  require('../assets/testing-icon/iso2.png'),
  require('../assets/testing-icon/lynar.png'),
  require('../assets/testing-icon/member.png'),
  require('../assets/testing-icon/mk-India.png'),
  require('../assets/testing-icon/ohss.png'),
  require('../assets/testing-icon/oupont.jpg'),
  require('../assets/testing-icon/ppg.png'),
  require('../assets/testing-icon/recycle.png'),
  require('../assets/testing-icon/sgs.png'),
];

const Testing = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testing-slider-container">
          <div className='d-flex justify-content-center align-items-center mb-5'>
        <p className='page-heading'>Alutuff - Testing</p>
      </div>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="testing-slider-slide">
            <img className="testing-icon-img" src={img} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testing;
