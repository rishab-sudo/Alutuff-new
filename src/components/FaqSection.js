import React, { useState } from 'react';
import {Container} from "react-bootstrap"
import './FaqSection.css';

const faqs = [
  {
    question: 'What is Alutuff?',
    answer: 'Alutuff is a trusted name for Aluminium Composite Panels and Wall Panels across India.'
  },
  {
    question: 'Where are Alutuff panels used?',
    answer: 'Alutuff panels are widely used in both interior and exterior applications due to their durability and modern look.'
  },
  {
    question: 'What sizes are available?',
    answer: 'Alutuff panels are available in various sizes and thicknesses to suit different project requirements.'
  },
    {
    question: 'What sizes are available?',
    answer: 'Alutuff panels are available in various sizes and thicknesses to suit different project requirements.'
  },
    {
    question: 'What sizes are available?',
    answer: 'Alutuff panels are available in various sizes and thicknesses to suit different project requirements.'
  }
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
