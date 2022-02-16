import CartWidget from './CartWidget'
import { Link } from "react-router-dom"
import { Navbar, Nav, Container } from 'react-bootstrap'


const NavBar = () => {
  return (
    <Navbar bg="success" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container className="col-11 col-md-11 col-lg-11">
            <Nav className="me-auto barra">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/libros">Libros</Nav.Link>
              <Nav.Link as={Link} to="/comics">Comics</Nav.Link>
            </Nav>
          </Container>
          <Container>
            <CartWidget />
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar