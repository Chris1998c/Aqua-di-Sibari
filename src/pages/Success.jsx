import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <Container className="my-5 text-center">
      <h1>Grazie per il tuo acquisto!</h1>
      <p>Il tuo ordine è stato completato con successo.</p>
      <Link to="/">
        <Button variant="primary">Torna alla Home</Button>
      </Link>
    </Container>
  );
};

export default Success;
