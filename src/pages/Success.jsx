// src/pages/Success.jsx
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useSearchParams, useNavigate } from 'react-router-dom';

const Success = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const sessionId = searchParams.get('session_id');

  return (
    <Container className="mt-5 pt-5 text-center">
      <h1>Grazie per il tuo acquisto!</h1>
      {sessionId && <p>Il tuo ID di sessione: {sessionId}</p>}
      <p>Il tuo ordine è stato completato con successo.</p>
      <Button variant="primary" onClick={() => navigate('/')}>
        Torna alla Home
      </Button>
    </Container>
  );
};

export default Success;
