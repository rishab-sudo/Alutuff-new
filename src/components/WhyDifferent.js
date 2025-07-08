import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './WhyDifferent.css';

const sliderImages = [
  require('../assets/home-about1.jpeg'),
   require('../assets/home-about1.jpeg'),
  require('../assets/home-about1.jpeg'),
];

const WhyDifferent = () => {
  return (
    <Container fluid className="whyDiff-section">
      <Container className="whyDiff-content-container">
        <div className="why-diff-slider">
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            navigation={true}
            loop={true}
            className="swiper-container"
          >
            {sliderImages.map((image, index) => (
              <SwiperSlide key={index}>
                <img className="why-diff-img" src={image} alt={`slider-img-${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="whyDiff-text-div">
          <p>why we are Different</p>
          <p>With design & conceptual decisions, we <br /> create value for the objects.</p>
          <p>Consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusimod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrixercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreheinderit tate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
          <ul>
            <p>Design</p>
            <p>Consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusimod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam.</p>
            <li>Consectetur adipisicing elit Lorem ipsum dolor sit amet.</li>
            <li>Consectetur adipisicing elit Lorem ipsum dolor sit amet.</li>
            <li>Consectetur adipisicing elit Lorem ipsum dolor sit amet.</li>
          </ul>
          <button className='pink-button'>View More</button>
        </div>
      </Container>
    </Container>
  );
};

export default WhyDifferent;
