
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import foto from '../assets/logoEcuPro.jpg';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="/">
                    <a href="/">
                        <img src={foto} className="imagenLogo" />

                    </a>
                    EcuPro
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="/category/equipos">EcuPro</Nav.Link>
                        <Nav.Link href="/category/funcionalidades">Funcionamiento</Nav.Link>
                        <Nav.Link href="/category/cursos">Cursos/Presentación</Nav.Link>
                        <Nav.Link href="/category/contactos">Contacto</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>


    )
}

export default NavBar;