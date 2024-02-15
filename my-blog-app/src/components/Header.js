import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you create a separate CSS file for the Header

const Header = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <ul className="navList">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
