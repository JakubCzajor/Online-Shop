import Offcanvas from 'react-bootstrap/Offcanvas';
import { Cart } from 'react-bootstrap-icons';
import './CartOffcanvas.css';

export default function CartOffcanvas(props) {

    return (
        <Offcanvas show={props.show} onHide={props.handleClose} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className='offcanvas-title'><Cart size={22} className='me-2 mt-1' />Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {props.cartLength === 0 ? 'Your cart is empty. Time to start shopping!' : props.cartElements}
            </Offcanvas.Body>
      </Offcanvas>
    )
}