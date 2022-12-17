import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';

function Header() {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="product">Product</Nav.Link>
            <Nav.Link href="category">Category</Nav.Link>
            <Nav.Link href="type">Type</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header