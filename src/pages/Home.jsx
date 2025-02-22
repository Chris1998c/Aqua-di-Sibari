// src/pages/Home.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { Carousel, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate("/products");
  };

  return (
    <>
      <Helmet>
      <title>AQUA di SIBARI - Cosmetici Naturali</title>
        <meta
          name="description"
          content="Scopri i prodotti naturali di AQUA di SIBARI. Bellezza, natura e tradizione in ogni prodotto,Erbe riflessanti, henné puro e trattamenti per capelli 100% vegetali."
        />
        <meta
          name="keywords"
          content="Aqua di Sibari, prodotti naturali, bellezza, tradizione, cosmetici naturali, hennè, erbe tintorie, emolliente, lawsonia inermis"
        />
        <meta property="og:title" content="AQUA di SIBARI - Bellezza Naturale" />
        <meta property="og:image" content="/Confezione.png" />
      </Helmet>

      <div className="home-carousel-wrapper">
        <Carousel interval={3000} indicators={false} controls={true}>
          {/* Slide 1 */}
          <Carousel.Item>
            <picture>
              <source media="(max-width: 768px)" srcSet="/Img1.png" />
              <source media="(min-width: 769px)" srcSet="/Img1.png" />
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

          {/* Slide 3 */}
          <Carousel.Item>
            <picture>
              <source media="(max-width: 768px)" srcSet="/sibari.webp" />
              <source media="(min-width: 769px)" srcSet="/sibari.webp" />
              <img
                className="d-block w-100 carousel-image"
                src="/sibari.webp"
                alt="Slide 3"
              />
            </picture>
            <Carousel.Caption>
              <p>I nostri prodotti.</p>
              <Button variant="light" onClick={handleCTAClick}>
                Acquista Ora
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Home;
