import { 
  Button,
  Container,
  Form,
  Nav,
  Navbar
} from 'react-bootstrap'

function HeaderClient() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">eShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
          </Nav>
            <Button variant="light"><i class="bi bi-cart4"></i></Button>
            <Button variant="light" href='/admin'>Admin</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default HeaderClient