import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import './About.css';
import CircleSlider from '../components/CircleSlider';


const stats = [
  { id: 1, image: require('../assets/index2_count_icon1.png'), count: 5000, suffix: '+', label: 'Dealers' },
  { id: 2, image: require('../assets/index2_count_icon1.png'), count: 25, suffix: '+', label: 'Countries Exported To' },
  { id: 3, image: require('../assets/index2_count_icon1.png'), count: 500, suffix: '+', label: ' Projects Completed' },
  { id: 4, image: require('../assets/index2_count_icon1.png'), count: 45, suffix: '+', label: ' Years Market Trust' },
];
const aboutImage = [
  require("../assets/about02.jpeg"),
   require("../assets/about02.jpeg"),
   require("../assets/about02.jpeg"),
];
const About = () => {
    const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const images = [
    require('../assets/map.png'),
    require('../assets/map.png'),
    require('../assets/map.png'),
    require('../assets/map.png'),
    require('../assets/map.png'),
    require('../assets/map.png'),
  ];

const settings = {
  infinite: true,
  speed: 5000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1200, // below 1200px
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992, // below 992px
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576, // below 576px
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


  return (
    <>
      {/* Banner Section */}
  <Container fluid className="about-banner-bg-section">
       <Container className="about-banner-content">
        <p>About Alutuff</p>
        <p className="about-bottom-breadcrumb">
   <Link style={{ textDecoration: "none", color: "#000" }} to="/home">Home</Link> / <span style={{ color: "red" }}>About</span>
 </p>
 
       </Container>
     </Container>
     {/*  */}
           <Container fluid className='about-us-section'>
            <Container className='about-us-content-div'>
      
      <div className='about-us-text-div'>
        <p>About US</p>
        <p>We Build Our Projects With Your <br/>
      Dreams And Ideas.</p>
      <p>Elitsed do eiusimod tempor incididunt ut labore et dolore magna aliqua Utnim ad minim veniam, quis nostrixercitation ullamco laboris.</p>
      <p>Consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusimod tempor incididunt ut labor e et dolore magna aliqua. Ut enimere ad minim veerernireeam qureesgiis nostrixercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure doerlor in repreheinderit tate velit eesse cillum dolore eu fugiat nulla parereiatur. Excepteur sint occerewaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
      <p>Ut enim ad minim veniam quis nostrixercitation ullamco laboris nisi ut aliquip eerex earer commodo consequat. Duis aute irure dolor in repreheinderit tate.</p>
      <button className='pink-button'>Purchase</button>
      </div>
      
     <div className='about-us-img-slider'>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
            className="about-swiper"
          >
            {aboutImage.map((img, index) => (
              <SwiperSlide key={index}>
                <img className='about-us-img' src={img} alt={`slide-${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
            </Container>
          </Container>

      {/* Glance Section */}
  <div ref={sectionRef} className={`glance ${isVisible ? "visible" : ""}`}>
        <h2>At a Glance</h2>
        <p>Here's a quick look at what we offer and stand for.</p>

        <div className="glance-container">
          {/* Left Points */}
          <div className="glance-points glance-left">
            <div className="point-box">Point 1</div>
            <div className="point-box">Point 2</div>
            <div className="point-box">Point 3</div>
          </div>

          {/* Center Image */}
          <div className="glance-image">
            <img src={require('../assets/img-2.jpeg')} alt="Glance" />
          </div>

          {/* Right Points */}
          <div className="glance-points glance-right">
            <div className="point-box">Point 4</div>
            <div className="point-box">Point 5</div>
            <div className="point-box">Point 6</div>
          </div>

          {/* Connecting Lines */}
          <div className="line line-left-1"></div>
          <div className="line line-left-2"></div>
          <div className="line line-left-3"></div>

          <div className="line line-right-1"></div>
          <div className="line line-right-2"></div>
          <div className="line line-right-3"></div>
        </div>
      </div>

      {/* Key Values Section */}
      <Container fluid className="zigzag-card-section">
        <div className="zigzag-card-content-container">

          {/* Card 1 */}
          <div className='zigzag-card zigzag-card-1'>
            <div className='zigzag-card-div'>
              <h3>Our Mission</h3>
              <p>To transform spaces with world-class Metal Composite Panels by ensuring superior quality, on-time service, and exceptional reliability—empowering customers, dealers, and stakeholders to build with trust, pride,
and confidence in every project we touch every partnership we honor, and every innovation we bring to the surface of modern construction.</p>
            </div>
            <div className='zigzag-img-div' style={{ marginLeft: "auto" }}>
              <img className='zigzag-img' src={require("../assets/img-3.jpeg")} alt="" />
            </div>
          </div>

          {/* Card 2 */}
          <div className='zigzag-card zigzag-card-2'>
            <div className='zigzag-img-div' style={{ marginRight: "auto" }}>
              <img className='zigzag-img' src={require("../assets/img-3.jpeg")} alt="" />
            </div>
            <div className='zigzag-card-div' style={{marginLeft:"auto",marginRight:"0px"}}>
              <h3>OUR VISION</h3>
              <p>To be India’s most trusted and preferred ACP brand, recognized globally for innovation, consistency, and integrity—by building lasting relationships with customers, channel partners, and communities.
We dream of a future where every architect, builder, or homeowner confidently chooses Alutuff as their first choice—because they know we stand not just for panels, but for promise, precision, and partnership</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className='zigzag-card zigzag-card-3'>
            <div className='zigzag-card-div'>
              <h3 className='zigzag-card-heading'>OUR PROMISE</h3>
              <p className='zigzag-card-descp'>At Alutuff, we don’t just manufacture panels—we help build dreams, safeguard reputations, and stand beside you as your partner in every square foot.</p>
            </div>
            <div className='zigzag-img-div' style={{ marginLeft: "auto" }}>
              <img className='zigzag-img' src={require("../assets/img-3.jpeg")} alt="" />
            </div>
          </div>

        </div>
      </Container>
{/*  */}
<CircleSlider/>
{/*  */}
          <Container fluid className="about-stats-section">
      <div className="about-banner-overlay"></div> {/* Black Overlay */}
      <Container className="about-banner-content">
        <div className="about-stats-wrapper">
          {stats.map(item => (
            <div key={item.id} className="about-stat-card">
              <img src={item.image} alt={item.label} />
   <h3>
                <CountUp start={0} end={item.count} duration={2} separator=',' />
                {item.suffix}
              </h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </Container>

      {/* Slider Section */}
      <div className="about-slider-container">
          <div className='d-flex justify-content-center align-items-center mb-5 '>
        <p>Manufacturing Unit</p>
      </div>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="about-slide-image-wrapper">
              <img src={img} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
      {/*  */}

  <Container fluid className='d-flex justify-content-center align-items-center g-0'>
<img style={{maxWidth:"100%"}} src={require("../assets/makein-new-alutiff.png")} alt=""/>
  </Container>
      {/*  */}


    </>
  );
};

export default About;