// src/pages/Products.jsx
import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext'; // Assicurati di avere un context per il carrello

const initialProducts = [
  {
    id: 1,
    name: 'Erbe Riflessanti- Nutri',
    description: 'Miscela studiata per idratare e nutrire i capelli.',
    price: 70.00,
    image: '/Confezione.png',
  },
  {
    id: 2,
    name: 'Erbe Riflessanti- Rosso',
    description: 'Hennè rosso di alta qualità per risultati sorprendenti.',
    price: 55.00,
    image: '/rosso.JPG',
  },
  {
    id: 3,
    name: 'Erbe Riflessanti- Mallo',
    description: ' di alta qualità per risultati sorprendenti.',
    price: 58.00,
    image: '/mallo.JPG',
  },
  {
    id: 4,
    name: 'Erbe Riflessanti- Rosso Profondo',
    description: 'Hennè rosso di alta qualità per risultati sorprendenti.',
    price: 60.00,
    image: '/rosso-profondo.JPG',
  }
];

const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <Container className="mt-5 pt-5">
      <h1 className="text-center mb-4">I Nostri Prodotti</h1>
      <Row>
        {initialProducts.map(product => (
          <Col key={product.id} md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="flex-grow-1">{product.description}</Card.Text>
                <h5 className="mb-3">€{product.price.toFixed(2)}</h5>
                <Button variant="primary" onClick={() => addToCart(product)}>
                  Aggiungi al Carrello
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
