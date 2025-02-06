import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componenti
import Header from "./components/Header";

// Pagine
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Contacts from "./pages/Contacts";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </Router>
  );
}

export default App;
