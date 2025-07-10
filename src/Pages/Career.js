import React,{useState} from 'react'
import { Container } from 'react-bootstrap'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Slider from 'react-slick';
import { FaRocket, FaLeaf, FaCogs, FaUsers } from 'react-icons/fa';

import "./Career.css"

const values = [
{
  img: require("../assets/icons/team.png"),
  title: 'Teamwork',
  desc: 'Collaboration is at the core of our success.'
},
  {
    img: require("../assets/icons/exellent.png"),
    title: 'EXellence',
    desc: 'Not just a goal, but our everyday standard.'
  },
  {
    img: require("../assets/icons/empowerment.png"),
    title: 'Empowerment',
    desc: 'Freedom to lead, act, and make a difference.'
  },

    {
   img: require("../assets/icons/accountability.png"),
    title: 'Accountability',
    desc: 'We own our work and deliver results.'
  },
  {
    img: require("../assets/icons/int.png"),
    title:'Integrity',
 desc:"We do what's truly right - always",
  },
  {
    img: require("../assets/icons/opportunity.png"),
    title: 'Opportunity',
 desc: 'For growth, leadership, and continuous learning',
  },
  {
    img: require("../assets/icons/respect.png"),
    title: ' Care & Respect',
 desc: 'For people, partnerships, and the planet',
  },
    {
    img: require("../assets/icons/potential.png"),
    title: '  Potential',
 desc: 'Unlock your highest capabilities with our support',
  },
 



  // Add more as needed
];

const Career = () => {
      const settings = {
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 }
      }
    ]
  };
      const [expanded, setExpanded] = useState(false);
  return (
    <>
   <Container fluid className='career-banner-section'>
<Container className='career-banner-content-div'>

   </Container>
   </Container>

  <Container fluid className="career-message-section">
      <Container className="career-message-content-div">
        <div className="career-box">
          <div className="career-heading-wrapper">
            <h2 className="career-heading">Message from the Director's Desk</h2>
            <div className="heading-bar"></div>
          </div>
          <p className="career-description">
            At Alutuff ACP, our journey goes far beyond manufacturing Metal Composite Panels — it's about innovation, trust, and driving progress across the architectural and construction industries. With a solid foundation rooted in strong values and a vision to be a global leader, we champion quality, sustainability, and people-focused growth.
            <br /><br />
            {expanded && (
              <>
                From next-generation technologies to eco-conscious practices like zero-waste manufacturing and green certifications, we are proud of our relentless pursuit of excellence. Yet, our greatest strength lies in our people — the innovators, creators, and problem-solvers who bring our mission to life every day.
                <br /><br />
                We're not just building products. We're building possibilities — for a smarter, more sustainable world.
              </>
            )}
          </p>
          <div className="readmore-bar" onClick={() => setExpanded(!expanded)}>
            <span>{expanded ? "Read Less" : "Read More"}</span>
            {expanded ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        </div>

        {/* Duplicate box - Add your own heading/content here */}
        <div className="career-box">
          <div className="career-heading-wrapper">
            <h2 className="career-heading">Message from the HR Desk</h2>
            <div className="heading-bar"></div>
          </div>
          <p className="career-description">
          At Alutuff, we believe our people are the true catalysts of our success. The HR vision is simple — to cultivate a workplace that is professionally rewarding and personally meaningful.<br/> <br/>
          We invest in our team through continuous learning, open communication, and leadership development, ensuring that every individual is empowered to grow and thrive.
          {expanded && (
            <>
           We nurture a culture of transparency, innovation, and inclusivity where every voice matters. The HR Team at Alutuff believes in mantra "Employee's first" & hence we will always go extra mile for you to make our association productive & each milestone enjoyable.<br/> <br/>
        If you're seeking a workplace where your skills are celebrated, your ideas matter, and your growth is taken seriously — Alutuff is the place for you.<br/><br/>
        Enjoy the journey at Atutuff !
            </>
            )}
          </p>
            <div className="readmore-bar" onClick={() => setExpanded(!expanded)}>
            <span className='read-more'>{expanded ? "Read Less" : "Read More"}</span>
            {expanded ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        </div>
      </Container>
    </Container>

<div className='container' style={{width:"65%",height:"5px",backgroundColor:"#333333",borderRadius:"15px",marginTop:"2.5%"}}></div>
     <Container fluid className="career-center-card-section">
      <Container className="career-center-card">
        <h2 className="card-heading">Build The Future with Us</h2>
        <p className="card-description">
          At the core of Alutuff is a commitment to cutting-edge innovation and responsible practices. 
          Our premium ACP panels are crafted using world-class technologies that ensure exceptional 
          durability, weather resistance, and aesthetic appeal.
          <br /><br />
          As part of our sustainability journey, we adhere to global environmental benchmarks, 
          delivering products that are not only high-performing but also eco-conscious. 
          Whether it's redefining façade design or advancing interior solutions, we're always 
          setting new standards.
          <br /><br />
          Join us to be a part of a future-forward company where bold thinking meets real-world impact.
        </p>
      </Container>
    </Container>
    

        <Container fluid className="values-career-section">
          <div className='d-flex justify-content-center align-items-center mb-5 '>
        <p>OUR CORE VALUES</p>
      </div>
      <Slider {...settings} >
        {values.map((value, idx) => (
          <div className="values-career-card" key={idx}>
             <div className="icon-div">
    <img className='core-icons' src={value.img} alt={value.title} />
  </div>
            <h4>{value.title}</h4>
            <p>{value.desc}</p>
          </div>
        ))}
      </Slider>
    </Container>
<div className='container' style={{width:"65%",height:"5px",backgroundColor:"#333333",borderRadius:"15px",marginTop:"2.5%"}}></div>
         <Container fluid className="career-center-card-section">
      <Container className="career-center-card">
        <h2 className="card-heading">Life at Alutuff</h2>
        <p className='text-center'>Where People Drive Progress</p>
        <p className="card-description">
         At Alutuff, our people are at the heart of everything we do. We believe in fostering a collaborative, vibrant, and inclusive workplace where innovation thrives and every contribution matters.
          <br /><br />
         From meaningful projects to team celebrations, we ensure your journey with us is filled with growth, purpose, and recognition. Together, we build more than products — we build careers, communities, and a better tomorrow.
  </p>
      </Container>
    </Container>

   </>
  )
}

export default Career
