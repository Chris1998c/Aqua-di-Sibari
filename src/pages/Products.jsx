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
    description: "Miscela di erbe selezionate per nutrire e rinforzare i capelli.",
    longDescription: `
      **L’Erbe Riflessanti - Nutri** è una miscela di erbe pensata per **nutrire** e **rinforzare** la fibra capillare, migliorando struttura e luminosità. È **incolore**, ideale per chi cerca un trattamento rigenerante senza alterare il colore.

      🔹 **Modo d'uso:**
      - Applicare su tutta la capigliatura e lasciare in posa **20 minuti**.
      - Risciacquare e procedere con uno shampoo leggero.
      - Su capelli bianchi o biondi, miscelare con **Henné Rosso** per maggiore copertura.

      🔹 **Benefici:**
      ✔ Nutre e idrata i capelli in profondità  
      ✔ Migliora la **lucentezza** e l’elasticità  
      ✔ Perfetto per trattamenti post-colorazione  
    `,
    price: 70.0,
    image: "/Confezione.png",
  },
  {
    id: 2,
    name: "Erbe Riflessanti - Rosso",
    description: "Henné puro per riflessi rosso-aranciati intensi e rinforzanti.",
    longDescription: `
      **L’Erbe Riflessanti - Rosso** è un henné puro a base di **Lawsonia inermis**, perfetto per ottenere un **rosso intenso** con benefici rinforzanti.

      🔹 **Modo d'uso:**
      - Mescolare con **acqua calda** fino a ottenere una crema liscia.
      - Applicare sui capelli e lasciare in posa in base alla tonalità desiderata.
      - Per un risultato più naturale, miscelare con polveri emollienti.

      🔹 **Benefici:**
      ✔ Riflessi **ramati intensi**  
      ✔ Rafforza e ispessisce la fibra capillare  
      ✔ 100% naturale, privo di agenti chimici  
    `,
    price: 55.0,
    image: "/rosso.JPG",
  },
  {
    id: 3,
    name: "Erbe Riflessanti - Mallo di Noce",
    description: "Polvere vegetale per riflessi castani naturali e tonalità più fredde.",
    longDescription: `
      **L’Erbe Riflessanti - Mallo di Noce** è ideale per ottenere **riflessi castani** naturali e attenuare i toni caldi indesiderati.

      🔹 **Modo d'uso:**
      - Mescolare la polvere con **acqua molto calda** fino a ottenere un impasto cremoso.
      - Applicare sui capelli e lasciare in posa per un risultato più intenso.

      🔹 **Benefici:**
      ✔ Intensifica e scurisce i toni castani  
      ✔ Attenua riflessi aranciati troppo caldi  
      ✔ Perfetto per personalizzare le miscele tintorie  
    `,
    price: 58.0,
    image: "/mallo.JPG",
  },
  {
    id: 4,
    name: "Erbe Riflessanti - Rosso Profondo",
    description: "Miscela potenziata per un rosso più intenso e vibrante.",
    longDescription: `
      **L’Erbe Riflessanti - Rosso Profondo** è una miscela arricchita per ottenere un **rosso freddo e vibrante**, ideale per tonalità più sature.

      🔹 **Modo d'uso:**
      - Mescolare con **acqua calda** e applicare sui capelli.
      - Più la base è chiara, più il risultato sarà **brillante**.

      🔹 **Benefici:**
      ✔ Tonalità **rosso intensa** e più fredda  
      ✔ Perfetto per capelli castani e scuri  
      ✔ Copertura duratura dei capelli bianchi  
    `,
    price: 60.0,
    image: "/rosso-profondo.JPG",
  },
];

const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      {/* 🔹 SEO Migliorata */}
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
        <meta property="og:title" content="AQUA di SIBARI - Erbe Riflessanti Naturali" />
        <meta property="og:description" content="Erbe tintorie per capelli sani e colorazioni naturali professionali." />
        <meta property="og:image" content="/Confezione.png" />
        <meta property="og:url" content="https://aquadisibari.it/products" />
      </Helmet>

      {/* 🔹 Layout Migliorato */}
      <Container className="products-container mt-5 pt-5">
        <h1 className="text-center mb-4">🌿 I Nostri Prodotti 🌿</h1>
        <p className="text-center text-muted mb-4">
          Scopri la nostra selezione di **erbe riflessanti** naturali per capelli più sani e luminosi.
        </p>

        {/* Sezione Prodotti */}
        <Row>
          {initialProducts.map((product) => (
            <Col key={product.id} md={4} sm={6} xs={12} className="mb-4">
              <ProductCard product={product} addToCart={addToCart} />
            </Col>
          ))}
        </Row>

        {/* Call to Action */}
        <div className="text-center mt-5">
          <h2 className="fw-bold">🌱 Naturale & Sicuro 🌱</h2>
          <p className="text-muted">
            Tutti i nostri prodotti sono 100% naturali, senza agenti chimici nocivi.
          </p>
        </div>
      </Container>
    </>
  );
};

export default Products;
