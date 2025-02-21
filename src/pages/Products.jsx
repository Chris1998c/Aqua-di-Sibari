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
    description: "Miscela naturale emolliente per capelli setosi e luminosi.",
    longDescription: `
      Questa miscela professionale è formulata con erbe selezionate dalla Calabria, tra cui liquirizia, camomilla, foglie di mandarino e avena. 
      Ideale per nutrire e ammorbidire i capelli e il cuoio capelluto, può essere utilizzata come trattamento riequilibrante o all'interno delle miscele tintorie per mitigare i toni rossi caldi dell'henné Lawsonia. 
      Priva di agenti chimici aggressivi, preserva l’integrità della fibra capillare, migliorando l'elasticità e la luminosità del capello.
    `,
    price: 70.0,
    image: "/Confezione.png",
  },
  {
    id: 2,
    name: "Erbe Riflessanti - Rosso Lawsonia",
    description: "Henné Lawsonia inermis puro per una colorazione intensa e naturale.",
    longDescription: `
      Henné rosso Lawsonia inermis di altissima qualità, ideale per ottenere tonalità calde e ramate. 
      Perfetto per colorazioni piene e luminose, questo henné 100% naturale si lega alla cheratina del capello, donando riflessi vibranti e duraturi.
      Può essere miscelato con altre erbe per ottenere sfumature personalizzate e può essere combinato con la miscela emolliente per un effetto più equilibrato e morbido.
    `,
    price: 55.0,
    image: "/rosso.JPG",
  },
  {
    id: 3,
    name: "Erbe Riflessanti - Mallo di Noce",
    description: "Tonalizzante naturale astringente per riflessi castani.",
    longDescription: `
      Miscela professionale a base di mallo di noce, ideale per ottenere riflessi castani naturali e profondi. 
      Grazie alle sue proprietà astringenti, contribuisce a tonalizzare e scurire le sfumature troppo calde o aranciate. 
      Perfetto per chi desidera un effetto più equilibrato e naturale nella colorazione vegetale.
    `,
    price: 58.0,
    image: "/mallo.JPG",
  },
  {
    id: 4,
    name: "Erbe Riflessanti - Rosso Profondo",
    description: "Henné potenziato per un rosso ancora più intenso e profondo.",
    longDescription: `
      Una miscela potenziata a base di Lawsonia inermis per un rosso ancora più intenso e freddo rispetto al classico henné. 
      Perfetta per chi desidera una tonalità più profonda e vibrante, garantisce un'adesione ottimale ai capelli, massimizzando la durata del colore. 
      Ideale per colorazioni decise senza virare troppo sui toni aranciati.
    `,
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
          content="Scopri la gamma professionale di erbe tintorie e trattamenti naturali per la cura dei capelli. Prodotti formulati per garantire risultati eccellenti nei saloni di bellezza."
        />
        <meta
          name="keywords"
          content="henné professionale, erbe tintorie, colorazione naturale capelli, prodotti naturali capelli, riflessi naturali, henné rosso, tonalizzante capelli, trattamento capelli naturali"
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
