import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import logo from './images/logo.webp';
import './App.css'; // Make sure your CSS file is correctly imported

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Global Logo */}
        <img src={logo} alt="Company Logo" />
        
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
