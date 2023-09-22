import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function MyNavbar() {

    return (
        <Navbar bg='primary' data-bs-theme='dark'>
            <Container>
                <Navbar.Brand href='#'>ONLINE SHOP</Navbar.Brand>
                <Nav className='ms-auto'>
                    <Nav.Link href='#cart'>Cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}