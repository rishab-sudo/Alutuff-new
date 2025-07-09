import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaBuilding } from 'react-icons/fa';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./Projects.css";

const governmentClients = [
  "Kalyan Jewellers – UAE",
  "Kalyan Jewellers – PAN INDIA",
  "Sardar Vallabh Bhai Patel Airport, Ahmedabad",
  "Ramoji Film City, Hydrabad",
  "Bangalore Metropolitan Road Transport Corporation, Bangalore",
  "ITC Outlets",
  "Coffee Day Lounge",
  "ONGC",
  "Chennai Airport",
  "Godrej Building, Kathmadnu",
  "Maharajganj, Kathmandu",
  "Baneshwor, Kathmadnu",
  "Kalimati, Kathmandu",
  "Koteshwar, Kathmandu",
  "Eissan Hospital, Kathmandu",
  "Prime Hi-Tech Infrastructure, Andra Pradesh",
  "Comio Mobiles",
  "Apollo Hospital",
  "BKC Complex, Mumbai",
  "Techniplex, Mumbai",
  "Solitaire Mall, Mumbai",
  "Town Centre, Mumbai",
  "Parker Mall, New Delhi",
  "Sports Stadium, Goa",
  "Radisson, Haridwar",
  "ONGC,VIZAG",
  "Reliance Milk, Vellore, Tamil Nadu",
  "McDonalds",
  "Calicut Bus Terminal Project",
  "Shri moga Hospital, Shimoga",
  "Nepal Telecom",
  "Ishaan Hospital, Maharajganj",
  "Volks Wagon",
  "Hatti Kaapi Chain",
  "Gujarat Gas"
];

const data = [
  {
    image: require("../assets/Image2.png"),
    title: "Project 1",
    desc: "Description of Project 1",
  },
  {
    image: require("../assets/Image2.png"),
    title: "Project 2",
    desc: "Description of Project 2",
  },
  {
    image: require("../assets/Image2.png"),
    title: "Project 3",
    desc: "Description of Project 3",
  },
  {
    image: require("../assets/Image2.png"),
    title: "Project 4",
    desc: "Description of Project 4",
  },
  {
    image: require("../assets/Image2.png"),
    title: "Project 5",
    desc: "Description of Project 5",
  },
];

const ProjectCarousel = () => {
  const [visibleClients, setVisibleClients] = useState(12);
  const isFullyVisible = visibleClients >= governmentClients.length;

  const handleToggleClients = () => {
    if (isFullyVisible) {
      setVisibleClients(12); // reset to first 3 rows
    } else {
      setVisibleClients(prev => prev + 12); // show 3 more rows
    }
  };

  return (
    <>
      <Container fluid className="project-banner-section">
        <Container className="project-banner-content-div">
          <div>
            <h2>Our <br /> Signature <br /> Projects </h2>
            <p>dkedmewnknfkenknekenvnenkvnkfnvenvnr</p>
            <div>
              <button className="pink-button"> Our Products</button>
            </div>
          </div>
          <div>
            <img className="project-banner-img" src={require("../assets/Image2.png")} alt="" />
          </div>
        </Container>
      </Container>

      <Container className="project-carousel-container">
        <div className='d-flex justify-content-center align-items-center mb-5'>
          <p>GOVERNMENT PROJECTS</p>
        </div>
      <Swiper
  modules={[Autoplay]}
  loop={true}
  autoplay={{ delay: 2500 }}
  className="project-swiper"
  breakpoints={{
    0: {
      slidesPerView: 1,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 2,
      centeredSlides: true,
    },
    992: {
      slidesPerView: 3,
      centeredSlides: true,
    }
  }}
>
  {data.map((item, index) => (
    <SwiperSlide key={index} className="project-card">
      <div className="project-inner">
        <img src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      </Container>

      <Container className="clients-section">
        <h2>Few of Our Esteemed Clients</h2>
        <div className="clients-grid">
          {governmentClients.slice(0, visibleClients).map((client, index) => (
            <div className="client-box" key={index}>
              <FaBuilding className="client-icon" />
              <span>{client}</span>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-end mt-4">
          <button className="view-more-btn" onClick={handleToggleClients}>
            {isFullyVisible ? "View Less" : "View More"}
          </button>
        </div>
      </Container>

      <Container className="project-carousel-container">
        <div className='d-flex justify-content-center align-items-center mb-5'>
          <p>PRIVATE PROJECTS</p>
        </div>
          <Swiper
  modules={[Autoplay]}
  loop={true}
  autoplay={{ delay: 2500 }}
  className="project-swiper"
  breakpoints={{
    0: {
      slidesPerView: 1,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 2,
      centeredSlides: true,
    },
    992: {
      slidesPerView: 3,
      centeredSlides: true,
    }
  }}
>
  {data.map((item, index) => (
    <SwiperSlide key={index} className="project-card">
      <div className="project-inner">
        <img src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
      </Container>

       <Container className="clients-section">
        <h2>Few of Our Esteemed Clients</h2>
        <div className="clients-grid">
          {governmentClients.slice(0, visibleClients).map((client, index) => (
            <div className="client-box" key={index}>
              <FaBuilding className="client-icon" />
              <span>{client}</span>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-end mt-4">
          <button className="view-more-btn" onClick={handleToggleClients}>
            {isFullyVisible ? "View Less" : "View More"}
          </button>
        </div>
      </Container>
    </>
  );
};

export default ProjectCarousel;
