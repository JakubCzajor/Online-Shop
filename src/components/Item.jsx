import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Item(props) {

    return (
        <Card className='item--card'>
            <Card.Header as='h6'>{props.category}</Card.Header>
            <Card.Img variant='top' src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Card.Text>${props.price}</Card.Text>
                <Button variant='primary'>Add to cart</Button>
            </Card.Body>
        </Card>
    )
}