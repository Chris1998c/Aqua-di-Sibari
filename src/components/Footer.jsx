// src/components/Footer.jsx
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="text-center">
        <p>
          <i className="fa fa-leaf icon"></i>
          © 2025 AQUA di SIBARI. Tutti i diritti riservati.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
