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
     description: "      Every panel, every time, built to global standards.    "

  },
  {
    id: 2,
    icon: require('../assets/core-icons/idea (1).png'),
    title: "Customer First, Always",
     description: "    Your satisfaction is our starting point and ultimate goal.  "
  },
  {
    id: 3,
    icon: require('../assets/core-icons/promise (1).png'),
    title: "Innovation with Purpose",
    description: "     We lead with ideas that elevate design and durability.   "
  },
  {
    id: 4,
    icon: require('../assets/core-icons/respect-core (1).png'),
    title: "Respect for People",
    description: "    Every relationship is rooted in respect and shared success.    "
  },
  {
    id: 5,
    icon: require('../assets/core-icons/social-responsibility (1).png'),
    title: "Responsibility to Society",
     description: "     We grow with care, for people, planet, and progress  "
  },
    {
    id: 6,
    icon: require('../assets/core-icons/technical-service (1).png'),
    title: "Service Is Our Strength",
     description: "     More than products, we deliver complete, dependable support.   "
  },
    {
    id: 7,
    icon: require('../assets/core-icons/trustworthiness (1).png'),
    title: "Transparency & Trust",
     description: "   We build trust through honesty, clarity, and action. "
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
  swipe: false,
  touchMove: false,
  draggable: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        pauseOnHover: true,
        swipe: false,
        touchMove: false,
        draggable: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        pauseOnHover: false,
        swipe: false,
        touchMove: false,
        draggable: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        pauseOnHover: false,
        swipe: false,
        touchMove: false,
        draggable: false,
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
