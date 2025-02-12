// src/pages/Home.jsx
import React from 'react';
import { Container, Carousel, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate('/products');
  };

  return (
    <div>
      <Carousel interval={3000}>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="/ciao.jpg"
            alt="Slide 2"
          />
          <Carousel.Caption>
            <h3>Benvenuto in AQUA di SIBARI</h3>
            <p>Scopri i nostri prodotti naturali</p>
            <Button variant="light" onClick={handleCTAClick}>Acquista Ora</Button>
          </Carousel.Caption>
        </Carousel.Item>
        {
          <Carousel.Item>
            <img className="d-block w-100" src="/img2.jpg" alt="Slide 2" />
            <Carousel.Caption>
              <h3>AQUA di SIBARI</h3>
              <p>Ciao</p>
            </Carousel.Caption>
          </Carousel.Item>
        }
      </Carousel>
      <Container className="mt-5">
        <h1>La nostra filosofia</h1>
        <p>Un connubio di natura, storia e bellezza per valorizzare la tua immagine.</p>
      </Container>
    </div>
  );
};

export default Home;
