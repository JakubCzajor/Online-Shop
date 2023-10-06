import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartProduct from '../cartProduct/CartProduct';
import { Cart } from 'react-bootstrap-icons';
import './Header.css';
export default function Header(props) {

    const [show, setShow] = useState(false)
    let cartLength = props.cart.reduce((total, product) => total + product.count, 0)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const cartElements = props.cart.map(product => (
        <CartProduct
            key={product.id}
            {...product}
            removeFromCart={props.removeFromCart}
            decreaseCount={props.decreaseCount}
        />
    ))

    return (
        <Navbar bg='primary' data-bs-theme='dark' fixed='top'>
            <Container>
                <Navbar.Brand href='#' className='fs-2'><span className='fw-bold text-underline'>ONLINE</span> SHOP</Navbar.Brand>
                <Nav className='ms-auto'>
                    <Nav.Link href='#' onClick={handleShow} className='navigation-link'><Cart size={30} />
                        {cartLength > 0 && <p className='nav-link-number bg-warning text-secondary'>{cartLength}</p>}
                    </Nav.Link>
                </Nav>
            </Container>
            <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='offcanvas-title'><Cart size={22} className='me-2 mt-1' />Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {props.cart.length === 0 ? 'Your cart is empty. Time to start shopping!' : cartElements}
        </Offcanvas.Body>
      </Offcanvas>
        </Navbar>
    )
}