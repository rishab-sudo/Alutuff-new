import React, { useState } from 'react';
import './HomeProducts.css';

const productData = [
  { id: 1, category: 'WoodenPrime', image: require('../assets/home-about1.jpeg'), title: 'Project 1', description: 'Architecture Design' },
  { id: 2, category: 'Marble&Stone', image: require('../assets/home-about1.jpeg'), title: 'Project 2', description: 'Interior Design' },
  { id: 3, category: 'SandSeries', image: require('../assets/home-about1.jpeg'), title: 'Project 3', description: 'Creative Design' },
  { id: 4, category: 'RusticSeries', image: require('../assets/home-about1.jpeg'), title: 'Project 4', description: 'Construction Site' },
  { id: 5, category: 'Bold&Solid', image: require('../assets/home-about1.jpeg'), title: 'Project 5', description: 'Architecture Masterpiece' },
  { id: 6, category: 'Partitions', image: require('../assets/home-about1.jpeg'), title: 'Project 6', description: 'Elegant Interior' },

  // Add more products if needed
];

export default function HomeProducts() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Wooden Prime', 'Marble & Stone', 'Sand Series', 'Rustic Series','Bold & Solid','Partitions'];

  const filteredProducts = selectedCategory === 'All'
    ? productData
    : productData.filter(product => product.category === selectedCategory);

  const handleViewMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <div className="homeproduct-section">
      <h2>Our Project</h2>
      <p>Our Last Projects</p>

      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => { setSelectedCategory(category); setVisibleCount(4); }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-cards">
        {filteredProducts.slice(0, visibleCount).map(product => (
          <div key={product.id} className="product-card" onClick={() => setSelectedImage(product.image)}>
            <img src={product.image} alt={product.title} />
            <div className="overlay">
              <h4>{product.title}</h4>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < filteredProducts.length && (
        <div className="view-more">
          <button onClick={handleViewMore}>View More</button>
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
