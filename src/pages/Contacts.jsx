// src/pages/Contacts.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contacts = () => {
  return (
    <Container className="contacts-section mt-5 pt-5">
      <h1 className="text-center mb-4">Contattaci</h1>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm p-4 text-center">
            <Card.Body>
              <Row className="mb-3">
                <Col xs={12} sm={6} className="mb-3 mb-sm-0">
                  <FaEnvelope className="contact-icon" />
                  <p>
                    <strong>Email:</strong> <br />
                    <a href="mailto:info@aquadisibari.it">info@aquadisibari.it</a>
                  </p>
                </Col>
                <Col xs={12} sm={6}>
                  <FaPhone className="contact-icon" />
                  <p>
                    <strong>Telefono:</strong> <br />
                    (+39) 389 581 7411
                  </p>
                </Col>
              </Row>
              <Button
                variant="success"
                href="https://wa.me/+393895817411"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center justify-content-center gap-2"
              >
                <FaWhatsapp size={20} /> Chatta su WhatsApp
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacts;
