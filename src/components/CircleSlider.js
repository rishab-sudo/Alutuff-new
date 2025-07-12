import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { FaBeer, FaCoffee, FaApple, FaAnchor, FaBicycle } from "react-icons/fa";
import "./CircleSlider.css";

const circlesData = [
  {
    id: 1,
    icon: require('../assets/core-icons/continuity (1).png'),
    title: "Consistency & Quality",
    description:""

  },
  {
    id: 2,
    icon: require('../assets/core-icons/idea (1).png'),
    title: "Customer First, Always",
    description:""
  },
  {
    id: 3,
    icon: require('../assets/core-icons/promise (1).png'),
    title: "Innovation with Purpose",
   description:""
  },
  {
    id: 4,
    icon: require('../assets/core-icons/respect-core (1).png'),
    title: "Respect for People",
   description:""
  },
  {
    id: 5,
    icon: require('../assets/core-icons/social-responsibility (1).png'),
    title: "Responsibility to Society",
    description:""
  },
    {
    id: 6,
    icon: require('../assets/core-icons/technical-service (1).png'),
    title: "Service Is Our Strength",
    description:""
  },
    {
    id: 7,
    icon: require('../assets/core-icons/trustworthiness (1).png'),
    title: "Transarency & Trust",
    description:""
  },
];


const CircleSlider = () => {
  const [hovered, setHovered] = useState(null);

  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
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
        settings: { slidesToShow: 2 },
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
              <img className="core-icons" src={circle.icon}/>
              <p className="core-circle-descp">{circle.title}</p>
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
