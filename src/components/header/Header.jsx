import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartOffcanvas from '../cartOffcanvas/CartOffcanvas';
import CartProduct from '../cartProduct/CartProduct';
import { Cart } from 'react-bootstrap-icons';
import './Header.css';

export default function Header(props) {

    const [show, setShow] = useState(false)
    const cartLength = props.cart.reduce((total, product) => total + product.count, 0)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const cartElements = props.cart.map(product => (
        <CartProduct
            key={product.id}
            {...product}
            removeFromCart={props.removeFromCart}
            changeProductCount={props.changeProductCount}
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
            <CartOffcanvas
                show={show}
                cart={props.cart}
                handleClose={handleClose}
                cartElements={cartElements}
            />
        </Navbar>
    )
}