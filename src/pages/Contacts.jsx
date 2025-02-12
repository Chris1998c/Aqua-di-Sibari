// src/pages/Contacts.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Contacts = () => {
  return (
    <Container className="mt-5 pt-5">
      <h1>Contattaci</h1>
      <Row className="mt-4">
        <Col md={6}>
          <p>
            <strong>Email:</strong> <a href="mailto:info@aquadisibari.it">info@aquadisibari.it</a>
          </p>
          <p>
            <strong>Telefono:</strong> (+39) 389 581 7411
          </p>
        </Col>
        <Col md={6}>
          <Button variant="success" href="https://wa.me/+393895817411" target="_blank" rel="noopener noreferrer">
            Chatta su WhatsApp
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacts;
