import React from 'react';
import '../src/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Check this path
import Blog from './pages/Blog'; // Check this path
import Contact from './pages/Contact'; // Check this path
import Header from './components/Header'; // Check this path
import Footer from './components/Footer'; // Check this path

const App = () => {
  return (
    
    <Router>
      <div className="logo-background">
        <img src="../logo.png" alt="Company Logo" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
