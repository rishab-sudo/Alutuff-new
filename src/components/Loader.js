// components/Loader.js
import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="dot red"></div>
      <div className="dot grey"></div>
      <div className="dot red"></div>
    </div>
  );
};

export default Loader;
