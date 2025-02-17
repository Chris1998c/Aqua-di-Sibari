// src/components/Header.jsx
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const [expanded, setExpanded] = useState(false); // stato per gestire hamburger aperto/chiuso

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="header-navbar"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center" onClick={closeNavbar}>
          <img
            src="/Aqua_di_Sibari__LogoHD.png"
            alt="Logo AQUA di SIBARI"
            style={{ height: '50px', marginRight: '0.5rem' }}
          />
          <span style={{ fontSize: '1.1rem' }}>AQUA di SIBARI</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={closeNavbar}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products" onClick={closeNavbar}>
              Prodotti
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={closeNavbar}>
              Chi Siamo
            </Nav.Link>
            <Nav.Link as={Link} to="/contacts" onClick={closeNavbar}>
              Contatti
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" onClick={closeNavbar}>
              <i className="fa fa-shopping-cart icon"></i> Carrello
              {cartItems.length > 0 && (
                <span className="cart-badge">{cartItems.length}</span>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
