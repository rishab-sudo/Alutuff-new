import React from 'react';
import Slider from 'react-slick';
import './Projects.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
  {
    image: require('../assets/about02.jpeg'),
    title: 'Project One',
    description: 'This is the first project.',
  },
  {
    image: require('../assets/img-2.jpeg'),
    title: 'Project Two',
    description: 'This is the second project.',
  },
  {
    image: require('../assets/about02.jpeg'),
    title: 'Project Three',
    description: 'This is the third project.',
  },
];

const ProjectSlider = () => {
const settings = {
  centerMode: true, // keeps equal spacing on sides
  centerPadding: '0px',
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 2500,
  infinite: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '0px',
      },
    },
  ],
};



  return (
    <div className="projects-wrapper">
      <Slider {...settings} className="project-slick-slider">
        {projects.map((item, index) => (
          <div key={index} className="projects-card">
            <img className="project-slider-img" src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectSlider;
