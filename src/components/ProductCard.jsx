import React, { memo } from 'react';
import { Card, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = memo(({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Prodotto aggiunto al carrello!", { autoClose: 2000 });
  };

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
        <h5 className="product-price">€{product.price.toFixed(2)}</h5>

        <Button variant="primary" onClick={handleAddToCart} className="btn-add-to-cart mb-2">
          Aggiungi al Carrello
        </Button>
      </Card.Body>
    </Card>
  );
});

export default ProductCard;
