// src/pages/ProductDetail.jsx
import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { initialProducts } from "./Products";
import { Helmet } from "react-helmet-async";


const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  // Trova il prodotto in base all'ID nell'URL
  const product = initialProducts.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return (
      <div className="mt-5 pt-5 text-center">
        <h2>Prodotto non trovato</h2>
        <Button variant="primary" onClick={() => navigate("/products")}>
          Torna ai Prodotti
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <>
      <Helmet>
        <title>{`${product.name} - AQUA di SIBARI`}</title>
        <meta name="description" content={product.description} />
        <meta
          property="og:title"
          content={`${product.name} - Bellezza Naturale`}
        />
        <meta property="og:image" content={product.image} />
        <meta
          property="og:url"
          content={`https://aqua-di-sibari.vercel.app/product/${product.id}`}
        />
      </Helmet>

      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-6 text-center">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </div>
          <div className="col-md-6">
            <h1>{product.name}</h1>
            {/* Breve descrizione (facoltativa) */}
            <p>
              <em>{product.description}</em>
            </p>
            {/* Descrizione estesa */}
            <p>{product.longDescription}</p>

            <p>
              <strong>Prezzo:</strong> €{product.price}
            </p>
            <Button variant="success" onClick={handleAddToCart}>
              Aggiungi al Carrello
            </Button>
            <Button
              variant="secondary"
              className="ms-3"
              onClick={() => navigate("/products")}
            >
              Torna ai Prodotti
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
