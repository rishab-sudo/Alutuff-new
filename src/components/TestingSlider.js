import React from "react";
import Slider from "react-slick";
import "./TestingSlider.css";
import { Container } from "react-bootstrap";

const TestingSlider = ({ testingImages, title = "Alutuff Testing" }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    ltr: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1.5 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Container fluid className="testing-section">
      <div className="d-flex justify-content-center align-items-center mb-5">
        <h2 className="page-heading">{title}</h2>
      </div>
      <Container className="testing-content-div">
        <div className="testing-slider-wrapper">
          <Slider {...settings}>
            {testingImages.map((img, index) => (
              <div key={index} className="testing-slide-item">
                <img
                  src={img}
                  alt={`slide-${index}`}
                  className="testing-slide-image"
                />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </Container>
  );
};

export default TestingSlider;
