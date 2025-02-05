// src/pages/Products.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

// Esempio di prodotti
const initialProducts = [
  {
    id: 1,
    name: 'Hennè Emolliente',
    description: 'Un hennè studiato per idratare, nutrire e valorizzare i capelli. Formulato con ingredienti 100% calabresi per garantire qualità e tradizione.',
    price: 15.99,
    image: 'https://www.hair-gallery.it/image/cache/data/A_HG045986_2-500x500.jpg',
  },
  // Aggiungi altri prodotti se necessario
];

const Products = ({ addToCart }) => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">I Nostri Prodotti</h1>
      <Row>
        {initialProducts.map(product => (
          <Col md={4} key={product.id} className="mb-4">
            {/* Passa la funzione addToCart a ciascun ProductCard */}
            <ProductCard product={product} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
