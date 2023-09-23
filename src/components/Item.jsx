import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Heart, HeartFill } from 'react-bootstrap-icons';

export default function Item(props) {

    return (
        <Card bg='light' className='card--container'>
            {
            props.isFavourite === false ?
            <Heart className='card--favourite-icon text-secondary' onClick={props.toggleFavourite} size={25} /> :
            <HeartFill className='card--favourite-icon text-danger' onClick={props.toggleFavourite} size={25} />
            }
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