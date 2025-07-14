// ProductPage.js
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import "./ProductPage.css";
import HomeProducts from '../components/HomeProducts';
import { FaCheck } from "react-icons/fa";
import Banner from '../components/Banner';
import bannerImage from "../assets/banner-bg.jpeg";
import ProductPageData from "../ProductPageData";

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  const categories = ["All", ...ProductPageData.map(item => item.category)];
  const selectedCategoryData = ProductPageData.find(cat => cat.category === selectedCategory);

  const allProducts = ProductPageData.flatMap(cat =>
    cat.products.map(product => ({ ...product, category: cat.category }))
  );

  const productsToShow = selectedCategory === "All"
    ? allProducts
    : selectedCategoryData?.products.map(product => ({
        ...product,
        category: selectedCategory,
      })) || [];

  return (
    <>
      <div className='w-100'>
        <Banner
          image={bannerImage}
          heading="Our Products"
          subheading="Welcome to our website"
        />
      </div>

      <Container fluid className="product-section-container">
        {/* Mobile Top Bar */}
        <div className="product-top-bar">
          <h4>Categories</h4>
          <div
            className="product-hamburger"
            onClick={() => setShowMobileSidebar(prev => !prev)}
          >
            ☰
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div className={`product-mobile-sidebar ${showMobileSidebar ? "show" : ""}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`product-category-button ${selectedCategory === cat ? 'product-active' : ''}`}
              onClick={() => {
                setSelectedCategory(cat);
                setShowMobileSidebar(false);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Section Title */}
        <div className='d-flex justify-content-center align-items-center mt-5 mb-2'>
          <p className='page-heading'>OUR PRODUCT</p>
        </div>

        <Container fluid className='product-section-content-div'>
          {/* Desktop Sidebar */}
          <div className="product-sidebar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`product-category-button ${selectedCategory === cat ? 'product-active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="product-content">
            <h3>{selectedCategory}</h3>

            {/* ✅ Show cards only if "All" is selected */}
            {selectedCategory === "All" && (
              <div className="product-grid">
                {productsToShow.map((product) => (
                  <div
                    className="product-card"
                    key={`${product.category}-${product.id}`}
                    onClick={() => {
                      setSelectedCategory(product.category);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={product.image} alt={product.title} />
                    <h4>{product.title}</h4>
                    <p>{product.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Clean Category Detail Layout */}
            {selectedCategory !== "All" && selectedCategoryData && (
              <div className="product-detail-layout mt-4">
                <div className="product-detail-image">
                  <img src={selectedCategoryData.products[0].image} alt="Detail" />
                </div>
                <div className="product-detail-info">
                  <div className="detail-block">
                    <h5>Material/Core:</h5>
                    <p>{selectedCategoryData.details.material}</p>
                  </div>
                  <hr />
                  <div className="detail-block">
                    <h5>Category Type:</h5>
                    <p>{selectedCategoryData.details.categoryType}</p>
                  </div>
                  <hr />
                  <div className="detail-block">
                    <h5>Applications:</h5>
                    <ul>
                      {selectedCategoryData.details.applications.map((app, idx) => (
                        <li key={idx}>{app}</li>
                      ))}
                    </ul>
                  </div>
                  <hr />
                  <div className="detail-block">
                    <h5>Key Features:</h5>
                    <ul>
                      {selectedCategoryData.details.keyFeatures.map((feature, idx) => (
                        <li key={idx}>
                          <FaCheck style={{ color: "green", marginRight: "8px" }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Container>
      </Container>

      <HomeProducts />
    </>
  );
};

export default ProductPage;
