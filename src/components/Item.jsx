import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Item(props) {

    return (
        <Card className='card--container'>
            <Card.Img className='card--image' variant='top' src={props.image} />
            <Card.Body className='card--body'>
                <Card.Title className='card--title'>{props.title}</Card.Title>
                {/* <Card.Text className='card--description'>{props.description}</Card.Text> */}
                <Card.Text className='card--price'>${props.price}</Card.Text>
                <Button className='card--button' variant='primary'>Add to cart</Button>
            </Card.Body>
        </Card>
    )
}