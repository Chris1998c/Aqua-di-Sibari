import Link from 'next/link';
import { Container, Button } from 'react-bootstrap';

const Cancel = () => {
  return (
    <Container className="my-5 text-center">
      <h1>Ordine Annullato</h1>
      <p>Hai annullato la transazione, se vuoi riprovare puoi tornare al carrello.</p>
      <Link href="/cart">
        <Button variant="danger">Torna al Carrello</Button>
      </Link>
    </Container>
  );
};

export default Cancel;
