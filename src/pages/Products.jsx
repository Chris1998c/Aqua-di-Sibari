// src/pages/Products.jsx
import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../context/CartContext';

// Prodotti di esempio
const initialProducts = [
  {
    id: 1,
    name: 'Hennè Emolliente',
    description: 'Hennè studiato per idratare e nutrire i capelli, con ingredienti 100% calabresi.',
    price: 15.99,
    image: 'https://www.hair-gallery.it/image/cache/data/A_HG045986_2-500x500.jpg',
  },
];

const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">I Nostri Prodotti</h1>
      <Row>
        {initialProducts.map((product) => (
          <Col md={4} key={product.id} className="mb-4">
            <ProductCard product={product} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
