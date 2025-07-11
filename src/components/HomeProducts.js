import React, { useState } from 'react';
import './HomeProducts.css';

const productData = [
  { id: 1, category: 'WoodenPrime', image: require('../assets/SubProducts/ATF-107-WALNUT.jpg'), title: 'Project 1', description: 'Architecture Design' },
  { id: 2, category: 'WoodenPrime', image: require('../assets/SubProducts/ATF119-RUSTIC-WOOD.jpg'), title: 'Project 2', description: 'Interior Design' },
  { id: 3, category: 'WoodenPrime', image: require('../assets/SubProducts/ATF123-ROYAL-TEAK.jpg'), title: 'Project 3', description: 'Creative Design' },
  { id: 4, category: 'WoodenPrime', image: require('../assets/SubProducts/ATF124-NATURAL-TEAK.jpg'), title: 'Project 4', description: 'Construction Site' },
  { id: 5, category: 'WoodenPrime', image: require('../assets/SubProducts/ATF128-DARK-WANGY.jpg'), title: 'Project 5', description: 'Architecture Masterpiece' },
  { id: 6, category: 'WoodenPrime', image: require('../assets/SubProducts/ATF132-AMAZONIAN-FOREST.jpg'), title: 'Project 6', description: 'Elegant Interior' },
  { id: 7, category: 'WoodenPrime', image: require('../assets/SubProducts/ATF-142-BALINESE-TEAK.jpg'), title: 'Project 7', description: 'Premium Look' },
  { id: 8, category: 'WoodenPrime', image: require('../assets/SubProducts/ATF-144-OAK-PINE.jpg'), title: 'Project 8', description: 'Cozy Feel' },
  { id: 9, category: 'WoodenPrime', image: require('../assets/SubProducts/ATF-145-PREMIUM-MAGHONY.jpg'), title: 'Project 9', description: 'Cozy Feel' },
  { id: 10, category: 'WoodenPrime', image: require('../assets/SubProducts/ATF101-ROSE-WOOD.jpg'), title: 'Project 10', description: 'Cozy Feel' },
];

export default function HomeProducts() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleRowCount, setVisibleRowCount] = useState(1);
  const [rowAnimations, setRowAnimations] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Wooden Prime', 'Marble & Stone', 'Sand Series', 'Rustic Series', 'Bold & Solid', 'Partitions'];

  const filteredProducts = selectedCategory === 'All'
    ? productData
    : productData.filter(product =>
        product.category.replace(/\s|&/g, '') === selectedCategory.replace(/\s|&/g, '')
      );

  const productRows = [];
  for (let i = 0; i < filteredProducts.length; i += 4) {
    productRows.push(filteredProducts.slice(i, i + 4));
  }

 const handleToggleRow = () => {
  const totalRows = productRows.length;

  if (visibleRowCount < totalRows) {
    setRowAnimations({ [visibleRowCount]: 'slide-in' });
    setVisibleRowCount(visibleRowCount + 1);
  } else {
    // Animate all rows except the first
    const animations = {};
    for (let i = 1; i < totalRows; i++) {
      animations[i] = 'slide-out-left';
    }
    setRowAnimations(animations);

    // After animation, reset to show only first row
    setTimeout(() => {
      setVisibleRowCount(1);
      setRowAnimations({});
    }, 500); // match your animation duration
  }
};


  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleRowCount(1);
    setRowAnimations({});
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
            onClick={() => handleCategoryChange(category)}
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

      {/* Render product rows dynamically with animations */}
      {productRows.slice(0, visibleRowCount).map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`product-cards ${rowIndex > 0 ? 'second-row' : ''} ${rowAnimations[rowIndex] || ''}`}
        >
          {row.map(product => (
            <div key={product.id} className="product-card" onClick={() => setSelectedImage(product.image)}>
              <img src={product.image} alt={product.title} />
              <div className="overlay">
                <h4>{product.title}</h4>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* View More / View Less */}
{filteredProducts.length > 4 && (
  <div className="view-more">
    <button onClick={handleToggleRow}>
      {visibleRowCount === productRows.length ? 'View Less' : 'View More'}
    </button>
  </div>
)}


     

      {/* Image Preview */}
      {selectedImage && (
        <div className="image-popup" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Full View" />
        </div>
      )}
    </div>
  );
}
