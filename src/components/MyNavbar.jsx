import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Cart, Heart } from 'react-bootstrap-icons';

export default function MyNavbar(props) {

    return (
        <Navbar bg='primary' data-bs-theme='dark' fixed='top'>
            <Container>
                <Navbar.Brand href='#' className='fs-2'>ONLINE SHOP</Navbar.Brand>
                <Nav className='ms-auto'>
                    <Nav.Link className='nav--link'>
                        <Heart size={30} className='me-3' />
                        {props.favourite.length > 0 && <p className='nav--link-number bg-warning text-secondary'>{props.favourite.length}</p>}
                    </Nav.Link>
                    <Nav.Link href='#cart' className='nav--link'><Cart size={30} /></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}