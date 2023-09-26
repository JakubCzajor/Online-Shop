import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import ReactPaginate from 'react-paginate';

export default function Main(props) {

    return (
        <main>
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
            <Container className='main--items-container'>
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