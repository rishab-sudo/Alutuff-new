import React, { useState } from 'react';
import productData from "../productData";
import './HomeProducts.css';

export default function HomeProducts() {
  const [selectedCategory, setSelectedCategory] = useState('Wooden Prime'); // default other than 'All'
  const [visibleRowCount, setVisibleRowCount] = useState(2);
  const [rowAnimations, setRowAnimations] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['Wooden Prime', 'Marble & Stone', 'Sand Series', 'Rustic Series', 'Bold & Solid', 'Partitions'];

  const filteredProducts = productData.filter(product =>
    product.category.replace(/\s|&/g, '') === selectedCategory.replace(/\s|&/g, '')
  );

  const productRows = [];
  for (let i = 0; i < filteredProducts.length; i += 4) {
    productRows.push(filteredProducts.slice(i, i + 4));
  }

  const isMobile = window.innerWidth <= 576;

  const handleToggleRow = () => {
    const totalRows = productRows.length;

    if (isMobile) {
      const rowContainer = document.querySelector('.mobile-slider');
      if (visibleRowCount < totalRows) {
        setVisibleRowCount(visibleRowCount + 1);
        setTimeout(() => {
          rowContainer.scrollBy({ left: rowContainer.offsetWidth, behavior: 'smooth' });
        }, 50);
      } else {
        setVisibleRowCount(2);
        rowContainer.scrollTo({ left: 0, behavior: 'smooth' });
      }
    } else {
      if (visibleRowCount < totalRows) {
        setRowAnimations({ [visibleRowCount]: 'slide-in' });
        setVisibleRowCount(visibleRowCount + 1);
      } else {
        const animations = {};
        for (let i = 1; i < totalRows; i++) {
          animations[i] = 'slide-out-left';
        }
        setRowAnimations(animations);
        setTimeout(() => {
          setVisibleRowCount(2);
          setRowAnimations({});
        }, 500);
      }
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleRowCount(2);
    setRowAnimations({});
  };

  return (
    <div className="homeproduct-section">
      <p className='page-heading'>OUR LATEST PRODUCTS</p>

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

      {!isMobile ? (
        productRows.slice(0, visibleRowCount).map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`product-cards ${rowIndex > 0 ? 'second-row' : ''} ${rowAnimations[rowIndex] || ''}`}
          >
            {row.map(product => (
              <div key={product.id} className="product-card" onClick={() => setSelectedImage(product.image)}>
                <img src={product.image} alt={product.title} />
                <div className="overlay">
                  <h4>{product.title}</h4>
                  <p className='text-white'>{product.description}</p>
                  <p className='text-white'>{product.text}</p>
                </div>
              </div>
            ))}
          </div>
        ))
      ) : (
        <div className="mobile-slider">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card" onClick={() => setSelectedImage(product.image)}>
              <img src={product.image} alt={product.title} />
              <div className="overlay">
                <h4>{product.title}</h4>
                <p>{product.description}</p>
                <p>{product.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {productRows.length > 2 && (
        <div className="view-more">
          <button onClick={handleToggleRow}>
            {visibleRowCount === productRows.length ? 'View Less' : 'View More'}
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
