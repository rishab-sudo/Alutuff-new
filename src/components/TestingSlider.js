import React from "react";
import Slider from "react-slick";
import "./TestingSlider.css"; // custom CSS with 'testing' in class names
import { Container } from "react-bootstrap";

const TestingSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    ltr: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  };

const images = [
  require("../assets/testing-icon/Shri-Ram.png"),
  require("../assets/testing-icon/beckers.png"),
    require("../assets/testing-icon/ce.png"),
      require("../assets/testing-icon/energy.png"),
        require("../assets/testing-icon/exova.png"),
          require("../assets/testing-icon/iso.png"),
            require("../assets/testing-icon/iso2.png"),
              require("../assets/testing-icon/lynar.png"),
                require("../assets/testing-icon/member.png"),
                  require("../assets/testing-icon/mk-India.png"),
                    require("../assets/testing-icon/ohss.png"),
                      require("../assets/testing-icon/oupont.jpg"),
                         require("../assets/testing-icon/ppg.png"),
                            require("../assets/testing-icon/recycle.png"),
                               require("../assets/testing-icon/sgs.png"),
];

  return (
    <Container fluid className="testing-section">
        <div className='d-flex justify-content-center align-items-center mb-5 '>
  <h2 className="page-heading">Alutuff Testing</h2>
  </div>
         <Container  className="testing-content-div">
     <div className="testing-slider-wrapper">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="testing-slide-item">
              <img src={img} alt={`slide-${index}`} className="testing-slide-image" />
            </div>
          ))}
        </Slider>
      </div>
    </Container>
     </Container>
  );
};

export default TestingSlider;
