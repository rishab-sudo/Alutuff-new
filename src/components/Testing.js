import React from 'react';
import Slider from 'react-slick';
import './Testimonial.css';

const Testimonial = ({ testimonials = [], heading = "What Our Customers Are Saying" }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    rtl: true, // slide right to left
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="testimonial-section">

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
            <div key={index} className="testimonial-box">
              <p className="testimonial-desc">{item.review}</p>
              <div className="testimonial-footer">
                <img src={item.image} alt={item.name} className="client-img" />
                <span className="client-name">{item.name}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
