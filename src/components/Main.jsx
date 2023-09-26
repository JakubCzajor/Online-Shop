import { useState } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import ReactPaginate from 'react-paginate';

export default function Main(props) {

    const [fromPrice, setFromPrice] = useState('');
    const [toPrice, setToPrice] = useState('');

    function handlePriceChange(event, type) {
        const result = event.target.value.replace(/\D/g, '')
        type === "from" ? setFromPrice(result) : setToPrice(result)
    }

    return (
        <main className='main container'>
            <Container className='main--sidebar'>
                <Form>
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="from" value={fromPrice} onChange={(event) => handlePriceChange(event, "from")} /> -
                    <Form.Control type="text" placeholder="to" value={toPrice} onChange={(event) => handlePriceChange(event, "to")} />
                </Form.Group>
                </Form>
            </Container>
            <Container className='main--items-container'>
                <Container className='main--options-container'>
                    <Form.Select value={props.sort} onChange={props.sortItems} className='main--select-sort'>
                        <option value='featured'>Featured</option>
                        <option value='price-asc'>Price ascending</option>
                        <option value='price-desc'>Price descending</option>
                        <option value='rating'>Highest Rating</option>
                    </Form.Select>
                    <Form.Select value={props.itemsPerPage} onChange={props.changeItemsPerPage} className='main--select-items'>
                        <option value={6}>6</option>
                        <option value={9}>9</option>
                        <option value={12}>12</option>
                    </Form.Select>
                </Container>
                <Row>
                    {props.loading && <Spinner className='loading-spinner' animation='border' variant='primary' />}
                    {props.itemElements}
                </Row>
                <ReactPaginate
                    nextLabel="next >"
                    previousLabel="< previous"
                    onPageChange={props.pageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={props.pageCount}
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </Container>
        </main>
    )
}