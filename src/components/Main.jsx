import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

export default function Main(props) {

    return (
        <main>
            <Container className='main--options-container'>
                <Form.Select id='sortOrder' value={props.sort} onChange={props.sortItems} name='sortOrder' className='main--form-select'>
                    <option value='featured'>Featured</option>
                    <option value='price-asc'>Price ASC</option>
                    <option value='price-desc'>Price DESC</option>
                    <option value='rating'>Highest Rating</option>
                </Form.Select>
            </Container>
            <Container className='main--items-container'>
                <Row>
                    {props.loading && <Spinner className='loading-spinner' animation='border' variant='primary' />}
                    {props.itemElements}
                </Row>
            </Container>
        </main>
    )
}