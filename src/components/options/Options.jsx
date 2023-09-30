import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './Options.css';

export default function Options(props) {

    return (
        <Container className='options-container'>
            <Form.Select value={props.sort} onChange={props.sortProducts} className='select-sort'>
                <option value='featured'>Featured</option>
                <option value='price-asc'>Price ascending</option>
                <option value='price-desc'>Price descending</option>
                <option value='rating'>Highest Rating</option>
            </Form.Select>
            <Form.Select value={props.productsPerPage} onChange={props.changeProductsPerPage} className='select-products-per-page'>
                <option value={6}>6</option>
                <option value={9}>9</option>
                <option value={12}>12</option>
            </Form.Select>
        </Container>
    )
}