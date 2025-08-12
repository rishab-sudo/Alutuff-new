import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaBuilding } from 'react-icons/fa';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./Projects.css";

// -------------------- GOVERNMENT PROJECTS --------------------
const governmentProjects = [
  { id: 1, image: require("../assets/projects/GOV1.jpg"), title: "Gov Project 1", desc: "Government Building ACP Facade" },
  { id: 2, image: require("../assets/projects/GOV 2.jpg"), title: "Gov Project 2", desc: "Airport Lounge Panels" },
  { id: 3, image: require("../assets/projects/GOV  3.jpg"), title: "Gov Project 3", desc: "Transport Terminal Design" },
  { id: 4, image: require("../assets/projects/GOV  4.jpg"), title: "Gov Project 4", desc: "Gov HQ Front Elevation" },
  { id: 5, image: require("../assets/projects/GOV  5.jpg"), title: "Gov Project 5", desc: "Stadium ACP Work" },
  { id: 6, image: require("../assets/projects/GOV  6.jpg"), title: "Gov Project 6", desc: "Gov Complex Facade" },
  { id: 7, image: require("../assets/projects/GOV  7.jpg"), title: "Gov Project 7", desc: "Utility Service Campus" },
];

// -------------------- PRIVATE PROJECTS WITH STATES --------------------
const privateProjects = [
  // CHHATTISGARH
  { id: 8, image:  require("../assets/zone-projects/Chhattisgarh/5e6cd74c-a295-4cd3-bdb9-aacf1ed2bd67.jpg"), title: "Private Project 1", desc: "Retail Showroom Panels", state: "CHHATTISGARH" },
  { id: 9, image: require("../assets/zone-projects/Chhattisgarh/bisalpur new.jpg"), title: "Private Project 2", desc: "Luxury Mall Interior", state: "CHHATTISGARH" },
  { id: 10, image:  require("../assets/zone-projects/Chhattisgarh/bisalpur.jpg"), title: "Private Project 3", desc: "Commercial Office Tower", state: "CHHATTISGARH" },
  


  // GUJRAT
  { id: 11, image: require("../assets/zone-projects/gujrat/surat.jpg"), title: "Private Project 4", desc: "Film City Entrance Panels", state: "GUJRAT" },
  { id: 12, image:  require("../assets/zone-projects/gujrat/surat.jpg"), title: "Private Project 5", desc: "Modern Hospital Elevation", state: "GUJRAT" },
  { id: 13, image:  require("../assets/zone-projects/gujrat/surat.jpg"), title: "Private Project 6", desc: "Corporate Park Elevation", state: "GUJRAT" },

  // HARYANA
  { id: 14, image: require("../assets/zone-projects/Haryana/Faridabad neww.jpg"), title: "Private Project 7", desc: "Shopping Complex Panels", state: "HARYANA" },
  { id: 15, image: require("../assets/zone-projects/Haryana/Faridabad.jpg"), title: "Private Project 8", desc: "Luxury Office Interior", state: "HARYANA" },
  { id: 16, image:require("../assets/zone-projects/Haryana/Faridabad neww.jpg"), title: "Private Project 9", desc: "Hospital Front Facade", state: "HARYANA" },

  // MP
  { id: 17, image: require("../assets/zone-projects/Mp/Indore2.jpg"), title: "Private Project 10", desc: "Cinema Hall Exterior", state: "MP" },
  { id: 18, image: require("../assets/zone-projects/Mp/Indore4.jpg"), title: "Private Project 11", desc: "Business Tower Panels", state: "MP" },
  { id: 19, image: require("../assets/zone-projects/Mp/Sehore.jpg"), title: "Private Project 12", desc: "School Elevation Work", state: "MP" },
    { id: 20, image: require("../assets/zone-projects/Mp/Ujjain new.jpg"), title: "Private Project 12", desc: "School Elevation Work", state: "MP" },
      { id: 21, image: require("../assets/zone-projects/Mp/Ujjain.jpg"), title: "Private Project 12", desc: "School Elevation Work", state: "MP" },
        { id: 22, image: require("../assets/zone-projects/Mp/indore 3.jpg"), title: "Private Project 12", desc: "School Elevation Work", state: "MP" },
          { id: 23, image: require("../assets/zone-projects/Mp/indore.jpg"), title: "Private Project 12", desc: "School Elevation Work", state: "MP" },
            { id: 24, image: require("../assets/zone-projects/Mp/jabalpur.jpg"), title: "Private Project 12", desc: "School Elevation Work", state: "MP" },

  // UP
  { id: 25, image: require("../assets/zone-projects/UP/Agra.jpg"), title: "Private Project 13", desc: "Hotel Facade Design", state: "UP" },
  // { id: 26, image: require("../assets/zone-projects/UP/Agra2.jpg"), title: "Private Project 14", desc: "Retail Mall Entrance", state: "UP" },
  { id: 27, image: require("../assets/zone-projects/UP/Azamgarh.jpg"), title: "Private Project 15", desc: "IT Park ACP Work", state: "UP" },
    { id: 25, image: require("../assets/zone-projects/UP/Chakia.jpg"), title: "Private Project 13", desc: "Hotel Facade Design", state: "UP" },
  { id: 26, image: require("../assets/zone-projects/UP/Hapur new.jpg"), title: "Private Project 14", desc: "Retail Mall Entrance", state: "UP" },
  { id: 27, image: require("../assets/zone-projects/UP/Hapur.jpg"), title: "Private Project 15", desc: "IT Park ACP Work", state: "UP" },
    { id: 28, image: require("../assets/zone-projects/UP/Kharihani.jpg"), title: "Private Project 13", desc: "Hotel Facade Design", state: "UP" },
  { id: 29, image: require("../assets/zone-projects/UP/Lucknow.jpg"), title: "Private Project 14", desc: "Retail Mall Entrance", state: "UP" },
  { id: 30, image: require("../assets/zone-projects/UP/Mau.jpg"), title: "Private Project 15", desc: "IT Park ACP Work", state: "UP" },
    { id: 31, image: require("../assets/zone-projects/UP/Varanasi.jpg"), title: "Private Project 13", desc: "Hotel Facade Design", state: "UP" },
  { id: 32, image: require("../assets/zone-projects/UP/Varanasinew.jpg"), title: "Private Project 14", desc: "Retail Mall Entrance", state: "UP" },
  { id: 33, image: require("../assets/zone-projects/UP/bisalpur.jpg"), title: "Private Project 15", desc: "IT Park ACP Work", state: "UP" },
    { id: 34, image: require("../assets/zone-projects/UP/kaushambi.jpg"), title: "Private Project 13", desc: "Hotel Facade Design", state: "UP" },
  { id: 35, image: require("../assets/zone-projects/UP/meerut.jpg"), title: "Private Project 14", desc: "Retail Mall Entrance", state: "UP" },
  { id: 36, image: require("../assets/zone-projects/UP/modipuram, meerut.jpg"), title: "Private Project 15", desc: "IT Park ACP Work", state: "UP" },

  // WEST BANGOLE
  { id: 37, image: require("../assets/zone-projects/wb/Asansol.jpg"), title: "Private Project 16", desc: "Metro Station Panels", state: "WEST BANGOLE" },
  { id: 38, image: require("../assets/zone-projects/wb/Raniganj.jpg"), title: "Private Project 17", desc: "Convention Center Interior", state: "WEST BANGOLE" },
  { id: 39, image:require("../assets/zone-projects/wb/Asansol.jpg"), title: "Private Project 18", desc: "Luxury Resort Exterior", state: "WEST BANGOLE" },
];

