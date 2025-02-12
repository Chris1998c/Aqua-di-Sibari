// src/pages/Cancel.jsx
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Cancel = () => {
  const navigate = useNavigate();

  return (
    <Container className="mt-5 pt-5 text-center">
      <h1>Pagamento Annullato</h1>
      <p>
        Hai annullato la transazione. Se vuoi riprovare, puoi tornare al carrello o alla home.
      </p>
      <div className="d-flex justify-content-center gap-3">
        <Button variant="secondary" onClick={() => navigate('/cart')}>
          Torna al Carrello
        </Button>
        <Button variant="primary" onClick={() => navigate('/')}>
          Torna alla Home
        </Button>
      </div>
    </Container>
  );
};

export default Cancel;
