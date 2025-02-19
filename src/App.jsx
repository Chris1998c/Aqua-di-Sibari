import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SpeedInsights } from "@vercel/speed-insights/next"

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
import ProductDetail from './pages/ProductDetail';

const App = () => {
  return (
    <HelmetProvider>
      <ToastContainer position="top-right" autoClose={3000} />
      <Router>
        <div className="app-container">
          {/* Navbar */}
          <Header />

          {/* Contenuto centrale */}
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/success" element={<Success />} />
              <Route path="/cancel" element={<Cancel />} />
            </Routes>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
      <SpeedInsights/>
    </HelmetProvider>
  );
};

export default App;
