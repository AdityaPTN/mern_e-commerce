import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  const link = {
    textDecoration:"none",
    color: "grey"
  }

  const dashboard = {
    textDecoration:"none",
    color: "white"
  }
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand><Link to="/admin" style={dashboard}>Dashboard</Link></Navbar.Brand>
          <Nav className="me-auto mx-2">
            <Nav.Link><Link to="/admin/product" style={link}>Product</Link></Nav.Link>
            <Nav.Link><Link to="/admin/category" style={link}>Category</Link></Nav.Link>
            <Nav.Link><Link to="/admin/type" style={link}>Type</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header