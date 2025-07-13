import React, { useRef, useEffect, useState } from 'react';
import './StickySection.css';

const StickySection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const paraRefs = useRef([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    require('../assets/img-2.jpeg'),
    require('../assets/img-3.jpeg'),
    require('../assets/img-4.jpeg'),
    require('../assets/img-5.jpeg'),
  ];

  const paragraphs = [
    'At Alutuff, every panel is crafted using advanced technology and strict quality controls, ensuring unmatched durability, flawless finishes, and performance that stands strong in every climate.',
    'We believe one size doesn’t fit all. From textures to thickness, Alutuff panels offer flexible options tailored to match your design intent, project needs, and creative aspirations.',
    'With over a decade of experience and a nationwide footprint, Alutuff combines global standards with Indian innovation, serving architects and developers who demand excellence, reliability, and value.',
    'We don’t just manufacture materials, we enable possibilities. Our commitment to safety, sustainability, and customer-first thinking helps us deliver more than panels; we deliver project confidence.',
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!paraRefs.current || !imageRef.current) return;

      const imageRect = imageRef.current.getBoundingClientRect();
      const imageCenter = imageRect.top + imageRect.height / 2;

      let closestIndex = 0;
      let smallestDistance = Infinity;

      paraRefs.current.forEach((para, index) => {
        if (para) {
          const paraRect = para.getBoundingClientRect();
          const paraCenter = paraRect.top + paraRect.height / 2;

          const distance = Math.abs(paraCenter - imageCenter);

          if (distance < smallestDistance) {
            smallestDistance = distance;
            closestIndex = index;
          }
        }
      });

      if (closestIndex !== currentImageIndex) {
        setCurrentImageIndex(closestIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentImageIndex]);

  return (
    <>
      {/* Desktop View */}
      <div className="sticky-scroll-wrapper" ref={sectionRef}>
        <div className="sticky-scroll-container">
          <div className="text-section" ref={textRef}>
            <div className="para-wrapper">
              {paragraphs.map((text, index) => (
                <p
                  key={index}
                  ref={(el) => (paraRefs.current[index] = el)}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
          <div className="image-section">
            <img
              ref={imageRef}
              src={images[currentImageIndex]}
              alt="Sticky Example"
            />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="mobile-scroll-wrapper">
        {images.map((img, index) => (
          <div className="mobile-item" key={index}>
            <p>{paragraphs[index]}</p>
            <img src={img} alt={`Mobile ${index}`} />
          </div>
        ))}
      </div>
    </>
  );
};

export default StickySection;
