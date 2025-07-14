import React, { useState, useRef } from "react";
import "./BeforeAfterSlider.css";

import beforeImage from "../assets/alutuff-demo-img1.jpeg"; // Same scene, original color
import afterImage from "../assets/alutuff-demo-img2.jpeg"; // Same scene, modified color
import { Container } from "react-bootstrap";

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleDrag = (e) => {
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    let position = ((e.clientX - rect.left) / rect.width) * 100;

    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  return (
    <Container fluid className="Before-after-section">
      <h1 className="page-heading">Before & After Color Change</h1>

      <div
        className="slider-container"
        ref={containerRef}
        onMouseMove={(e) => e.buttons === 1 && handleDrag(e)} // Drag functionality
        onTouchMove={(e) => handleDrag(e.touches[0])} // Mobile drag
        onClick={(e) => handleDrag(e)} // ⭐ Click functionality added here
      >
        {/* After Image fully visible */}
        <img src={afterImage} alt="After" className="slider-image" />

        {/* Before Image clipped dynamically */}
        <img
          src={beforeImage}
          alt="Before"
          className="slider-image slider-top"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        />

        {/* Slider Handle */}
        <div
          className="slider-handle"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={(e) => handleDrag(e)}
          onTouchStart={(e) => handleDrag(e.touches[0])}
        />
      </div>
    </Container>
  );
};

export default BeforeAfterSlider;
