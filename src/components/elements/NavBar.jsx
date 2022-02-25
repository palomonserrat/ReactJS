import CartWidget from './CartWidget';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import homeIcon from "../assets/img/homeICon.png"
import logo from "../assets/img/logo.png";

const NavBar = () => {
  return (
    <Navbar bg="success" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <img style={{width: 55}} src={logo} alt="logo chamBooks" />
          <Container className="col-11 col-md-11 col-lg-11">
            <Nav className="me-auto barra">
              <Nav.Link as={Link} to="/"><img style={{width: 45}} src={homeIcon} alt="home icon" /></Nav.Link>
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

export default NavBar;