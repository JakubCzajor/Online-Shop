import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Cart, Heart } from 'react-bootstrap-icons';
import './Header.css';

export default function Header(props) {

    return (
        <Navbar bg='primary' data-bs-theme='dark' fixed='top'>
            <Container>
                <Navbar.Brand href='#' className='fs-2'>ONLINE SHOP</Navbar.Brand>
                <Nav className='ms-auto'>
                    <Nav.Link href='#cart' className='navigation-link'><Cart size={30} /></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}