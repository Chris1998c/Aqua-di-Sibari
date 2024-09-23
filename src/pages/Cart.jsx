import React from 'react';
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Puoi gestire la logica per Stripe qui
    alert('Inizia il checkout con Stripe!');
  };

  return (
    <div>
      <h2>Carrello</h2>
      {cartItems.length > 0 ? (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - €{item.price} - Quantità: {item.quantity}
              </li>
            ))}
          </ul>
          <button onClick={handleCheckout} className="btn btn-success">
            Procedi al pagamento
          </button>
        </>
      ) : (
        <p>Il carrello è vuoto.</p>
      )}
    </div>
  );
};

export default Cart;
