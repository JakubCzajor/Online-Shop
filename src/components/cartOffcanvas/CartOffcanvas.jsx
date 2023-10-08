import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import { Cart } from 'react-bootstrap-icons';
import './CartOffcanvas.css';

export default function CartOffcanvas(props) {

    const cartSummary = props.cart.reduce((total, product) => total + product.price * product.count, 0).toFixed(2)

    return (
        <Offcanvas show={props.show} onHide={props.handleClose} placement='end' className='p-2'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className='offcanvas-title'><Cart size={22} className='me-2 mt-1' />Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='mb-5'>
                {props.cart.length === 0 ? 'Your cart is empty. Time to start shopping!' : props.cartElements}
            </Offcanvas.Body>
            {props.cart.length > 0 && <Container className='offcanvas-subtotal p-4 bg-white'>Subtotal: ${cartSummary}</Container>}
      </Offcanvas>
    )
}