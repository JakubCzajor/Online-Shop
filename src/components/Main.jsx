import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Main(props) {

    return (
        <main>
            <Container className='items--container'>
                <Row>
                    {props.loading && <Spinner className='loading--spinner' animation='border' variant='primary' />}
                    {props.itemElements}
                </Row>
            </Container>
        </main>
    )
}