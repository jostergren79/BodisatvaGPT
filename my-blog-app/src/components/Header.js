import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Header;


<header>
<nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="contact.html">Contact</a></li> 
        <li><a href="blog.html">Blog</a></li>
    </ul>
</nav>
</header>