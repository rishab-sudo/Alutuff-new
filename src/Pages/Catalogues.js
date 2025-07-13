import React from 'react'
import HomeProducts from '../components/HomeProducts'
import { Container } from 'react-bootstrap'
import Banner from '../components/Banner';
    import  bannerImage from "../assets/banner-bg.jpeg"
import QuoteBox from '../components/Quote';

const Catalogues = () => {
  return (
 <>
          {/* Banner Section */}
      <div className='w-100' >
              <Banner
                image={bannerImage}
                heading="Catologues"
                subheading="Welcome to our website"
              />
            </div>


<Container fluid >
<HomeProducts/>
</Container>

<div className='w-100'>
<QuoteBox/>
</div>
</>
  )
}

export default Catalogues
