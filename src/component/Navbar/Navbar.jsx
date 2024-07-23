import React, { useState, useEffect } from 'react';
import './navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const li = document.querySelectorAll('.nav-links li');
    const sections = document.querySelectorAll('section');

    const activeMenu = () => {
      let len = sections.length;
      while (--len && window.scrollY + 90 < sections[len].offsetTop) {}
      li.forEach((ltx) => ltx.classList.remove('active'));
      li[len].classList.add('active');
    };

    window.addEventListener('scroll', activeMenu);

    return () => {
      window.removeEventListener('scroll', activeMenu);
    };
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - document.querySelector('.navbar').offsetHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="logo">ChatBOT</div>
      <div className={`nav-container ${isOpen ? 'active' : ''}`}>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
          <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
          <li><a href="#FAQ" onClick={(e) => handleNavClick(e, 'FAQ')}>FAQ</a></li>
        </ul>
        <button className="login-btn"><a href="http://localhost:3000/login">Login</a></button>
        <div className="hamburger" onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
