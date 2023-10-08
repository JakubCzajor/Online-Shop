import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Trash3 } from 'react-bootstrap-icons';
import './CartProduct.css';

export default function CartProduct(props) {

    return (
        <Container className='cart-container border rounded p-3 mb-3'>
            <img src={props.image} className='cart-image' />
            <Container className='cart-body'>
                <h5 className='cart-title'>{props.title}</h5>
                <Button variant='secondary' size="sm" onClick={() => props.changeProductCount(props, '-')}>-</Button>            
                <span className='mx-2'>{props.count}</span>
                <Button variant='secondary' size="sm" className='me-4' onClick={() => props.changeProductCount(props, '+')}>+</Button>
                <Trash3 size={22} className='trash-icon text-danger' role='button' onClick={() => props.removeFromCart(props)} />
            </Container>
        </Container>
    )
}