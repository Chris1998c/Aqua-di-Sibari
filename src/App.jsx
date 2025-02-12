// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componenti
import Header from './components/Header';
import Footer from './components/Footer';

// Pagine
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Success from './pages/Success';
import Cancel from './pages/Cancel';

const App = () => {
  return (
    <Router>
      {/* Contenitore principale a colonna */}
      <div className="app-container">
        {/* Navbar fissa in alto, rimane fuori dal flow */}
        <Header />
        
        {/* Contenuto centrale, flessibile (resta dietro la navbar se non compensiamo) */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
          </Routes>
        </div>

        {/* Footer in fondo alla pagina, anche se il contenuto è poco */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
