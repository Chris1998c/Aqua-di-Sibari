import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <Container className="my-5 text-center">
      <h1>Ordine Annullato</h1>
      <p>Hai annullato la transazione. Se vuoi riprovare, puoi tornare al carrello.</p>
      <Link to="/cart">
        <Button variant="danger">Torna al Carrello</Button>
      </Link>
    </Container>
  );
};

export default Cancel;
