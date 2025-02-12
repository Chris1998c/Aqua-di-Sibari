// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        {/* Inseriamo il logo: 
            - L'immagine verrà visualizzata accanto al nome del marchio 
            - Puoi regolare le dimensioni con inline styles o con una classe CSS */}
        <Navbar.Brand as={Link} to="/">
          <img 
            src="/Aqua_di_Sibari__LogoHD.png" 
            alt="Logo AQUA di SIBARI" 
            style={{ height: '40px', marginRight: '0.5rem' }}
          />
          AQUA di SIBARI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Prodotti</Nav.Link>
            <Nav.Link as={Link} to="/cart">Carrello</Nav.Link>
            <Nav.Link as={Link} to="/about">Chi Siamo</Nav.Link>
            <Nav.Link as={Link} to="/contacts">Contatti</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
