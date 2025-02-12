// src/pages/Cart.jsx
import React, { useContext } from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { stripePromise } from '../stripe';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0).toFixed(2);
  };

  const handleCheckout = async () => {
    // Prepara i dati per Stripe
    const items = cartItems.map(item => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity || 1
    }));

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items })
      });

      if (!response.ok) {
        throw new Error('Errore nel creare la sessione di checkout');
      }

      const session = await response.json();
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({ sessionId: session.id });
      if (error) {
        console.error("Stripe error:", error.message);
      }
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };

  return (
    <Container className="mt-5 pt-5">
      <h1>Carrello</h1>
      {cartItems.length > 0 ? (
        <>
          <ListGroup variant="flush">
            {cartItems.map(item => (
              <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                <div>
                  {item.name} <br />
                  <small>Quantità: {item.quantity}</small>
                </div>
                <div>
                  €{(item.price * item.quantity).toFixed(2)}
                  <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)} className="ms-2">
                    Rimuovi
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <h3 className="mt-3">Totale: €{calculateTotal()}</h3>
          <Button variant="success" onClick={handleCheckout} className="mt-3">
            Procedi al Pagamento
          </Button>
        </>
      ) : (
        <p>Il carrello è vuoto.</p>
      )}
    </Container>
  );
};

export default Cart;
