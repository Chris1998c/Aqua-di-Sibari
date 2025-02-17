// src/pages/Cart.jsx
import React, { useContext } from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    // Gestione del checkout (Stripe o altro)
    alert('Checkout da implementare');
  };

  return (
    <Container className="mt-5 pt-5">
      <h1>Carrello</h1>
      {cartItems.length > 0 ? (
        <>
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  {/* Miniatura prodotto */}
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: '50px',
                      height: '50px',
                      objectFit: 'cover',
                      marginRight: '10px',
                    }}
                  />
                  <div>
                    <strong>{item.name}</strong>
                    <br />
                    <small>Quantità: {item.quantity}</small>
                  </div>
                </div>
                <div>
                  €{(item.price * item.quantity).toFixed(2)}
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                    className="ms-2"
                  >
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
