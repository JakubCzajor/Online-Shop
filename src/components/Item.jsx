import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Heart, HeartFill } from 'react-bootstrap-icons';
import StarRatings from 'react-star-ratings';

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
                <div className='card--rating mb-3'>
                    <StarRatings
                            rating={props.rating.rate}
                            starRatedColor='gold'
                            starSpacing='0px'
                            starDimension='18px'
                        />
                    <Card.Text className='card--rating-count text-secondary'> ({props.rating.count})</Card.Text>
                </div>
                <Card.Text className='card--price'>${props.price}</Card.Text>
                <Button className='card--button' variant='primary'>Add to cart</Button>
            </Card.Body>
        </Card>
    )
}