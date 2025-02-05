// src/components/ProductCard.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product, addToCart }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className="flex-grow-1">
          {product.description}
          <br />
          <strong>Prezzo: €{product.price}</strong>
        </Card.Text>
        <Button variant="primary" onClick={() => addToCart(product)}>
          Aggiungi al carrello
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