// -------------------- CLIENTS --------------------
const allClients = [
  "Kalyan Jewellers – UAE", "Kalyan Jewellers – PAN INDIA", "Sardar Vallabh Bhai Patel Airport, Ahmedabad",
  "Ramoji Film City, Hydrabad", "Transport Corporation, Bangalore", "ITC Outlets", "Coffee Day Lounge", "ONGC",
  "Chennai Airport", "Godrej Building, Kathmadnu", "Maharajganj, Kathmandu", "Baneshwor, Kathmadnu", "Kalimati, Kathmandu",
  "Koteshwar, Kathmandu", "Eissan Hospital, Kathmandu", "Prime Hi-Tech Infrastructure, Andra Pradesh", "Comio Mobiles",
  "Apollo Hospital", "BKC Complex, Mumbai", "Techniplex, Mumbai", "Solitaire Mall, Mumbai", "Town Centre, Mumbai",
  "Parker Mall, New Delhi", "Sports Stadium, Goa", "Radisson, Haridwar", "ONGC,VIZAG", "Reliance Milk, Vellore, Tamil Nadu",
  "McDonalds", "Calicut Bus Terminal Project", "Shri moga Hospital, Shimoga", "Nepal Telecom", "Ishaan Hospital, Maharajganj",
  "Volks Wagon", "Hatti Kaapi Chain", "Gujarat Gas"
];

