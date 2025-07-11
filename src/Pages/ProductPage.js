import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import "./ProductPage.css"
import HomeProducts from '../components/HomeProducts'


const productData = [
  {
    id: 1,
    category: 'Wooden',
    title: 'Wooden Chair',
    description: 'Comfortable and stylish wooden chair',
    image: require('../assets/about02.jpeg')
  },
  {
    id: 2,
    category: 'Marble',
    title: 'Marble Table',
    description: 'Elegant marble table top',
      image: require('../assets/about02.jpeg')
  },
  {
    id: 3,
    category: 'Metal',
    title: 'Metal Rack',
    description: 'Sturdy metal storage rack',
       image: require('../assets/about02.jpeg')
  },
  {
    id: 4,
    category: 'Glass',
    title: 'Glass Vase',
    description: 'Stylish glass vase for decor',
       image: require('../assets/about02.jpeg')
  },
  {
    id: 5,
    category: 'Clay',
    title: 'Clay Pot',
    description: 'Eco-friendly clay flower pot',
       image: require('../assets/about02.jpeg')
  },
  {
    id: 6,
    category: 'Plastic',
    title: 'Plastic Chair',
    description: 'Lightweight plastic chair',
       image: require('../assets/about02.jpeg')
  },
  {
    id: 7,
    category: 'Fabric',
    title: 'Fabric Sofa',
    description: 'Soft and comfortable sofa',
       image: require('../assets/about02.jpeg')
  },
  {
    id: 8,
    category: 'Wooden',
    title: 'Wooden Table',
    description: 'Strong wooden dining table',
      image: require('../assets/about02.jpeg')
  },
  {
    id: 9,
    category: 'Glass',
    title: 'Glass Lamp',
    description: 'Modern glass lamp stand',
       image: require('../assets/about02.jpeg')
  },
  {
    id: 10,
    category: 'Clay',
    title: 'Clay Utensil',
    description: 'Traditional clay cooking pot',
     image: require('../assets/about02.jpeg')
  },
];

const categories = ['All', 'Wooden', 'Marble', 'Metal', 'Glass', 'Clay', 'Plastic', 'Fabric'];
const ProductPage = () => {


  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts =
    selectedCategory === 'All'
      ? productData
      : productData.filter((product) => product.category === selectedCategory);

  return (
    <>

<Container fluid className="product-banner-section">
<Container className="product-banner-content-div">
    <div>
<h1>mmmmmmmmmmmm</h1>
<p>kkkkkkkkk</p>
<p>ddddddddddddddd</p>
</div>

 <div className="image-layout-wrapper">
      <div className="top-section">
        <div className="left-images">
          <img src={require  ("../assets/Image2.png")} alt="Image 1" className="img img1 from-left" />
          <img src={require  ("../assets/Image2.png")} alt="Image 2" className="img img2 from-left" />
        </div>
        <img src={require  ("../assets/Image2.png")} alt="Image 3" className="img img3 from-right" />
      </div>
      <img src={require  ("../assets/Image2.png")} alt="Image 4" className="img img4 from-bottom" />
    </div>
</Container>
</Container>
{/*  */}
  <Container fluid className="product-section-container">
    <Container className='product-section-content-div'>
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

     {/* Product Cards */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </Container>
</Container>

{/*  */}
<HomeProducts/>
{/*  */}
</>
  )
}

export default ProductPage
