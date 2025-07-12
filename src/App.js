import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Import Components
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Footer from './components/Footer';
import About from './Pages/About';
import ProductPage from './Pages/ProductPage';
import TestReport from "./Pages/TestReport"
import News from "./Pages/News"
import Contact from './Pages/Contact';
import Established from './Pages/Established';
import Projects from './Pages/Projects';
import Certificates from './Pages/Certificates';
import Catalogues from './Pages/Catalogues';
import Career from './Pages/Career';




function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
   
        <Routes>
          <Route path="*" element={<Home />} />
       
          <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<ProductPage />} />
               <Route path="/projects" element={<Projects />} />
                         <Route path="/career" element={<Career />} />
                          <Route path="/news" element={<News />} />
                          <Route path="/testReport" element={<TestReport />} />
                          <Route path="/certificates" element={<Certificates/>}/>
          <Route path="/contact" element={<Contact />} />
             <Route path="/catalogues" element={<Catalogues />} />
                  <Route path="/established" element={<Established />} />
                  
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
