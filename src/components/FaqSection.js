import React, { useState } from 'react';
import {Container} from "react-bootstrap"
import './FaqSection.css';

const faqs = [
  {
    question: ' Where can Alutuff panels be used?',
    answer: 'Alutuff panels are ideal for both interior and exterior use—like facades, signage, ceilings, partitions, and wall cladding in homes, offices, and commercial spaces.'
  },
  {
    question: 'Are Alutuff panels fire and weather resistant?',
    answer: 'Yes, Alutuff panels are engineered to be fire-retardant and weather-resistant, offering long-term durability in all environmental conditions.'
  },
  {
    question: ' What finishes and textures are available?',
    answer: 'Alutuff panels come in a wide variety of textures and looks, including wooden, metallic, matte, gloss, marble, and custom 3D decorative finishes.'
  },
    {
    question: 'What sizes and thicknesses do Alutuff panels come in?',
    answer: 'Panels are available in multiple sizes like 1220×2440mm, 1220×3050mm, and thicknesses from 3mm to 6mm, with custom sizes available on request.'
  },

];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse if already open
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <Container className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFaq(index)}>
            <span>{faq.question}</span>
            <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
          </div>
          <div className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default FaqSection;