const governmentClients = allClients.filter(name =>
  ["ONGC", "ONGC,VIZAG", "Nepal Telecom", "Transport Corporation, Bangalore", "Sardar Vallabh Bhai Patel Airport, Ahmedabad", "Chennai Airport", "Sports Stadium, Goa", "Calicut Bus Terminal Project", "Gujarat Gas"].includes(name)
);
const privateClients = allClients.filter(name => !governmentClients.includes(name));

const ProjectCarousel = () => {
  const [visibleClients, setVisibleClients] = useState(12);
  const [selectedState, setSelectedState] = useState("UP");

  const filteredProjects = privateProjects.filter(item => item.state === selectedState);
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
            <h1 className="project-banner-heading">Transforming Spaces with Durable, Stylish Panel Solutions</h1>
            <p className="project-banner-descp">
              At Alutuff, our panels are trusted by architects, builders, and developers across industries. Explore our diverse project portfolio to see how Alutuff enhances structures with quality craftsmanship and long-lasting protection.
            </p>
          </div>
          <div className="image-layout-wrapper">
            <div className="top-section">
              <div className="left-images">
                <img src={require("../assets/P 2.jpg")} alt="Image 1" className="img img1 from-left" />
                <img src={require("../assets/P3.jpg")} alt="Image 2" className="img img2 from-left" />
              </div>
              <img src={require("../assets/p1.jpg")} alt="Image 3" className="img img3 from-right" />
            </div>
          </div>
        </Container>
      </Container>

      {/* PRIVATE PROJECTS */}
      <Container className="project-carousel-container">
        <div className='d-flex flex-column align-items-center mb-4'>
          <p className="page-heading">PRIVATE PROJECTS</p>
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
            {["CHHATTISGARH", "GUJRAT", "HARYANA", "MP", "UP", "WEST BANGOLE"].map(state => (
              <button
                key={state}
                className={`filter-btn pink-button ${selectedState === state ? "active" : ""}`}
                onClick={() => setSelectedState(state)}
              >
                {state}
              </button>
            ))}
          </div>
        </div>

<Swiper
  modules={[Autoplay]}
  loop={true}
  loopedSlides={filteredProjects.length} // ensures all slides loop correctly
  autoplay={{ delay: 2500 }}
  centeredSlides={true}
  className="project-swiper"
  breakpoints={{
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  }}
>
  {(
    filteredProjects.length <= 3
      ? [...filteredProjects, ...filteredProjects] // duplicate for smooth infinite loop
      : filteredProjects
  ).map((item, idx) => (
    <SwiperSlide key={idx} className="project-card custom-slide">
      <div className="project-inner">
        <img src={item.image} alt={item.title} />
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
          {governmentProjects.map((item) => (
            <SwiperSlide key={item.id} className="project-card">
              <div className="project-inner">
                <img src={item.image} alt={item.title} />
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
    </>
  );
};

export default ProjectCarousel;
