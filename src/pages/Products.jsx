import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

export const initialProducts = [
  {
    id: 1,
    name: "Erbe Riflessanti - Nutri",
    description: "Miscela di erbe selezionate per nutrire e rinforzare i capelli.",
    longDescription: `L’Erbe Riflessanti - Nutri è una miscela di erbe selezionate pensata per nutrire e rinforzare la fibra capillare, migliorandone struttura e luminosità. Grazie alla ricchezza di zuccheri, proteine vegetali, carboidrati, amminoacidi e vitamine, questo trattamento idrata e protegge i capelli, rendendoli più sani e vitali.`,
    price: 70.0,
    image: "/Confezione.png",
  },
  {
    id: 2,
    name: "Erbe Riflessanti - Rosso",
    description: "Henné puro per riflessi rosso-aranciati intensi.",
    longDescription: `L’Erbe Riflessanti - Rosso è un henné puro a base di Lawsonia inermis, noto per le sue proprietà coloranti e rinforzanti. Dona riflessi ramati sui capelli castani e un colore rosso-aranciato sui capelli bianchi.`,
    price: 55.0,
    image: "/rosso.JPG",
  },
  {
    id: 3,
    name: "Erbe Riflessanti - Mallo di Noce",
    description: "Polvere vegetale per riflessi castani naturali e tonalità fredde.",
    longDescription: `Il Mallo di Noce intensifica i riflessi castani naturali e attenua sfumature aranciate. Ideale per chi cerca un colore più freddo e profondo senza alterazioni artificiali.`,
    price: 58.0,
    image: "/mallo.JPG",
  },
  {
    id: 4,
    name: "Erbe Riflessanti - Rosso Profondo",
    description: "Miscela potenziata per un rosso più intenso e vibrante.",
    longDescription: `Il Rosso Profondo è una miscela avanzata di henné che offre una tonalità più intensa e duratura, perfetta per chi desidera un rosso vibrante senza riflessi aranciati.`,
    price: 60.0,
    image: "/rosso-profondo.JPG",
  },
];

const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <Helmet>
        <title>AQUA di SIBARI - Erbe Riflessanti Naturali</title>
        <meta
          name="description"
          content="Scopri le migliori erbe riflessanti naturali per capelli. Trattamenti vegetali per tonalità intense e capelli sani e forti. Perfetti per colorazioni naturali e professionali."
        />
        <meta
          name="keywords"
          content="henné naturale, erbe tintorie, riflessi capelli, colorazione vegetale, mallo di noce, henné rosso, trattamento capelli naturale"
        />
      </Helmet>

      <Container className="products-container mt-5 pt-5">
        <h1 className="text-center mb-4">I Nostri Prodotti</h1>
        <Row className="justify-content-center">
          {initialProducts.map((product) => (
            <Col key={product.id} lg={3} md={4} sm={6} xs={12} className="mb-4">
              <ProductCard product={product} addToCart={addToCart} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Products;
