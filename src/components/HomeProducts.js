import React, { useState, useEffect, useRef } from 'react';

import productData from "../productData";
import './HomeProducts.css';

export default function HomeProducts() {
  const [selectedCategory, setSelectedCategory] = useState('Wooden Prime');
  const [visibleRowCount, setVisibleRowCount] = useState(2);
  const [rowAnimations, setRowAnimations] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const rowContainerRef = useRef(null); 

const [mobileScrollIndex, setMobileScrollIndex] = useState(0); 

  // 🔄 Update isMobile when window resizes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categories = ['Wooden Prime', 'Marble & Stone', 'Sand Series', 'Rustic Series', 'Bold & Solid', 'Partitions'];

  const filteredProducts = productData.filter(product =>
    product.category.replace(/\s|&/g, '').toLowerCase() === selectedCategory.replace(/\s|&/g, '').toLowerCase()
  );

  const productRows = [];
  for (let i = 0; i < filteredProducts.length; i += 4) {
    productRows.push(filteredProducts.slice(i, i + 4));
  }

const handleToggleRow = () => {
  const totalProducts = filteredProducts.length;
  const visibleCount = 1; // 👈 Number of items visible per scroll
  const maxIndex = totalProducts - visibleCount;

  if (isMobile) {
    const container = rowContainerRef.current;
    const card = container?.querySelector('.product-card');
    const cardWidth = card?.offsetWidth || 0;
    const gap = 15;

    if (mobileScrollIndex < maxIndex) {
      setMobileScrollIndex(mobileScrollIndex + 1);
      container.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
    } else {
      setMobileScrollIndex(0);
      container.scrollTo({ left: 0, behavior: 'smooth' });
    }
  } else {
    const totalRows = productRows.length;
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
      <p className='page-heading'>OUR PRODUCTS</p>

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
       <div className="mobile-slider" ref={rowContainerRef}>
  {filteredProducts.map(product => (
    <div key={product.id} className="product-card" onClick={() => setSelectedImage(product.image)}>
      <img src={product.image} alt={product.title} />
     <div className="overlay">
  {/* <div className="eye-icon">👁️</div>  */}
  <h4>{product.title}</h4>
  <p className='text-white'>{product.description}</p>
  <p className='text-white'>{product.text}</p>
</div>

    </div>
  ))}
</div>

      )}

   {(isMobile || productRows.length > 2) && (
  <div className="view-more">
    <button onClick={handleToggleRow}>
      {isMobile
        ? mobileScrollIndex >= filteredProducts.length - 1
          ? 'View Less'
          : 'View More'
        : visibleRowCount === productRows.length
        ? 'View Less'
        : 'View More'}
    </button>
  </div>
)}

   

      {selectedImage && (
  <div className="image-popup" onClick={() => setSelectedImage(null)}>
    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-button" onClick={() => setSelectedImage(null)}>×</button>
      <img src={selectedImage} alt="Full View" />
    </div>
  </div>
)}

    </div>
  );
}
