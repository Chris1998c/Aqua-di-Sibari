// src/pages/Products.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const products = [
  {
    id: 1,
    name: 'Hennè Emolliente',
    description: 'Un hennè che idrata e nutre i capelli.',
    price: 15.99,
    image: 'https://www.hair-gallery.it/image/cache/data/A_HG045986_2-500x500.jpg',
  },
  // Aggiungi altri prodotti qui
];

const Products = () => {
  return (
    <Container>
      <h1 className="text-center my-4">I Nostri Prodotti</h1>
      <Row>
        {products.map(product => (
          <Col md={4} key={product.id} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
