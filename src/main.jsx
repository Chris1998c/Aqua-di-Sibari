// src/main.js
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function ScrollNavbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar-custom');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}

ReactDOM.render(
  <>
    <ScrollNavbar />
    <App />
  </>,
  document.getElementById('root')
);
