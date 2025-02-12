// src/components/Header.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="header-navbar">
      <Container>
        {/* Logo + Nome Brand, allineato a sinistra */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img 
            src="/Aqua_di_Sibari__LogoHD.png" 
            alt="Logo AQUA di SIBARI" 
            style={{ height: '50px', marginRight: '0.5rem' }}
          />
          {/* Scritta leggermente più piccola */}
          <span style={{ fontSize: '1.1rem' }}>AQUA di SIBARI</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navigazione allineata a destra */}
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Prodotti</Nav.Link>
            <Nav.Link as={Link} to="/about">Chi Siamo</Nav.Link>
            <Nav.Link as={Link} to="/contacts">Contatti</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <i className="fa fa-shopping-cart icon"></i>
              Carrello
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
