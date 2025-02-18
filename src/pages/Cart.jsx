// src/pages/Cart.jsx
import React, { useContext } from 'react';
import { Container, Row, Col, ListGroup, Button, Card } from 'react-bootstrap';
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
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cartItems }),
      });

      if (!response.ok) {
        throw new Error('Errore nella creazione della sessione di checkout');
      }

      const session = await response.json();
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
    <Container className="cart-container mt-5 pt-5">
      <h1 className="text-center">Carrello</h1>
      
      {cartItems.length > 0 ? (
        <>
          <Row className="justify-content-center">
            <Col md={8}>
              <ListGroup variant="flush">
                {cartItems.map((item) => (
                  <ListGroup.Item key={item.id} className="cart-item shadow-sm">
                    <div className="d-flex align-items-center">
                      {/* Miniatura prodotto */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-item-image"
                      />
                      <div className="cart-item-info">
                        <strong>{item.name}</strong>
                        <br />
                        <small>Quantità: {item.quantity}</small>
                      </div>
                    </div>
                    <div className="cart-item-price">
                      €{(item.price * item.quantity).toFixed(2)}
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                        className="ms-3 remove-btn"
                      >
                        ✖
                      </Button>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>

              {/* Totale e bottone checkout */}
              <Card className="cart-total mt-4 shadow">
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <h4 className="mb-0">Totale:</h4>
                  <h4 className="mb-0">€{calculateTotal()}</h4>
                </Card.Body>
              </Card>

              <Button variant="success" onClick={handleCheckout} className="mt-3 w-100 checkout-btn">
                Procedi al Pagamento
              </Button>
            </Col>
          </Row>
        </>
      ) : (
        <div className="empty-cart text-center">
          <p>Il carrello è vuoto.</p>
        </div>
      )}
    </Container>
  );
};

export default Cart;
