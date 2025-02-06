// src/pages/Success.jsx
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <Container className="my-5 text-center">
      <h1>Grazie per il tuo acquisto!</h1>
      <p>Il tuo ordine è stato completato con successo.</p>
      <Button as={Link} to="/" variant="primary">
        Torna alla Home
      </Button>
    </Container>
  );
};

export default Success;
