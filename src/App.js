import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Components
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Footer from './components/Footer';
import About from './Pages/About';
import ProductPage from './Pages/ProductPage';
import Contact from './Pages/Contact';
import Established from './Pages/Established';




function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
   
        <Routes>
          <Route path="*" element={<Home />} />
       
          <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<ProductPage />} />
          <Route path="/contact" element={<Contact />} />
                  <Route path="/established" element={<Established />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
