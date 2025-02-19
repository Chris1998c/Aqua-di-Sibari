import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Home = () => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate('/products');
  };

  return (
    <div className="home-carousel-wrapper">
      <Carousel interval={3000} indicators={false} controls={true}>
        <Carousel.Item>
          <LazyLoadImage 
            className="d-block w-100 carousel-image"
            src="/Img1.png"
            alt="Slide 1"
            effect="blur"
          />
          <Carousel.Caption>
            <h3>Benvenuto in AQUA di SIBARI</h3>
            <p>Scopri i nostri prodotti naturali</p>
            <Button variant="light" onClick={handleCTAClick}>
              Acquista Ora
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <LazyLoadImage 
            className="d-block w-100 carousel-image"
            src="/img2.jpg"
            alt="Slide 2"
            effect="blur"
          />
          <Carousel.Caption>
            <p>Scopri i nostri prodotti naturali</p>
            <Button variant="light" onClick={handleCTAClick}>
              Acquista Ora
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <LazyLoadImage 
            className="d-block w-100 carousel-image"
            src="/sibari.webp"
            alt="Slide 3"
            effect="blur"
          />
          <Carousel.Caption>
            <p>I nostri prodotti migliori</p>
            <Button variant="light" onClick={handleCTAClick}>
              Scopri di più
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );
};

export default Home;
