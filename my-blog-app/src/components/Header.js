import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logoedit1-transformed.webp"
import "./Header.css"

const Header = () => {
  

    return (
        <header className='header'>
            
            <img src={logo} alt="Ostergren Ideas Logo" className="logo"/>
                
                <div className='company-name'>
                  <span>Ostergren Ideas LLC</span>
                  </div>
            
            <nav className="navigation nav-links">
                <ul >
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
        
            </nav>
        </header>
    );
};

<header className="header">
<img src={logo} alt="Ostergren Ideas Logo" className="logo"/>
   <div className="company-name">
     <span>Ostergren Ideas LLC</span>
 </div>
 <nav className="navigation nav-links">
   <ul className="navList">
     <li><Link to="/">Home</Link></li>
     <li><Link to="/blog">Blog</Link></li>
     <li><Link to="/contact">Contact</Link></li>
   </ul>
 </nav>
    
</header>

export default Header;
