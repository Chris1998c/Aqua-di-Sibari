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
    description: "Trattamento naturale emolliente per capelli luminosi e forti.",
    longDescription: `
      La miscela Nutri è un trattamento professionale a base di erbe selezionate dalla Calabria, tra cui liquirizia, camomilla, foglie di mandarino e avena. 
      Studiata per nutrire e ammorbidire la fibra capillare, è ideale per riequilibrare il cuoio capelluto e può essere utilizzata nelle miscele tintorie per mitigare i toni caldi dell'henné Lawsonia.
      Ricca di principi attivi vegetali, rende i capelli più elastici, luminosi e setosi senza alterarne il colore naturale.
    `,
    price: 70.0,
    image: "/Confezione.png",
  },
  {
    id: 2,
    name: "Erbe Riflessanti - Rosso Lawsonia",
    description: "Henné Lawsonia inermis puro per riflessi ramati intensi e naturali.",
    longDescription: `
      L’henné Rosso Lawsonia è una polvere naturale di altissima qualità ottenuta dalla macinazione delle foglie di Lawsonia inermis. 
      Perfetto per ottenere riflessi rosso-aranciati su capelli bianchi e ramati caldi su basi castane. 
      Si lega alla cheratina del capello per una colorazione intensa, duratura e rinforzante. 
      Può essere miscelato con la miscela Nutri per ammorbidire il risultato o con il Rosso Profondo per intensificare la tonalità.
    `,
    price: 55.0,
    image: "/rosso.JPG",
  },
  {
    id: 3,
    name: "Erbe Riflessanti - Mallo di Noce",
    description: "Miscela astringente naturale per tonalità castane profonde.",
    longDescription: `
      Il Mallo di Noce è un tonalizzante naturale ideale per intensificare e scurire i riflessi castani. 
      Grazie alle sue proprietà astringenti, aiuta a mitigare i toni aranciati e troppo caldi nelle miscele tintorie.
      Sui capelli bianchi sviluppa un riflesso nocciola, che può essere regolato in intensità in base al pH della miscela.
      Perfetto per chi desidera sfumature castane più naturali e profonde.
    `,
    price: 58.0,
    image: "/mallo.JPG",
  },
  {
    id: 4,
    name: "Erbe Riflessanti - Rosso Profondo",
    description: "Henné potenziato per un rosso intenso e vibrante.",
    longDescription: `
      Il Rosso Profondo è una miscela rinforzata di Lawsonia inermis, studiata per ottenere un rosso più intenso e meno aranciato. 
      Ideale per chi desidera una colorazione più vibrante, fredda e duratura, garantisce un’adesione ottimale ai capelli con un risultato deciso. 
      Perfetto su basi chiare per un rosso acceso e brillante, mantiene un riflesso visibile anche su capelli castano scuro o bruno.
      Può essere combinato con altre miscele per creare sfumature personalizzate e nuance uniche.
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
          content="Scopri la gamma professionale di erbe riflessanti e trattamenti naturali per capelli sani e luminosi. Prodotti studiati per saloni e parrucchieri esperti."
        />
        <meta
          name="keywords"
          content="henné professionale, erbe tintorie naturali, colorazione vegetale capelli, henné rosso, riflessi castani, tonalizzante capelli, trattamento capelli naturali"
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
