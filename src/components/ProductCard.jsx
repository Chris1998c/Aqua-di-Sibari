import React from 'react';
import { Card, Button } from 'react-bootstrap';


const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">€{product.price}</p>
        <button onClick={() => addToCart(product)} className="btn btn-primary">
          Aggiungi al carrello
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

