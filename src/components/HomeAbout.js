import React from 'react';
import { Container } from 'react-bootstrap';
import "./HomeAbout.css";

export default function HomeAbout() {
  return (
    <Container fluid className="home-about-section">
      <Container className="home-about-content-div">
       <div className='home-about-text-div'>
        <p>About US</p>
        <p>We Build Our Projects With Your<br/> Dreams Project And Ideas.</p>
        <p>Consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusimod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrixercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehei voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.Uerert enim ad minim veniam, quis nostrixercitation.</p>
        <button className='pink-button'>View More</button>
        </div>

        <div className='home-about-img1-div'>
            <img className='home-about-img1' src={require("../assets/home-about1.jpeg")} alt="home-about"/>
        </div>
      </Container>
    </Container>
  );
}

