import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Mon E-commerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/login">Connexion</Nav.Link>
            <Nav.Link as={Link} to="/signup">S'inscrire</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              🛒 <Badge bg="danger">0</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
