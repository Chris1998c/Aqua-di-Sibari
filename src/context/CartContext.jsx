// src/context/CartContext.jsx
import React, { createContext, useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Aggiunge un prodotto al carrello
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find(item => item.id === product.id);
      if (existing) {
        // Se esiste, incrementiamo la quantità
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Se non esiste, lo aggiungiamo con quantity=1
      return [...prevItems, { ...product, quantity: 1 }];
    });

    setToastMessage(`${product.name} aggiunto al carrello!`);
    setShowToast(true);
  };

  // Rimuove completamente il prodotto dal carrello
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}

      {/* Toast per feedback */}
      <ToastContainer position="bottom-end" className="p-3">
        <Toast onClose={() => setShowToast(false)} show={showToast} delay={2000} autohide>
          <Toast.Header>
            <strong className="me-auto">Carrello</strong>
          </Toast.Header>
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </CartContext.Provider>
  );
};
