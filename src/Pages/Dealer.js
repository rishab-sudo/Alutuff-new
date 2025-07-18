import React from 'react';
import { Container } from 'react-bootstrap';
import ContactForm from "../components/ContactForm"
import './Dealer.css';
import Banner from '../components/Banner';
import bannerImage from '../assets/1400.jpg'
import { FaWarehouse, FaNetworkWired, FaIndustry, FaMoneyCheckAlt, FaHandshake, } from 'react-icons/fa';
import {   FaCheckCircle } from 'react-icons/fa';

import dealerImage from '../assets/about02.jpeg';

const DealerPage = () => {
  return (
    <>
      {/* Section 1: Image Left, Text Right */}
    <div className='w-100' >
          <Banner
            image={bannerImage}
            heading="Become A Dealer "
            subheading="Welcome to our website"
          />
        </div>

      {/* Section 2: Info Boxes and Table */}
      <Container fluid className="dealer-container-fluid section-two">
        <Container className="dealer-inner">
      <div className="dealer-box-wrapper d-flex flex-column flex-lg-row gap-4 mb-5">
  {/* Box 1: Who Can Apply */}
  <div className="dealer-box">
    <h5><FaHandshake className="icon" /> Who Can Apply?</h5>
    <ul className="dealer-list">
      <li><FaCheckCircle className="tick-icon" /> Established businesses with strong local market presence and proven track record</li>
      <li><FaCheckCircle className="tick-icon" /> Existing dealer/retailer network with experience in building materials</li>
      <li><FaCheckCircle className="tick-icon" /> Adequate warehouse/storage space for inventory management</li>
      <li><FaCheckCircle className="tick-icon" /> Commitment to long-term partnership and brand growth</li>
      <li><FaCheckCircle className="tick-icon" /> Financial stability and business acumen</li>
    </ul>
  </div>

  {/* Box 2: Why Partner with Alutuff */}
  <div className="dealer-box">
    <h5><FaWarehouse className="icon" /> Why Partner with Alutuff?</h5>
    <ul className="dealer-list">
      <li><FaCheckCircle className="tick-icon" /> Premium Brand Value: Industry-leading reputation for quality and innovation</li>
      <li><FaCheckCircle className="tick-icon" /> Comprehensive Product Portfolio: Extensive range of colors, textures, and finishes</li>
      <li><FaCheckCircle className="tick-icon" /> Dedicated Support: Marketing materials, technical training, and sales assistance</li>
      <li><FaCheckCircle className="tick-icon" /> Efficient Supply Chain: Nationwide logistics network for timely delivery</li>
      <li><FaCheckCircle className="tick-icon" /> Lucrative Business Model: Competitive pricing and attractive profit margins</li>
      <li><FaCheckCircle className="tick-icon" /> Growth Opportunities: Access to emerging markets and new product lines</li>
    </ul>
  </div>
</div>


          <div className="dealer-table">
            <h4 className="mb-4">Dealer Requirements</h4>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th>Requirement</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><FaWarehouse className="icon" /> Storage Facility</td>
                    <td>Minimum 1000 sq. ft. dedicated space for material storage and handling</td>
                  </tr>
                  <tr>
                    <td><FaNetworkWired className="icon" /> Business Network</td>
                    <td>Established presence in local market with dealer/retail connections</td>
                  </tr>
                  <tr>
                    <td><FaIndustry className="icon" /> Industry Experience</td>
                    <td>Minimum 2 years experience in building materials or hardware sector</td>
                  </tr>
                  <tr>
                    <td><FaMoneyCheckAlt className="icon" /> Financial Capability</td>
                    <td>Strong financial standing with capacity for inventory investment</td>
                  </tr>
                  <tr>
                    <td><FaHandshake className="icon" /> Brand Commitment</td>
                    <td>Dedication to promoting Alutuff brand and maintaining quality standards</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Container>

  <ContactForm variant="pageEnd" />


    </>
  );
};

export default DealerPage;
