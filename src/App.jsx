// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Cart from './pages/Cart';
import Contacts from './pages/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  // Definisci lo stato globale del carrello
  const [cartItems, setCartItems] = useState([]);

  // Funzione per aggiungere un prodotto al carrello
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Se il prodotto è già presente, incrementa la quantità
      const existing = prevItems.find(item => item.id === product.id);
      if (existing) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
      // Altrimenti, aggiungilo con quantità 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
    alert(`${product.name} aggiunto al carrello!`);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Passa addToCart a Products */}
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        {/* Passa cartItems a Cart */}
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
