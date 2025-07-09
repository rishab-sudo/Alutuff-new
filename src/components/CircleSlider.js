import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { FaBeer, FaCoffee, FaApple, FaAnchor, FaBicycle } from "react-icons/fa";
import "./CircleSlider.css";

const circlesData = [
  {
    id: 1,
    icon: <FaBeer size={50} />,
    title: "Beer",
    description: "A refreshing cold beer brewed to perfection.",
  },
  {
    id: 2,
    icon: <FaCoffee size={50} />,
    title: "Coffee",
    description: "Hot coffee that keeps you going all day long.",
  },
  {
    id: 3,
    icon: <FaApple size={50} />,
    title: "Apple",
    description: "A healthy apple a day keeps the doctor away.",
  },
  {
    id: 4,
    icon: <FaAnchor size={50} />,
    title: "Anchor",
    description: "Strong and reliable anchor for ships.",
  },
  {
    id: 5,
    icon: <FaBicycle size={50} />,
    title: "Bicycle",
    description: "Eco-friendly transport that keeps you fit.",
  },
];

const CircleSlider = () => {
  const [hovered, setHovered] = useState(null);

  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="circle-slider-wrapper">
      <Slider {...settings} className="circle-slider">
        {circlesData.map((circle) => (
            <Container>
          <div
            key={circle.id}
            className={`circle-item ${hovered === circle.id ? "active" : ""}`}
            onMouseEnter={() => setHovered(circle.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="circle">
              {circle.icon}
              <h4>{circle.title}</h4>
            </div>
          </div>
          </Container>
        ))}
      </Slider>

      {hovered && (
        <div className="below-description red-border">
          <p>{circlesData.find((item) => item.id === hovered).description}</p>
        </div>
      )}
    </div>
  );
};

export default CircleSlider;
