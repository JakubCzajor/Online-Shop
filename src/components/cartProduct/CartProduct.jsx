import Button from 'react-bootstrap/Button';
import './CartProduct.css';

export default function CartProduct(props) {

    return (
        <>
            <h5>{props.title}</h5>
            <Button>-</Button>
            <span className='mx-2'>{props.count}</span>
            <Button>+</Button>
            <Button variant='danger' onClick={() => props.removeFromCart(props)}>Remove</Button>
        </>
    )
}