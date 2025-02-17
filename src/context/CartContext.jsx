// src/context/CartContext.jsx
import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify'; // Import di Toastify

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        // Se il prodotto esiste già, incrementiamo la quantità
        toast.info(`Aumentata la quantità di "${product.name}" nel carrello`);
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Se il prodotto non c'è ancora, lo aggiungiamo
        toast.success(`"${product.name}" aggiunto al carrello!`);
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
