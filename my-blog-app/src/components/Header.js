import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import logo from "../images/logoedit1-transformed.webp"
import "./Header.css"

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className='header'>
            
            <img src={logo} alt="Ostergren Ideas Logo" className="logo"/>
                
                <div className='company-name'>
                  <span>Ostergren Ideas LLC</span>
                  </div>
            
            <nav className="navigation nav-links">
                <ul className={isMobileMenuOpen ? 'mobile-menu open' && 'desktop-menu' : 'navList'}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <IconButton className="mobile-menu-icon" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
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
