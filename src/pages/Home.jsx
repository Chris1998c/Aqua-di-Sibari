// src/pages/Home.jsx
import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate('/products');
  };

  return (
    <div className="home-carousel-wrapper">
      <Carousel interval={3000} indicators={false} controls={true}>
        {/* Slide 1 */}
        <Carousel.Item>
          <picture>
            {/* Se desideri usare immagini diverse per mobile, sostituisci i file */}
            <source media="(max-width: 768px)" srcSet="/Img1.png" />
            <source media="(min-width: 769px)" srcSet="/Img1.png" />
            {/* Fallback per browser che non supportano <picture> */}
            <img
              className="d-block w-100 carousel-image"
              src="/Img1.png"
              alt="Slide 1"
            />
          </picture>
          <Carousel.Caption>
            <h3>Benvenuto in AQUA di SIBARI</h3>
            <p>Scopri i nostri prodotti naturali</p>
            <Button variant="light" onClick={handleCTAClick}>
              Acquista Ora
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <picture>
            <source media="(max-width: 768px)" srcSet="/img2.jpg" />
            <source media="(min-width: 769px)" srcSet="/img2.jpg" />
            <img
              className="d-block w-100 carousel-image"
              src="/img2.jpg"
              alt="Slide 2"
            />
          </picture>
          <Carousel.Caption>
          <p>Scopri i nostri prodotti naturali</p>
            <Button variant="light" onClick={handleCTAClick}>
              Acquista Ora
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
