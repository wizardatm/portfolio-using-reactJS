import "./../sass/Header.sass";
import logo from "./../assets/Header/logo1.png";
import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          height="30"
          className="d-inline-block align-top"
        />{' '}
        's Portfolio
      </Navbar.Brand>
      <Nav className="me-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
    </Container>
  </Navbar>
  );
}

export default Header;
