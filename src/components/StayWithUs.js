import React from 'react'
import BackgroundImage from '../assets/img-2.jpeg'
import { Link } from 'react-router-dom'
import "./StayWithUs.css"

const StayWithUs = () => {
  return (
 <div className="stay-with-section" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="stay-with-content">
       
        <h1>Step Into Quality, Step Into Success</h1>
        <Link to="/contact">
          <button className='stay-button'>
Become a Dealer
  <span className="stay-button-circle">
    <i className="fa fa-arrow-up"></i>
  </span>
</button>
</Link>
      </div>
    </div>
  )
}

export default StayWithUs
