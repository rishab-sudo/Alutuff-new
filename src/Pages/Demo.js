import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./Demo.css"; // Keep styles separate

// Example Data (require from assets)
const stateData = {
  UTTARPRADESH: [
    require("../assets/projects/PR 1.jpg"),
    require("../assets/projects/PR 1.jpg"),
    require("../assets/projects/PR 1.jpg"),
  ],
  MADHYAPRADESH: [
    require("../assets/projects/PR 1.jpg"),
    require("../assets/projects/PR 1.jpg"),
    require("../assets/projects/PR 1.jpg"),
  ],
  GUJRAT: [
    require("../assets/projects/PR 1.jpg"),
    require("../assets/projects/PR 1.jpg"),
    require("../assets/projects/PR 1.jpg"),
  ],
  HARYANA: [
    require("../assets/projects/PR 1.jpg"),
    require("../assets/projects/PR 1.jpg"),
    require("../assets/projects/PR 1.jpg"),
  ],
  CHHATTISGARH: [
    require("../assets/projects/PR 1.jpg"),
    require("../assets/projects/PR 1.jpg"),
    require("../assets/projects/PR 1.jpg"),
  ],
  WESTBANGOL: [
    require("../assets/projects/PR 1.jpg"),
    require("../assets/projects/PR 1.jpg"),
    require("../assets/projects/PR 1.jpg"),
  ]
};

const Demo = () => {
  const states = Object.keys(stateData);
  const [selectedState, setSelectedState] = useState(states[0]);

  return (
    <div className="slider-container">
      {/* Filter Buttons */}
      <div className="filter-buttons">
        {states.map((state) => (
          <button
            key={state}
            className={state === selectedState ? "active" : ""}
            onClick={() => setSelectedState(state)}
          >
            {state}
          </button>
        ))}
      </div>

      {/* Slider */}
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={3}
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
          slideShadows: false
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="state-swiper"
      >
        {stateData[selectedState].map((img, idx) => (
          <SwiperSlide key={idx}>
            <img src={img} alt={`slide-${idx}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Demo;
