import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Sidebar.css';

export default function Sidebar(props) {

    return (
        <Container className='sidebar'>
        {/* <Form>
        <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" placeholder="from" value={props.fromPrice} onChange={(event) => props.handlePriceChange(event, "from")} /> -
            <Form.Control type="text" placeholder="to" value={props.toPrice} onChange={(event) => props.handlePriceChange(event, "to")} />
        </Form.Group>
        <Button variant="primary" type="button" onClick={props.setFilters}>
        Submit
      </Button>
        </Form> */}
    </Container>
    )
}