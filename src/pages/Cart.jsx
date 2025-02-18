// src/pages/Cart.jsx
import React, { useContext } from 'react';
import { Container, Row, Col, ListGroup, Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { stripePromise } from '../stripe';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)
      .toFixed(2);
  };

  const handleCheckout = async () => {
    try {
      // Prepara i dati del carrello da inviare al backend
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cartItems }),
      });
      
      if (!response.ok) {
        throw new Error('Errore nella creazione della sessione di checkout');
      }
      
      const session = await response.json();
      
      // Carica Stripe e reindirizza al checkout
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({ sessionId: session.id });
      if (error) {
        console.error('Stripe redirect error:', error.message);
      }
    } catch (err) {
      console.error('Checkout error:', err);
    }
  };

  return (
    <Container className="mt-5 pt-5">
      <h1 className="text-center mb-4">Carrello</h1>
      {cartItems.length > 0 ? (
        <>
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id} className="py-3">
                <Row className="align-items-center">
                  <Col xs={3} md={2}>
                    {/* Miniatura prodotto */}
                    <Image
                      src={item.image}
                      alt={item.name}
                      fluid
                      rounded
                      style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '60px',
                      }}
                    />
                  </Col>
                  <Col xs={6} md={7}>
                    <h5>{item.name}</h5>
                    <p className="mb-1">Quantità: {item.quantity}</p>
                  </Col>
                  <Col xs={3} md={3} className="text-end">
                    <p className="mb-1">€{(item.price * item.quantity).toFixed(2)}</p>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Rimuovi
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Row className="mt-4">
            <Col xs={12} md={{ span: 4, offset: 8 }} className="text-end">
              <h4>Totale: €{calculateTotal()}</h4>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="text-center">
              <Button variant="success" onClick={handleCheckout}>
                Procedi al Pagamento
              </Button>
            </Col>
          </Row>
        </>
      ) : (
        <p className="text-center">Il carrello è vuoto.</p>
      )}
    </Container>
  );
};

export default Cart;
