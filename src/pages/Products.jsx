import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

export const initialProducts = [
  {
    id: 1,
    name: "Erbe Riflessanti - Nutri",
    description: "Miscela di erbe selezionate pensata per nutrire e rinforzare i capelli.",
    longDescription: `
L’Erbe Riflessanti - Nutri è una miscela di erbe selezionate pensata per nutrire e rinforzare la fibra capillare, migliorandone la struttura e la luminosità. Grazie alla ricchezza di zuccheri, proteine vegetali, carboidrati, amminoacidi e vitamine, questo trattamento apporta idratazione e protezione ai capelli, donando un aspetto più sano e vitale. È del tutto incolore, il che lo rende ideale anche per chi desidera solo un trattamento ristrutturante senza alterare il colore dei capelli.

### Modo d'uso:
- Applicare la miscela su tutta la capigliatura, dalle radici alle punte.
- Lasciare in posa per 20 minuti, quindi risciacquare e procedere con uno shampoo leggero.
- In caso di capelli bianchi o basi bionde, può essere miscelato con Henné Rosso per una copertura totale e un effetto riflessante più brillante.

### Benefici:
✔ Nutre e idrata i capelli in profondità  
✔ Migliora la lucentezza e l’elasticità del capello  
✔ Rende la fibra capillare più morbida e setosa  
✔ Perfetto come trattamento post-colorazione o come impacco rigenerante  
    `,
    price: 70.0,
    image: "/Confezione.png",
  },
  {
    id: 2,
    name: "Erbe Riflessanti - Rosso",
    description: "Henné puro per riflessi rosso-aranciati intensi e rinforzanti.",
    longDescription: `
L’Erbe Riflessanti - Rosso è un henné puro a base di Lawsonia inermis, noto per le sue proprietà coloranti e rinforzanti. Questa polvere vegetale, ottenuta dalla macinazione delle foglie essiccate della pianta, sviluppa una tonalità rosso-aranciata sui capelli bianchi e riflessi ramati caldi sui capelli castani e scuri. Il risultato finale può variare in base alla porosità del capello e alla presenza di sostanze acidificanti o alcaline nella miscela.

### Modo d'uso:
- Mescolare con acqua calda fino a ottenere una crema di facile applicazione.
- Applicare sui capelli e lasciare in posa in base all’intensità desiderata.
- Per un risultato più naturale, può essere miscelato con polveri emollienti per attenuare il rosso o con Rosso Profondo per intensificare la colorazione.

### Benefici:
✔ Dona un riflesso ramato intenso  
✔ Rafforza e ispessisce la fibra capillare  
✔ 100% naturale e privo di agenti chimici  
✔ Miscelabile con altre erbe per ottenere nuance personalizzate  
    `,
    price: 55.0,
    image: "/rosso.JPG",
  },
  {
    id: 3,
    name: "Erbe Riflessanti - Mallo di Noce",
    description: "Polvere vegetale per riflessi castani naturali e tonalità più fredde.",
    longDescription: `
L’Erbe Riflessanti - Mallo di Noce è una miscela vegetale ideale per ottenere riflessi castani naturali e intensificare il colore dei capelli. Il mallo di noce è noto per le sue proprietà astringenti e tonalizzanti, capaci di scurire le tonalità e attenuare sfumature troppo calde o aranciate. Sui capelli bianchi sviluppa un riflesso nocciola, che può variare in intensità a seconda del pH della miscela e delle erbe con cui viene combinato.

### Modo d'uso:
- Mescolare la polvere con acqua molto calda fino a ottenere un impasto di consistenza cremosa, né troppo liquida né troppo densa.
- Applicare generosamente sui capelli e lasciare in posa per garantire un riflesso più intenso.
- Per tonalità più fredde e profonde, combinare con altre erbe riflessanti o sostanze acidificanti.

### Benefici:
✔ Intensifica e scurisce i toni castani  
✔ Attenua i riflessi troppo caldi o aranciati  
✔ Dona maggiore profondità alla colorazione naturale  
✔ Perfetto per la personalizzazione delle miscele tintorie  
    `,
    price: 58.0,
    image: "/mallo.JPG",
  }
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
