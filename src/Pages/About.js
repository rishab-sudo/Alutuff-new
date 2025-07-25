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
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import bannerImage from '../assets/1400.jpg'
import './About.css';
import CircleSlider from '../components/CircleSlider';

import { useNavigate } from 'react-router-dom';



const stats = [
  { id: 1, image: require('../assets/s-handshake-1--unscreen.gif'), count: 5000, suffix: '+', label: 'Dealers' },
  { id: 2, image: require('../assets/s-placeholder-unscreen.gif'), count: 25, suffix: '+', label: 'Countries Exported To' },
  { id: 3, image: require('../assets/s-project-unscreen.gif'), count: 500, suffix: '+', label: ' Projects Completed' },
  { id: 4, image: require('../assets/s-handshake-1--unscreen.gif'), count: 45, suffix: '+', label: ' Years Market Trust' },
];
const aboutImage = [
  require("../assets/about us 01.png"),
   require("../assets/about us 02.png"),
];
const About = () => {
    const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const [counterKey, setCounterKey] = useState(0);


const [ref, inView] = useInView({
  threshold: 0.2, // triggers when 30% visible
  triggerOnce: true, // only once
});
const [zigzagRef, zigzagInView] = useInView({
  threshold: 0.2,
  triggerOnce: true,
});

useEffect(() => {
  const interval = setInterval(() => {
    setCounterKey(prevKey => prevKey + 1); // re-triggers CountUp
  }, 3500); // every 2 seconds

  return () => clearInterval(interval);
}, []);

  const images = [
    require('../assets/manu-unit/manu-1.jpg'),
  require('../assets/manu-unit/manu-2.jpg'),
    require('../assets/manu-unit/manu-3.jpg'),
      require('../assets/manu-unit/manu-4.jpg'),
        require('../assets/manu-unit/manu-5.jpg'),
          require('../assets/manu-unit/manu-6.jpg'),
            require('../assets/manu-unit/manu-7.jpg'),
              require('../assets/manu-unit/manu-8.jpg'),

  ];
const [card1Ref, card1InView] = useInView({ triggerOnce: true, threshold: 0.2 });
const [card2Ref, card2InView] = useInView({ triggerOnce: true, threshold: 0.2 });
const [card3Ref, card3InView] = useInView({ triggerOnce: true, threshold: 0.2 });

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
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200, // below 1200px
      settings: {
        slidesToShow: 3,
      },
    },
    
    {
      breakpoint: 992, // below 992px
      settings: {
        slidesToShow: 3,
      },
    },
     {
      breakpoint: 768, // below 576px
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576, // below 576px
      settings: {
        slidesToShow: 2,
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
        <p className='section-heading'>About Alutuff</p>
        <p className='page-text'>Where Strong ACP Panels Meet Timeless Aesthetic Design</p>
      <p className='page-text'>Alutuff is India’s premier manufacturer of Aluminium Composite Panels (ACPs), delivering innovation, durability, and design excellence for over a decade. </p>
      <p className='page-text' >Our state-of-the-art manufacturing facility spans 5 lakh square feet in Bareilly, where advanced technology and strict quality standards ensure the production of premium-grade panels for both interior and exterior use. Alutuff panels are fire-retardant, weather-resistant, and available in a wide range of finishes, from wood to metallic to marble. 
</p>
      <p className='page-text'>
        Trusted by architects, developers, and designers across all 28 Indian states, our products are proudly made in India and meet international standards. With Alutuff, every project reflects strength, sophistication, and a deep understanding of design possibilities.
</p>
      {/* <button className='pink-button'  onClick={() => navigate('/about')} >Purchase</button> */}
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
 <div ref={ref} className={`glance ${inView ? 'glance-visible' : ''}`} >

        <h2 className='page-heading' style={{marginBottom:"0rem "}}> Alutuff World-Class Campus at a Glance
</h2>
        <p className='section-heading sub-heading'> Built on scale, driven by innovation, a powerhouse of precision manufacturing, skilled talent, and world-class infrastructure excellence.</p>

        <div className="glance-container">
          {/* Left Points */}
          <div className="glance-points glance-left">
            <div className="point-box" >  Industrial Campus <span></span><span style={{backgroundColor:"#ea3138",color:"#fff", padding:"5px  10px", borderRadius:"11px",marginLeft:"auto"}}>5lac+ sq.ft.</span>	</div>
            <div className="point-box">Total Investment  <span style={{backgroundColor:"#ea3138",color:"#fff", padding:"5px  10px", borderRadius:"11px",marginLeft:"auto"}}>$168M+ </span> </div>
            <div className="point-box"> In-House Plant <span style={{backgroundColor:"#ea3138",color:"#fff", padding:"5px  10px", borderRadius:"11px",marginLeft:"auto"}}>24/7 Power</span>   </div>
          </div>

          {/* Center Image */}
          <div className="glance-image">
            <img src={require('../assets/ABOUT 1 (2).jpg')} alt="Glance" />
          </div>

          {/* Right Points */}
          <div className="glance-points glance-right">
            <div className="point-box"><span style={{backgroundColor:"#ea3138",color:"#fff", padding:"5px  10px", borderRadius:"11px",marginRight:"auto"}}>6 Units </span> Manufacturing Plants </div>
            <div className="point-box"><span style={{backgroundColor:"#ea3138",color:"#fff", padding:"5px  10px", borderRadius:"11px",marginRight:"auto"}}>1200+</span> Skilled Employees</div>
            <div className="point-box"><span style={{backgroundColor:"#ea3138",color:"#fff", padding:"5px  10px", borderRadius:"11px",marginRight:"auto"}}>India + UAE</span>  Operational Presence</div>
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
  <Container fluid className="zigzag-card-section" ref={zigzagRef}>
        <div className="zigzag-card-content-container">

          {/* Card 1 */}
         <div ref={card1Ref} className={`zigzag-card zigzag-card-1 ${card1InView ? 'fade-in-left' : ''}`}>
            <div className='zigzag-card-div'>
              <h3 className='zigzag-card-heading'>OUR MISSION</h3>
              <p className='zigzag-card-descp '>
               To transform spaces with premium Metal Composite Panels, delivering unmatched quality, timely service, and trust-driven partnerships that empower dealers, customers, and stakeholders across every project.
               </p>
            </div>
            <div className='zigzag-img-div' style={{ marginLeft: "auto" }}>
              <img className='zigzag-img' src={require("../assets/mission-img/Mission (1).gif")} alt="" />
            </div>
          </div>

          {/* Card 2 */}
         <div ref={card2Ref} className={`zigzag-card zigzag-card-2 ${card2InView ? 'fade-in-right-zigzag' : ''}`}>
            <div className='zigzag-img-div' style={{ marginRight: "auto" }}>
              <img className='zigzag-img' src={require("../assets/mission-img/Growth (1).gif")} alt="" />
            </div>
            <div className='zigzag-card-div' style={{marginLeft:"auto",marginRight:"0px"}}>
              <h3 className='zigzag-card-heading'>OUR VISION</h3>
              <p className='zigzag-card-descp '>
              To be India’s most trusted ACP brand, globally recognized for innovation, integrity, and reliability, by building strong relationships with architects, builders, homeowners, and channel partners everywhere.
              </p>
            </div>
          </div>

          {/* Card 3 */}
       <div ref={card1Ref} className={`zigzag-card zigzag-card-1 ${card1InView ? 'fade-in-left' : ''}`}>
            <div className='zigzag-card-div'>
              <h3 className='zigzag-card-heading'>OUR PROMISE</h3>
              <p className='zigzag-card-descp '>At Alutuff, we create more than panels. We build dreams, protect reputations, and stand beside every partner, offering strength, style, and unwavering support in every square foot.
</p>
            </div>
            <div className='zigzag-img-div' style={{ marginLeft: "auto" }}>
              <img className='zigzag-img' src={require("../assets/mission-img/Hand Shake.gif")} />
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
          {/* {stats.map(item => (
            <div key={item.id} className="about-stat-card">
              <img className='stats-icon' src={item.image} alt={item.label} />
   <h3>
                <CountUp start={0} end={item.count} duration={2} separator=',' />
                {item.suffix}
              </h3>
              <p>{item.label}</p>
            </div>
          ))} */}
          {stats.map(item => (
  <div key={item.id} className="about-stat-card">
    <img className='stats-icon' src={item.image} alt={item.label} />
    <h3>
      {/* <CountUp key={counterKey + item.id} start={0} end={item.count} duration={2} separator=',' /> */}
      <CountUp key={counterKey + item.id} start={0} end={item.count} duration={2} separator=',' />

      {item.suffix}
    </h3>
    <p>{item.label}</p>
  </div>
))}

        </div>
      </Container>
    </Container>

      {/* Slider Section */}
      <Container fluid className="about-slider-container">
          <div className='d-flex justify-content-center align-items-center mb-5 '>
        <p className="page-heading">Manufacturing Unit</p>
      </div>
        <Slider {...settings} className='manufacturing-slider'>
          {images.map((img, index) => (
            <div key={index} className="about-slide-image-wrapper">
              <img src={img} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </Container>
      {/*  */}
      <Container  style={{marginTop:"6%"}}>
<img  style={{width:"100%",maxWidth:"100%"}} src={require("../assets/alutuff-process.jpg")}/>
      </Container>
{/*  */}
  <Container fluid  className='d-flex justify-content-center align-items-center g-0' style={{marginTop:"5%",marginBottom:"-5%"}}>
<img  style={{maxWidth:"100%"}} src={require("../assets/makein-new-alutiff.png")} alt=""/>
  </Container>
      {/*  */}


    </>
  );
};

export default About;