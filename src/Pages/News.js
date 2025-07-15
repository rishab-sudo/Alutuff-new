import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../components/Banner';
import bannerImage from "../assets/banner-bg.jpeg"
import "./News.css"

const News = () => {
  useEffect(() => {
    // Load Facebook SDK
    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: 'v19.0',
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);

  return (

    <>
      <div className='w-100' >
              <Banner
                image={bannerImage}
                heading="News & Event "
                subheading="Welcome to our website"
              />
            </div>
   
<Container fluid className='news-section'>
  <div className='d-flex justify-content-center align-items-center'>
    <p className='page-heading'>A Breif History</p>
  </div>

  {/* FB Page Embed */}
  <div className='news-container'>
    <div
      className="fb-page"
      data-href="https://www.facebook.com/alutuffpanels"
      data-tabs="timeline"
      data-width="500"
      data-height="700"
      data-small-header="false"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="true"
    >
      <blockquote
        cite="https://www.facebook.com/alutuffpanels"
        className="fb-xfbml-parse-ignore"
      >
        <a href="https://www.facebook.com/alutuffpanels">Alutuff Panels</a>
      </blockquote>
    </div>
  </div>
</Container>

      </>
  );
};

export default News;
