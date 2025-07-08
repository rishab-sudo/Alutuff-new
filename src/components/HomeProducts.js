import React, { useState, useEffect } from 'react';
import './HomeProducts.css';

const productData = [
  { id: 1, category: 'WoodenPrime', image: require('../assets/home-about1.jpeg'), title: 'Project 1', description: 'Architecture Design' },
  { id: 2, category: 'Marble&Stone', image: require('../assets/home-about1.jpeg'), title: 'Project 2', description: 'Interior Design' },
  { id: 3, category: 'SandSeries', image: require('../assets/home-about1.jpeg'), title: 'Project 3', description: 'Creative Design' },
  { id: 4, category: 'RusticSeries', image: require('../assets/home-about1.jpeg'), title: 'Project 4', description: 'Construction Site' },
  { id: 5, category: 'Bold&Solid', image: require('../assets/home-about1.jpeg'), title: 'Project 5', description: 'Architecture Masterpiece' },
  { id: 6, category: 'Partitions', image: require('../assets/home-about1.jpeg'), title: 'Project 6', description: 'Elegant Interior' },
  { id: 7, category: 'WoodenPrime', image: require('../assets/home-about1.jpeg'), title: 'Project 7', description: 'Premium Look' },
  { id: 8, category: 'WoodenPrime', image: require('../assets/home-about1.jpeg'), title: 'Project 8', description: 'Cozy Feel' },
];

export default function HomeProducts() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [startIndex, setStartIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('forward');
  const [selectedImage, setSelectedImage] = useState(null);
  const [animationClass, setAnimationClass] = useState('');

  const categories = ['All', 'Wooden Prime', 'Marble & Stone', 'Sand Series', 'Rustic Series', 'Bold & Solid', 'Partitions'];

  const filteredProducts = selectedCategory === 'All'
    ? productData
    : productData.filter(product => product.category.replace(/\s|&/g, '') === selectedCategory.replace(/\s|&/g, ''));

  const currentProducts = filteredProducts.slice(startIndex, startIndex + 4);

  const handleSlide = () => {
    if (startIndex + 4 < filteredProducts.length) {
      setSlideDirection('forward');
      setAnimationClass('forward');
      setStartIndex(prev => prev + 4);
    } else {
      setSlideDirection('backward');
      setAnimationClass('backward');
      setStartIndex(prev => Math.max(prev - 4, 0));
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => setAnimationClass(''), 500);
    return () => clearTimeout(timeout);
  }, [animationClass]);

  return (
    <div className="homeproduct-section">
      <h2>Our Project</h2>
      <p>Our Last Projects</p>

<div className="filter-buttons">
  {categories.map(category => (
    <button
      key={category}
      className={selectedCategory === category ? 'active' : ''}
      onClick={() => {
        setSelectedCategory(category);
        setStartIndex(0);
        setSlideDirection('forward');
      }}
    >
      {category}
    </button>
  ))}
</div>
<div className="swipe-indicator">
  <svg viewBox="0 0 24 24">
    <path d="M10 6L16 12L10 18" />
  </svg>
</div>

      <div className={`product-cards ${animationClass}`}>
        {currentProducts.map(product => (
          <div key={product.id} className="product-card" onClick={() => setSelectedImage(product.image)}>
            <img src={product.image} alt={product.title} />
            <div className="overlay">
              <h4>{product.title}</h4>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length > 4 && (
        <div className="view-more">
          <button onClick={handleSlide}>
            {startIndex + 4 < filteredProducts.length ? 'View More' : 'Back'}
          </button>
        </div>
      )}

      {selectedImage && (
        <div className="image-popup" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Full View" />
        </div>
      )}
    </div>
  );
}
