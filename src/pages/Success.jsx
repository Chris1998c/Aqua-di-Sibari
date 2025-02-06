import Link from 'next/link';
import { Container, Button } from 'react-bootstrap';

const Success = () => {
  return (
    <Container className="my-5 text-center">
      <h1>Grazie per il tuo acquisto!</h1>
      <p>Il tuo ordine è stato completato con successo.</p>
      <Link href="/" passHref>
        <Button as="a" variant="primary">Torna alla Home</Button>
      </Link>
    </Container>
  );
};

export default Success;
