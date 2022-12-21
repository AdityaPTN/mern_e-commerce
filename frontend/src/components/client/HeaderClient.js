import { 
  Button,
  Container,
  Nav,
  Navbar
} from 'react-bootstrap'

import { Link } from 'react-router-dom';

function HeaderClient() {
  const link = {
    textDecoration:"none",
    color: "grey"
  }

  const brand = {
    textDecoration:"none",
    color: "black"
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link to="/" style={brand}>eShop</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link>
              <Link to="/product" style={link}>Product</Link>
            </Nav.Link>
            
          </Nav>
            <Button variant="light"><i class="bi bi-cart4"></i></Button>
            <Button variant="light"><Link to="/admin" style={brand}>Admin</Link></Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default HeaderClient