// src/pages/Cart.jsx
import React from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { stripePromise } from '../stripe';

const Cart = ({ cartItems }) => {
  const calculateTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)
      .toFixed(2);
  };

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    // Prepara i dati dei prodotti nel carrello
    const items = cartItems.map(item => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity || 1,
    }));

    // Invia la richiesta POST al backend per creare la sessione di checkout
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items }),
    });
    
    const session = await response.json();

    // Verifica che la sessione abbia un id e reindirizza a Stripe
    if (!session.id) {
      console.error('Errore: session.id non è definito', session);
      return;
    }

    const { error } = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (error) {
      console.error('Errore durante il redirect al checkout:', error.message);
    }
  };

  return (
    <Container className="my-5">
      <h2>Carrello</h2>
      {cartItems.length > 0 ? (
        <>
          <ListGroup variant="flush" className="mb-3">
            {cartItems.map((item, index) => (
              <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                <div>
                  {item.name} <br />
                  <small>Quantità: {item.quantity || 1}</small>
                </div>
                <div>€{(item.price * (item.quantity || 1)).toFixed(2)}</div>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <h4>Totale: €{calculateTotal()}</h4>
          <Button variant="success" onClick={handleCheckout} className="mt-3">
            Procedi al pagamento
          </Button>
        </>
      ) : (
        <p>Il carrello è vuoto.</p>
      )}
    </Container>
  );
};

export default Cart;
