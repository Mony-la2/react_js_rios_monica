
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import foto from '../assets/logoEcuPro.jpg'
const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#home">
                    <a href="#">
                        <img src={foto} className="imagenLogo" />

                    </a>
                    EcuPro
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets1">EcuPro</Nav.Link>
                        <Nav.Link href="#deets2">Funcionamiento</Nav.Link>
                        <Nav.Link href="#deets3">Cursos/Presentación</Nav.Link>
                        <Nav.Link href="#deets4">Contacto</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavBar;