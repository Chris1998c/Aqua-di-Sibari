import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
  const navigate = useNavigate();

  return (
    <Card className="product-card h-100 shadow-sm">
      <div className="product-image-wrapper">
        <Card.Img variant="top" src={product.image} alt={product.name} className="product-image" />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="product-title">{product.name}</Card.Title>
        <Card.Text className="product-description flex-grow-1">
          {product.description}
        </Card.Text>
        {product.longDescription}
        <h5 className="product-price">€{product.price.toFixed(2)}</h5>

        <Button
          variant="primary"
          onClick={() => addToCart(product)}
          className="btn-add-to-cart mb-2"
        >
          Aggiungi al Carrello
        </Button>

        <Button
          variant="secondary"
          onClick={() => navigate(`/product/${product.id}`)}
          className="btn-details"
        >
          Dettagli
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
