// src/pages/About.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col, Image, Accordion } from "react-bootstrap";

const About = () => {
  return (
    <>
<Helmet>
  <title>AQUA di SIBARI - La Nostra Storia</title>
  <meta name="description" content="Scopri la storia e la filosofia di AQUA di SIBARI, ispirata alla tradizione della Magna Grecia e alla biodiversità della Calabria." />
  <meta property="og:title" content="AQUA di SIBARI - Tradizione e Natura" />
  <meta property="og:image" content="/About1.webp" />
  <meta property="og:url" content="https://aqua-di-sibari.vercel.app/about" />
</Helmet>


      <Container className="about-section mt-5 pt-5">
        {/* Sezione Header */}
        <Row className="text-center mb-5">
          <Col>
            <h1 className="about-title">AQUA DI SIBARI</h1>
            <p className="about-subtitle">
              Una storia di bellezza, natura e tradizione.
            </p>
          </Col>
        </Row>

        {/* Sezione Storia */}
        <Row className="about-row">
          <Col xs={12} md={6}>
            <h2>🌿 Le Nostre Origini</h2>
            <p>
              Aqua di Sibari nasce dal cuore della Magna Grecia, ispirata alla
              raffinatezza e alla bellezza senza tempo di Sibari. Il nostro
              obiettivo è riportare in vita gli antichi segreti di cura e
              benessere con ingredienti naturali e sostenibili.
            </p>
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <Image
              src="/About1.webp"
              alt="Storia di Aqua di Sibari"
              fluid
              className="about-image"
            />
          </Col>
        </Row>

        {/* Sezione Natura */}
        <Row className="about-row">
          <Col xs={12} md={6} className="order-md-2">
            <h2>🌱 Le Terre di Calabria</h2>
            <p>
              La nostra terra offre una biodiversità unica: riso e orzo della
              Piana di Sibari, lavanda del Pollino, liquirizia di Rossano e
              agrumeti baciati dal sole. Tutto selezionato con cura per i nostri
              prodotti.
            </p>
          </Col>
          <Col
            xs={12}
            md={6}
            className="order-md-1 d-flex align-items-center justify-content-center"
          >
            <Image
              src="/About2.webp"
              alt="Terre di Calabria"
              fluid
              className="about-image"
            />
          </Col>
        </Row>

        {/* Filosofia e Prodotti */}
        <Row className="about-row">
          <Col>
            <h2>🧴 Filosofia e Prodotti</h2>
            <p>
              Ogni nostro prodotto è un’ode alla natura e alla tradizione.
              Creiamo formule uniche con ingredienti puri, rispettando
              l’ambiente e la salute della pelle.
            </p>
            <p className="about-quote">
              “Aqua di Sibari è più di un marchio: è un ritorno alla natura,
              alla tradizione e alla bellezza autentica.”
            </p>
          </Col>
        </Row>

        {/* Accordion per Approfondimenti */}
        <Row className="about-accordion">
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  🌿 Quali ingredienti usiamo?
                </Accordion.Header>
                <Accordion.Body>
                  Selezioniamo solo materie prime di qualità: erbe calabresi,
                  oli essenziali puri e miscele vegetali. Nessun ingrediente
                  nocivo o chimico aggressivo.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  🔬 Perché i nostri prodotti sono unici?
                </Accordion.Header>
                <Accordion.Body>
                  Ogni formula è studiata per nutrire e proteggere, unendo
                  ricerca moderna e tradizione antica. Usiamo tecniche
                  innovative per estrarre il meglio dalla natura.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
