import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CareerRealLifeSlider.css";

// Media Array
const lifeMedia = [
  { src: require("../assets/career-real-images/1.png"), alt: "1", type: "image", category: "Birthday" },
  { src: require("../assets/career-real-images/4.png"), alt: "4", type: "image", category: "Birthday" },
  { src: require("../assets/career-real-images/8.png"), alt: "8", type: "image", category: "Birthday" },
{ src: require("../assets/career-real-images/3.png"), alt: "1", type: "image", category: "Birthday" },
{ src: require("../assets/career-real-images/5.png"), alt: "1", type: "image", category: "Birthday" },
{ src: require("../assets/career-real-images/6.png"), alt: "1", type: "image", category: "Birthday" },
{ src: require("../assets/career-real-images/7.png"), alt: "1", type: "image", category: "Birthday" },


  { src: require("../assets/career-real-videos/video1.mp4"), alt: "Event Video 1", type: "video", category: "Events" },
  { src: require("../assets/career-real-videos/video2.mp4"), alt: "Event Video 2", type: "video", category: "Events" },

  { src: require("../assets/career-real-videos/video1.mp4"), alt: "Event Video 1", type: "video", category: "Training" },
  { src: require("../assets/career-real-videos/video2.mp4"), alt: "Event Video 2", type: "video", category: "Training" },
];

const CareerRealLifeSlider = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const sliderRef = useRef(null); // ref to control slider

  // Filtered media
  const getFilteredMedia = () => {
    return selectedCategory === "All"
      ? lifeMedia
      : lifeMedia.filter((item) => item.category === selectedCategory);
  };

  const filteredMedia = getFilteredMedia();

  // Slider settings
  const slidesToShow = Math.min(3, filteredMedia.length);

  const lifeSliderSettings = {
    infinite: filteredMedia.length > slidesToShow,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(3, filteredMedia.length),
          infinite: filteredMedia.length > 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: Math.min(2, filteredMedia.length),
          infinite: filteredMedia.length > 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          infinite: filteredMedia.length > 1,
        },
      },
    ],
  };

  // Pause autoplay when video plays
  const handleVideoPlay = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  // Resume autoplay after video ends
  const handleVideoEnded = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };

  return (
    <Container fluid className="career-lyfAt-card-section">
      <Container className="career-lyfAt-card">
        <div className='text-center mx-auto'>
          <h2 className="page-heading text-center mx-auto">Life at Alutuff</h2>

          {/* Filter Buttons */}
          <div className="lyf-filter-buttons mt-0">
            {["All", "Birthday", "Events", "Training"].map((cat) => (
              <button
                key={cat}
                className={`lyf-filter-btn ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Slick Carousel */}
        <Slider {...lifeSliderSettings} ref={sliderRef}>
          {filteredMedia.map((item, idx) => (
            <div key={idx} className="life-slide">
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`Life at Alutuff ${item.alt}`}
                  className="life-slide-img"
                />
              ) : (
                <div className='life-slide-video-div'>
                <video
                  controls
                  className="life-slide-video"
                  onPlay={handleVideoPlay}
                  onEnded={handleVideoEnded}
                >
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </Container>
    </Container>
  );
};

export default CareerRealLifeSlider;
