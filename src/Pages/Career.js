import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import { FaChevronDown, FaChevronUp, FaCheckCircle } from "react-icons/fa";
import Slider from 'react-slick';
import Testimonial from "../components/Testimonial"
import { FaRocket, FaLeaf, FaCogs, FaUsers } from 'react-icons/fa';
import Banner from '../components/Banner';
import bannerImage from '../assets/1400.jpg'
import CareerForm from '../components/CareerForm';
import OpenPosition from "../components/OpenPosition"
import "./Career.css"

const boxData = [
  {
    title: "Limitless Growth Opportunities.",
    description: "Learn, lead, and grow in a high-impact environment.",
  },
  {
    title: "Culture of Innovation.",
    description: "Your ideas drive transformation.",
  },
  {
    title: "Supportive Leadership.",
    description: "Be mentored by leaders who empower and inspire.",
  },
  {
    title: "Ownership and Impact.",
    description: "Take charge, drive results, and shape your journey.",
  },
  {
    title:
      "Work-Life Integration at Alutuff.",
    description:
      "At Alutuff, we understand the importance of a healthy work-life balance. Our flexible policies and supportive culture help employees harmonize their personal and professional lives. We foster an environment where well-being and productivity go hand in hand.",
  },
  {
    title: "Reward and Recognition.",
    description:
      "We believe in celebrating excellence. Alutuff's reward and recognition programs are designed to appreciate the efforts of our people, motivating them to reach new heights. Every achievement, big or small, is valued and acknowledged.",
  },
];

const benefitsData = [
  {
    title: "Medical Insurance",
    description: "At Alutuff, we prioritize the well-being of our employees because we believe their health is just as important as their performance."
  },
  {
    title: "Training and Development",
    description: "Our structured programs—led by experts—focus on enhancing communication, sales, and personality development skills."
  },
  {
    title: "Team Building Activities",
    description: "We foster camaraderie through team-building games, outings, lunches, and contests to create a collaborative culture."
  },
  {
    title: "Career Growth Opportunities",
    description: "We support internal promotions and long-term growth through mentorship and structured development paths."
  }
];

const testimonialsData = [
  {
    name: "Amit Sharma",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review: "The product quality is top-notch. I've been using it for months now without any issues. Highly recommend!",
  },
  {
    name: "Priya Mehta",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review: "Excellent customer service and on-time delivery. A trustworthy brand with years of experience.",
  },
  {
    name: "Ravi Kumar",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    review: "They offer unmatched quality in this segment. Will definitely come back for future projects.",
  },
  {
    name: "Sneha Agarwal",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    review: "Amazing experience! The team was very cooperative and guided us at every step.",
  },
  {
    name: "Vikas Jain",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
    review: "Reliable and consistent. They have delivered on their promises every time we've worked with them.",
  },
  {
    name: "Neha Kapoor",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
    review: "Superb design and long-lasting build quality. I would recommend them to anyone looking for premium work.",
  },
];

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
    const [openIndex, setOpenIndex] = useState(null);

  const toggleBox = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
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
      {/* Banner Section */}
  <div className='w-100' >
          <Banner
            image={bannerImage}
            heading="Careers At Alutuff "
            subheading="Welcome to our website"
          />
        </div>

     {/*  */}

  <Container fluid className="career-message-section">
      <Container className="career-message-content-div">
        <div className="career-box">
          <div className="career-heading-wrapper">
            <h2 className="career-heading">Message from the Director's Desk</h2>
            <div className="heading-bar"></div>
          </div>
          <p className="page-text">
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
          <p className="page-text">
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
        <div className='text-center mx-auto'>
            <h2 className="page-heading text-center mx-auto" >Build The Future with Us</h2>
        </div>
      
        <p className="page-text">
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
        <p className="page-heading">OUR CORE VALUES</p>
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
          <div className='text-center mx-auto'>
        <h2 className="page-heading text-center mx-auto" >Life at Alutuff</h2>
        </div>
        <p className='text-center page-text'>Where People Drive Progress</p>
        <p className="page-text">
         At Alutuff, our people are at the heart of everything we do. We believe in fostering a collaborative, vibrant, and inclusive workplace where innovation thrives and every contribution matters.
          <br /><br />
         From meaningful projects to team celebrations, we ensure your journey with us is filled with growth, purpose, and recognition. Together, we build more than products — we build careers, communities, and a better tomorrow.
  </p>
      </Container>
    </Container>

      <section className="benefits-section">
  
      <div className="benefits-overlay">
                     <div style={{margin:"auto"}}>
        <h2 className="page-heading benefit-heading" >Benefit & Perks</h2>
        </div>
        <div className="benefits-wrapper">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="benefits-box">
              <h3 className="benefits-title">{benefit.title}</h3>
              <p className="benefits-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

        <div className="whywork-section">
      <div className="text-center">
        <h2 className="page-heading">Why Work With Alutuff?</h2>
      </div>
      <p className="whywork-description">
        At Alutuff, we don't just offer jobs — we build careers with purpose and passion.
        As a dynamic, fast-growing organization, here's what you can expect:
      </p>

 <div className="whywork-grid">
        {boxData.map((item, index) => (
          <div className="info-box" key={index}>
            <div className="info-box-header" onClick={() => toggleBox(index)}>
              <div className="header-content">
                <FaCheckCircle className="icon" />
                <span className="header-text">{item.title}</span>
              </div>
              <div className="right-icon">
                {openIndex === index ? (
                  <FaChevronUp className="dropdown-icon" />
                ) : (
                  <FaChevronDown className="dropdown-icon" />
                )}
              </div>
            </div>

            {openIndex === index && (
              <div className="info-box-description">{item.description}</div>
            )}
          </div>
        ))}
      </div>
    </div>
 
      <Testimonial testimonials={testimonialsData} />
<OpenPosition/>

<CareerForm className="mt-3"/>
  

   </>
  )
}

export default Career
