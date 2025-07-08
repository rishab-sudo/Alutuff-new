import React from 'react'
import BackgroundImage from '../assets/img-2.jpeg'
import "./StayWithUs.css"

const StayWithUs = () => {
  return (
 <div className="stay-with-section" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="stay-with-content">
        <h1>Welcome to Our Site</h1>
        <h2>Your Success Starts Here</h2>
          <button className='stay-button'>
Let's Talk
  <span className="stay-button-circle">
    <i className="fa fa-arrow-up"></i>
  </span>
</button>
      </div>
    </div>
  )
}

export default StayWithUs
