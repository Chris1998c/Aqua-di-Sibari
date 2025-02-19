// src/pages/Products.jsx
import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

export const initialProducts = [
  {
    id: 1,
    name: "Erbe Riflessanti - Nutri",
    description: "Miscela studiata per idratare e nutrire i capelli.",
    longDescription: `
      Questa miscela contiene ingredienti naturali come 
      x, y, z che favoriscono l'idratazione e la lucentezza dei capelli. 
      Priva di sostanze chimiche nocive, rispetta il cuoio capelluto e dona morbidezza al tatto.
    `,
    price: 70.0,
    image: "/Confezione.png",
  },
  {
    id: 2,
    name: "Erbe Riflessanti - Rosso",
    description: "Hennè rosso di alta qualità per risultati sorprendenti.",
    price: 55.0,
    image: "/rosso.JPG",
  },
  {
    id: 3,
    name: "Erbe Riflessanti - Mallo",
    description: "Miscela di alta qualità per risultati sorprendenti.",
    price: 58.0,
    image: "/mallo.JPG",
  },
  {
    id: 4,
    name: "Erbe Riflessanti - Rosso Profondo",
    description: "Hennè rosso di alta qualità per risultati sorprendenti.",
    price: 60.0,
    image: "/rosso-profondo.JPG",
  },
];

const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <Helmet>
        <title>AQUA di SIBARI - Prodotti</title>
        <meta
          name="description"
          content="Esplora la nostra gamma di prodotti naturali per la cura dei capelli e della pelle."
        />
        <meta
          name="keywords"
          content="Aqua di Sibari, prodotti naturali, cosmetici, bellezza, tradizione"
        />
      </Helmet>

      <Container className="products-container mt-5 pt-5">
        <h1 className="text-center mb-4">I Nostri Prodotti</h1>
        <Row>
          {initialProducts.map((product) => (
            <Col key={product.id} md={4} sm={6} xs={12} className="mb-4">
              <ProductCard product={product} addToCart={addToCart} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Products;
