// src/pages/Home.jsx
import React from 'react';
import { Carousel, Container, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/ciao.jpg'; 
import img2 from '../assets/img2.jpg';
import img3 from '../assets/ciao.jpg';

const Home = () => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate('/products');
  };

  return (
    <>
      <div className="hero-section">
        <div className="overlay"></div>
        <Carousel interval={3000} controls={true} indicators={true} fade>
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="Primo slide" />
            <Carousel.Caption className="caption">
              <h3>L’Emolliente Naturale per il Tuo Henné</h3>
              <p>Stessa Qualità, Prezzo Migliore</p>
              <Button variant="light" onClick={handleCTAClick}>
                Acquista Ora
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Secondo slide" />
            <Carousel.Caption className="caption">
              <h3>Ingredienti 100% Calabresi</h3>
              <p>Qualità superiore e tradizione antica</p>
              <Button variant="light" onClick={handleCTAClick}>
                Scopri di più
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Terzo slide" />
            <Carousel.Caption className="caption">
              <h3>Una Bellezza Naturale</h3>
              <p>Per chi sceglie il meglio</p>
              <Button variant="light" onClick={handleCTAClick}>
                Acquista Ora
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <Container className="my-5">
        <Row className="text-center">
          <Col md={4}>
            <h4>Prezzo Competitivo</h4>
            <p>Risparmia senza rinunciare alla qualità.</p>
          </Col>
          <Col md={4}>
            <h4>Ingredienti Naturali</h4>
            <p>Solo erbe locali e sostenibili.</p>
          </Col>
          <Col md={4}>
            <h4>Qualità Garantita</h4>
            <p>Un prodotto studiato per i migliori risultati.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
