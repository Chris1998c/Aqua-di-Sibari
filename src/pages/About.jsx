// src/pages/About.jsx
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="my-5">
      <h1 className="mb-4">Chi Siamo</h1>
      <Row>
        <Col md={6}>
          <p>
            <strong>Aqua di Sibari</strong> è il legame tra storia, natura e bellezza.
            Nata dall'anima della Magna Grecia e dalla biodiversità della terra di Calabria, 
            Aqua di Sibari è molto più di un marchio: è un ritorno alle radici antiche, 
            un'ode alla bellezza autentica e alla potenza naturale delle erbe.
          </p>
          <p>
            Ispirati dalla ricchezza della storia di Sibari e dalla biodiversità calabrese, 
            selezioniamo ingredienti di altissima qualità per realizzare prodotti che rispettano 
            la tradizione e la natura. Il nostro henné emolliente è realizzato con erbe locali, 
            per nutrire e valorizzare ogni capello.
          </p>
          <p>
            Con Aqua di Sibari, porti a casa un pezzo di storia e natura, in una formulazione studiata per il benessere quotidiano.
          </p>
        </Col>
        <Col md={6}>
          <Image src="/assets/about-image.jpg" alt="Produzione Aqua di Sibari" fluid rounded />
          {/* Assicurati di avere un'immagine appropriata nella cartella assets */}
        </Col>
      </Row>
    </Container>
  );
};

export default About;
