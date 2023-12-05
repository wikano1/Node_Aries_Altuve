import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-dark">
        <Container>
        <Navbar.Brand className='text-light' href="#home">Aries Altuve</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link className='text-light' href="#home">Inicio</Nav.Link>
            <Nav.Link className='text-light' href="#link">Conocenos</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        <CartWidget />
        </Container>
    </Navbar>
    );
        
}
export default NavBar;