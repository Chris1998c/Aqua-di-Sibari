// src/components/Header.jsx
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar-custom" fixed="top">
        <div className="container">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/" className="nav-link-custom">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/products" className="nav-link-custom">
                Prodotti
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-link-custom">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/cart" className="nav-link-custom">
                Carrello
              </Nav.Link>
              <Nav.Link as={Link} to="/contacts" className="nav-link-custom">
                Contatti
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      {/* Pulsante WhatsApp fisso in basso a destra */}
      <a
        href="https://wa.me/+393895817411"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        💬
      </a>
    </>
  );
};

export default Header;
