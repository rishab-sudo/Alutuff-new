import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import "./ProductPage.css";
import HomeProducts from '../components/HomeProducts';
import { FaCheck } from "react-icons/fa";
import ProductPageData from "../ProductPageData";

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract all category names
  const categories = ["All", ...ProductPageData.map(item => item.category)];

  // Get selected data
  const selectedCategoryData = ProductPageData.find(
    (cat) => cat.category === selectedCategory
  );

  // Get products to show
  const allProducts = ProductPageData.flatMap(cat => cat.products);
  const productsToShow =
    selectedCategory === "All"
      ? allProducts
      : selectedCategoryData?.products || [];

  return (
    <>
      <Container fluid className="product-section-container">
        <div className='d-flex justify-content-center align-items-center mb-5'>
          <p>OUR PRODUCT</p>
        </div>

        <Container fluid className='product-section-content-div'>
          {/* Sidebar */}
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

          {/* Content */}
          <div className="product-content">
            <h3>{selectedCategory}</h3>

            {/* Product Cards First */}
           {/* Product Cards First */}
<div className="product-grid">
  {productsToShow.map((product) => (
    <div
      className="product-card"
      key={product.id}
      onClick={() => {
        if (selectedCategory === "All") {
          setSelectedCategory(product.category);
        }
      }}
      style={{ cursor: selectedCategory === "All" ? "pointer" : "default" }}
    >
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p>{product.description}</p>
    </div>
  ))}
</div>


            {/* Description for selected category (not All) */}
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
       <ul className='' style={{paddingLeft:"25px" }} >
        {selectedCategoryData.details.applications.map((app, idx) => (
          <li key={idx}>{app}</li>
        ))}
      </ul>
    </div>

    <div className="desc-box">
      <h5>Key Features:</h5>
      <ul className='d-flex flex-column justify-content-start text-left ' style={{paddingLeft:"5px"
      }} >
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

      <HomeProducts />
    </>
  );
};

export default ProductPage;
