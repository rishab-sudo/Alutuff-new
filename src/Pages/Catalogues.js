import React from 'react'
import HomeProducts from '../components/HomeProducts'
import { Container } from 'react-bootstrap'
import Banner from '../components/Banner';
    import  bannerImage from "../assets/banner-bg.jpeg"

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

</>
  )
}

export default Catalogues
