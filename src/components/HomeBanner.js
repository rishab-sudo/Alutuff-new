import React,{useState}from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './HomeBanner.css';

const slides = [
  {
    image: require('../assets/index2_slider_banner.jpg'),
    heading: 'Slide 1 Heading',
    description: 'This is the description for slide 1',
    buttonText: 'Learn More',
  },
  {
    image: require('../assets/index2_slider_banner2.jpg'),
    heading: 'Slide 2 Heading',
    description: 'This is the description for slide 2',
    buttonText: 'Explore Now',
  },
  {
    image: require('../assets/index2_slider_banner.jpg'),
    heading: 'Slide 3 Heading',
    description: 'This is the description for slide 3',
    buttonText: 'Get Started',
  },
];

const HomeBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="home-banner">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false, reverseDirection: false }}
        loop={true}
        speed={800}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide">
              <img src={slide.image} alt={`Slide ${index + 1}`} className="banner-image" />
              <div className="mobile-heading">
                <h1>{slide.heading}</h1>
              </div>
              <div className={`content-box ${activeIndex === index ? 'show-text' : ''}`}>
                <h2>{slide.heading}</h2>
                <p>{slide.description}</p>
                <button>{slide.buttonText}</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeBanner;
