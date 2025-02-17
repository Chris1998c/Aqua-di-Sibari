// src/pages/About.jsx
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const About = () => {
  return (
    <Container className="about-section mt-5 pt-5">
      <Row className="mb-4">
        <Col xs={12} md={6}>
          <h1>Chi Siamo</h1>
          <p>
            Aqua di Sibari: Il legame tra storia, natura e bellezza. Nata
            dall'anima della Magna Grecia e dalla biodiversità della terra di
            Calabria, Aqua di Sibari è molto più di un marchio: è un ritorno
            alle radici antiche...
          </p>
          <p>
            <strong>I nostri inizi:</strong> La nostra ispirazione inizia a
            Sibari, una delle città più influenti della Magna Grecia...
          </p>
        </Col>
        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
          <Image
            src="/about1.jpg"
            alt="Immagine Storia"
            fluid
            rounded
          />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col xs={12} md={6} className="order-md-2">
          <h2>Le Nostre Terre</h2>
          <p>
            La Calabria, culla di biodiversità, offre una gamma unica di erbe e
            piante dalle proprietà benefiche...
          </p>
          <p>
            Ogni ingrediente è scelto con cura per rispettare la natura e
            valorizzare le proprietà ancestrali delle piante...
          </p>
        </Col>
        <Col xs={12} md={6} className="order-md-1 d-flex align-items-center justify-content-center">
          <Image
            src="/about2.jpg"
            alt="Ingredienti Naturali"
            fluid
            rounded
          />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <h2>Filosofia e Prodotti</h2>
          <p>
            I nostri prodotti sono una celebrazione della bellezza naturale e
            del benessere olistico. Utilizziamo erbe coltivate in modo sostenibile...
          </p>
          <p>
            <em>
              “Aqua di Sibari non è solo un marchio di cosmetici, è una filosofia:
              il rispetto per la natura, la tradizione e l'eleganza.”
            </em>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
