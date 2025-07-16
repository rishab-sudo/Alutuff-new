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
     description: "We deliver consistent and high-quality products and services."

  },
  {
    id: 2,
    icon: require('../assets/core-icons/idea (1).png'),
    title: "Customer First, Always",
     description: "We deliver consistent and high-quality products and services."
  },
  {
    id: 3,
    icon: require('../assets/core-icons/promise (1).png'),
    title: "Innovation with Purpose",
    description: "We deliver consistent and high-quality products and services."
  },
  {
    id: 4,
    icon: require('../assets/core-icons/respect-core (1).png'),
    title: "Respect for People",
    description: "We deliver consistent and high-quality products and services."
  },
  {
    id: 5,
    icon: require('../assets/core-icons/social-responsibility (1).png'),
    title: "Responsibility to Society",
     description: "We deliver consistent and high-quality products and services."
  },
    {
    id: 6,
    icon: require('../assets/core-icons/technical-service (1).png'),
    title: "Service Is Our Strength",
     description: "We deliver consistent and high-quality products and services."
  },
    {
    id: 7,
    icon: require('../assets/core-icons/trustworthiness (1).png'),
    title: "Transarency & Trust",
     description: "We deliver consistent and high-quality products and services."
  },
];


const CircleSlider = () => {
  const [hovered, setHovered] = useState(null);

 const settings = {
  infinite: true,
  speed: 3000,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,
  pauseOnHover: true, 
  responsive: [
    {
      breakpoint: 992, // Tablets
      settings: {
        slidesToShow: 3,
        pauseOnHover: true,
      },
    },
    {
      breakpoint: 768, // Mobile
      settings: {
        slidesToShow: 2,
        pauseOnHover: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        pauseOnHover: false,
      },
    },
  ],
};


  return (
    <Container fluid className="circle-slider-wrapper">
        <div className='d-flex justify-content-center align-items-center mb-5 '>
<p className="page-heading">OUR CORE VALUES</p>
  </div>
<Slider {...settings} className="circle-slider">
  {circlesData.map((circle) => (
    <div
      key={circle.id}
      className={`circle-item ${hovered === circle.id ? "active" : ""}`}
      onMouseEnter={() => setHovered(circle.id)}
      onMouseLeave={() => setHovered(null)}
    >
      <div className="circle">
        <img className="core-icons" src={circle.icon} alt={circle.title} />
        <p className="core-circle-descp">{circle.title}</p>
      </div>
    </div>
  ))}
</Slider>


  {hovered && window.innerWidth > 767 && (
  <div className="below-description red-border">
    <p>{circlesData.find((item) => item.id === hovered).description}</p>
  </div>
)}

   
    </Container>
  );
};

export default CircleSlider;
