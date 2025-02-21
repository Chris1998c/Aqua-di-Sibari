// src/pages/Products.jsx
import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

/**
 * Riscritte le 'longDescription' con HTML:
 * - <strong> per evidenziare
 * - <em> o <i> per corsivi
 * - <h5> per piccoli titoli
 * - <ul><li> per elenchi puntati
 */
export const initialProducts = [
  {
    id: 1,
    name: "Erbe Riflessanti - Nutri",
    description: "Miscela di erbe selezionate per nutrire e rinforzare i capelli.",
    longDescription: `
      <strong>L’Erbe Riflessanti - Nutri</strong> è una miscela di erbe pensata per <strong>nutrire</strong>
      e <strong>rinforzare</strong> la fibra capillare, migliorando struttura e luminosità.
      È <strong>incolore</strong>, ideale per chi cerca un trattamento rigenerante senza alterare il colore.

      <h5 class="mt-3">Modo d'uso:</h5>
      <ul>
        <li>Applicare su tutta la capigliatura e lasciare in posa <strong>20 minuti</strong>.</li>
        <li>Risciacquare e procedere con uno shampoo leggero.</li>
        <li>Su capelli bianchi o biondi, miscelare con <strong>Henné Rosso</strong> per maggiore copertura.</li>
      </ul>

      <h5 class="mt-3">Benefici:</h5>
      <ul>
        <li>Nutre e idrata i capelli in profondità</li>
        <li>Migliora la <strong>lucentezza</strong> e l’elasticità</li>
        <li>Perfetto per trattamenti post-colorazione</li>
      </ul>
    `,
    price: 70.0,
    image: "/Confezione.png",
  },
  {
    id: 2,
    name: "Erbe Riflessanti - Rosso",
    description: "Henné puro per riflessi rosso-aranciati intensi e rinforzanti.",
    longDescription: `
      <strong>L’Erbe Riflessanti - Rosso</strong> è un henné puro a base di <strong>Lawsonia inermis</strong>,
      perfetto per ottenere un <strong>rosso intenso</strong> con benefici rinforzanti.

      <h5 class="mt-3">Modo d'uso:</h5>
      <ul>
        <li>Mescolare con <strong>acqua calda</strong> fino a ottenere una crema liscia.</li>
        <li>Applicare sui capelli e lasciare in posa in base alla tonalità desiderata.</li>
        <li>Per un risultato più naturale, miscelare con polveri emollienti.</li>
      </ul>

      <h5 class="mt-3">Benefici:</h5>
      <ul>
        <li>Riflessi <strong>ramati intensi</strong></li>
        <li>Rafforza e ispessisce la fibra capillare</li>
        <li>100% naturale, privo di agenti chimici</li>
      </ul>
    `,
    price: 55.0,
    image: "/rosso.JPG",
  },
  {
    id: 3,
    name: "Erbe Riflessanti - Mallo di Noce",
    description: "Polvere vegetale per riflessi castani naturali e tonalità più fredde.",
    longDescription: `
      <strong>L’Erbe Riflessanti - Mallo di Noce</strong> è ideale per ottenere <strong>riflessi castani</strong>
      naturali e attenuare i toni caldi indesiderati.

      <h5 class="mt-3">Modo d'uso:</h5>
      <ul>
        <li>Mescolare la polvere con <strong>acqua molto calda</strong> fino a ottenere un impasto cremoso.</li>
        <li>Applicare sui capelli e lasciare in posa per un risultato più intenso.</li>
      </ul>

      <h5 class="mt-3">Benefici:</h5>
      <ul>
        <li>Intensifica e scurisce i toni castani</li>
        <li>Attenua riflessi aranciati troppo caldi</li>
        <li>Perfetto per personalizzare le miscele tintorie</li>
      </ul>
    `,
    price: 58.0,
    image: "/mallo.JPG",
  },
  {
    id: 4,
    name: "Erbe Riflessanti - Rosso Profondo",
    description: "Miscela potenziata per un rosso più intenso e vibrante.",
    longDescription: `
      <strong>L’Erbe Riflessanti - Rosso Profondo</strong> è una miscela arricchita
      per ottenere un <strong>rosso freddo e vibrante</strong>, ideale per tonalità più sature.

      <h5 class="mt-3">Modo d'uso:</h5>
      <ul>
        <li>Mescolare con <strong>acqua calda</strong> e applicare sui capelli.</li>
        <li>Più la base è chiara, più il risultato sarà <strong>brillante</strong>.</li>
      </ul>

      <h5 class="mt-3">Benefici:</h5>
      <ul>
        <li>Tonalità <strong>rosso intensa</strong> e più fredda</li>
        <li>Perfetto per capelli castani e scuri</li>
        <li>Copertura duratura dei capelli bianchi</li>
      </ul>
    `,
    price: 60.0,
    image: "/rosso-profondo.JPG",
  },
];

const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      {/* SEO Migliorata */}
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
        <meta
          property="og:description"
          content="Erbe tintorie per capelli sani e colorazioni naturali professionali."
        />
        <meta property="og:image" content="/Confezione.png" />
        <meta property="og:url" content="https://aquadisibari.it/products" />
      </Helmet>

      {/* Layout Prodotti */}
      <Container className="products-container mt-5 pt-5">
        <h1 className="text-center mb-4">🌿 I Nostri Prodotti 🌿</h1>
        <p className="text-center text-muted mb-4">
          Scopri la nostra selezione di <strong>erbe riflessanti</strong> naturali
          per capelli più sani e luminosi.
        </p>

        <Row>
          {initialProducts.map((product) => (
            <Col key={product.id} md={4} sm={6} xs={12} className="mb-4">
              <ProductCard product={product} addToCart={addToCart} />
            </Col>
          ))}
        </Row>

        {/* Call to Action Finale */}
        <div className="text-center mt-5">
          <h2 className="fw-bold">🌱 Naturale & Sicuro 🌱</h2>
          <p className="text-muted">
            Tutti i nostri prodotti sono <strong>100% naturali</strong>, senza
            agenti chimici nocivi.
          </p>
        </div>
      </Container>
    </>
  );
};

export default Products;
