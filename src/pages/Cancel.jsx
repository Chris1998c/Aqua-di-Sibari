// src/pages/Cancel.jsx
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cancel = () => {
  return (
    <Container className="my-5 text-center">
      <h1>Ordine Annullato</h1>
      <p>Hai annullato la transazione, se vuoi riprovare puoi tornare al carrello.</p>
      <Button as={Link} to="/cart" variant="danger">
        Torna al Carrello
      </Button>
    </Container>
  );
};

export default Cancel;
