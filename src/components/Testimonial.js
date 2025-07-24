import React from 'react';
import Slider from 'react-slick';
import './Testimonial.css';
import { Container } from 'react-bootstrap';

const Testimonial = ({ testimonials = [], heading = "Read Reviews, Build with Confidence" }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: false,
    arrows: false,
    responsive: [
            {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <Container fluid className='testimonial-section'>
      <div className='d-flex justify-content-center align-items-center mb-5'>
        <p className='page-heading'>Culture, Growth, and Impact: In Their Words</p>
      </div>
      <div className="testimonial-content-section">
        <div className="testimonial-left">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
            alt="Quote"
            className="quote-image"
          />
          <h2>{heading}</h2>
        </div>

        <div className="testimonial-right">
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <div key={index}>
                <div className="testimonial-box">
                  <p className="testimonial-desc">{item.review}</p>
                  <div className="testimonial-client">
                    <img src={item.image} alt={item.name} />
                    <span>{item.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;
