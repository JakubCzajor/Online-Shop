import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarRatings from 'react-star-ratings';
import './Product.css';

export default function Product(props) {

    return (
        <Card bg='light' className='product-container'>
            <Card.Img className='product-image' variant='top' src={props.image} />
            <Card.Body className='product-body'>
                <Card.Title className='product-title'>{props.title}</Card.Title>
                <div className='product-rating mb-3'>
                    <StarRatings
                            rating={props.rating.rate}
                            starRatedColor='gold'
                            starSpacing='0px'
                            starDimension='18px'
                        />
                    <Card.Text className='product-rating-count text-secondary'> ({props.rating.count})</Card.Text>
                </div>
                <Card.Text className='product-price'>${props.price}</Card.Text>
                <Button className='product-button' variant='primary' onClick={() => props.addToCart(props)}>Add to cart</Button>
            </Card.Body>
        </Card>
    )
}