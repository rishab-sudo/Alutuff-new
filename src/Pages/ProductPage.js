import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import "./ProductPage.css";
import HomeProducts from '../components/HomeProducts';
import { FaCheck } from "react-icons/fa";
import Banner from '../components/Banner';
import bannerImage from"../assets/banner-bg.jpeg"
import ProductPageData from "../ProductPageData";

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  // Extract all category names
  const categories = ["All", ...ProductPageData.map(item => item.category)];

  // Get selected category data
  const selectedCategoryData = ProductPageData.find(
    (cat) => cat.category === selectedCategory
  );

  // Get all products with their category info
  const allProducts = ProductPageData.flatMap(cat =>
    cat.products.map(product => ({ ...product, category: cat.category }))
  );

  // Filtered product list based on category
  const productsToShow = selectedCategory === "All"
    ? allProducts
    : ProductPageData.find(cat => cat.category === selectedCategory)?.products.map(product => ({
        ...product,
        category: selectedCategory,
      })) || [];

  return (
    <>

       <div className='w-100' >
              <Banner
                image={bannerImage}
                heading="Our Products "
                subheading="Welcome to our website"
              />
            </div>

      <Container fluid className="product-section-container">

        {/* ✅ Mobile Top Bar */}
        <div className="product-top-bar">
          <h4>Categories</h4>
          <div
            className="product-hamburger"
            onClick={() => setShowMobileSidebar(prev => !prev)}
          >
            ☰
          </div>
        </div>

        {/* ✅ Mobile Sidebar Dropdown */}
        <div className={`product-mobile-sidebar ${showMobileSidebar ? "show" : ""}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`product-category-button ${selectedCategory === cat ? 'product-active' : ''}`}
              onClick={() => {
                setSelectedCategory(cat);
                setShowMobileSidebar(false); // Hide after selection
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
          {/* Sidebar for Desktop */}
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

            {/* Product Cards */}
            <div className="product-grid">
              {productsToShow.map((product) => (
                <div
                  className="product-card"
                  key={`${product.category}-${product.id}`} // Unique key across categories
                  onClick={() => {
                    if (selectedCategory === "All") {
                      setSelectedCategory(product.category); // Switch to that category
                    }
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <img src={product.image} alt={product.title} />
                  <h4>{product.title}</h4>
                  <p>{product.description}</p>
                </div>
              ))}
            </div>

            {/* Category Details */}
            {selectedCategory !== "All" && selectedCategoryData && (
              <div className="product-descp mt-4">
                <div className="desc-box">
                  <h5>Material/Core:</h5>
                  <p>{selectedCategoryData.details.material}</p>
                </div>

                <div className="desc-box">
                  <h5>Category Type:</h5>
                  <p>{selectedCategoryData.details.categoryType}</p>
                </div>

                <div className="desc-box">
                  <h5>Applications:</h5>
                  <ul style={{ paddingLeft: "25px" }}>
                    {selectedCategoryData.details.applications.map((app, idx) => (
                      <li key={idx}>{app}</li>
                    ))}
                  </ul>
                </div>

                <div className="desc-box">
                  <h5>Key Features:</h5>
                  <ul className='d-flex flex-column justify-content-start text-left' style={{ paddingLeft: "5px" }}>
                    {selectedCategoryData.details.keyFeatures.map((feature, idx) => (
                      <div key={idx}>
                        <FaCheck style={{ color: "green", marginRight: "8px" }} />
                        {feature}
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </Container>
      </Container>

      {/* Bottom Component */}
      <HomeProducts />
    </>
  );
};

export default ProductPage;
