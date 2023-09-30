import ReactPaginate from 'react-paginate';

export default function Pagination(props) {

    return (
        <ReactPaginate
            nextLabel="next >"
            previousLabel="< previous"
            onPageChange={props.handlePageClick}
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
    )
}