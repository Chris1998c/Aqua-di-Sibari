// src/main.jsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // CSS globale
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap
import { CartProvider } from './context/CartContext';

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
  <React.StrictMode>
    <CartProvider>
      <ScrollNavbar />
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
