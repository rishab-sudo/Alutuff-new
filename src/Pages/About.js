import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Banner from "../components/Banner"
import 'swiper/css';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import bannerImage from '../assets/banner-bg.jpeg'
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
 <div className='w-100' >
      <Banner
        image={bannerImage}
        heading="About Us"
        subheading="Welcome to our website"
      />
    </div>
     {/*  */}
 <Container fluid className='about-us-section'>
            <Container className='about-us-content-div'>
      
      <div className='about-us-text-div'>
        <p>About US</p>
        <p>Where Strong ACP Panels Meet Timeless Aesthetic Design</p>
      <p>Alutuff is India’s premier manufacturer of Aluminium Composite Panels (ACPs), delivering innovation, durability, and design excellence for over a decade. </p>
      <p
      >Our state-of-the-art manufacturing facility spans 5 lakh square feet in Bareilly, where advanced technology and strict quality standards ensure the production of premium-grade panels for both interior and exterior use. Alutuff panels are fire-retardant, weather-resistant, and available in a wide range of finishes, from wood to metallic to marble. 
</p>
      <p>
        Trusted by architects, developers, and designers across all 28 Indian states, our products are proudly made in India and meet international standards. With Alutuff, every project reflects strength, sophistication, and a deep understanding of design possibilities.
</p>
      <button className='pink-button'>Purchase</button>
      </div>
      
  <div className='about-us-img-slider'>
<Swiper
  modules={[Autoplay, Navigation]} // Add Navigation here
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  loop={true}
  slidesPerView={1}
  navigation={true} // Enable arrows
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
            <div className="point-box"> <span style={{backgroundColor:"gray",color:"#fff", padding:"5px  10px", borderRadius:"15px",marginRight:"20px"}}>5lac+ sq.ft.</span>	 Industrial Campus</div>
            <div className="point-box"> <span style={{backgroundColor:"gray",color:"#fff", padding:"5px  10px", borderRadius:"15px",marginRight:"20px"}}>$168M+ </span>Total Investment  </div>
            <div className="point-box"><span style={{backgroundColor:"gray",color:"#fff", padding:"5px  10px", borderRadius:"15px",marginRight:"20px"}}>24/7 Power</span>  In-House Plant </div>
          </div>

          {/* Center Image */}
          <div className="glance-image">
            <img src={require('../assets/img-2.jpeg')} alt="Glance" />
          </div>

          {/* Right Points */}
          <div className="glance-points glance-right">
            <div className="point-box"><span style={{backgroundColor:"gray",color:"#fff", padding:"5px  10px", borderRadius:"15px",marginRight:"20px"}}>6 Units </span> Manufacturing Plants </div>
            <div className="point-box"><span style={{backgroundColor:"gray",color:"#fff", padding:"5px  10px", borderRadius:"15px",marginRight:"20px"}}>1200+</span> Skilled Employees</div>
            <div className="point-box"><span style={{backgroundColor:"gray",color:"#fff", padding:"5px  10px", borderRadius:"15px",marginRight:"20px"}}></span>India + UAE Operational Presence</div>
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
              <p className='zigzag-card-descp mt-3'>
               To transform spaces with premium Metal Composite Panels, delivering unmatched quality, timely service, and trust-driven partnerships that empower dealers, customers, and stakeholders across every project.
               </p>
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
              <p className='zigzag-card-descp mt-3'>
              To be India’s most trusted ACP brand, globally recognized for innovation, integrity, and reliability, by building strong relationships with architects, builders, homeowners, and channel partners everywhere.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className='zigzag-card zigzag-card-3'>
            <div className='zigzag-card-div'>
              <h3 className='zigzag-card-heading'>OUR PROMISE</h3>
              <p className='zigzag-card-descp mt-3'>At Alutuff, we create more than panels. We build dreams, protect reputations, and stand beside every partner, offering strength, style, and unwavering support in every square foot.
</p>
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