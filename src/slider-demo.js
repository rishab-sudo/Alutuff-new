// import React, { useState, useEffect } from 'react';
// import './SlidingImage.css';

// const images = [
//   { id: 1, src: require('../assets/img-3.jpeg'), width: 750 },
//   { id: 2, src: require('../assets/img-4.jpeg'), width: 800 },
//   { id: 3, src: require('../assets/img-5.jpeg'), width: 850 },
// ];

// const ThreeDSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const getSlideStyle = (index) => {
//     let position = (index - currentIndex + images.length) % images.length;

//     switch (position) {
//       case 0:
//         return 'slider-image center';
//       case 1:
//         return 'slider-image right';
//       case 2:
//         return 'slider-image left';
//       default:
//         return 'slider-image';
//     }
//   };

//   return (
//     <div className="slider-container">
//       {images.map((image, index) => (
//         <img
//           key={image.id}
//           src={image.src}
//           className={getSlideStyle(index)}
//           style={{ width: `${image.width}px` }}
//           alt={`Slide ${image.id}`}
//         />
//       ))}
//     </div>
//   );
// };

// export default ThreeDSlider;

// .slider-container {
//   position: relative;
//   width: 100%;
//   height: 500px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   overflow: hidden;
//   perspective: 1200px;
// }

// .slider-image {
//   position: absolute;
//   transition: transform 1s ease, opacity 1s ease;
//   cursor: pointer;
// }

// .slider-image.center {
//   transform: translateX(0) translateZ(100px);
//   z-index: 3;
//   opacity: 1;
// }

// .slider-image.right {
//   transform: translateX(300px) translateZ(-100px) scale(0.8);
//   z-index: 2;
//   opacity: 0.7;
// }

// .slider-image.left {
//   transform: translateX(-300px) translateZ(-100px) scale(0.8);
//   z-index: 2;
//   opacity: 0.7;
// }

