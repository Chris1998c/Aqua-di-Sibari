// src/pages/Products.jsx
import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export const initialProducts = [
  {
    id: 1,
    name: 'Erbe Riflessanti- Nutri',
    description: 'Miscela studiata per idratare e nutrire i capelli.',
    longDescription: `
      Questa miscela contiene ingredienti naturali
      come x, y, z che favoriscono l'idratazione e
      la lucentezza dei capelli. Priva di sostanze
      chimiche nocive, rispetta il cuoio capelluto
      e dona morbidezza al tatto.
    `,
    price: 70.0,
    image: '/Confezione.png',
  },
  {
    id: 2,
    name: 'Erbe Riflessanti- Rosso',
    description: 'Hennè rosso di alta qualità per risultati sorprendenti.',
    price: 55.0,
    image: '/rosso.JPG',
  },
  {
    id: 3,
    name: 'Erbe Riflessanti- Mallo',
    description: 'Miscela di alta qualità per risultati sorprendenti.',
    price: 58.0,
    image: '/mallo.JPG',
  },
  {
    id: 4,
    name: 'Erbe Riflessanti- Rosso Profondo',
    description: 'Hennè rosso di alta qualità per risultati sorprendenti.',
    price: 60.0,
    image: '/rosso-profondo.JPG',
  },
];

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <Container className="mt-5 pt-5">
      <h1 className="text-center mb-4">I Nostri Prodotti</h1>
      <Row>
        {initialProducts.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="flex-grow-1">{product.description}</Card.Text>
                <h5 className="mb-3">€{product.price.toFixed(2)}</h5>

                <Button
                  variant="primary"
                  onClick={() => addToCart(product)}
                  className="mb-2"
                >
                  Aggiungi al Carrello
                </Button>
                {/* Pulsante Dettagli => /product/:id */}
                <Button
                  variant="secondary"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  Dettagli
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
