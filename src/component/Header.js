import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link className="navbar-brand" to="/">Cocktails</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="about">About</NavLink>
                        <NavLink className="nav-link" to="contact">Contact</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink className="nav-link" to="#deets">More deets</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  );
}

export default Header;
