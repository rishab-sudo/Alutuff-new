import React from 'react'
import HomeBanner from "../components/HomeBanner"
import SlidingImage from '../components/SlidingImage'
import OverlappingCards from "../components/OverlappingCards"
import Separate from '../components/Separate'
import BeforeAfterSlider from "../components/BeforeAfterSlider"
import StickySection from "../components/StickySection"
import FaqSection from '../components/FaqSection'
import StayWithUs from '../components/StayWithUs'
import HomeAbout from '../components/HomeAbout'
import WhyDifferent from '../components/WhyDifferent'
import HomeProducts from '../components/HomeProducts'


function Home() {
  return (
    <div>
    <HomeBanner/>
   
    <HomeAbout/>
    <HomeProducts/>
    {/* <WhyDifferent/> */}
      {/* <SlidingImage/> */}
   <OverlappingCards/>
   {/* <Separate/> */}
   <BeforeAfterSlider/>
   <StickySection/>
   <FaqSection/>
   <div style={{marginBottom:"-5%"}}>

<StayWithUs/>
   </div>
    </div>
  )
}

export default Home
