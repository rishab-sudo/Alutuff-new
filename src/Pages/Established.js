import React from 'react'
import { Container } from 'react-bootstrap'
import "./Established.css"
import  PieChart  from '../components/PieChart'
import bannerImage from "../assets/banner-bg.jpeg"
import Banner from '../components/Banner'

const Established = () => {
  return (
    <>

     <div className='w-100' >
          <Banner
            image={bannerImage}
            heading="ESTABLISHED EXELLENCE "
            subheading="Welcome to our website"
          />
        </div>


<Container fluid className='legacy-section '>
  <div className='d-flex justify-content-center align-items-center mb-5 '>
<p className='page-heading'>ESTABLISHED EXCELLENCE</p>
  </div>
<Container className='legacy-content-div'>
<div className='page-text legacy-content'>
  <p>
    Ashoka foam is one of the leading groups of companies in the field of Home Furnishing since 1978. An ISO 9001:2000 and 
    ISO 140001 certified group, we deliver unparalleled quality in Rubberized Coir Mattresses, Polyurethane foam, HDPE/PP woven bags,
   Tarpaulin Material, Plastic Molded Furniture Spring Mattress from our manufacturing division equipped with all modern infrastructural facilities.
   </p>
   <p>
    Equipped with 1200 skilled manpower across our 6 manufacturing units spread over 5 lac Sq.Ft. area, the Company's diversified interests are aptly supported 
    by the latest machinery and in-house R&D facility. And this has helped us achieve a turnover of 1000 million rupees along with the trust of our clients. Our state-of-the-art
     manufacturing facilities and unmatched world-class quality has allowed us to carve a niche for our products in the worldwide markets. Ashoka Foam products are certified in accordance with Indian
      & American Standards, the most exhaustive & global expressions for home furnishings.
     </p>
     <p>
      Today, having more than 5000 dealers in India and exporting to 3 countries, we are rapidly becoming synonymous to quality & trust. The marketing strategy and pricing policies have put the 
      Company one step ahead of the competition. We are in the process of opening a warehouse in Pune, Mumbai, Nagpur, Indore, Bhopal, 
      Kolkata, Bhuvaneshwar, Chennai, Bangalore, Calicut and many more cities for expeditious supplies.
     </p>
<p>
  Committed to latest technology and continued innovation, Ashoka Foam introduces Ahutuff as a truly international quality Aluminium Composite Panels. Aluminium Composite Panels are now 
  recognized as an indispensable element in modern infrastructure. Extensive use of these panels in various applications has revolutionized the construction industry. With their numerous 
  advantages, Alutuff panels offer you a win-win solution for your space, making it creating the best impact and an everlasting impression
</p>
</div>

<div className='business-entity-wrapper '>
  <p>Alutuff Composite Panels</p>
  <p>Alutuff Wood Plastic Composite Panels</p>
  <p>Himalaya Plastics & Molded Furniture</p>
  <p>Florance P.U. Foam</p>
  <p>Ashoka Expanded Polyethylene</p>
  <p>Ashoka Tarpaulin and HDPE Bags</p>
</div>
</Container>
</Container>

 <Container className='busniss-unit-card-section'>
      <div className='d-flex justify-content-center align-items-center mb-5 '>
        <p className='page-heading'>ESTABLISHED EXCELLENCE</p>
      </div>
      <Container className='busniss-unit-card-wrapper'>
        <div className="business-unit-card">
          <p className="card-heading">Goel’s Coir Foam India Pvt. Ltd.</p>
          <p className="card-point">Coir Mattress</p>
        </div>

        <div className="business-unit-card">
          <p className="card-heading">Ashoka P.U. Foam India Pvt. Ltd.</p>
          <p className="card-point">PU Foam/ Coir mattresses</p>
        </div>

        <div className="business-unit-card">
          <p className="card-heading">Ashoka P.U. Foam India Pvt. Ltd.</p>
          <p className="card-point">Tarpaulin & Woven Sacks</p>
        </div>

        <div className="business-unit-card">
          <p className="card-heading">Humble Health Care.</p>
          <p className="card-point">Pharmaceuticals</p>
        </div>

        <div className="business-unit-card">
          <p className="card-heading">Ashoka Foam Multiplast Limited.</p>
          <p className="card-point">Aluminium Composite Panel Sheets/AHPL/FR Rated ACP</p>
          <p className="card-point">Alu. Honeycomb/Alu. Corrugated Panel</p>
          <p className="card-point">Plastic Molded Furniture</p>
          <p className="card-point">Spring mattresses</p>
        </div>

        <div className="business-unit-card business-unit-card4">
          <p className="card-heading">Ashoka Foam Private Limited.</p>
          <p className="card-point">WPC/PVC Panels & Partitions</p>
        </div>
      </Container>
    </Container>

    <Container className='road-map-section'>
        <div className='d-flex justify-content-center align-items-center  '>
        <p className='page-heading'>A Breif History</p>
      </div>
      <Container className='road-map-content-div'>
         <img className='road-map-img' src={require("../assets/road-map-alutuff (1).jpeg")} alt=""/>
      </Container>
    </Container>

    <Container fluid>
     <PieChart/>
    </Container>
</>
  )
}

export default Established
