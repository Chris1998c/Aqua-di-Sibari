// src/pages/Home.jsx
import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../assets/ciao.jpg'; // Assicurati di usare il percorso corretto
import img2 from '../assets/img2.jpg';
import img3 from '../assets/ciao.jpg';

const Home = () => {
  return (
    <div className="hero-section">
      <div className="overlay"></div> {/* Overlay per l'effetto scuro */}
      <Carousel interval={3000} pause={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="Primo slide"
          />
          <Carousel.Caption className="caption">
            <h3>Benvenuti in Aqua di Sibari</h3>
            <p>Scopri la bellezza naturale dei nostri prodotti</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Secondo slide"
          />
          <Carousel.Caption className="caption">
            <h3>Prodotti di Qualità</h3>
            <p>Ingredienti naturali per la cura dei tuoi capelli</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Terzo slide"
          />
          <Carousel.Caption className="caption">
            <h3>Tradizione Calabrese</h3>
            <p>Ingredienti tipici della nostra terra</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
