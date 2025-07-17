import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaBuilding } from 'react-icons/fa';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./Projects.css";

// All Projects with type field
const allProjects = [
  {
    id: 1,
    type: "government",
    image: require("../assets/projects/GOV1.jpg"),
    title: "Gov Project 1",
    desc: "Government Building ACP Facade",
  },
  {
    id: 2,
    type: "government",
    image: require("../assets/projects/GOV 2.jpg"),
    title: "Gov Project 2",
    desc: "Airport Lounge Panels",
  },
  {
    id: 3,
    type: "government",
    image: require("../assets/projects/GOV  3.jpg"),
    title: "Gov Project 3",
    desc: "Transport Terminal Design",
  },
  {
    id: 4,
    type: "government",
    image: require("../assets/projects/GOV  4.jpg"),
    title: "Gov Project 4",
    desc: "Gov HQ Front Elevation",
  },
  {
    id: 5,
    type: "government",
    image: require("../assets/projects/GOV  5.jpg"),
    title: "Gov Project 5",
    desc: "Stadium ACP Work",
  },
  {
    id: 6,
    type: "government",
    image: require("../assets/projects/GOV  6.jpg"),
    title: "Gov Project 6",
    desc: "Gov Complex Facade",
  },
  {
    id: 7,
    type: "government",
    image: require("../assets/projects/GOV  7.jpg"),
    title: "Gov Project 7",
    desc: "Utility Service Campus",
  },
  {
    id: 8,
    type: "private",
    image: require("../assets/projects/PR 1.jpg"),
    title: "Private Project 1",
    desc: "Retail Showroom Panels",
  },
  {
    id: 9,
    type: "private",
    image: require("../assets/projects/PR 2.jpg"),
    title: "Private Project 2",
    desc: "Luxury Mall Interior",
  },
  {
    id: 10,
    type: "private",
    image: require("../assets/projects/PR 3.jpg"),
    title: "Private Project 3",
    desc: "Commercial Office Tower",
  },
  {
    id: 11,
    type: "private",
    image: require("../assets/projects/PR 4.jpg"),
    title: "Private Project 4",
    desc: "Film City Entrance Panels",
  },
  {
    id: 12,
    type: "private",
    image: require("../assets/projects/PR 5.jpg"),
    title: "Private Project 5",
    desc: "Modern Hospital Elevation",
  },

];

// Client list
const allClients = [
  "Kalyan Jewellers – UAE",
  "Kalyan Jewellers – PAN INDIA",
  "Sardar Vallabh Bhai Patel Airport, Ahmedabad",
  "Ramoji Film City, Hydrabad",
  "Transport Corporation, Bangalore",
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

// Classify clients
const governmentClients = allClients.filter(name =>
  [
    "ONGC",
    "ONGC,VIZAG",
    "Nepal Telecom",
    "Transport Corporation, Bangalore",
    "Sardar Vallabh Bhai Patel Airport, Ahmedabad",
    "Chennai Airport",
    "Sports Stadium, Goa",
    "Calicut Bus Terminal Project",
    "Gujarat Gas"
  ].includes(name)
);
const privateClients = allClients.filter(name => !governmentClients.includes(name));

// Filter projects by type
const governmentData = allProjects.filter(project => project.type === "government");
const privateData = allProjects.filter(project => project.type === "private");

const ProjectCarousel = () => {
  const [visibleClients, setVisibleClients] = useState(12);
  const isFullyVisible = visibleClients >= privateClients.length;

  const handleToggleClients = () => {
    setVisibleClients(prev => isFullyVisible ? 12 : prev + 12);
  };

  return (
    <>
      {/* Banner Section */}
      <Container fluid className="projects-banner-section">
        <Container className="projects-banner-content-div">
          <div className="project-banner-text-div">
            <h1 className="project-banner-heading">
              Transforming Spaces with Durable, Stylish Panel Solutions
            </h1>
            <p className="project-banner-descp">
              At Alutuff, our panels are trusted by architects, builders, and developers across industries. Explore our diverse project portfolio to see how Alutuff enhances structures with quality craftsmanship and long-lasting protection.
            </p>
          </div>

          <div className="image-layout-wrapper">
            <div className="top-section">
              <div className="left-images">
                <img src={require("../assets/Image2.png")} alt="Image 1" className="img img1 from-left" />
                <img src={require("../assets/Image2.png")} alt="Image 2" className="img img2 from-left" />
              </div>
              <img src={require("../assets/Image2.png")} alt="Image 3" className="img img3 from-right" />
            </div>
          </div>
        </Container>
      </Container>

      {/* GOVERNMENT PROJECTS */}
      <Container className="project-carousel-container">
        <div className='d-flex justify-content-center align-items-center mb-5'>
          <p className="page-heading">GOVERNMENT PROJECTS</p>
        </div>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 2500 }}
          className="project-swiper"
          breakpoints={{
            0: { slidesPerView: 1, centeredSlides: false },
            768: { slidesPerView: 2, centeredSlides: true },
            992: { slidesPerView: 3, centeredSlides: true },
          }}
        >
          {governmentData.map((item) => (
            <SwiperSlide key={item.id} className="project-card">
              <div className="project-inner">
                <img src={item.image} alt={item.title} />
                {/* <h3>{item.title}</h3>
                <p>{item.desc}</p> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      {/* GOVERNMENT CLIENTS */}
      <Container className="clients-section">
        <h2 className="page-heading">Government Clients</h2>
        <div className="clients-grid">
          {governmentClients.map((client, index) => (
            <div className="client-box" key={index}>
              <FaBuilding className="client-icon" />
              <span>{client}</span>
            </div>
          ))}
        </div>
      </Container>

      {/* PRIVATE PROJECTS */}
      <Container className="project-carousel-container">
        <div className='d-flex justify-content-center align-items-center mb-5'>
          <p className="page-heading">PRIVATE PROJECTS</p>
        </div>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 2500 }}
          className="project-swiper"
          breakpoints={{
            0: { slidesPerView: 1, centeredSlides: false },
            768: { slidesPerView: 2, centeredSlides: true },
            992: { slidesPerView: 3, centeredSlides: true },
          }}
        >
          {privateData.map((item) => (
            <SwiperSlide key={item.id} className="project-card">
              <div className="project-inner">
                <img src={item.image} alt={item.title} />
                {/* <h3>{item.title}</h3>
                <p>{item.desc}</p> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      {/* PRIVATE CLIENTS */}
      <Container className="clients-section">
        <h2 className="page-heading">Private Clients</h2>
        <div className="clients-grid">
          {privateClients.slice(0, visibleClients).map((client, index) => (
            <div className="client-box" key={index}>
              <FaBuilding className="client-icon" />
              <span>{client}</span>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-end mt-4">
          <button className="view-more-btn pink-button" onClick={handleToggleClients}>
            {isFullyVisible ? "View Less" : "View More"}
          </button>
        </div>
      </Container>
    </>
  );
};

export default ProjectCarousel;
