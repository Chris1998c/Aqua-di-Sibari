import React from 'react';
import { Container, Row, Col, Image, Accordion } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const About = () => {
  return (
    <Container className="about-section mt-5 pt-5">
      <Helmet>
        <title>Aqua di Sibari - Storia & Tradizione</title>
        <meta name="description" content="Scopri la storia di Aqua di Sibari e la tradizione della Magna Grecia." />
        <meta name="keywords" content="Aqua di Sibari, cosmetici naturali, Magna Grecia, biodiversità, prodotti bio" />
      </Helmet>

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
            obiettivo è riportare in vita gli antichi segreti di cura e benessere
            con ingredienti naturali e sostenibili.
          </p>
        </Col>
        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
          <LazyLoadImage
            src="/About1.webp"
            alt="Storia di Aqua di Sibari"
            effect="blur"
            className="about-image"
          />
        </Col>
      </Row>

      {/* Accordion */}
      <Row className="about-accordion">
        <Col>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>🌿 Quali ingredienti usiamo?</Accordion.Header>
              <Accordion.Body>
                Selezioniamo solo materie prime di qualità: erbe calabresi, oli
                essenziali puri e miscele vegetali. Nessun ingrediente nocivo o
                chimico aggressivo.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>🔬 Perché i nostri prodotti sono unici?</Accordion.Header>
              <Accordion.Body>
                Ogni formula è studiata per nutrire e proteggere, unendo ricerca
                moderna e tradizione antica. Usiamo tecniche innovative per
                estrarre il meglio dalla natura.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
