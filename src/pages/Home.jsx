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
      <Carousel interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="/Img1.png"
            alt="Slide 1"
          />
          <Carousel.Caption>
            <h3>Benvenuto in AQUA di SIBARI</h3>
            <p>Scopri i nostri prodotti naturali</p>
            <Button variant="light" onClick={handleCTAClick}>Acquista Ora</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="/img2.jpg"
            alt="Slide 2"
          />
          <Carousel.Caption>
            <h3>AQUA di SIBARI</h3>
            <p>Per un benessere naturale</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
